import { createContext, useContext, useState, useEffect } from "react";
import { showToast } from "../ReactToast";
import products from "../products";
import { useParams } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [displayName, setDisplayName] = useState(null);

  //for cart context
  const [cart, setCart] = useState([]);
  const [shipping, setShipping] = useState([]);
  const [paymentPortal, setPaymentPortal] = useState("Stripe");

  //DetailProduct Page

  //For Searching

  const [searchTerm, setSearchTerm] = useState("");

  //Fix Slider visibility in HomeScreen

  const [forceRerender, setForceRerender] = useState(false);

  const triggerRerender = () => {
    setForceRerender((prev) => !prev);
  };

  //for filtering product in home screen
  const isHomeRoute = window.location.pathname === "/";
  const [filteredProducts, setFilteredProducts] = useState(products);

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  //Registration Context

  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //For Shipping Context

  const [profile, setProfile] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    country: "",
  });

  const updateProfile = (newProfile) => {
    setProfile(newProfile);
  };

  //for local storage

  useEffect(() => {
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
    localStorage.setItem("userEmail", email);
    localStorage.setItem("displayName", name);
    showToast(`User Login done`, "success");
  };

  //cart functionality

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.itemId === product.itemId
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
      showToast(`${product.name} Quantity Increased`, "success");
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      showToast(`${product.name} added to cart!`, "success");
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
      showToast(`Product Removed`, "error");
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  //end of cart function

  const logoutUser = () => {
    // setUserEmail(null);
    // setDisplayName(null);
    setUserEmail("");
    setDisplayName("");

    localStorage.removeItem("userEmail");
    localStorage.removeItem("displayName");
    localStorage.removeItem("shipping");
    localStorage.removeItem("profile");
    showToast(`User Logout done`, "error");
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
        searchTerm,
        updateSearchTerm,
        profile,
        updateProfile,
        filteredProducts,
        setFilteredProducts,
        isHomeRoute,
        forceRerender,
        triggerRerender,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
