import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScheduleTourBox from "../ScheduleTour/ScheduleTourBox"; // Adjust the import path as needed

const HotelDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hotel = location.state?.hotel;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (!hotel) navigate("/");

    let slideInterval;
    if (autoSlide && hotel?.images?.length > 1) {
      slideInterval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
      }, 2000);
    }
    return () => clearInterval(slideInterval);
  }, [hotel, navigate, autoSlide]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length);
    setAutoSlide(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
    setAutoSlide(false);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    setAutoSlide(false);
  };

  if (!hotel) {
    return <div className="text-center py-10 text-lg text-red-500">Hotel not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10 flex flex-col md:flex-row gap-6">
      <div className="flex-1 bg-white shadow-md rounded-xl p-6" data-aos="fade-up">
        <button
          className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold mb-6 text-center" data-aos="zoom-in">
          {hotel.name}
        </h1>

        {/* Image Slider */}
        <div className="relative w-full h-64 overflow-hidden rounded-lg mb-6" data-aos="fade-up">
          <img
            src={hotel.images?.[currentImageIndex] || "https://via.placeholder.com/400x300?text=No+Image"}
            alt={`${hotel.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          {hotel.images?.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
              >
                ←
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
              >
                →
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {hotel.images?.length > 1 && (
          <div className="flex justify-center gap-2 overflow-x-auto pb-2" data-aos="fade-up">
            {hotel.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${hotel.name} - Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover rounded cursor-pointer ${
                  index === currentImageIndex ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        )}

        {/* Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 mb-8">
          <div className="flex items-start gap-2">
            <p className="text-lg font-semibold">Location:</p>
            <p>
              {hotel.city || "City not available"}, {hotel.state || "State not available"} - {hotel.pincode || "N/A"}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <p className="text-lg font-semibold">Status:</p>
            <p>{hotel.status || "N/A"}</p>
          </div>
          <div className="flex items-start gap-2">
            <p className="text-lg font-semibold">Availability:</p>
            <p>{hotel.isAvailable ? "Available" : "Not Available"}</p>
          </div>
          <div className="flex items-start gap-2">
            <p className="text-lg font-semibold">Created On:</p>
            <p>{new Date(hotel.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="flex items-start gap-2">
            <p className="text-lg font-semibold">Pincode:</p>
            <p>{hotel.pincode || "N/A"}</p>
          </div>
        </div>

        <div className="text-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-600">{hotel.description || "No description available"}</p>
        </div>
      </div>

      {/* Right: Schedule Tour Box */}
      <div className="md:sticky md:top-20 h-fit">
        <ScheduleTourBox />
      </div>
    </div>
  );
};

export default HotelDetail;