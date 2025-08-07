// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import {
//   FaBed,
//   FaBath,
//   FaCar,
//   FaRulerCombined,
//   FaCalendarAlt,
//   FaBuilding,
//   FaMapMarkerAlt,
//   FaCheck,
//   FaArrowLeft,
//   FaArrowRight,
// } from "react-icons/fa";

// function PropertyDetails() {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [mainImage, setMainImage] = useState("");
//   const [imageIndex, setImageIndex] = useState(0);

//   useEffect(() => {
//     const fetchProperty = async () => {
//       try {
//         const res = await axios.get("https://api.nearprop.com/api/properties");
//         const found = res.data.data.find((p) => p.id === parseInt(id));
//         setProperty(found);
//         if (found?.imageUrls?.length > 0) {
//           setMainImage(found.imageUrls[0]);
//           setImageIndex(0);
//         }
//       } catch (err) {
//         console.error("Error fetching property:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProperty();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="text-center mt-10">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto"></div>
//         <p className="mt-4 text-gray-600">Loading property...</p>
//       </div>
//     );
//   }

//   if (!property) {
//     return (
//       <div className="text-center mt-10 text-red-500 text-xl">
//         Property not found.
//       </div>
//     );
//   }

//   const features =
//     property.amenities?.map((f) =>
//       f.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
//     ) || [];

//   const perCol = Math.ceil(features.length / 3);
//   const featureColumns = [0, 1, 2].map((i) =>
//     features.slice(i * perCol, (i + 1) * perCol)
//   );

//   const handlePrevImage = () => {
//     if (!property.imageUrls) return;
//     const newIndex =
//       (imageIndex - 1 + property.imageUrls.length) %
//       property.imageUrls.length;
//     setImageIndex(newIndex);
//     setMainImage(property.imageUrls[newIndex]);
//   };

//   const handleNextImage = () => {
//     if (!property.imageUrls) return;
//     const newIndex = (imageIndex + 1) % property.imageUrls.length;
//     setImageIndex(newIndex);
//     setMainImage(property.imageUrls[newIndex]);
//   };

//   return (
//     <div className="px-4 py-10 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-semibold text-gray-800">{property.title}</h2>
//       <p className="flex items-center text-gray-600 mt-1">
//         <FaMapMarkerAlt className="mr-2 text-red-500" />
//         {property.city}, {property.state}
//       </p>

//       {/* Main Image with Arrows */}
//       <div className="relative mt-6">
//         <img
//           src={mainImage}
//           alt="Main"
//           className="w-full h-[400px] object-cover rounded-xl"
//         />
//         {property.imageUrls?.length > 1 && (
//           <>
//             <button
//               onClick={handlePrevImage}
//               className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
//             >
//               <FaArrowLeft />
//             </button>
//             <button
//               onClick={handleNextImage}
//               className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
//             >
//               <FaArrowRight />
//             </button>
//           </>
//         )}
//       </div>

//       {/* Thumbnail Images */}
//       {property.imageUrls?.length > 1 && (
//         <div className="flex justify-center gap-4 mt-4 overflow-x-auto">
//           {property.imageUrls.slice(0, 5).map((url, i) => (
//             <img
//               key={i}
//               src={url}
//               alt={`thumb-${i}`}
//               onClick={() => {
//                 setMainImage(url);
//                 setImageIndex(i);
//               }}
//               className={`w-24 h-20 rounded-lg object-cover cursor-pointer border-2 ${
//                 mainImage === url
//                   ? "border-blue-500"
//                   : "border-transparent hover:border-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       )}

//       {/* Address Card */}
//       <div className="mt-8 bg-white p-6 shadow rounded-lg space-y-4 border">
//         <div className="flex justify-between items-center">
//           <h3 className="text-xl font-semibold">{property.title}</h3>
//           <span className="text-gray-500">Property ID: {property.id}</span>
//         </div>
//         <div className="flex items-center text-gray-600">
//           <FaMapMarkerAlt className="mr-2" />
//           {property.address}, {property.city}, {property.state}
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
//           <InfoItem icon={<FaBuilding />} label="Type" value={property.type} />
//           <InfoItem icon={<FaBed />} label="Bedrooms" value={property.bedrooms} />
//           <InfoItem icon={<FaBath />} label="Bathrooms" value={property.bathrooms} />
//           <InfoItem icon={<FaCar />} label="Garage" value={property.garages} />
//           <InfoItem
//             icon={<FaRulerCombined />}
//             label="Area"
//             value={`${property.area} ${property.sizePostfix || "sqft"}`}
//           />
//           <InfoItem
//             icon={<FaCalendarAlt />}
//             label="Year Built"
//             value={property.yearBuilt}
//           />
//         </div>
//       </div>

//       {/* Description */}
//       <div className="mt-8">
//         <h4 className="text-xl font-semibold mb-2">Description</h4>
//         <p className="text-gray-700 leading-relaxed">{property.description}</p>
//       </div>

//       {/* Property Details */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 border rounded-lg shadow">
//         <div className="space-y-2">
//           <Detail label="Permanent ID" value={property.id} />
//           <Detail label="Garage Size" value={property.garageSize || "-"} />
//           <Detail label="Year Built" value={property.yearBuilt} />
//           <Detail label="Type" value={property.type} />
//           <Detail label="Status" value={property.status || "-"} />
//         </div>
//         <div className="space-y-2">
//           <Detail
//             label="Price"
//             value={`₹ ${property.price?.toLocaleString()}`}
//           />
//           <Detail
//             label="Size"
//             value={`${property.area} ${property.sizePostfix || "sq ft"}`}
//           />
//           <Detail label="Bedrooms" value={property.bedrooms} />
//           <Detail label="Bathrooms" value={property.bathrooms} />
//         </div>
//       </div>

//       {/* Additional Details */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 border rounded-lg shadow">
//         <div className="space-y-2">
//           <Detail label="Last Remodel Year" value={property.renovated || "-"} />
//           <Detail
//             label="Additional Rooms"
//             value={property.additionalRooms || "-"}
//           />
//           <Detail
//             label="Amenities"
//             value={
//               property.amenities?.length
//                 ? property.amenities.join(", ").replaceAll("_", " ")
//                 : "-"
//             }
//           />
//         </div>
//         <div className="space-y-2">
//           <Detail label="Deposit" value={property.deposit || "-"} />
//           <Detail label="Pool Size" value={property.poolSize || "-"} />
//           <Detail label="Equipment" value={property.equipment || "-"} />
//         </div>
//       </div>

//       {/* Features Section */}
//       {features.length > 0 && (
//         <div className="mt-8 bg-white p-6 border rounded-lg shadow">
//           <h4 className="text-xl font-semibold mb-4">Features</h4>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {featureColumns.map((col, idx) => (
//               <ul key={idx} className="space-y-2 text-gray-700">
//                 {col.map((feat, i) => (
//                   <li key={i} className="flex items-center">
//                     <FaCheck className="text-green-500 mr-2" />
//                     {feat}
//                   </li>
//                 ))}
//               </ul>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function InfoItem({ icon, label, value }) {
//   return (
//     <div className="flex items-center gap-3 text-gray-600">
//       <div className="text-xl text-blue-500">{icon}</div>
//       <div>
//         <div className="text-lg font-medium">{value}</div>
//         <div className="text-sm">{label}</div>
//       </div>
//     </div>
//   );
// }

// function Detail({ label, value }) {
//   return (
//     <div className="flex gap-2">
//       <span className="font-semibold text-gray-800">{label}:</span>
//       <span className="text-gray-700">{value}</span>
//     </div>
//   );
// }

// export default PropertyDetails;




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ScheduleTourBox from "../ScheduleTour/ScheduleTourBox";
import {
  FaBed,
  FaBath,
  FaCar,
  FaRulerCombined,
  FaCalendarAlt,
  FaBuilding,
  FaMapMarkerAlt,
  FaCheck,
  FaArrowLeft,
  FaArrowRight,
  FaPhoneAlt,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get("https://api.nearprop.com/api/properties");
        const found = res.data.data.find((p) => p.id === parseInt(id));
        setProperty(found);
        if (found?.imageUrls?.length > 0) {
          setMainImage(found.imageUrls[0]);
          setImageIndex(0);
        }
      } catch (err) {
        console.error("Error fetching property:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading property...</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="text-center mt-10 text-red-500 text-xl">
        Property not found.
      </div>
    );
  }

  const features =
    property.amenities?.map((f) =>
      f.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    ) || [];

  const perCol = Math.ceil(features.length / 3);
  const featureColumns = [0, 1, 2].map((i) =>
    features.slice(i * perCol, (i + 1) * perCol)
  );

  const handlePrevImage = () => {
    if (!property.imageUrls) return;
    const newIndex =
      (imageIndex - 1 + property.imageUrls.length) %
      property.imageUrls.length;
    setImageIndex(newIndex);
    setMainImage(property.imageUrls[newIndex]);
  };

  const handleNextImage = () => {
    if (!property.imageUrls) return;
    const newIndex = (imageIndex + 1) % property.imageUrls.length;
    setImageIndex(newIndex);
    setMainImage(property.imageUrls[newIndex]);
  };

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800">{property.title}</h2>
      <p className="flex items-center text-gray-600 mt-1">
        <FaMapMarkerAlt className="mr-2 text-red-500" />
        {property.city}, {property.state}
      </p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {/* Left side: Image */}
        <div className="md:col-span-2 relative">
          <img
            src={mainImage}
            alt="Main"
            className="w-full h-[400px] object-cover rounded-xl"
          />
          {property.imageUrls?.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                <FaArrowRight />
              </button>
            </>
          )}

          {/* Thumbnails */}
          {property.imageUrls?.length > 1 && (
            <div className="flex justify-center gap-4 mt-4 overflow-x-auto">
              {property.imageUrls.slice(0, 5).map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`thumb-${i}`}
                  onClick={() => {
                    setMainImage(url);
                    setImageIndex(i);
                  }}
                  className={`w-24 h-20 rounded-lg object-cover cursor-pointer border-2 ${
                    mainImage === url
                      ? "border-blue-500"
                      : "border-transparent hover:border-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right side: Schedule Tour Box */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
  <div className="flex-1">{/* your PG details block */}</div>
  <ScheduleTourBox />
</div>

      </div>

      {/* Address Card */}
      <div className="mt-8 bg-white p-6 shadow rounded-lg space-y-4 border">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{property.title}</h3>
          <span className="text-gray-500">Property ID: {property.id}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaMapMarkerAlt className="mr-2" />
          {property.address}, {property.city}, {property.state}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
          <InfoItem icon={<FaBuilding />} label="Type" value={property.type} />
          <InfoItem icon={<FaBed />} label="Bedrooms" value={property.bedrooms} />
          <InfoItem icon={<FaBath />} label="Bathrooms" value={property.bathrooms} />
          <InfoItem icon={<FaCar />} label="Garage" value={property.garages} />
          <InfoItem icon={<FaRulerCombined />} label="Area" value={`${property.area} ${property.sizePostfix || "sqft"}`} />
          <InfoItem icon={<FaCalendarAlt />} label="Year Built" value={property.yearBuilt} />
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-semibold mb-2">Description</h4>
        <p className="text-gray-700 leading-relaxed">{property.description}</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 border rounded-lg shadow">
        <div className="space-y-2">
          <Detail label="Permanent ID" value={property.id} />
          <Detail label="Garage Size" value={property.garageSize || "-"} />
          <Detail label="Year Built" value={property.yearBuilt} />
          <Detail label="Type" value={property.type} />
          <Detail label="Status" value={property.status || "-"} />
        </div>
        <div className="space-y-2">
          <Detail label="Price" value={`₹ ${property.price?.toLocaleString()}`} />
          <Detail label="Size" value={`${property.area} ${property.sizePostfix || "sq ft"}`} />
          <Detail label="Bedrooms" value={property.bedrooms} />
          <Detail label="Bathrooms" value={property.bathrooms} />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 border rounded-lg shadow">
        <div className="space-y-2">
          <Detail label="Last Remodel Year" value={property.renovated || "-"} />
          <Detail label="Additional Rooms" value={property.additionalRooms || "-"} />
          <Detail label="Amenities" value={property.amenities?.length ? property.amenities.join(", ").replaceAll("_", " ") : "-"} />
        </div>
        <div className="space-y-2">
          <Detail label="Deposit" value={property.deposit || "-"} />
          <Detail label="Pool Size" value={property.poolSize || "-"} />
          <Detail label="Equipment" value={property.equipment || "-"} />
        </div>
      </div>

      {features.length > 0 && (
        <div className="mt-8 bg-white p-6 border rounded-lg shadow">
          <h4 className="text-xl font-semibold mb-4">Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featureColumns.map((col, idx) => (
              <ul key={idx} className="space-y-2 text-gray-700">
                {col.map((feat, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    {feat}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 text-gray-600">
      <div className="text-xl text-blue-500">{icon}</div>
      <div>
        <div className="text-lg font-medium">{value}</div>
        <div className="text-sm">{label}</div>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="flex gap-2">
      <span className="font-semibold text-gray-800">{label}:</span>
      <span className="text-gray-700">{value}</span>
    </div>
  );
}

export default PropertyDetails;
