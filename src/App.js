import "./App.css";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login-register/Login";
import { Register } from "./pages/login-register/Register";
import { Route, Routes } from "react-router-dom";
function App() {
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
      </Routes>
    </div>
  );
}

export default App;
