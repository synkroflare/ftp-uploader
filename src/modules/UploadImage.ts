import * as ftp from "basic-ftp";
import { Request, Response } from "express";
import { bufferToStream } from "../helpers/BufferToStream";

export const uploadImage = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (!req.file) {
    return res.status(400).json({ error: "Nenhum arquivo enviado." });
  }

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

    const remotePath =
      "/storage.alabarda.com.br/clients/estilo-arte-design/images/public_html/customs/" +
      req.file.originalname;

    const fileStream = bufferToStream(req.file.buffer);

    console.log({ fileStream, remotePath: remotePath });
    await client.uploadFrom(fileStream, remotePath);

    client.close();
  } catch (err) {
    console.log(err);
    return res.json({ message: "Falha no upload." });
  }

  client.close();
  return res.json({ message: "Upload realizado com sucesso." });
};
