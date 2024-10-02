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
        <div className="w-full h-48 relative">
          <Image
            src={product.image}
            alt="Imagem do produto"
            className="object-contain"
            fill
          />
        </div>
        <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
          <span className="text-lg font-semibold">{product.name}</span>
          <div className="self-start textt-sm border-b border-dashed">
            {product.specification.emphasis}
          </div>
        </div>
      </Link>
    </div>
  );
}
