import products from "./../products";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from "../components/Rating.component";
import { useUser } from "../context/UserContext";
import { GoDotFill } from "react-icons/go";
import { useEffect } from "react";
const DetailProductPage = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    searchTerm,
    filteredProducts,
    setFilteredProducts,
  } = useUser();
  const { itemId: productId } = useParams();
  const product = products.find((p) => p.itemId === productId);

  const handleAddToCart = () => {
    addToCart(product);
  };

  //handleGoBack
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="details">
      <div className="mainRow">
        <div className="versatile-magnifier">
          <h4>versatile magnifier</h4>
          <h4>Discount:{product.discount} </h4>
        </div>
        <div className="columnFirst">
          <Link
            to="/"
            className="header-heading btn-gen"
            onClick={handleGoBack}
          >
            Go Back
          </Link>
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
            <p>Description: {product.description}</p>
          </article>
        </div>
        <div className="columnThird">
          <div className="box-div">
            <div className="price-cart">
              <span>Price : </span>
              <span>₹ {product.price}</span>
            </div>
            <hr />
            <div className="available">
              <span>Availability :</span>
              <span className="top-nl">
                {/* {product.countInStock > 0 ? "In Stock" : "Out of Stock"} */}
                {product.countInStock > 0 ? (
                  <GoDotFill className="green-cart" />
                ) : (
                  <GoDotFill className="red-cart" />
                )}
              </span>
            </div>
            <hr />
            <div>
              <button
                className="btn-add-cart"
                type="button"
                disabled={product.countInStock == 0}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              {/* { ? (
                <button
                  className="btn-add-cart"
                  type="button"
                  disabled={product.countInStock == 0}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  className="btn-add-cart"
                  type="button"
                  disabled
                  onClick={handleAddToCart}
                >
                  In Cart
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProductPage;
