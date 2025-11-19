"use client";

import React from "react";
import Fasil from "../img/Product/3.svg"

export default function Categories() {
  const categories = [
    {
      id: "1",
      title: "Vegetables",
      items: [
        { name: "Potatoes", count: 17 },
        { name: "Cabbages", count: 17 },
        { name: "Carrots", count: 17 },
      ],
      image: Fasil,
    },
    {
      id: "2",
      title: "Fresh Fruits",
      items: [
        { name: "Apples", count: 17 },
        { name: "Pears", count: 17 },
        { name: "Grapes", count: 17 },
      ],
      image:Fasil,
    },
    {
      id: "3",
      title: "Melons & Gourds",
      items: [
        { name: "Watermelons", count: 17 },
        { name: "Melons", count: 17 },
        { name: "Pumpkins", count: 17 },
      ],
      image: Fasil,
    },
    {
      id: "4",
      title: "Cereal Crops",
      items: [
        { name: "Wheat", count: 17 },
        { name: "Barley", count: 17 },
        { name: "Rice", count: 17 },
      ],
      image:Fasil,
    },
    {
      id: "5",
      title: "Natural Spices & Herbs",
      items: [
        { name: "Basil", count: 17 },
        { name: "Dill", count: 17 },
        { name: "Mint", count: 17 },
      ],
      image: Fasil,
    },
    {
      id: "6",
      title: "Nuts",
      items: [
        { name: "Walnut", count: 17 },
        { name: "Almond", count: 17 },
        { name: "Pistachio", count: 17 },
      ],
      image: Fasil,
    },
  ];

  return (
    <main className="max-w-[1400px] mx-auto px-4 md:px-10 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-10">
        Our Trending Categories
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="
              group
              border border-gray-300 rounded-xl 
              p-6 cursor-pointer bg-white 
              transition-all duration-300 
              hover:-translate-y-2 
              hover:shadow-xl hover:bg-green-50
            "
          >
            {/* TITLE */}
            <h3
              className="
                text-lg md:text-xl font-semibold mb-4
                transition-colors duration-300 
                group-hover:text-green-700
              "
            >
              {cat.title}
            </h3>

            {/* ITEMS */}
            <div className="mb-6 space-y-2">
              {cat.items.map((item, i) => (
                <div
                  key={i}
                  className="
                    flex justify-between text-gray-600 
                    hover:text-gray-800 transition
                    text-sm md:text-base
                  "
                >
                  <span className="font-medium">{item.name}</span>
                  <span>{item.count}</span>
                </div>
              ))}
            </div>

            {/* IMAGE */}
            <div className="flex justify-center mb-4">
              <div
                className="
                  w-28 h-28 md:w-32 md:h-32 rounded-full 
                  overflow-hidden border-2 border-green-300 
                  bg-gray-100 flex items-center justify-center
                  transition-all duration-300 
                  group-hover:scale-105 
                  group-hover:border-green-600 
                  group-hover:shadow-lg
                "
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* VIEW ALL */}
            <span
              className="
                text-green-400 font-medium text-sm md:text-base 
                hover:underline hover:text-green-700 
                transition-all duration-300 inline-block
              "
            >
              View All
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
