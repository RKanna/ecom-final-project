import products from "../products";
import Product from "../components/Product";
import Slider from "../slider/Slider";
import { useState, useEffect } from "react";
import React from "react";
import { useUser } from "../context/UserContext";
const HomeScreen = () => {
  const isHomeRoute = window.location.pathname === "/";

  const { searchTerm } = useUser();

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm]);

  return (
    <>
      <div className="fix-homescreen">
        {isHomeRoute && !searchTerm && <Slider products={products} />}
        {!searchTerm ? (
          <h1>Recently Added Products</h1>
        ) : (
          <h1>Search Results</h1>
        )}

        <section className="row">
          {filteredProducts.map((product) =>
            product.sliderValue === false ? (
              <div className="column" key={product.itemId}>
                <Product product={product} />
              </div>
            ) : null
          )}
        </section>
      </div>
    </>
  );
};

export default HomeScreen;
