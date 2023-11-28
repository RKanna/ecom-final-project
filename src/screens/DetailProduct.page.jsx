import { products } from "./../products";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from "../components/Rating.component";
const DetailProductPage = () => {
  const { itemId: productId } = useParams();
  const product = products.find((p) => p.itemId === productId);
  return (
    <section className="details">
      <br />
      <br />
      <Link to="/" className="header-heading btn-gen">
        Go Back
      </Link>
      <br />
      <br />
      <div className="mainRow">
        <div className="columnFirst">
          <img src={product.image} alt={product.name} />
          {console.log(product.image)}
        </div>
        <div className="columnSecond">
          <article>
            <h3>{product.name}</h3>
            <Rating
              value={product.rating}
              text={`${product.totalReviews} reviews`}
            />
            <span>Price : ₹ {product.price}</span>
          </article>
        </div>
        <div className="columnThird"></div>
      </div>
    </section>
  );
};

export default DetailProductPage;
