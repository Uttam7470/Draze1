import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScheduleTourBox from "../ScheduleTour/ScheduleTourBox"; // Adjust path as needed

const BanquetDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const banquet = location.state?.banquet;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (!banquet) navigate("/banquet");

    let slideInterval;
    if (autoSlide && banquet?.images?.length > 1) {
      slideInterval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % banquet.images.length);
      }, 2000);
    }
    return () => clearInterval(slideInterval);
  }, [banquet, navigate, autoSlide]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + banquet.images.length) % banquet.images.length);
    setAutoSlide(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % banquet.images.length);
    setAutoSlide(false);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    setAutoSlide(false);
  };

  if (!banquet) {
    return <div className="text-center py-10 text-lg text-red-500">Banquet not found.</div>;
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
          {banquet.name}
        </h1>

        {/* Image Slider */}
        <div className="relative w-full h-64 overflow-hidden rounded-lg mb-6" data-aos="fade-up">
          <img
            src={banquet.images?.[currentImageIndex] || "https://via.placeholder.com/400x300?text=No+Image"}
            alt={`${banquet.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          {banquet.images?.length > 1 && (
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
        {banquet.images?.length > 1 && (
          <div className="flex justify-center gap-2 overflow-x-auto pb-2" data-aos="fade-up">
            {banquet.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${banquet.name} - Thumbnail ${index + 1}`}
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
              {banquet.city || "City not available"}, {banquet.state || "State not available"} - {banquet.pincode || "N/A"}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <p className="text-lg font-semibold">Capacity:</p>
            <p>{banquet.capacity || "N/A"} people</p>
          </div>
          <div className="flex items-start gap-2">
            <p className="text-lg font-semibold">Price per Event:</p>
            <p>₹{banquet.pricePerEvent || "N/A"}</p>
          </div>
          <div className="flex items-start gap-2">
            <p className="text-lg font-semibold">Created On:</p>
            <p>{new Date(banquet.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="text-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-600">{banquet.description || "No description available"}</p>
        </div>
      </div>

      {/* Right: Schedule Tour Box */}
      <div className="md:sticky md:top-20 h-fit">
        <ScheduleTourBox />
      </div>
    </div>
  );
};

export default BanquetDetail;