// src/Pages/Cart.tsx
import React from "react";
import { useCart } from "../Context/CartContext";
import type { CartItem } from "../Context/CartContext";




const Cart: React.FC = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  if (cartItems.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item: CartItem) => (
          <li key={item.id} style={{ marginBottom: "20px" }}>
            <img src={item.image} alt={item.name} width={80} />
            <div>
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
