import Product from "./Product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",

  };
  return (
    <div style={styles}>
      <Product title="Logitech Mouse" idx={0} />
      <Product title="realme TV" idx={1} />
      <Product title="Amazfit Pop 3R" idx={2} />
      <Product title="Redmi Note 13" idx={3} />
    </div>
  );
}

export default ProductTab;
