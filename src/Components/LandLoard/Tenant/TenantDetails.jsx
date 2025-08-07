



// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   FaUser, FaHome, FaMoneyCheckAlt, FaEdit, FaArrowLeft,
//   FaPhone, FaBed, FaBuilding, FaCalendar, FaLock,
//   FaFileContract, FaMoneyBillWave, FaBolt,
// } from "react-icons/fa";

// const TenantDetails = () => {
//   const { state: tenant } = useLocation();
//   const navigate = useNavigate();
//   const [expandedSections, setExpandedSections] = useState({
//     tenantInfo: true,
//     propertyDetails: true,
//     rentalTerms: true,
//   });

//   const toggleSection = (section) => {
//     setExpandedSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   if (!tenant) {
//     return (
//       <div className="max-w-4xl mx-auto py-10 text-center">
//         <p className="text-gray-500 text-lg">No tenant details found.</p>
//         <button
//           className="mt-4 border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
//           onClick={() => navigate("/tenant-list")}
//         >
//           <FaArrowLeft className="inline-block mr-2" /> Back to List
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
//         <h2 className="text-2xl font-bold text-blue-600">Tenant Details</h2>
//         <button
//           className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
//           onClick={() => navigate("/tenant-list")}
//         >
//           <FaArrowLeft className="inline-block mr-2" /> Back to List
//         </button>
//       </div>

//       <div className="bg-white shadow-xl rounded-2xl p-6">
//         {/* Sections */}
//         <Section
//           title="Tenant Information"
//           icon={<FaUser />}
//           expanded={expandedSections.tenantInfo}
//           onToggle={() => toggleSection("tenantInfo")}
//         >
//           <Info label="Name" value={tenant.name} icon={<FaUser />} />
//           <Info label="Mobile" value={tenant.mobile} icon={<FaPhone />} />
//           <Info label="Stay Type" value={tenant.stayType} icon={<FaUser />} />
//           <Info label="Tenant Type" value={tenant.tenantType} icon={<FaUser />} />
//           <Info label="Booked By" value={tenant.bookedBy} icon={<FaUser />} />
//           <Info label="Referred By" value={tenant.referredBy} icon={<FaUser />} />
//         </Section>

//         <Section
//           title="Property Details"
//           icon={<FaHome />}
//           expanded={expandedSections.propertyDetails}
//           onToggle={() => toggleSection("propertyDetails")}
//         >
//           <Info label="Property Type" value={tenant.propertyType} icon={<FaBuilding />} />
//           <Info label="Room Number" value={tenant.room} icon={<FaHome />} />
//           <Info label="Bed Number" value={tenant.bed} icon={<FaBed />} />
//           <Info label="Other Details" value={tenant.otherDetails} icon={<FaFileContract />} />
//         </Section>

//         <Section
//           title="Rental Terms"
//           icon={<FaMoneyCheckAlt />}
//           expanded={expandedSections.rentalTerms}
//           onToggle={() => toggleSection("rentalTerms")}
//         >
//           <Info label="Move In Date" value={tenant.moveInDate} icon={<FaCalendar />} />
//           <Info label="Move Out Date" value={tenant.moveOutDate} icon={<FaCalendar />} />
//           <Info label="Lock-in Period" value={`${tenant.lockInPeriod || 0} Months`} icon={<FaLock />} />
//           <Info label="Notice Period" value={`${tenant.noticePeriod || 30} Days`} icon={<FaLock />} />
//           <Info label="Agreement Period" value={tenant.agreementPeriod} icon={<FaFileContract />} />
//           <Info label="Fixed Rent" value={`₹${tenant.fixedRent || 0}`} icon={<FaMoneyBillWave />} />
//           <Info label="Rental Frequency" value={tenant.rentalFrequency} icon={<FaMoneyCheckAlt />} />
//           <Info label="Add Rent On" value={tenant.addRentOn ? `Day ${tenant.addRentOn}` : "N/A"} icon={<FaMoneyCheckAlt />} />
//           <Info label="Security Deposit" value={`₹${tenant.securityDeposit || 0}`} icon={<FaMoneyBillWave />} />
//           <Info label="Electricity Meter" value={tenant.electricityMeter} icon={<FaBolt />} />
//         </Section>

//         {/* Edit Button */}
//         <div className="text-end mt-6">
//           <button
//             onClick={() => navigate("/tenant-form", { state: tenant })}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow transition"
//           >
//             <FaEdit className="inline-block mr-2" /> Edit Tenant
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Section = ({ title, icon, children, expanded, onToggle }) => (
//   <div className="mb-6">
//     <div
//       className="flex items-center gap-2 cursor-pointer mb-3 text-blue-600 hover:text-blue-800 transition"
//       onClick={onToggle}
//     >
//       <span>{icon}</span>
//       <h4 className="text-lg font-semibold">{title}</h4>
//     </div>
//     {expanded && <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>}
//   </div>
// );

// const Info = ({ label, value, icon }) => (
//   <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50">
//     <div className="text-blue-500 mt-1">{icon}</div>
//     <div>
//       <p className="text-sm text-gray-500 font-medium">{label}</p>
//       <p className="text-gray-800 font-semibold break-words">{value || "N/A"}</p>
//     </div>
//   </div>
// );

// export default TenantDetails;






import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaUser, FaPhone, FaEdit, FaArrowLeft, FaTrash,
  FaHome, FaBed, FaBolt, FaCalendar, FaMoneyBillWave,
} from "react-icons/fa";

const TenantDetails = () => {
  const { state: tenant } = useLocation();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this tenant?")) {
      const tenants = JSON.parse(localStorage.getItem("tenants")) || [];
      const updatedTenants = tenants.filter((t) => t.id !== tenant.id);
      localStorage.setItem("tenants", JSON.stringify(updatedTenants));
      navigate("/tenant-list");
    }
  };

  if (!tenant) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-lg text-gray-600">No tenant details found.</p>
          <button
            onClick={() => navigate("/tenant-list")}
            className="mt-4 bg-primary text-white px-5 py-2 rounded hover:bg-indigo-600"
          >
            <FaArrowLeft className="inline mr-2" /> Back to List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
          {tenant.image ? (
            <img
              src={tenant.image}
              alt="Tenant"
              className="w-32 h-32 rounded-full object-cover shadow-md"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-4xl text-white bg-primary">
              <FaUser />
            </div>
          )}
          <h2 className="text-xl font-semibold mt-4 text-gray-800">{tenant.name}</h2>
          <p className="text-gray-500">{tenant.mobile}</p>

          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p><strong>Stay Type:</strong> {tenant.stayType || "N/A"}</p>
            <p><strong>Tenant Type:</strong> {tenant.tenantType || "N/A"}</p>
            <p><strong>Booked By:</strong> {tenant.bookedBy || "N/A"}</p>
            <p><strong>Referred By:</strong> {tenant.referredBy || "N/A"}</p>
          </div>

          <div className="mt-6 flex gap-3">
          <button
              onClick={handleDelete}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              <FaTrash className="inline mr-2" /> Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              <FaTrash className="inline mr-2" /> Delete
            </button>
          </div>
        </div>

        {/* Tenant Details */}
        <div className="lg:col-span-2 space-y-8">
          <Section title="Property Details">
            <Info label="Property Type" value={tenant.propertyType} />
            <Info label="Room Number" value={tenant.room} />
            <Info label="Bed Number" value={tenant.bed} />
            <Info label="Other Details" value={tenant.otherDetails} />
          </Section>

          <Section title="Rental Terms">
            <Info label="Move In Date" value={tenant.moveInDate} icon={<FaCalendar />} />
            <Info label="Move Out Date" value={tenant.moveOutDate} icon={<FaCalendar />} />
            <Info label="Lock-in Period" value={`${tenant.lockInPeriod || 0} Months`} />
            <Info label="Notice Period" value={`${tenant.noticePeriod || 30} Days`} />
            <Info label="Agreement Period" value={tenant.agreementPeriod} />
            <Info label="Fixed Rent" value={`₹${tenant.fixedRent || 0}`} />
            <Info label="Rental Frequency" value={tenant.rentalFrequency} />
            <Info label="Add Rent On" value={tenant.addRentOn ? `Day ${tenant.addRentOn}` : "N/A"} />
            <Info label="Security Deposit" value={`₹${tenant.securityDeposit || 0}`} />
            <Info label="Electricity Meter" value={tenant.electricityMeter} />
          </Section>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow p-6">
    <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {children}
    </div>
  </div>
);

const Info = ({ label, value }) => (
  <div className="bg-gray-50 p-4 rounded-xl">
    <p className="text-sm text-gray-500 font-medium">{label}</p>
    <p className="text-gray-800 font-semibold mt-1">{value || "N/A"}</p>
  </div>
);

export default TenantDetails;
