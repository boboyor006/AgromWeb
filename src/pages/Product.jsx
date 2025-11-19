import React from "react";
import { ChevronRight, Star } from "lucide-react";
import Image1 from "../img/Product/1.svg"
import Image2 from "../img/Product/2.svg"
import Image3 from "../img/Product/3.svg"
import Image4 from "../img/Product/4.svg"
import BgImg from "../img/Product/bg.svg"


const products = [
  {
    id: 1,
    name: "Mushrooms",
    price: "$15.00",
    rating: 5,
    image: Image1,
  },
  {
    id: 2,
    name: "Cabbage",
    price: "$5.00",
    rating: 5,
    image: Image2,
  },
  {
    id: 3,
    name: "Bell Pepper",
    price: "$5.49",
    rating: 5,
    image: Image3,
  },
  {
    id: 4,
    name: "Carrot",
    price: "$3.00",
    rating: 5,
    image: Image4,
  },
];

export default function DealOfTheMonth() {
  return (
    <div className="min-h-screen  py-4  px-4 ">
      <div className="max-w-7.5xl  mx-auto">
    
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
         



        <div className="lg:col-span-1 ">
  <div
    className="relative rounded-xl min-h-96 h-170 overflow-hidden shadow-2xl flex flex-col justify-between p-10 text-white
    bg-center bg-cover "
    style={{ backgroundImage: `url(${BgImg})` }}
  >
    {/* Qorong'i qoplama */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Matn */}
    <div className="relative z-10">
      <p className="text-sm font-medium text-yellow-400 mb-2">
        Hot This Month
      </p>
      <h2 className="text-3xl font-bold leading-tight">
        Save an extra{" "}
        <span className="text-yellow-400 text-4xl">$15 per order</span>
      </h2>
    </div>

    {/* Pastki rasm — Agar kerak bo‘lmasa, o‘zim o‘chirib tashlayman */}
    {/* <div className="relative z-10 h-64 -mx-10 -mb-10">
      <img
        src={BgImg}
        alt="Fresh vegetables"
        className="object-cover w-full h-full rounded-xl"
      />
    </div> */}
  </div>
</div>





          {/* Right Section - Deals */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl md:text-3xl font-bold text-slate-900">
                Deal Of The Month
              </h1>
              <a
                href="#"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-medium transition-colors"
              >
                See All Deals
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg border border-slate-100 overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl hover:scale-105 hover:border-slate-300 cursor-pointer"
                >
                  {/* Product Image */}
                  <div className="relative h-48 bg-slate-100 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Price */}
                    <p className="text-2xl font-bold text-red-500">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
