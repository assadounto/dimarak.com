import { ProductType } from "@/data_types/product_type";

export function mapProduct(product: any): ProductType {
  return {
    ...product,
    imagesUrl: product.imagesUrl.map((img: any) => {
      // If it's a string, parse it, else return as-is
      return typeof img === "string" ? JSON.parse(img) : img;
    }),
  };
}
