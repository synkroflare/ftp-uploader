import express from "express";
import multer from "multer";
import path from "path";
const app = express();
const port = 8082;

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
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Nenhum arquivo enviado." });
  }

  console.log(req);

  const filePath = path.join(__dirname, "uploads", req.file.filename);
  // Aqui você pode fazer algo com o arquivo, como mover para outra pasta ou armazenar o caminho no banco de dados

  res.json({ message: "Upload realizado com sucesso.", filePath: filePath });
});

app.listen(port, () => {
  console.log(`FTP-Uploader server running on port: ${port}`);
});
