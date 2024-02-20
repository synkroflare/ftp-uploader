import * as ftp from "basic-ftp";
import { Request, Response } from "express";

export const finalizeOrder = async (
  req: Request,
  res: Response
): Promise<Response> => {
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
    const newImageName = clientEmail.split("@")[0];

    const newPath =
      "/storage.alabarda.com.br/clients/estilo-arte-design/images/public_html/customs/" +
      newImageName;

    await client.rename(oldPath, newPath);

    client.close();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Falha ao atualizar." });
  }

  client.close();
  return res.status(200).json({ message: "Atualizado com sucesso." });
};
