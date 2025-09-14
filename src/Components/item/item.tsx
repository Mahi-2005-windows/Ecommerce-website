

import React from "react";
import "./item.css";
import { useCart } from "../../Context/CartContext"; 
import { useUser } from "../../Context/UserContext"; 
import { useNavigate } from "react-router-dom"; 
import type { CartItem } from "../../Context/CartContext"; 

export interface ItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  reviews?: number;
  onAddToCart?: () => void; 
}

const Item: React.FC<ItemProps> = ({
  id,
  name,
  description,
  price,
  image,
  rating = 0,
  reviews = 0,
  onAddToCart,
}) => {
  const { addToCart } = useCart(); 
  const { user } = useUser(); 
  const navigate = useNavigate(); 

  const discount = 0.25;
  const discountedPrice = Math.round(price - price * discount);

  
  const handleAddToCart = () => {
    if (!user) {
      alert("Please login first!");
      navigate("/login");
      return;
    }
    if (onAddToCart) {
      onAddToCart();
    } else {
      addToCart({ id, name, price, image } as CartItem);
    }
  };

  
  const handleBuyNow = () => {
    if (!user) {
      alert("Please login first!");
      navigate("/login");
      return;
    }
    alert(`Buying now: ${name} for ₹${discountedPrice}`);
    
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={image}
          alt={name}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/fallback.png";
          }}
        />
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>

        {/* Rating */}
        <div className="product-rating">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>{i < rating ? "⭐" : "☆"}</span>
          ))}
          <span className="reviews">({reviews})</span>
        </div>

        {/* Price */}
        <div className="product-price">
          <span className="old-price">₹{price}</span>
          <span className="new-price">₹{discountedPrice}</span>
        </div>

        {/* Buttons */}
        <div className="product-buttons">
          <button className="add-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="buy-now-btn" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
