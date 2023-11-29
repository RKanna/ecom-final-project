import products from "../products";
import Product from "../components/Product";
import Slider from "../slider/Slider";
const HomeScreen = () => {
  const isHomeRoute = window.location.pathname === "/";
  return (
    <>
      {isHomeRoute && <Slider products={products} />}
      <h1>Recently Added Products</h1>
      <section className="row">
        {products.map((product) =>
          product.sliderValue === false ? (
            <div className="column" key={product.itemId}>
              <Product product={product} />
            </div>
          ) : null
        )}
      </section>
    </>
  );
};

export default HomeScreen;
