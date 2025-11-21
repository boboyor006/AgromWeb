import React from "react";
import "../css/header.css";

import headerImg from "../img/headerImg.svg";
import headerImg2 from "../img/header2.svg";

import { Truck, Headphones, Heart, Lock } from "lucide-react";

// Siz import qilgan komponentlar — hammasi qaytadan qo‘shildi:
import Product from "./Product";
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
      description: "Free delivery for all orders above $100",
    },
    {
      icon: Headphones,
      title: "Top-Notch Support",
      description: "Chat with us if you've any questions",
    },
    {
      icon: Heart,
      title: "100% Satisfaction Guarantee!",
      description: "Providing help in case of dissatisfaction",
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "We use safest payment technologies",
    },
  ];

  return (
    <div className="bg-gray-50 font-sans">
      {/* HEADER */}
      <header className="bg-white shadow-md sticky z-50 top-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4">
            {/* NAVIGATION */}
            <nav className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm font-medium text-gray-800">
              <a className="hover:text-green-600 transition">
                <span className="text-yellow-600">Wheat</span> Cereal Crops
              </a>

              <a className="hover:text-green-600 transition">
                <span className="text-green-600">Beans</span> Legumes
              </a>

              <select className="custom-select bg-white border rounded-lg px-3 py-2 shadow-sm">
                <option>Vegetables</option>
                <option>Pomidor (-15%)</option>
                <option>Bodring</option>
                <option>Kartoshka</option>
              </select>

              <select className="custom-select bg-white border rounded-lg px-3 py-2 shadow-sm">
                <option>Fresh Fruits</option>
                <option>Olma</option>
                <option>Banan</option>
              </select>

              <a className="hover:text-green-600 transition">
                <span className="text-yellow-700">Sunflower</span> Oil Crops
              </a>
            </nav>

            {/* PHONE */}
            <div className="flex items-center gap-2 text-green-600 font-bold mt-3 sm:mt-0">
              <span>Need help? Call Us: +998 93 375 05 15</span>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT BANNER */}
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-xl relative">
            <div className="p-10">
              <p className="text-gray-600 text-sm">Welcome To AGROM</p>

              <h1 className="text-4xl font-bold leading-tight mt-2">
                We Delivery on Next Day from
                <span className="text-green-600"> 10:00 AM </span>
                to
                <span className="text-green-600"> 08:00 PM</span>
              </h1>

              <p className="text-gray-600 text-sm mt-4">
                * For free shipping orders starts from $100
              </p>

              <button className="mt-6 px-8 py-3 bg-white text-green-600 font-bold rounded-full shadow hover:scale-105 transition">
                Shop Now →
              </button>
            </div>

            <img
              src={headerImg}
              className="absolute bottom-0 right-0 w-64 object-cover"
              alt="Hero Left"
            />
          </div>

          {/* RIGHT BANNER */}
          <div className="bg-gradient-to-br from-green-700 to-green-500 rounded-2xl overflow-hidden shadow-xl relative">
            <div className="p-10 text-white">
              <p className="opacity-80 text-sm">Limited Time Deals</p>

              <h2 className="text-4xl font-bold leading-tight mt-2">
                Save <span className="text-yellow-300">15%</span> on Vegetables
              </h2>

              <p className="text-sm opacity-90 mt-4">
                Join our newsletter and get $20 discount!
              </p>

              <button className="mt-6 px-8 py-3 bg-white text-green-600 font-bold rounded-full shadow hover:scale-105 transition">
                Shop Now →
              </button>
            </div>

            <img
              src={headerImg2}
              className="absolute bottom-0 right-0 w-52 object-cover"
              alt="Hero Right"
            />
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-xl bg-white shadow hover:shadow-lg transition flex flex-col items-center text-center"
              >
                <Icon size={44} className="text-green-700 mb-4" />
                <h3 className="font-bold text-lg">{f.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{f.description}</p>
              </div>
            );
          })}
        </div>

        <Product />
      <CategoryCard />
      <ProductCard />
      <SectionBar />
      <Carousel />
      <Acardion />
      <Footer />
      </section>

      {/* COMPONENTLAR PASTDA — HECH QAYSI O‘CHIRILMAGAN */}
      
    </div>
  );
};

export default Header;
