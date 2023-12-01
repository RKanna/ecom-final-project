import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUser } from "./../context/UserContext";
import { FaSignOutAlt } from "react-icons/fa";
const Header = () => {
  const { userEmail, logoutUser, cart } = useUser();

  const handleLogout = () => {
    logoutUser();
  };

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
            {/* <Link to="/Login" className="fl-position">
              <FaUser className="point" />
              <h3>Sign In</h3>
            </Link> */}
            {userEmail ? (
              <Link
                className="userSpotlight fl-position"
                to="/"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="point" />
                <h3>Logout</h3>
              </Link>
            ) : (
              <Link to="/Login" className="fl-position">
                <FaUser className="point" />
                <h3>Sign In</h3>
              </Link>
            )}
          </div>
          <div>
            <Link to="/Cart" className="fl-position">
              <FaShoppingCart className="point" />
              <h3>Cart</h3>
              {cart.length > 0 ? (
                <h3 className="header-cart">{cart.length}</h3>
              ) : (
                ""
              )}
            </Link>
            {/* {userEmail ? (
              <Link to="/Cart" className="fl-position">
                <FaShoppingCart className="point" />
                <h3>Cart</h3>
              </Link>
            ) : (
              <Link to="/Login" className="fl-position">
                <FaShoppingCart className="point" />
                <h3>Cart</h3>
              </Link>
            )} */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
