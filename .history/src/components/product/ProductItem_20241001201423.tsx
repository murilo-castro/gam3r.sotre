import { Product } from "@/core";
import Link from "next/link";

export interface ProductItemProps {
  product: Product;
}

export default function ProductItem(props: ProductItemProps) {
  const { product } = props;
  return (
    <div>
      <Link>{product.name}</Link>
    </div>
  );
}
