import { FaShoppingCart, FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <nav>
        <div className="brand-container">
          <h1>SS Shop</h1>
        </div>
        <div className="cart-container">
          <FaUser className="point" />
          <FaShoppingCart className="point" />
        </div>
      </nav>
    </>
  );
};

export default Header;
