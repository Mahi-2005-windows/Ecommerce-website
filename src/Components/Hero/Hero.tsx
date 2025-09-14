
import React, { useEffect, useState } from "react";
import "./Hero.css";

// Images
import watchesImg from "../assets/watches.png";
import denimImg from "../assets/denim-pants.png";
import earpodsImg from "../assets/earpods.png";
import headphonesImg from "../assets/headphones.png";
import phoneHolderImg from "../assets/phone-holder.png";
import tshirtImg from "../assets/tshirt-mens.png";
import smartwatchImg from "../assets/smartwatch.png";
import shoesImg from "../assets/shoes.png";
import sandalImg from "../assets/sandal.png";
import makeupImg from "../assets/makeup.png";
import girlsdressImg from "../assets/girlsdress.png";
import boysdressImg from "../assets/boysdress.png";

const rotatingTexts = [
  "Cash on Delivery Available",
  "Limited Time Offer!",
  "Buy 1 Get 1 Free 🎉",
  "Free Shipping on Orders Above ₹999",
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = rotatingTexts[index % rotatingTexts.length];
    let timer: any;

    if (!isDeleting && displayText.length < currentText.length) {
      timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 100);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      }, 60);
    } else if (!isDeleting && displayText.length === currentText.length) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);

  return (
    <div className="hero">
      {}
      <div className="rotating-text">
        <span>{displayText}</span>
        <span className="cursor">|</span>
      </div>

      {/* Images section */}
      <div className="hero-images">
        <img src={watchesImg} alt="Smart Watch" className="hero-img" />
        <img src={denimImg} alt="Denim Pants" className="hero-img" />
        <img src={earpodsImg} alt="Earpods" className="hero-img" />
        <img src={headphonesImg} alt="Headphones" className="hero-img" />
        <img src={phoneHolderImg} alt="Phone Holder" className="hero-img" />
        <img src={tshirtImg} alt="Tshirt" className="hero-img" />
        <img src={smartwatchImg} alt="Smartwatch" className="hero-img" />
        <img src={shoesImg} alt="Shoes" className="hero-img" />
        <img src={sandalImg} alt="Sandal" className="hero-img" />
        <img src={makeupImg} alt="Makeup" className="hero-img" />
        <img src={girlsdressImg} alt="Girls Dress" className="hero-img" />
        <img src={boysdressImg} alt="Boys Dress" className="hero-img" />
      </div>

      {/* Text section */}
      <div className="hero-text">
        <h2 className="tagline">NEW ARRIVALS ONLY</h2>
        <h1 className="headline">
          Trendy Smart Watches, Makeup, Kids Wear & More
        </h1>
      </div>
    </div>
  );
};

export default Hero;
