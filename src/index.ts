import * as ftp from "basic-ftp";
import cors from "cors";
import express from "express";
import fs from "fs";
import https from "https";
import multer from "multer";
import { bufferToStream } from "./helpers/BufferToStream";
const port = 8082;

process.on("uncaughtException", (err) => {
  console.error("\x1b[31m%s\x1b[0m", "UNCAUGHT EXCEPTION!");
  console.error("\x1b[31m%s\x1b[0m", err);
});

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://estiload.lojavirtualnuvem.com.br",
  "https://estiload.lojavirtualnuvem.com.br",
  "*",
]; // Substitua pelos seus valores

const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE", "PROPFIND"],
};

app.use(cors(corsOptions));

app.use(multer().single("file"));
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

// Configurar rota para upload
app.post("/upload", async (req, res) => {
  console.log("h");
  if (!req.file) {
    return res.status(400).json({ error: "Nenhum arquivo enviado." });
  }
  console.log(req.body);

  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    const ftpRes = await client.access({
      host: "ns1017.hostgator.com.br",
      port: 21,
      user: "alabar44",
      password: "Uww6ydkk2012",
      secure: true,
    });

    const list = await client.list();

    console.log(ftpRes.code, ftpRes.message);

    const remotePath =
      "/storage.alabarda.com.br/clients/estilo-arte-design/images/public/customs/" +
      req.file.originalname;

    const fileStream = bufferToStream(req.file.buffer);

    console.log({ fileStream, remotePath: remotePath });
    await client.uploadFrom(fileStream, remotePath);

    client.close();
  } catch (err) {
    console.log(err);
  }

  client.close();
  res.json({ message: "Upload realizado com sucesso." });
});

app.post("/finalize-order", async (req, res) => {
  const { imageCode, clientEmail }: { imageCode: string; clientEmail: string } =
    req.body;
  if (!imageCode || !clientEmail) res.send("Invalid parameters.");

  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    const ftpRes = await client.access({
      host: "ns1017.hostgator.com.br",
      port: 21,
      user: "alabar44",
      password: "Uww6ydkk2012",
      secure: true,
    });

    const oldPath =
      "/storage.alabarda.com.br/clients/estilo-arte-design/images/public/customs/" +
      imageCode;

    const splitImageCode = imageCode.split(".");
    const imageExtension = splitImageCode[splitImageCode.length - 1];
    const newImageName = clientEmail.split("@")[0];

    const newPath =
      "/storage.alabarda.com.br/clients/estilo-arte-design/images/public/customs/" +
      newImageName +
      "." +
      imageExtension;

    await client.rename(oldPath, newPath);

    client.close();
  } catch (err) {
    console.log(err);
  }

  client.close();
  res.json({ message: "Upload realizado com sucesso." });
});

const httpOptions = {
  key: fs.readFileSync(
    "../../../etc/letsencrypt/live/alabarda.link/privkey.pem"
  ),
  cert: fs.readFileSync(
    "../../../etc/letsencrypt/live/alabarda.link/fullchain.pem"
  ),
};
const server = https
  .createServer(httpOptions, app)
  .listen(port, () =>
    console.log(
      `ftp-uploader server online on port ${port} and using node version ` +
        process.version
    )
  );

// app.listen(port, () => console.log("http on port 8082"));
