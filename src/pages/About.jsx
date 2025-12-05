
import { useState } from "react"
import Farm from "../img/Farm.svg"
import A1 from "../img/Product/A1.svg"
import Clocer from "../img/Product/Clocr.svg"

export default function About() {
  const [animateToCenter, setAnimateToCenter] = useState(false)

  const handleAnimateClick = () => {
    setAnimateToCenter(!animateToCenter)
  }

  const stats = [
    { number: "95K+", label: "Employee Empowered" },
    { number: "10M+", label: "Worldwide Distributors" },
    { number: "7.550+", label: "Receive Daily Ordered" },
    { number: "915%", label: "Get Growth Per Year" },
    { number: "2,150+", label: "Overall Top Brands" },
  ]

  const features = [
    {
      title: "Customer Support",
      description: "Over the year I have learned that what is important in a dress is then woman",
      
    },
    {
      title: "Quality Products",
      description: "However venture pursuits its aim cordials Forming leading studied then luckiest",
    },
    {
      title: "Happy Customers",
      description: "Valley afford uneasy she throws though beds sets forming general prudents",
    },
    {
      title: "Reliable Delivery",
      description: "It real sent your at amount shy sets why follow declare Repeated of endeavor",
    },
  ]

  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-hidden relative">
      {/* Hero Section */}
      <section className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-8 sm:gap-8 lg:grid lg:grid-cols-2 lg:gap-15 lg:items-center">
          {/* Image - Mobile first, Desktop reorder */}
          <div
            className="w-full rounded-xl overflow-hidden lg:order-1"
            style={{
              transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              transform: animateToCenter ? "translate(0, 0) scale(1)" : "translate(-100px, 0) scale(0.9)",
            }}
          >
            <img
              src={Farm}
              alt="AGROM Farmer"
              className="w-full h-auto block"
            />
          </div>

          {/* Text - Desktop reorder */}
          <div
            className="w-full lg:order-2"
            style={{
              transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              transform: animateToCenter ? "translate(0, 0) opacity(1)" : "translate(100px, 0) opacity(0.5)",
            }}
          >
            <span className="text-green-600 text-xs font-semibold tracking-widest uppercase">
              OUR STORY
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4">
              Hi, We are AGROM
            </h1>
            <p className="text-base text-gray-600 leading-relaxed mt-4">
              Foreseeing the trends and the desires of the human of the future, we initiated our journey a few years
              back with the sole ambition of setting new standards in quality and reliability — by forging products that
              feel personal.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mt-4">
              We're culture-driven, and we're obsessed with values that everyday people like you find positive. Studying
              your needs deeply, we strive to engineer products that you can feel proud of — to make them your
              companions confirm that you have read and are agreeing for everyday days.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-20 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 max-w-7xl lg:mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 lg:p-8 text-center bg-white rounded-lg"
              style={{
                transform: animateToCenter
                  ? "translate(0, 0) scale(1) opacity(1)"
                  : `translate(${index % 2 === 0 ? -50 : 50}px, ${index % 2 === 0 ? -30 : 30}px) scale(0.8) opacity(0.6)`,
                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-24 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-3 lg:mb-4">
          A Positive Force For People
        </h2>
        <p className="text-sm sm:text-base text-gray-600 text-center mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-2xl">
          We look our best in subdued colors, sophisticated cuts, and a general air of sleek understatement.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 max-w-7xl lg:mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
              style={{
                transform: animateToCenter
                  ? "translate(0, 0) rotate(0deg) opacity(1)"
                  : `translate(${index % 2 === 0 ? -80 : 80}px, ${index < 2 ? -60 : 60}px) rotate(${index % 2 === 0 ? -5 : 5}deg) opacity(0.5)`,
                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <div className="w-full h-44 sm:h-48 lg:h-56">
                <img src={A1} className="w-full h-44 sm:h-48 lg:h-56" alt="" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 px-4 pt-4 pb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 px-4 pb-4 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-24 bg-green-600 text-white">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center max-w-7xl lg:mx-auto">
          <div className="text-white">
            <h2 className="text-xs font-semibold tracking-widest uppercase mb-2 opacity-90">
              Why Choose us?
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Helping People To Live Better Than Before
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-7 opacity-95">
              Built since 2002, XStore's goal is to help as many farmers as we can to increase their agricultural
              businesses and gains more profits sharing. Our friendly and to knowledgeable team.
            </p>

            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 min-w-[44px] bg-white/15 rounded-lg flex items-center justify-center text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold">100k+</div>
                  <div className="text-xs opacity-90 mt-1">Farmers joined with us</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 min-w-[44px] bg-white/15 rounded-lg flex items-center justify-center text-white">
                
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold">50+</div>
                  <div className="text-xs opacity-90 mt-1">Partners worldwide</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 min-w-[44px] bg-white/15 rounded-lg flex items-center justify-center text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold">1500k+</div>
                  <div className="text-xs opacity-90 mt-1">Products sold worldwide</div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              transform: animateToCenter
                ? "translate(0, 0) scale(1) opacity(1)"
                : "translate(120px, -80px) scale(0.7) opacity(0.4)",
              transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <div className="w-[700px] ">
                    <img src={Clocer}   className="w-full h-72 lg:h-96 " alt="" />
            </div>
          </div>
        </div>
      </section>

  
      <button
        onClick={handleAnimateClick}
        className="fixed bottom-5 right-5 lg:bottom-8 lg:right-8 px-4 py-2.5 lg:px-6 lg:py-3 bg-green-600 text-white border-0 rounded-full text-xs lg:text-sm font-semibold cursor-pointer shadow-lg hover:bg-green-700 transition-all z-50"
      >
        {animateToCenter ? "← Scatter" : "Animate to Center →"}
      </button>
    </div>
  )
}