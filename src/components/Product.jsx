import { Link } from "react-router-dom";
import Rating from "./Rating.component";
const Product = ({ product }) => {
  return (
    <div className="card-body">
      <section className="card">
        <Link to={`/product/${product.itemId}`}>
          <img src={product.image} alt="" className="img-size" />
        </Link>
        <div className="card-body">
          <Link to={`/product/${product.itemId}`}>
            <div className="card-title">
              <strong>{product.name}</strong>
            </div>
          </Link>
          <br />
          <div>
            <Rating
              value={product.rating}
              text={`${product.totalReviews} reviews`}
            />
          </div>
          <br />
          <div className="card-text">₹ {product.price}</div>
        </div>
      </section>
    </div>
  );
};

export default Product;
