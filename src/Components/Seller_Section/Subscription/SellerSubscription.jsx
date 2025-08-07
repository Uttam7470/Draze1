import React from "react";

const plans = [
  {
    name: "Basic",
    price: "₹300",
    duration: "/ month",
    properties: "List up to 1 property",
    reelsPerProperty: "Up to 10 reels per property",
    totalReels: "Maximum 10 total reels",
    time: "30-day duration",
    planType: "SELLER plan",
  },
  {
    name: "Starter",
    price: "₹2500",
    duration: "/ month",
    properties: "List up to 10 properties",
    reelsPerProperty: "Up to 10 reels per property",
    totalReels: "Maximum 100 total reels",
    time: "30-day duration",
    planType: "SELLER plan",
  },
  {
    name: "Pro",
    price: "₹12000",
    duration: "/ month",
    properties: "List up to 50 properties",
    reelsPerProperty: "Up to 10 reels per property",
    totalReels: "Maximum 500 total reels",
    time: "30-day duration",
    planType: "SELLER plan",
  },
];

const SellerSubscription = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 mt-22">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Choose a Plan
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#5c4eff] hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">
              {plan.name}
            </h3>
            <div className="text-center mb-6">
              <span className="text-3xl font-bold text-[#5c4eff]">{plan.price}</span>
              <span className="text-sm text-gray-600">{plan.duration}</span>
            </div>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>✅ {plan.properties}</li>
              <li>✅ {plan.reelsPerProperty}</li>
              <li>✅ {plan.totalReels}</li>
              <li>✅ {plan.time}</li>
              <li>✅ {plan.planType}</li>
            </ul>
            <button
              className={`w-full py-2 rounded-lg font-semibold text-white bg-[#5c4eff] hover:bg-[#483bd1] transition`}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerSubscription;
