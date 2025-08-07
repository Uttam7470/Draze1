


// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate, Link } from "react-router-dom";
// import {
//   FaUser, FaHome, FaMoneyCheckAlt, FaArrowLeft, FaPhone, FaBed, FaCalendar,
//   FaLock, FaFileContract, FaMoneyBillWave, FaBolt, FaMapMarkerAlt, FaCouch
// } from "react-icons/fa";
// import { v4 as uuidv4 } from "uuid";

// const TenantForm = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const editingTenant = location.state;
//   const isEdit = Boolean(editingTenant);
//   const [successMessage, setSuccessMessage] = useState("");

//   const [formData, setFormData] = useState({
//     id: uuidv4(),
//     name: "",
//     phone: "",
//     property: "",
//     rent: "",
//     address: "",
//     roomType: "",
//     furnishing: "",
//     noticePeriod: "",
//     lockInPeriod: "",
//     agreementDuration: "",
//     deposit: "",
//     electricityCharges: "",
//     startDate: "",
//   });

//   useEffect(() => {
//     if (editingTenant) {
//       setFormData({ ...editingTenant });
//     } else if (location.state?.propertyTitle) {
//       setFormData((prev) => ({ ...prev, property: location.state.propertyTitle }));
//     }
//   }, [editingTenant, location.state]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const tenants = JSON.parse(localStorage.getItem("tenants")) || [];

//     if (isEdit) {
//       const updatedTenants = tenants.map((t) => (t.id === formData.id ? formData : t));
//       localStorage.setItem("tenants", JSON.stringify(updatedTenants));
//       setSuccessMessage("Tenant updated successfully!");
//     } else {
//       tenants.push(formData);
//       localStorage.setItem("tenants", JSON.stringify(tenants));
//       setSuccessMessage("Tenant added successfully!");
//     }

//     setTimeout(() => navigate("/landlord/tenant-list"), 2000);
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-6">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-4 inline-flex items-center bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition"
//       >
//         <FaArrowLeft className="mr-2" /> Go Back
//       </button>

//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4">
//           <h3 className="text-xl font-semibold flex items-center">
//             <FaUser className="mr-2" /> {isEdit ? "Edit Tenant" : "Tenant Details Form"}
//           </h3>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6 space-y-4">
//           {successMessage && (
//             <div className="p-3 bg-green-100 text-green-800 rounded text-center">
//               {successMessage}
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Input label="Tenant Name" icon={<FaUser />} name="name" value={formData.name} onChange={handleChange} required />
//             <Input label="Phone Number" icon={<FaPhone />} name="phone" value={formData.phone} onChange={handleChange} required />
//             <Input label="Property Name" icon={<FaHome />} name="property" value={formData.property} onChange={handleChange} required />
//             <Input label="Monthly Rent (₹)" icon={<FaMoneyCheckAlt />} name="rent" type="number" value={formData.rent} onChange={handleChange} required />

//             <div className="md:col-span-2">
//               <Label icon={<FaMapMarkerAlt />} text="Address" />
//               <textarea
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 rows={3}
//                 placeholder="Enter full address"
//                 className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <Select label="Room Type" icon={<FaBed />} name="roomType" value={formData.roomType} onChange={handleChange} options={["Single", "Double", "Triple"]} />
//             <Select label="Furnishing Status" icon={<FaCouch />} name="furnishing" value={formData.furnishing} onChange={handleChange} options={["Furnished", "Semi-Furnished", "Unfurnished"]} />
//             <Input label="Notice Period (days)" icon={<FaCalendar />} name="noticePeriod" type="number" value={formData.noticePeriod} onChange={handleChange} />
//             <Input label="Lock-in Period (months)" icon={<FaLock />} name="lockInPeriod" type="number" value={formData.lockInPeriod} onChange={handleChange} />
//             <Input label="Agreement Duration (months)" icon={<FaFileContract />} name="agreementDuration" type="number" value={formData.agreementDuration} onChange={handleChange} />
//             <Input label="Security Deposit (₹)" icon={<FaMoneyBillWave />} name="deposit" type="number" value={formData.deposit} onChange={handleChange} />
//             <Input label="Electricity Charges (₹)" icon={<FaBolt />} name="electricityCharges" type="number" value={formData.electricityCharges} onChange={handleChange} />
//             <Input label="Rent Start Date" icon={<FaCalendar />} name="startDate" type="date" value={formData.startDate} onChange={handleChange} />
//           </div>

//           <div className="flex flex-col md:flex-row justify-end md:space-x-4 gap-3 mt-6">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//             >
//               {isEdit ? "Update Tenant" : "Save Tenant"}
//             </button>
//             <Link to="/landlord/tenant-list">
//               <button
//                 type="button"
//                 className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition"
//               >
//                 View Tenants
//               </button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const Input = ({ label, icon, ...props }) => (
//   <div>
//     <Label icon={icon} text={label} />
//     <input
//       {...props}
//       className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//   </div>
// );

// const Select = ({ label, icon, options, ...props }) => (
//   <div>
//     <Label icon={icon} text={label} />
//     <select
//       {...props}
//       className="w-full p-3 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//     >
//       <option value="">Select {label.toLowerCase()}</option>
//       {options.map((opt) => (
//         <option key={opt} value={opt}>
//           {opt}
//         </option>
//       ))}
//     </select>
//   </div>
// );

// const Label = ({ icon, text }) => (
//   <label className="block mb-1 font-medium flex items-center text-gray-700">
//     <span className="mr-2">{icon}</span>
//     {text}
//   </label>
// );

// export default TenantForm;





// Keep all existing imports
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  FaUser, FaHome, FaMoneyCheckAlt, FaArrowLeft, FaPhone, FaBed, FaCalendar,
  FaLock, FaFileContract, FaMoneyBillWave, FaBolt, FaMapMarkerAlt, FaCouch,
  FaImage, FaTimesCircle
} from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const TenantForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const editingTenant = location.state;
  const isEdit = Boolean(editingTenant);
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    phone: "",
    property: "",
    rent: "",
    address: "",
    roomType: "",
    furnishing: "",
    noticePeriod: "",
    lockInPeriod: "",
    agreementDuration: "",
    deposit: "",
    electricityCharges: "",
    startDate: "",
    image: "",
  });

  useEffect(() => {
    if (editingTenant) {
      setFormData({ ...editingTenant });
    } else if (location.state?.propertyTitle) {
      setFormData((prev) => ({ ...prev, property: location.state.propertyTitle }));
    }
  }, [editingTenant, location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFormData({ ...formData, image: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tenants = JSON.parse(localStorage.getItem("tenants")) || [];
    if (isEdit) {
      const updatedTenants = tenants.map((t) => (t.id === formData.id ? formData : t));
      localStorage.setItem("tenants", JSON.stringify(updatedTenants));
      setSuccessMessage("Tenant updated successfully!");
    } else {
      tenants.push(formData);
      localStorage.setItem("tenants", JSON.stringify(tenants));
      setSuccessMessage("Tenant added successfully!");
    }
    setTimeout(() => navigate("/landlord/tenant-list"), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center bg-[#5c4eff] text-white px-4 py-2 rounded hover:bg-[#4a3fd9] transition"
      >
        <FaArrowLeft className="mr-2" /> Go Back
      </button>

      {successMessage && (
        <div className="p-3 mb-6 bg-green-100 text-green-800 rounded text-center font-medium">
          {successMessage}
        </div>
      )}

      {/* Box 1 - Tenant Info */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 border">
        <h4 className="text-lg font-semibold text-black mb-4 flex items-center">
          <FaHome className="mr-2 text-[#5c4eff]" /> Tenant Details
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Tenant Name" icon={<FaUser className="text-[#5c4eff]" />} name="name" value={formData.name} onChange={handleChange} required placeholder="Enter tenant name" />
          <Input label="Phone Number" icon={<FaPhone className="text-[#5c4eff]" />} name="phone" value={formData.phone} onChange={handleChange} required placeholder="Enter phone number" type="tel" />
          <div className="md:col-span-2">
            <Label icon={<FaImage className="text-[#5c4eff]" />} text="Tenant Image" />
            <input type="file" accept="image/*" onChange={handleImageChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5c4eff] transition file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#5c4eff] file:text-white file:hover:bg-indigo-600"
            />
            {formData.image ? (
              <div className="mt-2 flex items-center gap-3">
                <img src={formData.image} alt="Tenant" className="w-32 h-32 object-cover rounded border border-gray-200" />
                <button type="button" onClick={handleRemoveImage} className="text-red-600 hover:text-red-700 transition">
                  <FaTimesCircle className="text-lg" />
                </button>
              </div>
            ) : (
              <div className="mt-2 w-32 h-32 bg-gray-100 flex items-center justify-center rounded border border-gray-200">
                <FaImage className="text-gray-400 text-2xl" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Box 2 - Property Details */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 border">
        <h4 className="text-lg font-semibold text-black mb-4 flex items-center">
          <FaHome className="mr-2 text-[#5c4eff]" /> Property Details
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Property Name" icon={<FaHome className="text-[#5c4eff]" />} name="property" value={formData.property} onChange={handleChange} required placeholder="Enter property name" />
          <div className="md:col-span-2">
            <Label icon={<FaMapMarkerAlt className="text-[#5c4eff]" />} text="Address" />
            <textarea name="address" value={formData.address} onChange={handleChange} rows={3} placeholder="Enter full address"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#5c4eff]" />
          </div>
          <Select label="Room Type" icon={<FaBed className="text-[#5c4eff]" />} name="roomType" value={formData.roomType} onChange={handleChange} options={["Single", "Double", "Triple"]} />
          <Select label="Furnishing Status" icon={<FaCouch className="text-[#5c4eff]" />} name="furnishing" value={formData.furnishing} onChange={handleChange} options={["Furnished", "Semi-Furnished", "Unfurnished"]} />
        </div>
      </div>

      {/* Box 3 - Rental Terms */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 border">
        <h4 className="text-lg font-semibold text-black mb-4 flex items-center">
          <FaHome className="mr-2 text-[#5c4eff]" /> Rental Terms
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Monthly Rent (₹)" icon={<FaMoneyCheckAlt className="text-[#5c4eff]" />} name="rent" type="number" value={formData.rent} onChange={handleChange} required placeholder="Enter monthly rent" />
          <Input label="Notice Period (days)" icon={<FaCalendar className="text-[#5c4eff]" />} name="noticePeriod" type="number" value={formData.noticePeriod} onChange={handleChange} placeholder="Enter notice period" />
          <Input label="Lock-in Period (months)" icon={<FaLock className="text-[#5c4eff]" />} name="lockInPeriod" type="number" value={formData.lockInPeriod} onChange={handleChange} placeholder="Enter lock-in period" />
          <Input label="Agreement Duration (months)" icon={<FaFileContract className="text-[#5c4eff]" />} name="agreementDuration" type="number" value={formData.agreementDuration} onChange={handleChange} placeholder="Enter agreement duration" />
          <Input label="Security Deposit (₹)" icon={<FaMoneyBillWave className="text-[#5c4eff]" />} name="deposit" type="number" value={formData.deposit} onChange={handleChange} placeholder="Enter security deposit" />
          <Input label="Electricity Charges (₹)" icon={<FaBolt className="text-[#5c4eff]" />} name="electricityCharges" type="number" value={formData.electricityCharges} onChange={handleChange} placeholder="Enter electricity charges" />
          <Input label="Rent Start Date" icon={<FaCalendar className="text-[#5c4eff]" />} name="startDate" type="date" value={formData.startDate} onChange={handleChange} placeholder="Select start date" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-end md:space-x-4 gap-3 mt-6">
        <button type="submit" onClick={handleSubmit}
          className="bg-[#5c4eff] text-white px-6 py-2 rounded hover:bg-indigo-600 transition">
          {isEdit ? "Update Tenant" : "Save Tenant"}
        </button>
        <Link to="/landlord/tenant-list">
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition">
            View Tenants
          </button>
        </Link>
      </div>
    </div>
  );
};

const Input = ({ label, icon, ...props }) => (
  <div>
    <Label icon={icon} text={label} />
    <input {...props} className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#5c4eff]" />
  </div>
);

const Select = ({ label, icon, options, ...props }) => (
  <div>
    <Label icon={icon} text={label} />
    <select {...props} className="w-full p-3 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#5c4eff]">
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const Label = ({ icon, text }) => (
  <label className="block mb-1 font-medium flex items-center text-gray-700">
    <span className="mr-2">{icon}</span>
    {text}
  </label>
);

export default TenantForm;
