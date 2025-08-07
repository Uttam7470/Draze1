
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Tenant = () => {
//   const navigate = useNavigate();
//   const [tenants, setTenants] = useState([]);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("tenants")) || [];
//     setTenants(stored);
//   }, []);

//   const tenantStats = [
//     { title: "Total Tenants", count: tenants.length },
//     { title: "Under Notice", count: 0 },
//     { title: "Joining Requests", count: 0 },
//     { title: "Total Dues", count: 0 },
//     { title: "Total Collection", count: 0 },
//     { title: "Total Complaints", count: 0 },
//   ];

//   return (
//     <div className="px-4 md:px-8 py-6">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//         <h2 className="text-2xl font-bold text-gray-800">Tenant Overview</h2>
//         <button
//           onClick={() => navigate("/landlord/tenant-form")}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow"
//         >
//           + Add Tenant
//         </button>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
//         {tenantStats.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-xl p-4 text-center border hover:shadow-lg transition"
//           >
//             <h6 className="text-sm text-gray-500 font-semibold mb-1">
//               {item.title}
//             </h6>
//             <h2 className="text-xl font-bold text-blue-600">{item.count}</h2>
//           </div>
//         ))}
//       </div>

//       {/* Filters */}
//       <div className="bg-white p-4 rounded-xl shadow-md mb-8">
//         <input
//           type="text"
//           placeholder="Search Tenant by Name, Phone or Email"
//           className="w-full md:w-1/2 p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
//         />

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3">
//           {[
//             "App Status",
//             "KYC Status",
//             "Tenant Status",
//             "Stay Type",
//             "Move In Date",
//             "Created At",
//             "Move-Out In",
//             "Eviction In",
//             "Agreement Renewal In",
//             "Gender",
//             "Eqaro",
//           ].map((label, idx) => (
//             <select
//               key={idx}
//               className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
//             >
//               <option>{label}</option>
//               <option>Option 1</option>
//               <option>Option 2</option>
//             </select>
//           ))}
//         </div>
//       </div>

//       {/* Tenant Cards */}
//       <h4 className="text-lg font-bold mb-4 text-gray-800">Tenant Details</h4>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {tenants.length === 0 ? (
//           <p className="text-gray-600">No tenants found.</p>
//         ) : (
//           tenants.map((tenant, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl border shadow-md hover:shadow-lg p-5 transition"
//             >
//               <h5 className="text-xl font-semibold text-blue-700 mb-2">
//                 {tenant.name}
//               </h5>
//               <div className="text-sm text-gray-700 space-y-1">
//                 <p>
//                   <strong>Mobile:</strong> {tenant.mobile}
//                 </p>
//                 <p>
//                   <strong>Room:</strong> {tenant.room}
//                 </p>
//                 <p>
//                   <strong>Move In Date:</strong> {tenant.moveInDate}
//                 </p>
//                 <p>
//                   <strong>Details:</strong> {tenant.otherdetails || "N/A"}
//                 </p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Tenant;





import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Tenant = () => {
  const navigate = useNavigate();
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tenants")) || [];
    setTenants(stored);
  }, []);

  const tenantStats = [
    { title: "Total Tenants", count: tenants.length },
    { title: "Under Notice", count: 15 },
    { title: "Joining Requests", count: 16 },
    { title: "Total Dues", count: 17 },
    { title: "Total Collection", count: 14 },
    { title: "Total Complaints", count: 12 },
  ];

  return (
    <div className="px-4 md:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Tenant Overview</h2>
        <button
          onClick={() => navigate("/landlord/tenant-form")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow"
        >
          + Add Tenant
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {tenantStats.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 text-center border hover:shadow-lg transition"
          >
            <h6 className="text-sm text-gray-500 font-semibold mb-1">
              {item.title}
            </h6>
            <h2 className="text-xl font-bold text-blue-600">{item.count}</h2>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-8">
        <input
          type="text"
          placeholder="Search Tenant by Name, Phone or Email"
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3">
          {[
            "App Status",
            "KYC Status",
            "Tenant Status",
            "Stay Type",
            "Move In Date",
            "Created At",
            "Move-Out In",
            "Eviction In",
            "Agreement Renewal In",
            "Gender",
            "Eqaro",
          ].map((label, idx) => (
            <select
              key={idx}
              className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option>{label}</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          ))}
        </div>
      </div>

      {/* Tenant Cards */}
      <h4 className="text-lg font-bold mb-4 text-gray-800">Tenant Details</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tenants.length === 0 ? (
          <p className="text-gray-600">No tenants found.</p>
        ) : (
          tenants.map((tenant, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border shadow-md hover:shadow-lg p-5 transition"
            >
              <h5 className="text-xl font-semibold text-blue-700 mb-2">
                {tenant.name}
              </h5>
              <div className="text-sm text-gray-700 space-y-1">
                <p>
                  <strong>Mobile:</strong> {tenant.mobile}
                </p>
                <p>
                  <strong>Room:</strong> {tenant.room}
                </p>
                <p>
                  <strong>Move In Date:</strong> {tenant.moveInDate}
                </p>
                <p>
                  <strong>Details:</strong> {tenant.otherdetails || "N/A"}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Tenant;
