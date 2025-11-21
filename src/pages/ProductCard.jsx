import React from 'react';
import Images from "../img/Product/4.svg"

const EditorsPick = () => {
    
  const products = [
    { name: "Cabbage",
         price: 5.00,
          rating: 5, 
          imge:Images 
    },

    { name: "Bell Pepper", 
        price: 5.49, 
        rating: 4.5, 
        imge:Images 
    },

    { name: "Carrot", 
        price: 3.00, 
        rating: 5, 
        imge:Images 
    },
    { name: "Watermelon", 
        price: 20.00, 
        rating: 5, 
        imge:Images 
    },
    { name: "Mashrooms", 
        price: 15.00, 
        rating: 5, 
        imge:Images 
    },
    { name: "Walnut", 
        price: 25.00, 
        rating: 5, 
        imge:Images  
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-2xl ${
          i < Math.floor(rating)
            ? "text-yellow-400"
            : i < rating
            ? "text-yellow-400"
            : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Sarlavha */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10">
          Editor's Handpick Items
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Chapdagi 6 ta karta – 8 ustun */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden
                         hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                {/* Rasm joyi (kvadrat) */}
                <div className="bg-gray-50 h-40 flex items-center justify-center">
                    <img
                        src={(item.imge)}
                        alt={item.name}
                        className="h-24 w-24 object-contain"
                    />
                </div>

                {/* Matn qismi */}
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">
                    {item.name}
                  </h3>
                  <div className="flex justify-center gap-1 mb-3">
                    {renderStars(item.rating)}
                  </div>
                  <p className="text-3xl font-bold text-orange-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* O'ngdagi banner – 4 ustun */}
          <div className="lg:col-span-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-96">
              {/* Banner rasmi (placeholder) */}
              <div className="absolute inset-0 bg-black">
                <img
                  src="https://images.unsplash.com/photo-1596047254868-febc7f1d82d2?w=800"
                  alt="Sweet Tomatoes"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              {/* Overlay matn */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-sm font-medium tracking-widest mb-1">100% NATURALS</p>
                <h1 className="text-5xl font-black leading-tight">
                  SWE199<br />TOMATOES
                </h1>

                {/* Shop Now tugmasi – siz aytgan yashil rang */}
                <button className="
                  mt-8 px-8 py-4 bg-[rgb(0,110,51)] hover:bg-[rgb(0,90,41)] 
                  text-white font-bold rounded-full text-lg
                  transition-all duration-300 hover:scale-110 
                  shadow-xl hover:shadow-2xl hover:shadow-green-900/50
                  active:scale-95
                ">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;