"use client";
import { products } from "@/core";
import ProductItem from "./ProductItem";
import ProductNotFound from "./ProductNotFound";
// import useProducts from '@/data/hooks/useProducts'

export default function ListProducts() {
  // const { products } = useProducts()
  return products.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  ) : (
    <ProductNotFound noBackButton />
  );
}
