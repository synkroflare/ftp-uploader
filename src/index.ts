import axios from "axios";
import * as ftp from "basic-ftp";
import cors from "cors";
import express from "express";
import fs from "fs";
import https from "https";
import multer from "multer";
import { bufferToStream } from "./helpers/BufferToStream";
import { LiProductBox } from "./helpers/LiProductBox";
import { ProductBox } from "./helpers/ProductBox";
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
      "/storage.alabarda.com.br/clients/estilo-arte-design/images/public_html/customs/" +
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
  console.log(req.body);
  if (!imageCode || !clientEmail)
    res.send({
      msg: "Invalid parameters.",
      body: req.body,
    });

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
      "/storage.alabarda.com.br/clients/estilo-arte-design/images/public_html/customs/" +
      imageCode;

    const splitImageCode = imageCode.split(".");
    const imageExtension = splitImageCode[splitImageCode.length - 1];
    const newImageName = clientEmail.split("@")[0];

    const newPath =
      "/storage.alabarda.com.br/clients/estilo-arte-design/images/public_html/customs/" +
      newImageName;

    await client.rename(oldPath, newPath);

    client.close();
  } catch (err) {
    console.log(err);
  }

  client.close();
  res.json({ message: "Upload realizado com sucesso." });
});

app.get("/product", async (req, res) => {
  const { sku } = req.query as { sku: string | undefined };

  const productResponse = await axios.get(
    `https://api.nuvemshop.com.br/v1/3499567/products?q=${sku}`,
    {
      headers: {
        Authentication: "bearer f6373d49fad6f9d17e77c757d82111f8843a0f7b",
      },
    }
  );

  if (!productResponse || !productResponse.data) return;
  const products = await productResponse.data;
  const product = products[0];

  const productHTML = ProductBox(product);

  res.json({ productHTML });
});

app.get("/product-li", async (req, res) => {
  const { sku } = req.query as { sku: string | undefined };

  const productIdResponse = await axios.get(
    `https://api.awsli.com.br/v1/produto/?sku=${sku}`,
    {
      headers: {
        chave_api: "aaba145ba78dc7524820",
        chave_aplicacao: "92fae45b-dd41-46c2-ac0d-840642d6982a",
      },
    }
  );

  if (
    !productIdResponse ||
    !productIdResponse.data ||
    !productIdResponse.data.objects ||
    !productIdResponse.data.objects[0]?.id
  )
    return;

  const productResponse = await axios.get(
    `https://api.awsli.com.br/v1/produto/${productIdResponse.data.objects[0]?.id}`,
    {
      headers: {
        chave_api: "aaba145ba78dc7524820",
        chave_aplicacao: "92fae45b-dd41-46c2-ac0d-840642d6982a",
      },
    }
  );

  const product = await productResponse.data;
  const productHTML = LiProductBox(product);

  res.json({ productHTML });
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
