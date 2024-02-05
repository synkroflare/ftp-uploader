import * as ftp from "basic-ftp";
import cors from "cors";
import express from "express";
import multer from "multer";
import path from "path";
const port = 8082;

process.on("uncaughtException", (err) => {
  console.error("\x1b[31m%s\x1b[0m", "UNCAUGHT EXCEPTION!");
  console.error("\x1b[31m%s\x1b[0m", err);
});

const app = express();

const allowedOrigins = ["http://localhost:3000", "https://javelyn.vercel.app"]; // Substitua pelos seus valores

const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE", "PROPFIND"],
};

app.use(cors(corsOptions));

app.use(multer().single("file"));
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

// Configurar o multer para o upload de arquivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // A pasta 'uploads' deve existir no mesmo diretório do app.js
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Configurar rota para upload
app.post("/upload", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Nenhum arquivo enviado." });
  }

  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    await client.access({
      host: "ns1017.hostgator.com.br",
      port: 21,
      user: "alabar44",
      password: "Uww6ydkk2012",
      secure: true,
    });
    console.log(await client.list());
    await client.uploadFrom(req.file.stream, "testing.png");
    await client.downloadTo(
      "https://storage.alabarda.com.br/clients/estilo-arte-design/images/public/customs",
      "testing.png"
    );
  } catch (err) {
    console.log(err);
  }

  console.log(req.body);
  client.close();

  const filePath = path.join(__dirname, "uploads", req.file.filename);
  // Aqui você pode fazer algo com o arquivo, como mover para outra pasta ou armazenar o caminho no banco de dados

  res.json({ message: "Upload realizado com sucesso.", filePath: filePath });
});

// const options = {
//   key: fs.readFileSync(
//     "../../../etc/letsencrypt/live/alabarda.link/privkey.pem"
//   ),
//   cert: fs.readFileSync(
//     "../../../etc/letsencrypt/live/alabarda.link/fullchain.pem"
//   ),
// };
// const server = https
//   .createServer(options, app)
//   .listen(port, () =>
//     console.log(
//       `ftp-uploader server online on port ${port} and using node version ` +
//         process.version
//     )
//   );

app.listen(port, () => console.log("on"));
