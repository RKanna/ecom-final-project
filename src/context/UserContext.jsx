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

  //For Searching

  const [searchTerm, setSearchTerm] = useState("");

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

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
    localStorage.setItem("userEmail", email);
    localStorage.setItem("displayName", name);
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
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
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
    setUserEmail(null);
    setDisplayName(null);

    localStorage.removeItem("userEmail");
    localStorage.removeItem("displayName");
    localStorage.removeItem("cart");
    localStorage.removeItem("shipping");
    localStorage.removeItem("profile");
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
