import ProductInformation from "@/components/product/ ProductInformation";
import ProductNotFound from "@/components/product/ProductNotFound";
import ProductTitle from "@/components/product/ProductTitle";
import ShoppingBanner from "@/components/product/SoppingBanner";
import { products } from "@/core";

export default function ProductPage(props: any) {
  const id = +props.params.id;
  const product = products.find((product) => product.id === id);
  return product ? (
    <div className="flex flex-col gap-20 container py-10">
      <div className="flex flex-col gap-10">
        <ProductTitle product={product} />
        <ProductInformation product={product} />
        <ShoppingBanner product={product} />
      </div>
      <h1>Product: {product?.name}</h1>
    </div>
  ) : (
    <ProductNotFound />
  );
}
