import { useEffect } from "react";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login-register/Login";
import { Register } from "./pages/login-register/Register";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductsAction } from "./action/Product/productAction";
import { NotFound404 } from "./pages/notfound/NotFound404";
import { Product } from "./pages/product/Product";
import { Cart } from "./pages/cart/Cart";
import { getCategoryAction } from "./action/Category/categoryAction";
import { ProductCategory } from "./pages/product/ProductCategory";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAction());
    dispatch(getCategoryAction());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:slug?/:_id?" element={<Product />} />
        <Route path="/category/:slug?/:_id?" element={<ProductCategory />} />
        <Route path="/cart" element={<Cart />} />
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
