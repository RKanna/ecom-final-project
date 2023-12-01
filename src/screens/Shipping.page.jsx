import { useState } from "react";
import { collection, addDoc } from "firebase/firestore/lite";
import { appDB } from "../utils/firestore.js";
const Shipping = () => {
  const [profile, setProfile] = useState({
    address: "",
    city: "",
    pincode: "",
    country: "",
  });

  // Add a new shipping address to Firestore
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.id]: e.target.value,
    });
  };

  const saveChange = async (e) => {
    e.preventDefault();
    try {
      const res = await addDoc(collection(appDB, "user-Address"), {
        address: profile.address,
        city: profile.city,
        pincode: profile.pincode,
        country: profile.country,
      });
      alert("Data is successfully saved");
    } catch (err) {
      alert("Data not exported to Firestore");
      console.log(err.code);
      console.error("Firestore error:", err);
    }
  };
  return (
    <section className="Shipping-page">
      <h1>Shipping Details</h1>
      <form className="shipping-form" onSubmit={saveChange}>
        <div className="form-sub">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter your Address"
            value={profile.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-sub">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter your City"
            value={profile.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-sub">
          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            id="pincode"
            placeholder="Enter your Zipcode"
            value={profile.pincode}
            onChange={handleChange}
          />
        </div>
        <div className="form-sub">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter your Country"
            value={profile.country}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Continue</button>
      </form>
    </section>
  );
};

export default Shipping;
