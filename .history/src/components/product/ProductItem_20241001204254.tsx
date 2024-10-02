import { Product } from "@/core";
import Image from "next/image";
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
        className="flex flex-col bg-violet-dark border border-white/10 "
      >
        <Image src={props.product.image } />
        {product.name}
      </Link>
    </div>
  );
}
