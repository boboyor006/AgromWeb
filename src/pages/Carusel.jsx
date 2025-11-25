import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react'
import Images from "../img/Product/4.svg"




const products = [
  { id: 1, name: 'Mushrooms', image: Images, rating: 5, price: 15.0 },
  { id: 2, name: 'Cabbage', image: Images, rating: 5, price: 5.0 },
  { id: 3, name: 'Bell Pepper', image: Images, rating: 5, price: 5.49 },
  { id: 4, name: 'Carrot', image: Images, rating: 5, price: 3.99 },
  { id: 5, name: 'Tomato', image: Images, rating: 5, price: 4.99 },
  { id: 6, name: 'Lettuce', image: Images, rating: 5, price: 3.49 },
]

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [itemsPerView, setItemsPerView] = useState(4)
  const [dragStart, setDragStart] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1440) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (products.length - itemsPerView + 1))
    }, 4000)
    return () => clearInterval(interval)
  }, [autoPlay, itemsPerView])


  const handleMouseDown = (e) => {
    setIsDragging(true)
    setDragStart(e.clientX)
    setAutoPlay(false)
  }
  const handleMouseUp = (e) => {
    if (!isDragging) return
    setIsDragging(false)
    const dragDistance = dragStart - e.clientX
    const threshold = 50
    if (dragDistance > threshold) setCurrentIndex((prev) => (prev + 1) % (products.length - itemsPerView + 1))
    else if (dragDistance < -threshold)
      setCurrentIndex((prev) => (prev - 1 + (products.length - itemsPerView + 1)) % (products.length - itemsPerView + 1))

    setTimeout(() => setAutoPlay(true), 5000)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setDragStart(e.touches[0].clientX)
    setAutoPlay(false)
  }
  const handleTouchEnd = (e) => {
    if (!isDragging) return
    setIsDragging(false)
    const dragDistance = dragStart - e.changedTouches[0].clientX
    const threshold = 50

    if (dragDistance > threshold) setCurrentIndex((prev) => (prev + 1) % (products.length - itemsPerView + 1))
    else if (dragDistance < -threshold)
      setCurrentIndex((prev) => (prev - 1 + (products.length - itemsPerView + 1)) % (products.length - itemsPerView + 1))

    setTimeout(() => setAutoPlay(true), 5000)
  }

  // Navigation
  const handleNext = () => {
    setAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % (products.length - itemsPerView + 1))
    setTimeout(() => setAutoPlay(true), 5000)
  }
  const handlePrev = () => {
    setAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + (products.length - itemsPerView + 1)) % (products.length - itemsPerView + 1))
    setTimeout(() => setAutoPlay(true), 5000)
  }

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <main className=" bg-rgb(247, 249, 250)  py-10 px-4">
      
      {/* PAGE MAX WIDTH — MARKAZGA TUSHIRILGAN */}
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Most Selling Products
          </h1>
          <a href="#" className="text-gray-700 font-medium hover:text-green-600 transition">
            See All Deals →
          </a>
        </div>

        {/* CAROUSEL */}
        <div className="relative">

          {/* PRODUCTS GRID — MARKAZGA TUSHDI */}
          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10"
          >
            {visibleProducts.map((product) => (
              <div key={product.id} className="product-card bg-white p-6 rounded-2xl shadow-sm border text-center">
                <div className="mb-6 h-40 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                </div>

                <h3 className="text-xl font-bold mb-2">{product.name}</h3>

                <div className="flex justify-center mb-3">
                  {[...Array(product.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>

                <p className="text-3xl font-bold text-red-500 mb-6">${product.price.toFixed(2)}</p>

                <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition">
                  <ShoppingCart size={20} />
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="flex items-center justify-between">
            <button onClick={handlePrev} className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center">
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {[...Array(products.length - itemsPerView + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-6 bg-green-600' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button onClick={handleNext} className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center">
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </main>
  )
}
