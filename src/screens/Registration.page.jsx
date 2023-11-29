import { useState } from "react";
//firebase import
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/index.js";
import { useUser } from "../context/UserContext.jsx";

const Registration = () => {
  const { formFields, setFormFields, setUser, logoutUser, userEmail } =
    useUser();
  const { displayName, email, password, confirmPassword } = formFields;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not Match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
      //   setFormFields(formFields);
      setFormFields({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log("Something Happened", err.message);
      console.log(err.code);
      if (err.code === "auth/email-already-in-use") {
        alert("Email Already Exists Please use alternate Email");
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <section className="registration">
      <form className="reg-container" onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        <div className="form-group">
          <label htmlFor="display-name">Username:</label>
          <input
            type="text"
            id="display-name"
            name="displayName"
            required
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </section>
  );
};

export default Registration;
