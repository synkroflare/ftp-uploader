import axios from "axios";
import { Request, Response } from "express";
import { LiProductBox } from "../helpers/LiProductBox";
import { LiProduct } from "../types/LiProduct";

export const GetLIProductData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { sku } = req.query as { sku: string | undefined };

  const productIdResponse = await axios.get(
    `https://api.awsli.com.br/v1/produto/?sku=${sku}&chave_api=aaba145ba78dc7524820&chave_aplicacao=92fae45b-dd41-46c2-ac0d-840642d6982a`
  );

  if (
    !productIdResponse ||
    !productIdResponse.data ||
    !productIdResponse.data.objects ||
    !productIdResponse.data.objects[0]?.id
  )
    return res.status(500);

  const productId = productIdResponse.data.objects[0]?.id;

  const productResponse = await axios.get(
    `https://api.awsli.com.br/v1/produto/${productId}?chave_api=aaba145ba78dc7524820&chave_aplicacao=92fae45b-dd41-46c2-ac0d-840642d6982a`
  );

  const product = (await productResponse.data) as LiProduct;

  const precos: number[] = [];

  if (product.filhos?.length > 0) {
    for (const filho of product.filhos) {
      const id = filho.split("/")[4];
      const precoResponse = await axios.get(
        `https://api.awsli.com.br/v1/produto_preco/${id}?chave_api=aaba145ba78dc7524820&chave_aplicacao=92fae45b-dd41-46c2-ac0d-840642d6982a`
      );
      if (precoResponse.data) {
        precos.push(
          precoResponse.data.promocional
            ? Number(precoResponse.data.promocional)
            : Number(precoResponse.data.cheio)
        );
      }
    }
  } else {
    const precoResponse = await axios.get(
      `https://api.awsli.com.br/v1/produto_preco/${productId}?chave_api=aaba145ba78dc7524820&chave_aplicacao=92fae45b-dd41-46c2-ac0d-840642d6982a`
    );
    if (precoResponse.data) {
      precos.push(
        Number(precoResponse.data.promocional) ??
          Number(precoResponse.data.cheio)
      );
    }
  }

  const preco = precos.sort((a, b) => a - b)[0];

  const productHTML = LiProductBox({ ...product, preco });

  return res.status(200).json({ productHTML });
};
