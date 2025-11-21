import React from "react";
import "../css/header.css";
import headerImg from "../img/headerImg.svg"
import headerImg2 from "../img/header2.svg"
import { Truck, Headphones, Heart, Lock } from 'lucide-react';
import Product from "./Product"
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";
import SectionBar from "./SectionBar";

import Carousel from "./Carusel.jsx";
import Acardion from "./Acardion.jsx";
import Footer from "./Footer.jsx";



const Header = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Delivery Across the US!",
      description: "Free delivery for all orders above $100"
    },
    {
      icon: Headphones,
      title: "Top-Notch Support",
      description: "Chat with us if you've any questions"
    },
    {
      icon: Heart,
      title: "100% Satisfaction Guarantee!",
      description: "Providing help in case of dissatisfaction"
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "We use safest payment technologies"
    }
  ];

  return (
    <div className="scroll-smooth bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4">
            {/* KATEGORIYALAR */}
            <nav className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 text-sm font-medium text-gray-800">
              {/* 1. Cereal Crops */}
              <a
                href="#"
                className="flex items-center gap-1 hover:text-green-600 transition animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="text-yellow-600">Wheat</span> Cereal Crops
              </a>

              {/* 2. Legumes */}
              <a
                href="#"
                className="flex items-center gap-1 hover:text-green-600 transition animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="text-green-600">Beans</span> Legumes
              </a>

              {/* 3. Vegetables (SELECT) */}
              <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <select className="custom-select bg-white border border-gray-300 text-gray-800 rounded-lg px-3 py-2 pr-8 font-medium hover:border-green-500 focus:border-green-500 transition-all duration-300 shadow-sm">
                  <option value="">Vegetables</option>
                  <option value="tomato">Pomidor (-15%)</option>
                  <option value="cucumber">Bodring (Yangi)</option>
                  <option value="potato">Kartoshka (1 kg = 5 000 so'm)</option>
                </select>
              </div>

              {/* 4. Fresh Fruits (SELECT) */}
              <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <select className="custom-select bg-white border border-gray-300 text-gray-800 rounded-lg px-3 py-2 pr-8 font-medium hover:border-green-500 focus:border-green-500 transition-all duration-300 shadow-sm">
                  <option value="">Fresh Fruits</option>
                  <option value="apple">Olma (Organik)</option>
                  <option value="banana">Banan (Import)</option>
                </select>
              </div>

              {/* 5. Oil Crops */}
              <a
                href="#"
                className="flex items-center gap-1 hover:text-green-600 transition animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="text-yellow-700">Sunflower</span> Oil Crops
              </a>
            </nav>

            {/* Telefon raqami */}
            <div className="flex items-center gap-2 text-green-600 font-bold text-sm sm:text-base mt-3 sm:mt-0">
              <i className="fas fa-phone-alt"></i>
              <span>Need help? Call Us: +998 93 375 05 15</span>
            </div>
          </div>
    
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:h-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chap kartochka */}
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-[550px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-float">
            <div className="p-8 lg:p-12 text-center lg:text-left">
              <p className="text-sm font-medium text-gray-600 mb-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                Welcome To AGROM
              </p>
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight animate-fade-in" style={{ animationDelay: "0.8s" }}>
                We Delivery on Next Day from <span className="text-green-600">10:00 AM</span> to <span className="text-green-600">08:00 PM</span>
              </h1>
              <p className="text-sm text-gray-600 mt-4 animate-fade-in" style={{ animationDelay: "1s" }}>
                * For free shipping orders starts from $100
              </p>
              <button
                className="mt-6 px-8 py-3 bg-white text-green-600 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0 animate-fade-in"
                style={{ animationDelay: "1.2s" }}
              >
                Shop Now <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <div className="flex justify-center hidden lg:block lg:justify-end lg:h-[10px] lg:-mt-45 ml-105 pb-5 lg:pb-0">
              <img
                src={headerImg}
                alt="Happy woman with groceries"
                className="w-68 h-80 object-cover rounded-lg animate-fade-in"
                style={{ animationDelay: "1.4s" }}
              />
            </div>   
          </div>

          {/* O'ng kartochka */}
          <div className="bg-gradient-to-br from-green-800 h-[550px] to-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-pulse-glow">
            <div className="p-8 lg:p-12 text-white">
              <p className="text-sm font-medium opacity-90 animate-fade-in" style={{ animationDelay: "0.7s" }}>
                Limited Time Deals
              </p>
              <h2 className="text-2xl lg:text-4xl font-bold leading-tight mt-2 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                Save <span className="text-yellow-300 text-4xl lg:text-5xl">15%</span> on Vegetable, Seafood and Beverages Products Now!
              </h2>
              <p className="mt-4 text-sm opacity-90 animate-fade-in" style={{ animationDelay: "1.1s" }}>
                Join our newsletter and get $20 discount!
              </p>
              <button
                className="mt-6 px-8 py-3 bg-white text-green-600 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 animate-fade-in"
                style={{ animationDelay: "1.3s" }}
              >
                Shop Now <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <div className="flex justify-center lg:justify-end -mt-16 lg:-mt-20">
              <img
                src={headerImg2}
                alt="Fresh vegetables basket"
                className="w-50 h-50 lg:w-50 rounded-full shadow-2xl animate-fade-in"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
          </div>
        </div>

        <section className="w-full  py-12   px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg p-4 rounded-lg"
                style={{ boxShadow: 'rgba(0, 109, 50, 0.15) 0px 8px 24px' }}
              >
                
                <div
                  className="mb-4 p-3 rounded-full"
                  style={{ backgroundColor: 'rgba(0, 109, 50, 0.1)' }}
                >
                  <IconComponent size={48} style={{ color: '#006d32' }} strokeWidth={2} />
                </div>

                <h3 className="font-bold text-lg md:text-base mb-3 text-gray-900 leading-snug">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

              </div>
            );
          })}
        </div>
      </div>
    </section>




    {/* Product ulangan bu yerda lekin keyin ketilaveradi  */}

       <Product/>
      < CategoryCard/> 
      <ProductCard/>
      <SectionBar/>
      <Carousel/>
      <Acardion/>
      <Footer/>
        

      </section>

     

     
    </div>
    
  );
};

export default Header;
