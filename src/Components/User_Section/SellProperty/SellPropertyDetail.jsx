// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FaBed, FaRulerCombined, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const SellPropertyDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const property = location.state;

//   // ✅ Initialize AOS and Scroll to top on load
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   if (!property) {
//     return (
//       <div className="p-6 text-center">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4">
//           Property not found!
//         </h2>
//         <button
//           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//           onClick={() => navigate("/sell")}
//         >
//           Back to Listings
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
//       {/* Left - Property Images & Info */}
//       <div className="lg:col-span-2" data-aos="fade-right">
//         <button
//           className="flex items-center text-blue-600 mb-4 hover:underline"
//           onClick={() => navigate(-1)}
//         >
//           <FaArrowLeft className="mr-2" /> Back
//         </button>

//         {/* Image */}
//         <div className="rounded-lg overflow-hidden shadow-md mb-6" data-aos="zoom-in">
//           <img
//             src={property.image}
//             alt={property.name}
//             className="w-full h-80 object-cover"
//           />
//         </div>

//         {/* Property Title & Location */}
//         <h1 className="text-3xl font-bold text-gray-900 mb-2" data-aos="fade-up">
//           {property.name}
//         </h1>
//         <p className="flex items-center text-gray-600 mb-4" data-aos="fade-up" data-aos-delay="100">
//           <FaMapMarkerAlt className="mr-2 text-red-500" />
//           {property.location}
//         </p>

//         {/* Key Highlights */}
//         <div className="flex flex-wrap gap-6 mb-6" data-aos="fade-up" data-aos-delay="200">
//           <span className="flex items-center gap-2 text-gray-700">
//             <FaBed className="text-blue-600" /> {property.bedrooms} BHK
//           </span>
//           <span className="flex items-center gap-2 text-gray-700">
//             <FaRulerCombined className="text-green-600" /> {property.area} sq.ft
//           </span>
//         </div>

//         {/* Description */}
//         <div className="bg-white shadow-md rounded-lg p-5 mb-6" data-aos="fade-up" data-aos-delay="300">
//           <h2 className="text-xl font-semibold mb-2">Property Description</h2>
//           <p className="text-gray-700">{property.description}</p>
//         </div>
//       </div>

//       {/* Right - Sidebar (Sticky) */}
//       <div className="lg:sticky lg:top-20 h-fit" data-aos="fade-left">
//         <div className="bg-white shadow-lg rounded-lg p-6 border">
//           <h2 className="text-2xl font-bold text-green-700 mb-4">
//             ₹{property.price.toLocaleString()}
//           </h2>
//           <p className="text-gray-600 mb-6">Price negotiable</p>

//           {/* Contact Form */}
//           <h3 className="text-lg font-semibold mb-3">Contact Seller</h3>
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full border p-2 rounded mb-3"
//           />
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             className="w-full border p-2 rounded mb-3"
//           />
//           <textarea
//             placeholder="Message"
//             className="w-full border p-2 rounded mb-4"
//             rows="3"
//           ></textarea>
//           <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//             Send Message
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellPropertyDetail;





import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBed, FaRulerCombined, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import ScheduleTourBox from "../ScheduleTour/ScheduleTourBox";

const SellPropertyDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!property) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Property not found!
        </h2>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          onClick={() => navigate("/sell")}
        >
          Back to Listings
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left - Property Images & Info */}
      <div className="lg:col-span-2" data-aos="fade-right">
        <button
          className="flex items-center text-blue-600 mb-4 hover:underline"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>

        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-md mb-6" data-aos="zoom-in">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Property Title & Location */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2" data-aos="fade-up">
          {property.name}
        </h1>
        <p className="flex items-center text-gray-600 mb-4" data-aos="fade-up" data-aos-delay="100">
          <FaMapMarkerAlt className="mr-2 text-red-500" />
          {property.location}
        </p>

        {/* Key Highlights */}
        <div className="flex flex-wrap gap-6 mb-6" data-aos="fade-up" data-aos-delay="200">
          <span className="flex items-center gap-2 text-gray-700">
            <FaBed className="text-blue-600" /> {property.bedrooms} BHK
          </span>
          <span className="flex items-center gap-2 text-gray-700">
            <FaRulerCombined className="text-green-600" /> {property.area} sq.ft
          </span>
        </div>

        {/* Description */}
        <div className="bg-white shadow-md rounded-lg p-5 mb-6" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-xl font-semibold mb-2">Property Description</h2>
          <p className="text-gray-700">{property.description}</p>
        </div>
      </div>

      {/* Right - Schedule Tour Box */}
      <div className="lg:sticky lg:top-20 h-fit" data-aos="fade-left">
        <ScheduleTourBox />
      </div>
    </div>
  );
};

export default SellPropertyDetail;

