// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function HostelDetail() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const hostel = location.state?.hostel;

//   if (!hostel) {
//     return (
//       <div className="text-center mt-10">
//         <p className="text-lg font-semibold">No hostel data found.</p>
//         <button
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={() => navigate(-1)}
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* ✅ Back Button on Top */}
//       <button
//         className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         onClick={() => navigate(-1)}
//       >
//         ← Back
//       </button>

//       <img
//         src={hostel.image}
//         alt={hostel.name}
//         className="w-full h-64 object-cover rounded-lg mb-6"
//       />
//       <h2 className="text-3xl font-bold text-[#5C4EFF] mb-3">{hostel.name}</h2>
//       <p className="text-gray-700 mb-2">
//         <strong>City:</strong> {hostel.city}, <strong>Location:</strong>{" "}
//         {hostel.location}
//       </p>
//       <p className="text-gray-700 mb-2">
//         <strong>Price:</strong> ₹{hostel.price} /month
//       </p>
//       <p className="text-gray-700 mb-2">
//         <strong>Bedrooms:</strong> {hostel.bedrooms} BHK
//       </p>
//       <p className="text-gray-700 mb-2">
//         <strong>Gender:</strong> {hostel.gender}
//       </p>
//       <p className="text-gray-700 mb-4">
//         <strong>Description:</strong> {hostel.description}
//       </p>
//       <div>
//         <strong>Amenities:</strong>
//         <ul className="list-disc list-inside text-gray-600">
//           {hostel.amenities.map((a, i) => (
//             <li key={i}>{a}</li>
//           ))}
//         </ul>
//       </div>

//     </div>
//   );
// }

// export default HostelDetail;






import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ScheduleTourBox from "../ScheduleTour/ScheduleTourBox";

function HostelDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [hostel, setHostel] = useState(location.state || null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // If state is not passed, fetch from API
    if (!location.state) {
      fetch(`https://api.nearprop.com/api/properties/${id}`)
        .then((res) => res.json())
        .then((data) => setHostel(data))
        .catch(() => setHostel(null));
    }
  }, [id, location.state]);

  if (!hostel) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-semibold">No hostel data found.</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left - Hostel Details */}
      <div className="lg:col-span-2">
        <button
          className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <img
          src={hostel.images?.[0] || hostel.image}
          alt={hostel.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h2 className="text-3xl font-bold text-[#5C4EFF] mb-3">{hostel.name}</h2>

        <p className="text-gray-700 mb-2">
          <strong>City:</strong> {hostel.city}, <strong>Location:</strong> {hostel.location}
        </p>

        <p className="text-gray-700 mb-2">
          <strong>Price:</strong> ₹{hostel.price} /month
        </p>

        <p className="text-gray-700 mb-2">
          <strong>Bedrooms:</strong> {hostel.bedrooms} BHK
        </p>

        <p className="text-gray-700 mb-2">
          <strong>Gender:</strong> {hostel.gender || "Unspecified"}
        </p>

        <p className="text-gray-700 mb-4">
          <strong>Description:</strong> {hostel.description}
        </p>

        {hostel.amenities?.length > 0 && (
          <div>
            <strong>Amenities:</strong>
            <ul className="list-disc list-inside text-gray-600">
              {hostel.amenities.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right - Schedule Tour Box */}
      <div className="lg:sticky lg:top-20 h-fit">
        <ScheduleTourBox />
      </div>
    </div>
  );
}

export default HostelDetail;
