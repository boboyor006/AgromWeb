import React, { useEffect, useState } from "react";
import feather from "feather-icons";
import "../css/Navbar.css"
import { Link } from "react-router-dom";
import AgromLogo from '../img/AgromLogo.svg'





const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    feather.replace(); // Feather iconlarni yuklash
  }, [menuOpen]); // Har safar menu ochilganda ham yangilanadi

  return (
    <div className="bg-white  ">
      {/* Reklama qismi */}
      
      <div className="bg-green-700 text-white text-sm ">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-2 gap-2 md:gap-6">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-100">
              <i data-feather="globe"></i> <span>Language</span>
            </div>
            <div className="hidden md:block border-l border-white h-4"></div>
            <span className="font-medium">
              Midseason Sale: <strong>20% Off</strong> — Limited Time Only
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5">
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-100">
              <i data-feather="info"></i> <span>About us</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-100">
              <i data-feather="help-circle"></i> <span>Contact us</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-100">
              <i data-feather="calendar"></i> <span>Blog</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-100">
              <i data-feather="map-pin"></i> <span>AGROM Locator</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-100">
              <i data-feather="shield"></i> <span>AGROM Support 24/7</span>
            </div>
          </div>
        </div>
      </div>





      {/* Navbar */}


      <nav className="border-b border-gray-200 bg-white shadow-md sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Chap taraf (Logo + joylashuv) */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Link to="/">
              <img
                src={AgromLogo}
                alt="Logo"
                className="w-20 h-20 rounded-full object-contain"
              />
              </Link>
            
            </div>
            <div className="hidden md:flex items-center gap-2 cursor-pointer text-gray-700 hover:text-green-700">
              <i data-feather="map-pin"></i>
              <span className="text-sm font-medium">Find a store</span>
            </div>
          </div>

          {/* O‘rta qism */}
          <div className="hidden md:flex items-center gap-3">
            <select className="border border-green-600 text-green-700 px-4 py-2 h-[40px] rounded text-sm focus:ring-2 focus:ring-green-400 cursor-pointer">
              <option defaultValue>Browse now</option>
              <option>Seeds & Crops</option>
              <option>Fertilizers</option>
              <option>Machinery</option>
              <option>Services</option>
            </select>

            <div className="flex items-center bg-gray-100 ml-[50px] h-[40px] rounded-md overflow-hidden w-[450px]">
              <input
                type="text"
                placeholder="Search products"
                className="w-full px-3 py-2 bg-gray-100 text-sm focus:outline-none"
              />
              <button className="px-3">
                <i data-feather="search" className="text-gray-500"></i>
              </button>
            </div>
          </div>

          {/* O‘ng taraf */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 cursor-pointer hover:text-green-700">
              <i data-feather="user"></i> <span>
                <Link to="/login">Sin Up</Link>
              </span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-green-700 border-l pl-3">
              <i data-feather="heart"></i> <span>Wishlist</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-green-700 border-l pl-3">
              <i data-feather="shopping-bag"></i> <span>Cart $0.00</span>
            </div>
          </div>

          {/* Mobil menyu tugmasi */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-between w-8 h-6 gap-1"
          >
            <span
              className={`block h-0.5 bg-green-700 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-green-700 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-green-700 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobil menyu */}
        {menuOpen && (
          <div className="flex flex-col bg-white border-t border-gray-200 px-4 py-4 space-y-4 shadow-md animate__animated animate__fadeInDown">
            <select className="w-full border border-green-600 text-green-700 px-3 py-2 rounded text-sm">
              <option defaultValue>Browse now</option>
              <option>Seeds & Crops</option>
              <option>Fertilizers</option>
              <option>Machinery</option>
              <option>Services</option>
            </select>

            <div className="flex items-center bg-gray-100 rounded-md overflow-hidden w-full">
              <input
                type="text"
                placeholder="Search products"
                className="w-full px-3 py-2 bg-gray-100 text-sm focus:outline-none"
              />
              <button className="px-3">
                <i data-feather="search" className="text-gray-500"></i>
              </button>
            </div>

            <div className="flex flex-col gap-3 text-gray-700">
              <div className="flex items-center gap-2 cursor-pointer hover:text-green-700">
                <i data-feather="user"></i> <span>Sign In</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-green-700">
                <i data-feather="heart"></i> <span>Wishlist</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-green-700">
                <i data-feather="shopping-bag"></i> <span>Cart $0.00</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
