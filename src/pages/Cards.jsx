import { Truck, Headphones, Heart, Lock } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Truck,
      title: "Free Delivery Across the US!",
      description: "Free delivery for all orders above $100"
    },
    {
      icon: Headphones,
      title: "Top-Notch Support",
      description: "Chat with us if you've any questions"
    },
    {
      icon: Heart,
      title: "100% Satisfaction Guarantee!",
      description: "Providing help in case of dissatisfaction"
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "We use safest payment technologies"
    }
  ];

  return (
    <section className="w-full mt-120 py-12   px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg p-4 rounded-lg"
                style={{ boxShadow: 'rgba(0, 109, 50, 0.15) 0px 8px 24px' }}
              >
                
                <div
                  className="mb-4 p-3 rounded-full"
                  style={{ backgroundColor: 'rgba(0, 109, 50, 0.1)' }}
                >
                  <IconComponent size={48} style={{ color: '#006d32' }} strokeWidth={2} />
                </div>

                <h3 className="font-bold text-lg md:text-base mb-3 text-gray-900 leading-snug">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
