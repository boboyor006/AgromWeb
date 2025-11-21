'use client';

import { useState, useEffect } from 'react';
import '../css/index.css'; 
import ProductImg from "../img/product.svg"



const groceryOffers = [
  {
    title: "AGROM Elementor Grocery Mega Market",
    subtitle: "WooCommerce Theme",
    tag: "Today's Special Offer",
  },
  {
    title: "Fresh Organic Vegetables",
    subtitle: "Direct from Local Farms",
    tag: "Premium Quality",
  },
  {
    title: "Healthy Living Starts Here",
    subtitle: "100% Natural & Fresh Produce",
    tag: "Best Prices Guaranteed",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    if (!isRotating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % groceryOffers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isRotating]);

  const current = groceryOffers[currentIndex];

  return (
    <div className="   w-[full] h-130 flex items-center justify-center p-6">

      <div className="w-[1600px]  max-w-8xl rounded-lg bg-gradient-to-r from-green-700 to-green-600 overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8 min-h-80">
          
       
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              
           
              <div className={isRotating ? "absolute inset-0 spin-slow" : "absolute inset-0"}>
                <img
                  src={ProductImg}
                  alt="Fresh vegetables"
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>

              
              <div className="absolute inset-0 rounded-full border-4 border-green-300 opacity-50"></div>
              <div className="absolute inset-2 rounded-full border-2 border-green-200 opacity-30"></div>
            </div>
          </div>

          {/* /// animaton text */}
          <div className="flex-1 text-white fade-in-animation">
            <p className="text-sm md:text-base font-medium tracking-wide mb-2 opacity-90">
              {current.tag}
            </p>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {current.title}
            </h1>

            <p className="text-lg md:text-xl font-semibold mb-8 opacity-95">
              {current.subtitle}
            </p>

            {/* Animated dots indicator */}
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                {groceryOffers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsRotating(false);
                      setTimeout(() => setIsRotating(true), 1000);
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "bg-white w-3 h-3"
                        : "bg-white bg-opacity-40 w-2 h-2 hover:bg-opacity-60"
                    }`}
                    aria-label={`Go to offer ${index + 1}`}
                  />
                ))}
              </div>

              
             
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
