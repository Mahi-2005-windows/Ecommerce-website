

// src/Components/Navbar/Navbar.tsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import cartsLogo from "../assets/carts.png";

import { useCart } from "../../Context/CartContext";

const Navbar: React.FC = () => {
  const { getTotalItems } = useCart(); 

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand-link">
          <img src={cartsLogo} alt="Shoper Logo" className="brand-logo" />
          <span className="brand-name">Shoper</span>
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/men" className={({ isActive }) => (isActive ? "active" : "")}>
            Men
          </NavLink>
        </li>
        <li>
          <NavLink to="/women" className={({ isActive }) => (isActive ? "active" : "")}>
            Women
          </NavLink>
        </li>
        <li>
          <NavLink to="/kids" className={({ isActive }) => (isActive ? "active" : "")}>
            Kids
          </NavLink>
        </li>
      </ul>

      <div className="nav-right">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

        <Link to="/cart" className="cart-container">
          <img src={cartsLogo} alt="Cart" className="cart-icon" />
          <span className="cart-count">{getTotalItems()}</span> {}
        </Link>

        
      </div>
    </nav>
  );
};

export default Navbar;
