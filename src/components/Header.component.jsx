import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav>
        <div className="brand-container">
          <Link to="/" className="header-heading">
            <h1>SS Shop</h1>
          </Link>
        </div>
        <div className="cart-container">
          <div>
            <Link to="/SignIn" className="fl-position">
              <FaUser className="point" />
              <h3>Sign In</h3>
            </Link>
          </div>
          <div>
            <Link to="/Cart" className="fl-position">
              <FaShoppingCart className="point" />
              <h3>Cart</h3>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
