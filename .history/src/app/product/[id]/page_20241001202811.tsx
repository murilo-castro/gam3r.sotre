import { products } from "@/core";

export default function ProductPage(props: any) {
  const id = props.params.id;
  const product = products.find((products) => product.id === id);
  return (
    <div>
      <h1>Product: {id}</h1>
    </div>
  );
}
