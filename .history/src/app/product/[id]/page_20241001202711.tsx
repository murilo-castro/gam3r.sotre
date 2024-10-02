export default function ProductPage(props: any) {
  const id = props.params.id;
  return (
    <div>
      <h1>Product: {id}</h1>
    </div>
  );
}
