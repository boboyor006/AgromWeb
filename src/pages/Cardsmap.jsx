import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Vegetables",
    items: ["Potatoes", "Cabbages", "Carrots"],
    image: "/fresh-cabbage.jpg",
  },
  {
    title: "Fresh Fruits",
    items: ["Apples", "Pears", "Grapes"],
    image: "/bunch-of-green-grapes.jpg",
  },
  {
    title: "Melons & Gourds",
    items: ["Watermelons", "Melons", "Pumpkins"],
    image: "/fresh-watermelon.jpg",
  },
  {
    title: "Cereal Crops",
    items: ["Wheat", "Barley", "Rice"],
    image: "/bag-of-wheat-grains.jpg",
  },
  {
    title: "Natural Spices & Herbs",
    items: ["Basil", "Dill", "Mint"],
    image: "/fresh-green-basil-leaves.jpg",
  },
  {
    title: "Nuts",
    items: ["Walnut", "Almond", "Pistachio"],
    image: "/mixed-nuts-and-almonds.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-12">
          Our Trending Categories
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>

      <style>
        {`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}
      </style>
    </main>
  );
}
