import { useEffect } from "react";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login-register/Login";
import { Register } from "./pages/login-register/Register";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductsAction } from "./action/Product/productAction";
import { NotFound404 } from "./pages/notfound/NotFound404";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
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
