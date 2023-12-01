import { createContext, useContext, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import products from "../products";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [displayName, setDisplayName] = useState(null);

  //for cart context
  const [cart, setCart] = useState([]);
  const [shipping, setShipping] = useState([]);
  const [paymentPortal, setPaymentPortal] = useState("Stripe");

  //defined product and productId

  // const { itemId: productId } = useParams();
  // const product = products.find((p) => p.itemId === productId);

  //Registration Context

  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //for local storage

  useEffect(() => {
    // Check if user information is stored in localStorage
    const storedUserEmail = localStorage.getItem("userEmail");
    const storedDisplayName = localStorage.getItem("displayName");
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedAddress = JSON.parse(localStorage.getItem("shipping")) || [];

    if (storedUserEmail && storedDisplayName) {
      setUserEmail(storedUserEmail);
      setDisplayName(storedDisplayName);
    }
    setCart(storedCart);
    setShipping(storedAddress);
  }, []);

  //end of use Effect local storage function

  const setUser = (email, name) => {
    setUserEmail(email);
    setDisplayName(name);
    // Save user information to localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("displayName", name);
  };

  //cart functionality

  const addToCart = (product) => {
    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(
      (item) => item.itemId === product.itemId
    );

    if (existingItemIndex !== -1) {
      // If the item exists, update the quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
      // Update localStorage with the modified cart
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // If the item doesn't exist, add it to the cart with quantity 1
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      // Update localStorage with the modified cart
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const updateCart = (productId, quantity) => {
    const updatedCart = cart.map((item) =>
      item.itemId === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.itemId === productId
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(existingItemIndex, 1);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  //end of cart function

  const logoutUser = () => {
    // Clear user information from state
    setUserEmail(null);
    setDisplayName(null);

    // Remove user information from localStorage
    localStorage.removeItem("userEmail");
    localStorage.removeItem("displayName");
    localStorage.removeItem("cart");
    localStorage.removeItem("shipping");
  };

  return (
    <UserContext.Provider
      value={{
        userEmail,
        displayName,
        setUser,
        logoutUser,
        formFields,
        setFormFields,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateCart,
        shipping,
        setShipping,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
