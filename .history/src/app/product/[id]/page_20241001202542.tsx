export default function ProductPage(props: any) {
  const id = props.params.id;
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
