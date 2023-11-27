import { useState } from "react";
import "./index.scss";
import Header from "./components/Header.component";
import Footer from "./components/Footer.component";
import HomeScreen from "./screens/HomeScreen";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="py-3">
        {/* <HomeScreen /> */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
