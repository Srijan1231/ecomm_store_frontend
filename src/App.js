import { useEffect } from "react";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login-register/Login";
import { Register } from "./pages/login-register/Register";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getProductByCategoryAction,
  getProductsAction,
} from "./action/Product/productAction";
import { NotFound404 } from "./pages/notfound/NotFound404";
import { Product } from "./pages/product/Product";
import { Cart } from "./pages/cart/Cart";
import { getCategoryAction } from "./action/Category/categoryAction";
import { ProductCategory } from "./pages/product/ProductCategory";
import { Toaster } from "react-hot-toast";
import { Checkout } from "./pages/checkout/Checkout";

import { getPaymentOptionAction } from "./action/paymentOption/paymentOptionAction";
import { PrivateRoute } from "./pages/privateroute/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAction());
    dispatch(getCategoryAction());
    dispatch(getPaymentOptionAction());
  }, [dispatch]);
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:slug?/:_id?" element={<Product />} />
        <Route path="/category/:slug?/:_id?" element={<ProductCategory />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />

        {/* <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} /> */}

        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
