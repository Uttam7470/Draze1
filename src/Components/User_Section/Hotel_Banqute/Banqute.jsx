// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Banquet = () => {
//   const [banquets, setBanquets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log("Banquet component mounted"); // Debug: Confirm component mounts
//     AOS.init({ duration: 800, once: true });
//     window.scrollTo({ top: 0, behavior: "smooth" });

//     fetch("http://3.111.155.28:5002/api/banquet-halls")
//       .then((res) => {
//         console.log("API Response Status:", res.status); // Debug: Log response status
//         if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
//         return res.json();
//       })
//       .then((data) => {
//         console.log("Raw Banquet data:", data);
//         if (data && data.data && Array.isArray(data.data.banquetHalls)) {
//           console.log("Banquet array:", data.data.banquetHalls);
//           setBanquets(data.data.banquetHalls);
//         } else {
//           console.log("No valid banquet array found, setting empty:", data);
//           setBanquets([]);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch banquets:", err);
//         setError("Could not load banquet data.");
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     console.log("Current banquets state:", banquets);
//   }, [banquets]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-white">
//         <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   if (error || banquets.length === 0) {
//     return <div className="text-center py-10 text-lg text-red-500">No banquets available.</div>;
//   }

//   return (
//     <div className="min-h-screen bg-[#f6f8fa] py-12 px-4">
//       <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-down">
//         Banquet Halls
//       </h2>

//       <div className="max-w-6xl mx-auto px-4 sm:px-10 mt-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {banquets.map((banquet, index) => {
//             const imageUrl = banquet.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image";
//             const name = banquet.name || "Unnamed Banquet";
//             const location = banquet.location?.coordinates
//               ? `Coordinates: ${banquet.location.coordinates.join(", ")}`
//               : "Location not available";
//             const description = banquet.description || "No description available";

//             return (
//               <Link
//                 to={`/banquets/${banquet._id}`}
//                 state={{ banquet }}
//                 key={banquet._id}
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
//                 <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
//                   <img
//                     src={imageUrl}
//                     alt={name}
//                     className="w-full h-48 object-cover rounded-t-lg"
//                   />
//                   <div className="p-4">
//                     <h3 className="text-xl font-semibold text-blue-700">{name}</h3>
//                     <p className="text-sm text-gray-600">{location}</p>
//                     <p className="mt-2 text-gray-700">
//                       {description.substring(0, 50)}...
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banquet;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Banquet = () => {
  const [banquets, setBanquets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Banquet component mounted"); // Debug: Confirm component mounts
    AOS.init({ duration: 800, once: true });
    window.scrollTo({ top: 0, behavior: "smooth" });

    fetch("http://3.111.155.28:5002/api/banquet-halls")
      .then((res) => {
        console.log("API Response Status:", res.status); // Debug: Log response status
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("Raw Banquet data:", data);
        if (data && data.data && Array.isArray(data.data.banquetHalls)) {
          console.log("Banquet array:", data.data.banquetHalls);
          setBanquets(data.data.banquetHalls);
        } else {
          console.log("No valid banquet array found, setting empty:", data);
          setBanquets([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch banquets:", err);
        setError("Could not load banquet data.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("Current banquets state:", banquets);
  }, [banquets]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || banquets.length === 0) {
    return <div className="text-center py-10 text-lg text-red-500">No banquets available.</div>;
  }

  return (
    <div className="min-h-screen bg-[#f6f8fa] py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-down">
        Banquet Halls
      </h2>

      <div className="max-w-6xl mx-auto px-4 sm:px-10 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {banquets.map((banquet, index) => {
            const imageUrl = banquet.images?.[0] || "https://via.placeholder.com/400x300?text=No+Image";
            const name = banquet.name || "Unnamed Banquet";
            const location = banquet.location?.coordinates
              ? `Coordinates: ${banquet.location.coordinates.join(", ")}`
              : "Location not available";
            const description = banquet.description || "No description available";

            return (
              <Link
                to={`/banquet/${banquet._id}`} // Changed from /banquets to /banquet
                state={{ banquet }}
                key={banquet._id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-blue-700">{name}</h3>
                    <p className="text-sm text-gray-600">{location}</p>
                    <p className="mt-2 text-gray-700">
                      {description.substring(0, 50)}...
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Banquet;