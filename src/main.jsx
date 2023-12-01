import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import DetailProductPage from "./screens/DetailProduct.page.jsx";
import Login from "./screens/Login.page.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import Category from "./screens/Category.page.jsx";
import Registration from "./screens/Registration.page.jsx";
import Cart from "./screens/Cart.page.jsx";
import PrivateRoute from "./components/Private.route.jsx";
import Shipping from "./screens/Shipping.page.jsx";
import Protected from "./components/Protected.route.jsx";
import Payment from "./screens/Payment.page.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:itemId" element={<DetailProductPage />} />

      <Route path="/Category" element={<Category />} />

      <Route path="/Cart" element={<Cart />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
      </Route>
      <Route path="" element={<Protected />}>
        <Route path="/Shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* User Provider wrapped for preventing error when useUser context used */}
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
