




// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import {
//   FaDoorOpen,
//   FaWifi,
//   FaParking,
//   FaLock,
//   FaBolt,
//   FaTint,
//   FaArrowUp,
//   FaHome,
//   FaListAlt,
//   FaFileAlt,
//   FaBed,
//   FaThLarge,
//   FaMapMarkerAlt,
//   FaCity,
//   FaGlobeAsia,
//   FaEnvelope,
//   FaPhone,
//   FaImage,
//   FaMapPin,
//   FaSnowflake,
//   FaDumbbell,
//   FaSwimmingPool,
//   FaCouch,
//   FaTshirt,
//   FaPaw,
// } from "react-icons/fa";

// const amenityList = [
//   { name: "WiFi", icon: <FaWifi /> },
//   { name: "Parking", icon: <FaParking /> },
//   { name: "Security", icon: <FaLock /> },
//   { name: "Power Backup", icon: <FaBolt /> },
//   { name: "Water Supply", icon: <FaTint /> },
//   { name: "Lift", icon: <FaArrowUp /> },
//   { name: "AC", icon: <FaSnowflake /> },
//   { name: "Gym", icon: <FaDumbbell /> },
//   { name: "Swimming Pool", icon: <FaSwimmingPool /> },
//   { name: "Furnished", icon: <FaCouch /> },
//   { name: "Laundry", icon: <FaTshirt /> },
//   { name: "Pet Friendly", icon: <FaPaw /> },
// ];

// const initialFormState = {
//   id: Date.now(),
//   title: "",
//   type: "",
//   bedrooms: "",
//   address: "",
//   city: "",
//   state: "",
//   pincode: "",
//   description: "",
//   roomType: "",
//   contactNumber: "",
//   email: "",
//   images: [],
//   amenities: [],
// };

// const AddProperty = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const propertyToEdit = location.state?.propertyToEdit;

//   const [formData, setFormData] = useState(initialFormState);
//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [selectedAmenities, setSelectedAmenities] = useState([]);

//   useEffect(() => {
//     if (propertyToEdit) {
//       setFormData(propertyToEdit);
//       setSelectedAmenities(propertyToEdit.amenities || []);
//       setImagePreviews(propertyToEdit.images || []);
//     }
//   }, [propertyToEdit]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });
//   };

//   const MAX_IMAGES = 20;

//   const handleImageChange = async (e) => {
//     const files = Array.from(e.target.files);
//     const updatedImages = [...formData.images, ...files];

//     if (updatedImages.length > MAX_IMAGES) {
//       alert(`You can only upload up to ${MAX_IMAGES} images.`);
//       return;
//     }

//     const base64Images = await Promise.all(
//       files.map(async (file) => await convertToBase64(file))
//     );

//     setFormData((prev) => ({
//       ...prev,
//       images: [...formData.images, ...base64Images],
//     }));
//     setImagePreviews((prev) => [...prev, ...base64Images]);
//   };

//   const handleImageDelete = (index) => {
//     const updatedImages = formData.images.filter((_, i) => i !== index);
//     const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
//     setFormData((prev) => ({ ...prev, images: updatedImages }));
//     setImagePreviews(updatedPreviews);
//   };

//   const toggleAmenity = (name) => {
//     const updated = selectedAmenities.includes(name)
//       ? selectedAmenities.filter((item) => item !== name)
//       : [...selectedAmenities, name];
//     setSelectedAmenities(updated);
//     setFormData((prev) => ({ ...prev, amenities: updated }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const storedProperties = JSON.parse(localStorage.getItem("properties")) || [];

//     let updatedProperties;
//     if (propertyToEdit) {
//       // Update existing property
//       updatedProperties = storedProperties.map((prop) =>
//         prop.id === propertyToEdit.id ? formData : prop
//       );
//     } else {
//       // Add new property
//       updatedProperties = [...storedProperties, { ...formData, id: Date.now() }];
//     }

//     localStorage.setItem("properties", JSON.stringify(updatedProperties));

//     alert(`Property ${propertyToEdit ? "updated" : "submitted"} successfully!`);
//    navigate('/landlord/property')
//   };

//   return (
//     <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto rounded-2xl shadow-xl p-8">
//         <h2 className="text-3xl font-extrabold text-center mb-10 text-indigo-700">
//           <FaHome className="inline mr-2" />
//           {propertyToEdit ? "Edit Property" : "Add New Property"}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-10">
//           {/* Property Details */}
//           <div>
//             <h3 className="text-xl font-semibold text-indigo-600 mb-4">Property Details</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <InputField icon={<FaHome />} label="Property Name *" name="title" value={formData.title} onChange={handleChange} required />
//               <SelectField icon={<FaListAlt />} label="Property Type *" name="type" value={formData.type} onChange={handleChange} options={["", "PG", "Hostel", "Flat"]} required />
//               <TextAreaField icon={<FaFileAlt />} label="Description" name="description" value={formData.description} onChange={handleChange} />
//               <InputField icon={<FaBed />} label="Bedrooms" name="bedrooms" type="number" min="0" value={formData.bedrooms} onChange={handleChange} />
//               <SelectField icon={<FaThLarge />} label="Room Type" name="roomType" value={formData.roomType} onChange={handleChange} options={["", "Single Room", "Double Room"]} />
//               <div className="sm:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Amenities (Click to select) *
//                 </label>
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//                   {amenityList.map((item, index) => {
//                     const isSelected = selectedAmenities.includes(item.name);
//                     return (
//                       <div
//                         key={index}
//                         onClick={() => toggleAmenity(item.name)}
//                         className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-pointer border transition-all duration-200 text-sm ${
//                           isSelected ? "bg-[#5c4eff] text-white border-[#5c4eff]" : "bg-white text-black border-black"
//                         }`}
//                       >
//                         <span>{item.icon}</span>
//                         <span>{item.name}</span>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
//                   <FaImage className="mr-2" /> Upload Images (up to 20) *
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   multiple
//                   className="w-full p-3 rounded-lg border border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200 transition-all"
//                   onChange={handleImageChange}
//                 />
//                 <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
//                   {imagePreviews.map((img, index) => (
//                     <div key={index} className="relative">
//                       <img
//                         src={img}
//                         alt="Preview"
//                         className="h-32 w-full object-cover rounded-lg border shadow-sm"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => handleImageDelete(index)}
//                         className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 text-xs"
//                         title="Delete Image"
//                       >
//                         ✕
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Address Section */}
//           <div>
//             <h3 className="text-xl font-semibold text-indigo-600 mb-4">Property Address</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <InputField icon={<FaMapMarkerAlt />} label="Full Address *" name="address" value={formData.address} onChange={handleChange} required />
//               <InputField icon={<FaCity />} label="City *" name="city" value={formData.city} onChange={handleChange} required />
//               <InputField icon={<FaGlobeAsia />} label="State *" name="state" value={formData.state} onChange={handleChange} required />
//               <InputField icon={<FaMapPin />} label="Pincode *" name="pincode" value={formData.pincode} onChange={handleChange} required />
//             </div>
//           </div>

//           {/* Contact Section */}
//           <div>
//             <h3 className="text-xl font-semibold text-indigo-600 mb-4">Contact Information</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <InputField icon={<FaPhone />} label="Contact Number *" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
//               <InputField icon={<FaEnvelope />} label="Email Address *" name="email" value={formData.email} onChange={handleChange} required />
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex justify-between items-center pt-6">
//             <button type="submit" className="px-6 py-3 bg-[#5c4eff] text-white font-semibold rounded-lg hover:bg-[#483dce] focus:ring-2 focus:ring-[#5c4eff] transition-all">
//               {propertyToEdit ? "Update Property" : "Submit Property"}
//             </button>
//             <Link to="/landlord/add-room">
//               <button className="inline-flex items-center px-4 py-2 bg-[#5c4eff] text-white rounded-lg hover:bg-[#4a3fd9] transition-all">
//                 <FaDoorOpen className="mr-2" />
//                 Add Room
//               </button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// // InputField, TextAreaField, and SelectField components remain unchanged
// const InputField = ({ icon, label, name, ...props }) => (
//   <div className="group">
//     <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
//       <span className="mr-2 group-focus-within:text-[#5c4eff]">{icon}</span>
//       {label}
//     </label>
//     <input
//       id={name}
//       name={name}
//       className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5c4eff] focus:border-[#5c4eff] transition-all"
//       {...props}
//     />
//   </div>
// );

// const TextAreaField = ({ icon, label, name, ...props }) => (
//   <div className="group sm:col-span-2">
//     <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
//       <span className="mr-2 group-focus-within:text-[#5c4eff]">{icon}</span>
//       {label}
//     </label>
//     <textarea
//       id={name}
//       name={name}
//       rows="4"
//       className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5c4eff] focus:border-[#5c4eff] transition-all"
//       {...props}
//     />
//   </div>
// );

// const SelectField = ({ icon, label, name, options = [], ...props }) => (
//   <div className="group">
//     <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
//       <span className="mr-2 group-focus-within:text-[#5c4eff]">{icon}</span>
//       {label}
//     </label>
//     <select
//       id={name}
//       name={name}
//       className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#5c4eff] focus:border-[#5c4eff] transition-all"
//       {...props}
//     >
//       {options.map((opt, i) => (
//         <option key={i} value={opt}>
//           {opt || "Select"}
//         </option>
//       ))}
//     </select>
//   </div>
// );

// export default AddProperty;




// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import {
//   FaDoorOpen, FaWifi, FaParking, FaLock, FaBolt, FaTint, FaArrowUp,
//   FaHome, FaListAlt, FaFileAlt, FaBed, FaThLarge, FaMapMarkerAlt, FaCity,
//   FaGlobeAsia, FaEnvelope, FaPhone, FaImage, FaMapPin, FaSnowflake,
//   FaDumbbell, FaSwimmingPool, FaCouch, FaTshirt, FaPaw,
// } from "react-icons/fa";

// const amenityList = [
//   { name: "WiFi", icon: <FaWifi /> },
//   { name: "Parking", icon: <FaParking /> },
//   { name: "Security", icon: <FaLock /> },
//   { name: "Power Backup", icon: <FaBolt /> },
//   { name: "Water Supply", icon: <FaTint /> },
//   { name: "Lift", icon: <FaArrowUp /> },
//   { name: "AC", icon: <FaSnowflake /> },
//   { name: "Gym", icon: <FaDumbbell /> },
//   { name: "Swimming Pool", icon: <FaSwimmingPool /> },
//   { name: "Furnished", icon: <FaCouch /> },
//   { name: "Laundry", icon: <FaTshirt /> },
//   { name: "Pet Friendly", icon: <FaPaw /> },
// ];

// const initialFormState = {
//   name: "",
//   type: "",
//   address: "",
//   city: "",
//   state: "",
//   pinCode: "",
//   totalRooms: "",
//   totalBeds: "",
//   contactNumber: "",
//   email: "",
//   amenities: [],
// };

// const AddProperty = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const propertyToEdit = location.state?.propertyToEdit;

//   const [formData, setFormData] = useState(initialFormState);
//   const [imageFiles, setImageFiles] = useState([]);
//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [selectedAmenities, setSelectedAmenities] = useState([]);

//   useEffect(() => {
//     if (propertyToEdit) {
//       setFormData({ ...propertyToEdit });
//       setSelectedAmenities(propertyToEdit.amenities || []);
//     }
//   }, [propertyToEdit]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((p) => ({ ...p, [name]: value }));
//   };

//   const toggleAmenity = (name) => {
//     setSelectedAmenities((prev) => {
//       const updated = prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name];
//       setFormData((p) => ({ ...p, amenities: updated }));
//       return updated;
//     });
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files).slice(0, 20);
//     setImageFiles(files);
//     setImagePreviews(files.map((f) => URL.createObjectURL(f)));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     if (!token) return alert("Not authenticated");

//     try {
//       // 1. Submit property details
//       const res = await axios.post(
//         "https://pg-hostel.nearprop.com/api/landlord/properties",
//         formData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       const propertyId = res.data.property._id;

//       // 2. Upload images if any
//       if (imageFiles.length > 0) {
//         const imgForm = new FormData();
//         imageFiles.forEach((f) => imgForm.append("images", f));

//         await axios.post(
//           `https://pg-hostel.nearprop.com/api/landlord/properties/images/${propertyId}`,
//           imgForm,
//           { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } }
//         );
//       }

//       alert("Property saved successfully!");
//       navigate("/landlord/property");
//     } catch (err) {
//       console.error("API error:", err);
//       alert("Failed to save property.");
//     }
//   };

//   return (
//     <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto rounded-2xl shadow-xl p-8">
//         <h2 className="text-3xl font-extrabold text-center mb-10 text-indigo-700">
//           <FaHome className="inline mr-2" /> {propertyToEdit ? "Edit Property" : "Add New Property"}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-10">
//           {/* Basic Details, Address, Contact as before (use similar InputField etc.) */}
//           {/* Amenity selectors */}
//           <div>
//             <h3 className="text-xl font-semibold text-indigo-600 mb-4">Amenities</h3>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//               {amenityList.map((item, idx) => {
//                 const selected = selectedAmenities.includes(item.name);
//                 return (
//                   <div
//                     key={idx}
//                     onClick={() => toggleAmenity(item.name)}
//                     className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-pointer border text-sm ${
//                       selected ? "bg-indigo-600 text-white" : "bg-white text-gray-800"
//                     }`}
//                   >
//                     {item.icon}
//                     {item.name}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//           {/* Image Upload */}
//           <div>
//             <h3 className="text-xl font-semibold text-indigo-600 mb-4">Upload Images</h3>
//             <input
//               type="file"
//               multiple
//               accept="image/*"
//               onChange={handleImageChange}
//               className="mb-4"
//             />
//             <div className="grid grid-cols-3 gap-4">
//               {imagePreviews.map((src, i) => (
//                 <img key={i} src={src} alt="Preview" className="h-24 object-cover rounded-lg" />
//               ))}
//             </div>
//           </div>
//           {/* Submit */}
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
//             >
//               Submit Property
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default AddProperty;



import React, { useState } from "react";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "PG",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    totalRooms: "",
    totalBeds: "",
  });

  const [images, setImages] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Token missing. Please login.");
      setSubmitting(false);
      return;
    }

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    images.forEach((img) => {
      form.append("images", img);
    });

    try {
      const res = await fetch("https://pg-hostel.nearprop.com/api/landlord/properties", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: form,
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Property added successfully!");
        setFormData({
          name: "",
          type: "PG",
          address: "",
          city: "",
          state: "",
          pinCode: "",
          totalRooms: "",
          totalBeds: "",
        });
        setImages([]);
      } else {
        setMessage(data.message || "Failed to add property.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

 return (
    <div className=" mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Property</h2>
      {message && (
        <p
          className={`mb-4 text-center font-medium ${
            message.includes('success') ? 'text-green-600' : 'text-red-500'
          }`}
          role="alert"
        >
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
              Property Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter property name"
              required
              className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="type" className="block mb-1 font-medium text-gray-700">
              Property Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select property type
              </option>
              <option value="PG">PG</option>
              <option value="Hostel">Hostel</option>
              <option value="Room">Room</option>
              <option value="Flat">Flat</option>
              <option value="Hotel">Hotel</option>
              <option value="Banquet">Banquet</option>
            </select>
          </div>
          <div>
            <label htmlFor="address" className="block mb-1 font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              required
              className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="city" className="block mb-1 font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              required
              className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="state" className="block mb-1 font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter state"
              required
              className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="pinCode" className="block mb-1 font-medium text-gray-700">
              Pin Code
            </label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              placeholder="Enter pin code"
              required
              pattern="[0-9]{6}"
              className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="totalRooms" className="block mb-1 font-medium text-gray-700">
              Total Rooms
            </label>
            <input
              type="number"
              id="totalRooms"
              name="totalRooms"
              value={formData.totalRooms}
              onChange={handleChange}
              placeholder="Enter total rooms"
              required
              min="1"
              className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="totalBeds" className="block mb-1 font-medium text-gray-700">
              Total Beds
            </label>
            <input
              type="number"
              id="totalBeds"
              name="totalBeds"
              value={formData.totalBeds}
              onChange={handleChange}
              placeholder="Enter total beds"
              required
              min="1"
              className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="images" className="block mb-1 font-medium text-gray-700">
            Upload Images
          </label>
          <input
            type="file"
            id="images"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {submitting ? 'Submitting...' : 'Add Property'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
