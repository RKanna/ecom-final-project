import products from "../products";
import Product from "../components/Product";
import Slider from "../slider/Slider";
import { useState, useEffect } from "react";
import React from "react";
import { useUser } from "../context/UserContext";
import { ScrollRestoration } from "react-router-dom";
const HomeScreen = () => {
  const {
    searchTerm,
    filteredProducts,
    setFilteredProducts,
    isHomeRoute,
    forceRerender,
  } = useUser();

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
        {/* Here, key={forceRerender} update every time when i click go back from detailproduct page so it will force reRendering it will fix  */}
        {isHomeRoute && !searchTerm && (
          <Slider key={forceRerender} products={products} />
        )}
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
        <ScrollRestoration />
      </div>
    </>
  );
};

export default HomeScreen;
