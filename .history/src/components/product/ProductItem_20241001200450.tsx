import { Product } from "@/core";

export interface ProductItemProps {
  product: Product;
}

export default function ProductItem(props: ProductItemProps) {
  const { product } = props;
  return (
    <div className="grid grid-cols-4 bg-indigo-500 ">
      <span>{product.name}</span>
    </div>
  );
}
