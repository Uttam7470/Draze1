import React from "react";
import { CheckCircle, ShieldCheck, UserPlus, Search, CalendarCheck, CreditCard } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16">
      {/* Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          How Draze Works
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Your complete guide to discovering and booking the perfect stay, venue, or rental property — powered by technology and trust.
        </p>
      </div>

      {/* Steps */}
      <div className="grid gap-12 md:grid-cols-3 max-w-7xl mx-auto">
        {/* Step 1 */}
        <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition">
          <Search className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">1. Explore Properties</h3>
          <p className="text-gray-600">
            Browse verified PGs, hostels, banquet halls, and premium rentals across top cities. Use filters for budget, location, amenities, and more.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition">
          <CalendarCheck className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">2. Check Availability</h3>
          <p className="text-gray-600">
            Real-time calendar view helps you confirm availability instantly. Plan your bookings around your schedule hassle-free.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition">
          <CreditCard className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">3. Secure Booking</h3>
          <p className="text-gray-600">
            Pay securely via UPI, cards, or net banking. Booking confirmation and property details are sent instantly to your inbox.
          </p>
        </div>
      </div>

      {/* Trust Section */}
      <div className="mt-24 grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
        <div>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&q=80"
            alt="Trust and Support"
            className="rounded-xl shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Built on Trust & Support
          </h2>
          <p className="text-gray-600 mb-4">
            Every Draze-listed property is verified and reviewed. Our support team is available 24/7 to help you with any issues — from booking to moving in.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <ShieldCheck className="text-green-600 w-5 h-5" /> Verified listings & reviews
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5" /> Instant booking confirmation
            </li>
            <li className="flex items-center gap-2">
              <UserPlus className="text-green-600 w-5 h-5" /> Friendly onboarding for hosts
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to start your smart living journey?
        </h3>
        <a
          href="/properties"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Explore Listings
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
