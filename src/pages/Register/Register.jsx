

import React from "react";
import { FaUser, FaEyeSlash } from "react-icons/fa";

export default function Registrasion() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-gray-600 text-xl font-normal flex items-center justify-center gap-2">
            <FaUser className="text-gray-400" />
            MY ACCOUNT
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Login Section */}
          <div className="border border-gray-300 rounded-lg p-8 bg-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
            <p className="text-gray-600 mb-6">
              Please log in to your account below in order to continue shopping.
            </p>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition">
              Login
            </button>
          </div>

          {/* Register Section */}
          <div className="border border-gray-300 rounded-lg p-8 bg-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Register</h2>

            <form className="space-y-4">

              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-green-500"
                  placeholder="your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-green-500"
                  placeholder="email address"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-green-500"
                    placeholder="your password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    <FaEyeSlash />
                  </button>
                </div>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition mt-6"
              >
                Register
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-800 font-semibold mb-4">
                Sign up today and you will be able to:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">
                    Quick checkout for a seamless shopping experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">
                    Stay up-to-date with order tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">
                    Simplify record keeping with purchase history
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
