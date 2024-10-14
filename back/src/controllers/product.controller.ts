import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductsByIdService, getProductsService } from "../services/products.service";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getProductsById = async (req: Request <{id: string}>, res:Response) =>{
const {id} = req.params;
const product = await getProductsByIdService(Number(id))
res.status(200).json(product);
}