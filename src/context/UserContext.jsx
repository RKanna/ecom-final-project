import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [displayName, setDisplayName] = useState(null);

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

    if (storedUserEmail && storedDisplayName) {
      setUserEmail(storedUserEmail);
      setDisplayName(storedDisplayName);
    }
  }, []);

  //end of use Effect local storage function

  const setUser = (email, name) => {
    setUserEmail(email);
    setDisplayName(name);
    // Save user information to localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("displayName", name);
  };

  const logoutUser = () => {
    // Clear user information from state
    setUserEmail(null);
    setDisplayName(null);

    // Remove user information from localStorage
    localStorage.removeItem("userEmail");
    localStorage.removeItem("displayName");
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
