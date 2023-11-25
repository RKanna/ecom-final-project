import products from "../products";
import Product from "../components/Product";
const HomeScreen = () => {
  return (
    <>
      <h1>Recently Added Products</h1>
      <section className="row">
        {products.map((product) => (
          <div className="column" key={product.itemId}>
            <Product product={product} />
          </div>
        ))}
      </section>
    </>
  );
};

export default HomeScreen;
