
// src/Pages/ShopCategory.tsx
import React from "react";
import Item from "../Components/item/item";
import type { ItemProps } from "../Components/item/item";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./ShopCategory.css";

// Images
import watchesImg from "../Components/assets/watches.png";
import denimImg from "../Components/assets/denim-pants.png";
import earpodsImg from "../Components/assets/earpods.png";
import headphonesImg from "../Components/assets/headphones.png";
import phoneHolderImg from "../Components/assets/phone-holder.png";
import tshirtImg from "../Components/assets/tshirt-mens.png";
import smartwatchImg from "../Components/assets/smartwatch.png";
import shoesImg from "../Components/assets/shoes.png";
import sandalImg from "../Components/assets/sandal.png";
import makeupImg from "../Components/assets/makeup.png";
import girlsdressImg from "../Components/assets/girlsdress.png";
import boysdressImg from "../Components/assets/boysdress.png";

// New Photos
import accessoriesImg from "../Components/assets/accessories.png";
import beltImg from "../Components/assets/belt.png";
import shirtsImg from "../Components/assets/shirts.png";
import sunglassImg from "../Components/assets/sunglass.png";
import sunglass2Img from "../Components/assets/sunglass2.png";
import sunglass3Img from "../Components/assets/sunglass3.png";
import babybottleImg from "../Components/assets/babybottle.png";
import babycreamImg from "../Components/assets/babycream.png";
import babyelephant from "../Components/assets/babyelephant.png";
import babyfrock from "../Components/assets/babyfrock.png"; 
import babysuit from "../Components/assets/babysuit.png";
import babysuit2 from "../Components/assets/babysuit2.png";



interface ShopCategoryProps {
  category: "Men" | "Women" | "Kids";
}

const productsData: Record<string, Omit<ItemProps, "id">[]> = {
  Men: [
    { name: "Smart Watch", description: "25% OFF", price: 2500, image: smartwatchImg, rating: 4, reviews: 120 },
    { name: "Denim Pants", description: "50% OFF", price: 1500, image: denimImg, rating: 3, reviews: 85 },
    { name: "Earpods", description: "Wireless Earpods", price: 1200, image: earpodsImg, rating: 4, reviews: 200 },
    { name: "Headphones", description: "Over-Ear Headphones", price: 2200, image: headphonesImg, rating: 5, reviews: 150 },
    { name: "Phone Holder", description: "Adjustable Stand", price: 800, image: phoneHolderImg, rating: 5, reviews: 120 },
    { name: "T-Shirt", description: "Men Casual Tee", price: 700, image: tshirtImg, rating: 3, reviews: 60 },
    { name: "Shoes", description: "Stylish Sneakers", price: 1800, image: shoesImg, rating: 4, reviews: 90 },
    { name: "Watch", description: "Luxury Wrist Watch", price: 3200, image: watchesImg, rating: 5, reviews: 45 },
    { name: "Accessories", description: "Flat 30% OFF", price: 900, image: accessoriesImg, rating: 4, reviews: 70 },
    { name: "Belt", description: "Premium Leather", price: 600, image: beltImg, rating: 4, reviews: 50 },
    { name: "Shirt", description: "Formal Shirt", price: 1100, image: shirtsImg, rating: 4, reviews: 80 },
    { name: "Sunglass", description: "Trendy Shades", price: 750, image: sunglassImg, rating: 3, reviews: 100 },
    { name: "Sunglass 2", description: "Cool Style", price: 850, image: sunglass2Img, rating: 5, reviews: 120 },
    { name: "Sunglass 3", description: "New Arrival", price: 950, image: sunglass3Img, rating: 4, reviews: 60 },
  ],
  Women: [
    { name: "Makeup Kit", description: "Best Cosmetic Set", price: 2500, image: makeupImg, rating: 5, reviews: 200 },
    { name: "Sandal", description: "Trendy Sandals", price: 1200, image: sandalImg, rating: 4, reviews: 100 },
    { name: "Shoes", description: "Running Shoes", price: 2000, image: shoesImg, rating: 5, reviews: 90 },
    { name: "Dress", description: "Party Wear Dress", price: 3500, image: girlsdressImg, rating: 5, reviews: 150 },
  ],
  Kids: [
    { name: "Boys Dress", description: "Casual Kids Wear", price: 900, image: boysdressImg, rating: 4, reviews: 80 },
    { name: "Girls Dress", description: "Cute Frock", price: 950, image: girlsdressImg, rating: 5, reviews: 100 },
    { name: "Sneakers", description: "Kids Sneakers", price: 1200, image: shoesImg, rating: 4, reviews: 70 },
    { name: "Baby Bottle", description: "Glass Bottle Milton Brand", price: 800, image: babybottleImg, rating: 5, reviews:50},
    { name: "Baby Cream", description: "Mama Earth Natural Cream", price:700, image: babycreamImg, rating: 3, reviews:43 },
    { name: "Baby Elephant Toy", description:"Soft Toys", price: 900, image: babyelephant, rating: 4, reviews:50, },
    { name: "Baby Frock", description:" Pink Color Soft Frock", price: 1200, image: babyfrock, rating: 5, reviews:40,},
    { name: "Baby Suit", description:" Beautiful Wollen Clothes", price: 1700, image: babysuit, rating: 4, reviews:50,},
    { name: "Baby Suit", description:"Baby Cotton Dress",  price: 1000, image: babysuit2, rating: 5, reviews:50, },



  ]
};

const ShopCategory: React.FC<ShopCategoryProps> = ({ category }) => {
  const products = productsData[category];
  const navigate = useNavigate();
  const { addToCart } = useCart(); 

  const remainder = products.length % 3;

  return (
    <div className="shop-category">
      <h1 className="category-title">
        <span className="typewriter">{category} Collection</span>
        <span className="cursor"></span>
      </h1>

      <div className="products-grid">
        {products.map((item) => (
          <Item
            key={uuidv4()}
            id={uuidv4()} 
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            rating={item.rating}
            reviews={item.reviews}
            onAddToCart={() =>
              addToCart({
                id: uuidv4(),
                name: item.name,
                price: item.price,
                image: item.image,
              })
            }
          />
        ))}

        {}
        {remainder !== 0 && (
          <div className="view-more-card">
            <button onClick={() => navigate("/women")} className="view-more-btn">
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;

