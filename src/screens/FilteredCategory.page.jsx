import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import products from "../products";
import Product from "../components/Product";
import Rating from "../components/Rating.component";

const FilteredCategory = () => {
  const { category } = useParams();
  console.log("Category:", category);
  const [filteredCategory, setFilteredCategory] = useState([]);

  useEffect(() => {
    // Filter products based on the selected category
    const categoryProducts = products.filter(
      (product) => product.category === category
    );
    setFilteredCategory(categoryProducts);
  }, [category]);

  const navigate = useNavigate();
  const handlePreviousPage = () => {
    navigate(-2);
  };

  return (
    <section className="filter-page">
      <h1>{category} Products</h1>
      <div className="filtered-category-page">
        {filteredCategory.map((product) => (
          <div key={product.itemId}>
            <Link className="filtered-box" to={`/product/${product.itemId}`}>
              <div
              // key={product.itemId}
              >
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <Rating
                value={product.rating}
                text={`${product.totalReviews} reviews`}
              />
              <div className="card-text">₹ {product.price}</div>
            </Link>
          </div>
        ))}
      </div>
      <button className="btn-add-cart filter-back" onClick={handlePreviousPage}>
        Go Back
      </button>
    </section>
  );
};

export default FilteredCategory;
