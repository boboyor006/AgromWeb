"use client";
import { Instagram, Facebook, Send } from "lucide-react";
import AgromLogo from "../img/AgromLogo.svg";

export default function Home() {
  return (
    <main className="w-full">
      <footer className=" border-t border-gray-200 w-full">
        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
              {/* Logo Section */}
              <div className="flex flex-col items-start">
                <div className="mb-2">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-700">
                   <img src={AgromLogo} alt="" />
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  The All-in-one
                  <br />
                  Supermarket Stop.
                </p>
              </div>

              {/* Useful Links */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-xs sm:text-sm lg:text-base">
                  Useful Links
                </h3>
                <ul className="space-y-2">
                  {[
                    "Legal & Privacy",
                    "Contact",
                    "Gift Card",
                    "Customer Service",
                    "Find a Store",
                  ].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-600 text-xs sm:text-sm transition-all duration-300 ease-out hover:text-[rgb(0,110,51)] hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-xs sm:text-sm lg:text-base">
                  Category
                </h3>
                <ul className="space-y-2">
                  {[
                    "Vegetables",
                    "Fresh and Dried Fruits",
                    "Cereals and Legumes",
                    "Oil Crops and Herbs",
                    "Fodder and Industrial Crops",
                  ].map((category) => (
                    <li key={category}>
                      <a
                        href="#"
                        className="text-gray-600 text-xs sm:text-sm transition-all duration-300 ease-out hover:text-[rgb(0,110,51)] hover:translate-x-1 inline-block"
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* My Account */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-xs sm:text-sm lg:text-base">
                  My Account
                </h3>
                <ul className="space-y-2">
                  {[
                    "My Profile",
                    "My Order History",
                    "Order Tracking",
                    "My Wishlist",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-600 text-xs sm:text-sm transition-all duration-300 ease-out hover:text-[rgb(0,110,51)] hover:translate-x-1 inline-block"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Customer Care */}
              <div>
                <p className="text-gray-700 text-xs sm:text-sm font-medium mb-3">
                  Our dedicated team of customer care professionals are here to
                  help
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 sm:w-5 h-4 sm:h-5 text-[rgb(0,110,51)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <a
                    href="tel:+998933750515"
                    className="text-[rgb(0,110,51)] font-bold text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    +998 90 123 45 67
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-200 pt-4 sm:pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {/* Site Language */}
                <div className="text-center sm:text-left">
                  <p className="text-gray-600 text-xs sm:text-sm mb-2">
                    Site Language:
                  </p>
                  <button className="text-gray-900 font-medium text-xs sm:text-sm hover:text-[rgb(0,110,51)] transition-colors duration-300">
                    English
                  </button>
                </div>

                {/* We Accept */}
                <div className="text-center">
                  <p className="text-gray-600 text-xs sm:text-sm mb-2">
                    We Accept:
                  </p>
                  <div className="flex justify-center gap-2 sm:gap-3">
                    <div className="w-9 sm:w-10 h-5 sm:h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold text-gray-600">
                      VISA
                    </div>
                    <div className="w-9 sm:w-10 h-5 sm:h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold text-gray-600">
                      MC
                    </div>
                  </div>
                </div>

                {/* Follow Us */}
                <div className="text-center sm:text-right">
                  <p className="text-gray-600 text-xs sm:text-sm mb-2">
                    Follow Us:
                  </p>
                  <div className="flex justify-center sm:justify-end gap-3">
                    <a
                      href="#"
                      className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[rgb(0,110,51)] transition-all duration-300 group"
                    >
                      <Instagram className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </a>
                    <a
                      href="#"
                      className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[rgb(0,110,51)] transition-all duration-300 group"
                    >
                      <Facebook className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </a>
                    <a
                      href="#"
                      className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[rgb(0,110,51)] transition-all duration-300 group"
                    >
                      <Send className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </main>
  );
}
