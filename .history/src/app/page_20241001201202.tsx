import ProductItem from "@/components/product/ProductItem";
import { products } from "@/core";

export default function Home() {
  return (
    <div>
      <h1>Gam3r.Story</h1>
      <div className="grid grid-cols-4 container">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
