import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaWifi,
  FaTv,
  FaFan,
  FaShower,
  FaUtensils,
  FaCouch,
  FaParking,
  FaSnowflake,
  FaDumbbell,
  FaSwimmingPool,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";

const amenityIcons = {
  wifi: <FaWifi className="text-[#5c4eff] mr-2" />,
  tv: <FaTv className="text-[#5c4eff] mr-2" />,
  fan: <FaFan className="text-[#5c4eff] mr-2" />,
  shower: <FaShower className="text-[#5c4eff] mr-2" />,
  kitchen: <FaUtensils className="text-[#5c4eff] mr-2" />,
  sofa: <FaCouch className="text-[#5c4eff] mr-2" />,
  parking: <FaParking className="text-[#5c4eff] mr-2" />,
  "air conditioning": <FaSnowflake className="text-[#5c4eff] mr-2" />,
  gym: <FaDumbbell className="text-[#5c4eff] mr-2" />,
  "swimming pool": <FaSwimmingPool className="text-[#5c4eff] mr-2" />,
};

const SellerPropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const properties = JSON.parse(localStorage.getItem("properties")) || [];
  const property = properties[parseInt(id, 10)]; // Ensure id is treated as a number

  if (!property) {
    return (
      <div className="pt-24 px-4 text-center text-red-500 text-xl">
        Property not found.
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      const updated = properties.filter(
        (_, index) => index !== parseInt(id, 10)
      );
      localStorage.setItem("properties", JSON.stringify(updated));
      alert("❌ Property deleted.");
      navigate("/");
    }
  };

  return (
    <div className="pt-24 px-4 md:px-10 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden p-6">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 px-4 py-2 hover:underline"
            aria-label="Go back to previous page"
          >
            &larr; Back
          </button>

          <img
            src={property.images || "https://via.placeholder.com/800x400"}
            alt={property.title || "Property Image"}
            className="w-full h-64 md:h-96 object-cover"
            onError={(e) =>
              (e.target.src = "https://via.placeholder.com/800x400")
            } // Fallback for broken images
          />

          <div className="flex justify-end gap-2 pr-4 pt-4">
            <button
  onClick={() => navigate(`/seller/edit-property/${id}`)}
  className="text-white px-4 py-2 rounded hover:opacity-90 transition bg-[#5c4eff]"
  aria-label="Edit property"
>
  Edit
</button>

            <button
              onClick={handleDelete}
              className="text-white px-4 py-2 rounded hover:opacity-90 transition bg-red-600"
              aria-label="Delete property"
            >
              Delete
            </button>
          </div>

          <div className="p-6 space-y-4">
            <h2 className="text-4xl font-bold text-gray-800">
              {property.title || "Untitled Property"}
            </h2>
            <p className="text-gray-500 text-lg flex items-center">
              <FaMapMarkerAlt className="mr-2 text-[#5c4eff]" />{" "}
              {property.address || "No address provided"}
            </p>
            <p className="text-2xl font-semibold text-[#5c4eff]">
              ₹ {property.price || "N/A"}
            </p>

            {property.contactNumber && (
              <p className="text-gray-700 text-lg">{property.contactNumber}</p>
            )}

            <div className="mt-4 text-gray-700">
              <h2 className="text-2xl font-bold text-gray-800">Description</h2>
              <hr className="my-2 border-t border-gray-300" />
              <p className="mb-4">
                {property.description || "No description available."}
              </p>
            </div>

            {property.amenities?.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-[#5c4eff] mb-4">
                  Amenities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-gray-800">
                  {property.amenities.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      {amenityIcons[item.toLowerCase()] || (
                        <FaCheckCircle className="text-[#5c4eff] mr-2" />
                      )}
                      {item}
                    </li>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Location Map
              </h3>
              <p className="text-gray-600 mb-3">
                Address:{" "}
                {property.address || "Connaught Place, New Delhi, India"}
              </p>
              <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                <iframe
                  title="Property Location"
                  className="w-full h-full"
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.244899094104!2d77.2090215!3d28.6304207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd39369c0731%3A0xbff12a1a65866f44!2s${encodeURIComponent(
                    property.address || "Connaught Place, New Delhi, India"
                  )}!5e0!3m2!1sen!2sin!4v1691225414064!5m2!1sen!2sin`}
                ></iframe>
              </div>
            </div>

            {property.visits?.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Scheduled Visits
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {property.visits.map((visit, idx) => (
                    <li key={idx}>
                      <span className="font-semibold">{visit.name}</span> -{" "}
                      {visit.date} at {visit.time}
                    </li>
                  ))}
                </ul>
              </div>
            )}




           <div className="mt-6">
  <h3 className="text-xl font-semibold text-gray-800 mb-2">
    Recommended Properties
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {properties
      .filter(
        (p, i) =>
          i !== parseInt(id, 10) && p.location === property.location
      )
      .slice(0, 2)
      .map((rec) => (
        <div
          key={rec.id || `rec-${id}`}
          className="border rounded p-4 bg-gray-50 shadow-sm hover:shadow-md transition"
        >
          <img
            src={rec.images || "https://via.placeholder.com/800x400"}
            alt={rec.title || "Recommended Property"}
            className="w-full h-40 object-cover mb-2 rounded"
            onError={(e) =>
              (e.target.src = "https://via.placeholder.com/800x400")
            }
          />
          <h4 className="text-lg font-bold text-gray-800">
            {rec.title || "Untitled"}
          </h4>
          <p className="text-gray-500">{rec.location || "Unknown Location"}</p>
          <p className="text-[#5c4eff] font-semibold">
            ₹ {rec.price || "N/A"}
          </p>
          <div className="text-sm text-gray-700 mt-2">
            <p>
              <strong>Type:</strong> {rec.type || "N/A"}
            </p>
            <p>
              <strong>Bedrooms:</strong> {rec.bedrooms || "N/A"}
            </p>
            <p>
              <strong>Bathrooms:</strong> {rec.bathrooms || "N/A"}
            </p>
          </div>

          {/* 👇 View Details Redirect Button */}
          <button
            onClick={() => navigate(`/seller/property/${rec.id}`)}
            className="mt-4 w-full bg-[#5c4eff] text-white py-2 rounded hover:bg-[#483de1] transition"
          >
            View Details
          </button>
        </div>
      ))}
  </div>
</div>

          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[300px] bg-gray-100 rounded-xl shadow p-4">
          {/* shedule  */}

          <div className="bg-white  shadow-md p-6 mt-6 w-full max-w-md">
            <h3 className="text-2xl font-semibold text-black-800 mb-4">
              Schedule a Tour
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c4eff]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c4eff]"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c4eff]"
              />

              <input
                type="date"
                defaultValue="2023-06-02"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c4eff]"
              />

              <input
                type="time"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c4eff]"
              />

              <textarea
                placeholder="Your Message (Optional)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#5c4eff]"
              />

              <button
                type="submit"
                className="w-full bg-[#5c4eff] text-white py-2 rounded-lg hover:bg-[#483de1] transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerPropertyDetail;
