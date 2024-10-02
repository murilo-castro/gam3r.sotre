import { Coin, Product } from "@/core";
import Image from "next/image";
import Link from "next/link";
import Installment from "../../core/installment/installment";

export interface ProductItemProps {
  product: Product;
}

export default function ProductItem(props: ProductItemProps) {
  const { product } = props;
  return (
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
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
            de {Coin.format(product.base_price)}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
            por {Coin.format(product.sale_price)}
          </span>
          {/* <span>até {}</span> */}
        </div>

        <button
          className="flex justify-center items-center gap-2 h-8 bg-violet-700 hover:border-2 border-emerald-500"
          onClick={(e) => {
            e.preventDefault();
            adicionarItem(product);
          }}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </Link>
  );
}
