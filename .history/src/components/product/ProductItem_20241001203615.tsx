import { Product } from "@/core";
import Link from "next/link";

export interface ProductItemProps {
  product: Product;
}

export default function ProductItem(props: ProductItemProps) {
  const { product } = props;
  return (
    <div>
      <Link
        href={`/product/${props.product.id}`}
        className="flex flex-col bg-violet-dark border"
      >
        {product.name}
      </Link>
    </div>
  );
}
