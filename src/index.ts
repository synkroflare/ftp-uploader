import cors from "cors";
import express from "express";
import fs from "fs";
import https from "https";
import multer from "multer";
import router from "./infra/router";
import { initiateTasks } from "./tasks";
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
  "https://www.estiload.com.br",
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

app.use(router);
initiateTasks();

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
