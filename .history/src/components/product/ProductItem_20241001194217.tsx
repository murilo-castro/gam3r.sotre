import { Product } from "@/core";

export interface ProductItemProps {
  product: Product;
}

export default function ProductItem() {
  return (
    <div>
      <h1>Produto Item</h1>
    </div>
  );
}
