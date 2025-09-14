import React from "react";
import Hero from "../Components/Hero/Hero";
import "./Shop.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; 

const Shop: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {}
      <Hero />

      {}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={() => navigate("/Men")}
          className="latest-btn"
        >
          Latest Collection <FaArrowRight className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default Shop;
