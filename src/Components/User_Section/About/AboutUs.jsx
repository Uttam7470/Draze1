import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      {/* Header Section */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-extrabold text-[#5c4eff] mb-4">
          About Draze
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Draze is your one-stop destination for renting, buying, and booking spaces—
          from cozy PGs and hostels to elegant banquet halls. We blend technology
          with real estate to make your property search smart, simple, and seamless.
        </p>
      </div>

      {/* Mission + Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-[#f4f5ff] p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-[#5c4eff] mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To simplify the property experience by connecting users with verified listings
            and agents. Whether you're a student, family, or event organizer, Draze is
            committed to delivering trust, transparency, and convenience.
          </p>
        </div>

        <div className="bg-[#f4f5ff] p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-[#5c4eff] mb-4">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To become India’s most reliable platform for discovering and booking rental
            and commercial properties by blending innovation, integrity, and intelligent service.
          </p>
        </div>
      </div>

      {/* What We Offer */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">What We Offer</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Tailored property solutions for every stage of life and every need.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { title: "PGs & Hostels", emoji: "🏠" },
          { title: "Banquet Halls", emoji: "🎉" },
          { title: "Flats & Apartments", emoji: "🏢" },
          { title: "Trusted Agents", emoji: "🤝" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="text-4xl mb-2">{item.emoji}</div>
            <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { label: "Happy Customers", value: "25,000+" },
          { label: "Verified Listings", value: "8,000+" },
          { label: "Cities Covered", value: "50+" },
          { label: "Agents Onboard", value: "500+" },
        ].map((stat, index) => (
          <div key={index} className="bg-[#f4f5ff] p-6 rounded-lg shadow-sm">
            <h3 className="text-3xl font-extrabold text-[#5c4eff]">{stat.value}</h3>
            <p className="text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
