import { Product } from "@/core";

export interface ProductItemProps {
  product: Product;
}

export default function ProductItem(props: ProductItemProps) {
  return (
    <div>
      <h1>Produto Item</h1>
    </div>
  );
}
