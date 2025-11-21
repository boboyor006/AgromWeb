import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import images1  from "../img/Product/bg.svg"
import A1 from "../img/A1.svg"

function Acardion() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const articles = [
    {
      id: 1,
      category: "Nutritious Meal",
      title: "Fresher Picks of the Week: Seasonable Fruits and Vegetables for Healthier",
      description:
        "Choosing the right headphones can't be a daunting tasks with so many options available. That's why we've together a comprehensive more guidance.",
      image: images1,
    },
    {
      id: 2,
      category: "Foodie Lifestyle",
      title: "Tasty Gluten Alternatives: A Guides Our Gluten-Free Selections",
      description:
        "Discover delicious gluten-free options that don't compromise on taste. Our comprehensive guide covers the best alternatives for every meal.",
      image: A1,
    },
    {
      id: 3,
      category: "Meat & Seafood",
      title: "Going Green Leaf: Tips for Sustainable Shoppings and Friendly",
      description:
        "Learn how to make eco-friendly choices at the grocery store. From sustainable sourcing to minimizing waste, we cover it all.",
      image:A1,
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "What payment methods are accepted at your store?",
      answer:
        "We accept all major credit cards, debit cards, digital wallets, and bank transfers. For online orders, you can also use various payment gateways for your convenience.",
    },
    {
      id: 2,
      question: "How long does it take to process and ship my order?",
      answer:
        "Orders are typically processed within 24-48 hours. Shipping time varies depending on your location, but most orders arrive within 5-7 business days.",
    },
    {
      id: 3,
      question: "Can I return or exchange an item I've purchased from your online store?",
      answer:
        "Yes, we offer a 30-day return and exchange policy. Items must be in original condition with all packaging. Contact our support team to initiate the process.",
    },
    {
      id: 4,
      question: "What payment methods are accepted at your store?",
      answer:
        "We accept all major credit cards, debit cards, digital wallets, and bank transfers. For online orders, you can also use various payment gateways for your convenience.",
    },
    {
      id: 5,
      question: "How long does it take to process and ship my order?",
      answer:
        "Orders are typically processed within 24-48 hours. Shipping time varies depending on your location, but most orders arrive within 5-7 business days.",
    },
    {
      id: 6,
      question: "Can I return or exchange an item I've purchased from your online store?",
      answer:
        "Yes, we offer a 30-day return and exchange policy. Items must be in original condition with all packaging. Contact our support team to initiate the process.",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <main className="min-h-screen  from-slate-50 to-white">

      {/* Top Articles */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 sm:mb-16">
            Top Recent Articles
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="rounded-lg  overflow-hidden shadow-lg hover:shadow-xl transition h-full">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-[100px] sm:h-64 lg:h-80 object-cover hover:scale-105 transition"
              />
            </div>

            {/* Article Details */}
            <div className="lg:col-span-2 space-y-6">
              <article className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <span className="inline-block text-sm font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full mb-3">
                  {articles[0].category}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-slate-600 leading-relaxed">{articles[0].description}</p>
              </article>

              {/* Right Side Articles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {articles.slice(1).map((article) => (
                  <article
                    key={article.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-40 object-cover hover:scale-101 transition rounded-2xl"
                    />
                    <div className="p-6 flex-1">
                      <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded w-fit mb-2">
                        {article.category}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 line-clamp-2">
                        {article.title}
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-lg mb-10">
            Have a question? Check out our FAQ section for answers to common inquiries.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-slate-200 rounded-lg bg-white">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-slate-50 text-left"
                >
                  <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-slate-600 transition-transform ${
                      openFAQ === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === faq.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 bg-slate-50 border-t">
                    <p className="text-slate-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}

export default Acardion;
