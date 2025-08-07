
// import React, { useEffect } from "react";
// import { useLocation, useParams, useNavigate } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Hotel_BanquteDetail() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { id } = useParams();

//   // const hotel = location.state?.hotel;

//   const hotel = location.state?.item;


//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   if (!hotel) {
//     return (
//       <div className="text-center mt-10" data-aos="fade-in">
//         <p className="text-lg text-gray-700">Hotel details not found. Please go back.</p>
//         <button
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           onClick={() => navigate(-1)}
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-8"
//       data-aos="fade-up"
//     >
//       {/* <img
//         src={hotel.image}
//         alt={hotel.name}
//         className="w-full h-64 object-cover rounded-lg mb-4"
//         data-aos="zoom-in"
//       /> */}

//       <img
//   src={
//     hotel.images && hotel.images.length > 0
//       ? hotel.images[0]
//       : "https://via.placeholder.com/400x200?text=No+Image"
//   }
//   alt={hotel.name}
//   className="w-full h-64 object-cover rounded-lg mb-4"
// />

//       <h2 className="text-3xl font-bold text-blue-700" data-aos="fade-right">
//         {hotel.name}
//       </h2>
//       <p className="text-gray-600" data-aos="fade-right">
//         {hotel.location}, {hotel.city}
//       </p>
//       <p className="mt-3" data-aos="fade-up">
//         {hotel.description}
//       </p>

//       <div className="mt-4" data-aos="fade-up">
//         <p><strong>Room Price/Night:</strong> ₹{hotel.pricePerNight}</p>
//         <p><strong>Rating:</strong> ⭐ {hotel.rating}</p>
//         <p><strong>Contact:</strong> {hotel.contact}</p>
//       </div>

//       <div
//         className="mt-4 bg-blue-50 p-3 rounded"
//         data-aos="fade-up"
//         data-aos-delay="100"
//       >
//         <h3 className="font-semibold text-blue-600">Banquet Details</h3>
//         <p>Name: {hotel.banquet.name}</p>
//         <p>Capacity: {hotel.banquet.capacity}</p>
//         <p>Price/Event: ₹{hotel.banquet.pricePerEvent}</p>
//       </div>

//       <div className="mt-4" data-aos="fade-up" data-aos-delay="150">
//         <strong>Amenities:</strong> {hotel.amenities.join(", ")}
//       </div>

//       <button
//         className="mt-6 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         onClick={() => navigate(-1)}
//         data-aos="fade-up"
//         data-aos-delay="200"
//       >
//         Back
//       </button>
//     </div>
//   );
// }

// export default Hotel_BanquteDetail;




import React, { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Hotel_BanquteDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const hotel = location.state?.item;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!hotel) {
    return (
      <div className="text-center mt-10" data-aos="fade-in">
        <p className="text-lg text-gray-700">Details not found. Please go back.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div
      className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-8"
      data-aos="fade-up"
    >
      <img
        src={
          hotel.images && hotel.images.length > 0
            ? hotel.images[0]
            : "https://via.placeholder.com/400x200?text=No+Image"
        }
        alt={hotel.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />

      <h2 className="text-3xl font-bold text-blue-700" data-aos="fade-right">
        {hotel.name}
      </h2>
      <p className="text-gray-600" data-aos="fade-right">
        {hotel.location}, {hotel.city}
      </p>
      <p className="mt-3" data-aos="fade-up">
        {hotel.description}
      </p>

      {/* Hotel-specific fields */}
      {hotel.propertyType === "hotel" && (
        <div className="mt-4" data-aos="fade-up">
          <p><strong>Room Price/Night:</strong> ₹{hotel.pricePerNight}</p>
          <p><strong>Rating:</strong> ⭐ {hotel.rating}</p>
          <p><strong>Contact:</strong> {hotel.contact}</p>
        </div>
      )}

      {/* Banquet-specific fields */}
      {hotel.propertyType === "banquet" && (
        <div
          className="mt-4 bg-blue-50 p-3 rounded"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="font-semibold text-blue-600">Banquet Details</h3>
          <p><strong>Capacity:</strong> {hotel.capacity}</p>
          <p><strong>Price/Event:</strong> ₹{hotel.pricePerEvent}</p>
          <p><strong>Contact:</strong> {hotel.contact}</p>
        </div>
      )}

      {/* Common amenities */}
      <div className="mt-4" data-aos="fade-up" data-aos-delay="150">
        <strong>Amenities:</strong> {hotel.amenities?.join(", ")}
      </div>

      <button
        className="mt-6 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => navigate(-1)}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Back
      </button>
    </div>
  );
}

export default Hotel_BanquteDetail;


