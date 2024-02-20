import axios from "axios";
import { Request, Response } from "express";
import { ProductBox } from "../helpers/ProductBox";

export const getNuvemProductData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { sku } = req.query as { sku: string | undefined };

  const productResponse = await axios.get(
    `https://api.nuvemshop.com.br/v1/3499567/products?q=${sku}`,
    {
      headers: {
        Authentication: "bearer f6373d49fad6f9d17e77c757d82111f8843a0f7b",
      },
    }
  );

  if (!productResponse || !productResponse.data) return res.status(500);
  const products = await productResponse.data;
  const product = products[0];

  const productHTML = ProductBox(product);

  return res.status(200).json({ productHTML });
};
