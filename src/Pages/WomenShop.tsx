

// src/Pages/WomenShop.tsx
import React from "react";
import "./ShopCategory.css";
import Item from "../Components/item/item";
import type { ItemProps } from "../Components/item/item";
import { v4 as uuidv4 } from "uuid";


import cosmatics from "../Components/assets/cosmatics.png";
import lipstick from "../Components/assets/lipstick.png";
import lipstick3 from "../Components/assets/lipstick3.png";
import makeup from "../Components/assets/makeup.png";
import makup2 from "../Components/assets/makup2.png"; 
import makeup3 from "../Components/assets/makeup3.png";
import purse from "../Components/assets/purse.png";
import purse2 from "../Components/assets/purse2.png";
import saree from "../Components/assets/saree.png";
import saree2 from "../Components/assets/saree2.png";
import slipper from "../Components/assets/slipper.png";
import western from "../Components/assets/western.png";

const WomenShop: React.FC = () => {
  const womenProducts: Omit<ItemProps, "id">[] = [
    { name: "Cosmetics Kit", description: "Complete beauty set", price: 1299, image: cosmatics, rating: 5, reviews: 20 },
    { name: "Lipstick", description: "Matte finish", price: 499, image: lipstick, rating: 4, reviews: 10 },
    { name: "Lipstick Set", description: "Pack of 3 shades", price: 999, image: lipstick3, rating: 5, reviews: 15 },
    { name: "Makeup Kit", description: "All-in-one makeup", price: 1499, image: makeup, rating: 4, reviews: 18 },
    { name: "Compact Powder", description: "Long lasting", price: 699, image: makup2, rating: 3, reviews: 8 },
    { name: "Eye Makeup", description: "Smokey eye set", price: 899, image: makeup3, rating: 5, reviews: 12 },
    { name: "Leather Purse", description: "Trendy handbag", price: 1599, image: purse, rating: 4, reviews: 9 },
    { name: "Stylish Purse", description: "Casual wear purse", price: 1199, image: purse2, rating: 3, reviews: 6 },
    { name: "Saree", description: "Traditional silk saree", price: 2499, image: saree, rating: 5, reviews: 25 },
    { name: "Designer Saree", description: "Party wear saree", price: 2999, image: saree2, rating: 4, reviews: 13 },
    { name: "Slippers", description: "Comfortable casual wear", price: 599, image: slipper, rating: 3, reviews: 7 },
    { name: "Western Dress", description: "Trendy western outfit", price: 1999, image: western, rating: 5, reviews: 22 },
  ];

  return (
    <div className="shop-category">
      <h1 className="category-title">
        <span className="typewriter">Women Collection</span>
        <span className="cursor"></span>
      </h1>

      <div className="products-grid">
        {womenProducts.map((product) => (
          <Item
            key={uuidv4()}
            id={uuidv4()} 
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            rating={product.rating}
            reviews={product.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default WomenShop;
