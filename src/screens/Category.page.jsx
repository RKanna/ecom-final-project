import products from "../products";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Category = () => {
  const categoryBackgrounds = {
    Electronics: "url('/assets/images/samsung.jpg')",
    "Clothing & Accessories": "url('/assets/images/saree.jpg')",
    Instruments: "url('/assets/images/guitar.jpg')",
    "Car & Accessories": "url('/assets/images/holder.jpg')",
  };
  const categories = [
    "Electronics",
    "Clothing & Accessories",
    "Instruments",
    "Car & Accessories",
  ];
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    console.log("Selected Category:", category);
    setSelectedCategory(category);
    navigate(`/category/${category}`);
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredCategoryProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <section className="category-section">
      <h1>Categories</h1>
      <div className="parent-box">
        {categories.map((category) => (
          <div
            key={category}
            className="category-box-div"
            style={{ backgroundImage: categoryBackgrounds[category] }}
          >
            <div className="overlay">
              <Link
                to={`/category/${category}`}
                className="overlay-link"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
