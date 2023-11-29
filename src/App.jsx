import { useState } from "react";
import "./index.scss";
import Header from "./components/Header.component";
import Footer from "./components/Footer.component";
import HomeScreen from "./screens/HomeScreen";
import { Outlet } from "react-router-dom";
import Slider from "./slider/Slider";
import products from "./products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="py-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
