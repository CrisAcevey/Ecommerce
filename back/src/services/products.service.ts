import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

export const checkProductExists = async (itemId: number): Promise<boolean> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return !!item;
};

export const getProductsService = async (): Promise<Product[]> => {
  return await ProductRepository.find();
};

export const getProductsByIdService = async (id: number): Promise<Partial<Product>> =>{
    const foundProduct: Product | null = await ProductRepository.findOne({
      where: {id},
    });
    if (!foundProduct) throw Error(`Producto con el id: ${id} no encontrado`)
      return foundProduct;
}
