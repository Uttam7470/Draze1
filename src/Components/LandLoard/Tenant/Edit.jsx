
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const EditTenant = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const tenant = location.state;

//   const [formData, setFormData] = useState(null);

//   useEffect(() => {
//     if (tenant) {
//       setFormData({ ...tenant });
//     }
//   }, [tenant]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     const existing = JSON.parse(localStorage.getItem("tenants")) || [];

//     const updated = existing.map((t) => {
//       if (
//         t.name === tenant.name &&
//         t.mobile === tenant.mobile &&
//         t.room === tenant.room &&
//         t.moveInDate === tenant.moveInDate
//       ) {
//         return formData;
//       }
//       return t;
//     });

//     localStorage.setItem("tenants", JSON.stringify(updated));
//     alert("Tenant updated successfully!");
//     navigate("/landlord/tenant-list");
//   };

//   if (!tenant || !formData) {
//     return (
//       <div className="text-center py-10 text-gray-600">
//         <p>No tenant data found to edit.</p>
//         <button
//           className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
//           onClick={() => navigate("/landlord/tenant-list")}
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">Edit Tenant</h2>

//       <form onSubmit={handleUpdate} className="bg-white rounded-lg shadow p-6 space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name || ""}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//             />
//           </div>

//           {/* Mobile */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
//             <input
//               type="tel"
//               name="mobile"
//               value={formData.mobile || ""}
//               onChange={handleChange}
//               required
//               pattern="[0-9]{10}"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//             />
//           </div>

//           {/* Room */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Room</label>
//             <input
//               type="text"
//               name="room"
//               value={formData.room || ""}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//             />
//           </div>

//           {/* Move In Date */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Move In Date</label>
//             <input
//               type="date"
//               name="moveInDate"
//               value={formData.moveInDate || ""}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//             />
//           </div>
//         </div>

//         {/* Other Details */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Other Details</label>
//           <textarea
//             name="otherdetails"
//             value={formData.otherdetails || ""}
//             onChange={handleChange}
//             rows="3"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:ring-indigo-200"
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
//           <button
//             type="button"
//             onClick={() => navigate("/landlord/tenant-list")}
//             className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-md transition"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition"
//           >
//             Save Changes
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditTenant;





import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditTenant = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tenant = location.state;

  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (tenant) {
      setFormData({ ...tenant });
    }
  }, [tenant]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("tenants")) || [];

    const updated = existing.map((t) => {
      if (
        t.name === tenant.name &&
        t.mobile === tenant.mobile &&
        t.room === tenant.room &&
        t.moveInDate === tenant.moveInDate
      ) {
        return formData;
      }
      return t;
    });

    localStorage.setItem("tenants", JSON.stringify(updated));
    alert("Tenant updated successfully!");
    navigate("/landlord/tenant-list");
  };

  if (!tenant || !formData) {
    return (
      <div className="text-center py-10 text-gray-600">
        <p>No tenant data found to edit.</p>
        <button
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
          onClick={() => navigate("/landlord/tenant-list")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">Edit Tenant</h2>

      <form onSubmit={handleUpdate} className="bg-white rounded-lg shadow p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile || ""}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>

          {/* Room */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Room</label>
            <input
              type="text"
              name="room"
              value={formData.room || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>

          {/* Move In Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Move In Date</label>
            <input
              type="date"
              name="moveInDate"
              value={formData.moveInDate || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
        </div>

        {/* Other Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Other Details</label>
          <textarea
            name="otherdetails"
            value={formData.otherdetails || ""}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
          <button
            type="button"
            onClick={() => navigate("/landlord/tenant-list")}
            className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-md transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTenant;
