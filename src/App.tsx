
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import WomenShop from "./Pages/WomenShop";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import { CartProvider } from "./Context/CartContext";
import { UserProvider } from "./Context/UserContext";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <div className="app-wrapper">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/men" element={<ShopCategory category="Men" />} />
              <Route path="/kids" element={<ShopCategory category="Kids" />} />
              <Route path="/women" element={<WomenShop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </div>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
