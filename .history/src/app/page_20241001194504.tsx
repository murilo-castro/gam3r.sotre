import ProductItem from "@/components/product/ProductItem";
import products from "../core/constants.ts/products";

export default function Home() {
  return (
    <div>
      <h1>Gam3r.Story</h1>
      <ProductItem product={products[0]} />
      <ProductItem product={products[0]} />
      <ProductItem product={products[0]} />
      <ProductItem product={products[0]} />
      <ProductItem product={products[0]} />
    </div>
  );
}
