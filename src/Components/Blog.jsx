import React from "react";
import img1 from "../img/compents/img1.svg"
import img2 from "../img/compents/img2.svg"



export default function Blog() {
  return (
    <div className="font-sans antialiased bg-background">

      {/* HEADER */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground">Nutritious Meal</h1>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT ARTICLES */}
          <div className="lg:col-span-2 space-y-8">

            {/* Article 1 */}
            <article className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-2/5 flex-shrink-0">
                <img src={img1}/>
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  Nutritious Meal
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Fresher Picks of the Week: Seasonal Fruits and Vegetables for Healthier
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Choosing the right headphones can't be a daunting task with so many options available...
                </p>
                <button className="text-green-600 font-semibold hover:text-green-700 transition">
                  Read More →
                </button>
              </div>
            </article>

            {/* Article 2 */}
            <article className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-2/5 flex-shrink-0">
                <img
                  src={img2} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  Foodie Lifestyle
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Tasty Gluten Alternatives: A Guidess Our Gluten-free Selections
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Choosing the right headphones can't be a daunting task with so many options available...
                </p>
                <button className="text-green-600 font-semibold hover:text-green-700 transition">
                  Read More →
                </button>
              </div>
            </article>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            {/* Author */}
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">Avatar</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Kathryn Murphy</h3>
              <p className="text-sm text-foreground/70">
                A personal assistant collects the products from your lists
              </p>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">All Categories</h4>
              <div className="space-y-3 border-t border-border pt-4">
                <a href="#" className="block text-foreground/80 hover:text-green-600 transition">Nutritious Meal</a>
                <a href="#" className="block text-foreground/80 hover:text-green-600 transition">Foodie Lifestyle</a>
                <a href="#" className="block text-foreground/80 hover:text-green-600 transition">Meat & Seafood</a>
                <a href="#" className="block text-foreground/80 hover:text-green-600 transition">Leafy Vegetables</a>
              </div>
            </div>

            {/* Top News */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">Top News</h4>

              <div className="space-y-4">

                {/* News 1 */}
                <div className="flex gap-3">
                  <img src="/sustainable-shopping.png" className="w-16 h-16 rounded object-cover" />
                  <div className="flex-1">
                    <h5 className="text-sm font-bold text-foreground leading-tight">
                      Going Green Leaf: Tips for Sustainable Shopping
                    </h5>
                  </div>
                </div>

                {/* News 2 */}
                <div className="flex gap-3">
                  <img src="/gluten-free-cooking.jpg" className="w-16 h-16 rounded object-cover" />
                  <div className="flex-1">
                    <h5 className="text-sm font-bold text-foreground leading-tight">
                      Tasty Gluten Alternatives: Our Gluten-free Selections
                    </h5>
                  </div>
                </div>

                {/* News 3 */}
                <div className="flex gap-3">
                  <img src="/fresh-vegetables-farming.jpg" className="w-16 h-16 rounded object-cover" />
                  <div className="flex-1">
                    <h5 className="text-sm font-bold text-foreground leading-tight">
                      Fresher Picks of the Week: Seasonal Fruits & Vegetables
                    </h5>
                  </div>
                </div>

                {/* News 4 */}
                <div className="flex gap-3">
                  <img src="/family-cooking-kitchen.jpg" className="w-16 h-16 rounded object-cover" />
                  <div className="flex-1">
                    <h5 className="text-sm font-bold text-foreground leading-tight">
                      Family-Friendly Cooking: Quick Nutritious Meals
                    </h5>
                  </div>
                </div>

              </div>
            </div>
          </aside>
        </div>

        {/* Newsletter */}
        <div className="mt-16 mb-12">
          <div className="bg-green-50 rounded-lg p-8 max-w-md">
            <h3 className="text-xl font-bold text-foreground mb-2">Newsletter</h3>
            <p className="text-foreground/70 text-sm mb-6">
              Enter your email below to be the first to know about collections
            </p>
            <form className="space-y-4">
              <input
                type="email"
                className="w-full px-4 py-3 border border-border rounded-lg bg-background"
                placeholder="E-mail*"
              />
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg">
                Sign Up
              </button>
            </form>
          </div>
        </div>

      </main>
    </div>
  );
}
