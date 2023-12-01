import products from "../products";
import { Link } from "react-router-dom";
const Category = () => {
  const categories = [
    "Electronics",
    "Clothing & Accessories",
    "Instruments",
    "Car & Accessories",
  ];
  return (
    <section className="category-section">
      <h1>Categories</h1>
      <ul className="parent-box">
        {categories.map((category) => (
          <li key={category} className="category-box-div">
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;
