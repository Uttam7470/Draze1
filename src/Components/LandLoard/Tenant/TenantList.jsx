



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaSearch, FaUserPlus } from "react-icons/fa";

// const TenantList = () => {
//   const [tenants, setTenants] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredTenants, setFilteredTenants] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("tenants")) || [];
//     setTenants(saved);
//     setFilteredTenants(saved);
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value.toLowerCase();
//     setSearchTerm(value);

//     const filtered = tenants.filter((tenant) =>
//       tenant.name.toLowerCase().includes(value) ||
//       tenant.phone?.includes(value)
//     );

//     setFilteredTenants(filtered);
//   };

//   const viewDetails = (tenant) => {
//     navigate("/landlord/tenant-details", { state: tenant });
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-indigo-600 mb-4 md:mb-0">
//           Tenant List
//         </h2>
//         <button
//           className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
//           onClick={() => navigate("/landlord/tenant-form")}
//         >
//           <FaUserPlus /> Add Tenant
//         </button>
//       </div>

//       {/* Search */}
//       <div className="relative mb-6">
//         <input
//           type="text"
//           className="w-full border border-gray-300 rounded pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           placeholder="Search by name or phone"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
//       </div>

//       {/* No Data */}
//       {filteredTenants.length === 0 ? (
//         <p className="text-center text-gray-500">No tenants found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {filteredTenants.map((tenant, index) => (
//             <div
//               key={index}
//               className="bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-lg p-5 transition-all duration-300 flex flex-col justify-between"
//             >
//               <div>
//                 <h5 className="text-lg font-semibold text-indigo-700 mb-2">
//                   {tenant.name}
//                 </h5>
//                 <p className="text-sm text-gray-700">
//                   <strong>Phone:</strong> {tenant.phone}
//                 </p>
//                 <p className="text-sm text-gray-700">
//                   <strong>Property:</strong> {tenant.property || "N/A"}
//                 </p>
//                 <p className="text-sm text-gray-700">
//                   <strong>Room Type:</strong> {tenant.roomType || "N/A"}
//                 </p>
//                 <p className="text-sm text-gray-700">
//                   <strong>Furnishing:</strong> {tenant.furnishing || "N/A"}
//                 </p>
//                 <p className="text-sm text-gray-700">
//                   <strong>Rent:</strong> ₹{tenant.rent || "0"}
//                 </p>
//                 <p className="text-sm text-gray-700">
//                   <strong>Start Date:</strong> {tenant.startDate || "N/A"}
//                 </p>
//               </div>

//               <div className="mt-4">
//                 <button
//                   className="w-full border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-50 transition"
//                   onClick={() => viewDetails(tenant)}
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TenantList;










import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaUserPlus } from "react-icons/fa";

const TenantList = () => {
  const [tenants, setTenants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTenants, setFilteredTenants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tenants")) || [];
    setTenants(saved);
    setFilteredTenants(saved);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = tenants.filter((tenant) =>
      tenant.name.toLowerCase().includes(value) ||
      tenant.phone?.includes(value)
    );

    setFilteredTenants(filtered);
  };

  const viewDetails = (tenant) => {
    navigate("/landlord/tenant-details", { state: tenant });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4 md:mb-0">
          Tenant List
        </h2>
        <button
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          onClick={() => navigate("/landlord/tenant-form")}
        >
          <FaUserPlus /> Add Tenant
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <input
          type="text"
          className="w-full border border-gray-300 rounded pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Search by name or phone"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
      </div>

      {/* No Data */}
      {filteredTenants.length === 0 ? (
        <p className="text-center text-gray-500">No tenants found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredTenants.map((tenant, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-lg p-5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h5 className="text-lg font-semibold text-indigo-700 mb-2">
                  {tenant.name}
                </h5>
                <p className="text-sm text-gray-700">
                  <strong>Phone:</strong> {tenant.phone}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Property:</strong> {tenant.property || "N/A"}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Room Type:</strong> {tenant.roomType || "N/A"}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Furnishing:</strong> {tenant.furnishing || "N/A"}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Rent:</strong> ₹{tenant.rent || "0"}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Start Date:</strong> {tenant.startDate || "N/A"}
                </p>
              </div>

              <div className="mt-4">
                <button
                  className="w-full border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-50 transition"
                  onClick={() => viewDetails(tenant)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TenantList;
