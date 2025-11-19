import { useState } from "react";

export default function CategoryCard({ category }) {
  const [isHovered, setIsHovered] = useState(false);

  if (!category) return null;

  return (
    <div
      className="relative border-2 border-gray-200 rounded-lg p-6 transition-all duration-300 ease-out"
      style={{
        animation: "slideUp 0.6s ease-out forwards",
        borderColor: isHovered ? "rgb(0, 110, 51)" : "#e5e7eb",
        backgroundColor: isHovered ? "rgba(0, 110, 51, 0.02)" : "white",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start">
        {/* Left Side */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-black mb-4">
            {category.title}
          </h3>

          <div className="space-y-2 mb-6">
            {category.items.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center text-sm"
              >
                <span className="text-gray-700 font-medium">{item}</span>
                <span className="text-gray-400 text-xs ml-4">17</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="text-sm font-medium transition-colors duration-200"
            style={{
              color: isHovered ? "rgb(0, 110, 51)" : "#4b9d6f",
            }}
          >
            View All
          </a>
        </div>

        {/* Right Side - Image */}
        <div
          className="ml-6 flex-shrink-0 w-32 h-32 rounded-full border-2 flex items-center justify-center transition-all duration-300"
          style={{
            borderColor: isHovered ? "rgb(0, 110, 51)" : "#d1e7dd",
            backgroundColor: isHovered
              ? "rgba(0, 110, 51, 0.05)"
              : "#f0f9f6",
          }}
        >
          <div className="relative w-24 h-24">
            <img
              src={category.image}
              alt={category.title}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 rounded-b-lg"
        style={{
          background: isHovered
            ? "linear-gradient(90deg, rgb(0, 110, 51), rgba(0, 110, 51, 0.3))"
            : "transparent",
        }}
      />
    </div>
  );
}
