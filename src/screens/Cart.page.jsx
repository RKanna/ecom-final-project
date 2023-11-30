import React from "react";
import products from "../products.js";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useUser } from "../context/UserContext.jsx";

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart, productId } = useUser();
  const removeHandler = (productId) => {
    removeFromCart(productId);
  };

  const changeHandler = () => {
    return;
  };

  return (
    <div className="cart-main">
      <h1>Shopping Cart</h1>
      <section className="cart-row">
        {cart.map((cartItem) => (
          <div key={cartItem.itemId} className="row-cart">
            <div>
              <div className="cart-img">
                <img src={cartItem.image} alt={cartItem.name} />
              </div>
            </div>
            <div className="product-details">
              <div className="product-title">{cartItem.name}</div>
              <div className="product-price">₹{cartItem.price}</div>
            </div>
            <div className="product-quantity">
              <input
                type="number"
                value={cartItem.quantity}
                min="1"
                onChange={changeHandler}
              />
            </div>
            <div className="product-total">
              ₹{cartItem.price * cartItem.quantity}
            </div>
            <div>
              <FaTrash
                className="trash"
                onClick={() => removeHandler(cartItem.itemId)}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Cart;
