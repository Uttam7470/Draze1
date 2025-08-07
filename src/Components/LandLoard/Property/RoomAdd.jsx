
// import React, { useState, useEffect } from "react";
// import { FaBed, FaChair, FaWifi, FaTv, FaTrash, FaEdit } from "react-icons/fa";

// const RoomAdd = () => {
//   const [form, setForm] = useState({
//     roomName: "",
//     floor: "",
//     beds: "",
//     rent: "",
//     image: "",
//     amenities: {
//       bed: false,
//       chair: false,
//       wifi: false,
//       tv: false,
//     },
//   });

//   const [rooms, setRooms] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("rooms")) || [];
//     setRooms(saved);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setForm((prev) => ({ ...prev, image: reader.result }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleAmenityChange = (amenity) => {
//     setForm((prev) => ({
//       ...prev,
//       amenities: {
//         ...prev.amenities,
//         [amenity]: !prev.amenities[amenity],
//       },
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedRooms = [...rooms];

//     if (editIndex !== null) {
//       updatedRooms[editIndex] = form;
//     } else {
//       updatedRooms.push(form);
//     }

//     localStorage.setItem("rooms", JSON.stringify(updatedRooms));
//     setRooms(updatedRooms);
//     setForm({
//       roomName: "",
//       floor: "",
//       beds: "",
//       rent: "",
//       image: "",
//       amenities: {
//         bed: false,
//         chair: false,
//         wifi: false,
//         tv: false,
//       },
//     });
//     setEditIndex(null);
//   };

//   const handleEdit = (index) => {
//     setForm(rooms[index]);
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     const updated = rooms.filter((_, i) => i !== index);
//     setRooms(updated);
//     localStorage.setItem("rooms", JSON.stringify(updated));
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
//         {editIndex !== null ? "Edit Room" : "Add Room"}
//       </h3>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow rounded-lg p-6 space-y-6"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <label className="block font-medium mb-1">Room Name</label>
//             <input
//               type="text"
//               name="roomName"
//               value={form.roomName}
//               onChange={handleChange}
//               placeholder="Enter room name"
//               required
//               className="w-full border rounded-lg p-2"
//             />
//           </div>
//           <div>
//             <label className="block font-medium mb-1">Floor</label>
//             <input
//               type="text"
//               name="floor"
//               value={form.floor}
//               onChange={handleChange}
//               placeholder="e.g. 1st, 2nd"
//               required
//               className="w-full border rounded-lg p-2"
//             />
//           </div>
//           <div>
//             <label className="block font-medium mb-1">Beds</label>
//             <input
//               type="number"
//               name="beds"
//               value={form.beds}
//               onChange={handleChange}
//               placeholder="No. of beds"
//               required
//               className="w-full border rounded-lg p-2"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <label className="block font-medium mb-1">Rent (per bed)</label>
//             <input
//               type="number"
//               name="rent"
//               value={form.rent}
//               onChange={handleChange}
//               placeholder="e.g. 5000"
//               required
//               className="w-full border rounded-lg p-2"
//             />
//           </div>
//           <div>
//             <label className="block font-medium mb-1">Upload Room Image</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="w-full"
//             />
//           </div>
//           <div>
//             {form.image && (
//               <img
//                 src={form.image}
//                 alt="Room"
//                 className="w-full h-40 object-cover rounded-lg mt-4"
//               />
//             )}
//           </div>
//         </div>

//         <div>
//           <h5 className="font-semibold mb-2">Amenities</h5>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//             {[
//               { name: "bed", icon: <FaBed />, label: "Bed" },
//               { name: "chair", icon: <FaChair />, label: "Chair" },
//               { name: "wifi", icon: <FaWifi />, label: "Wi-Fi" },
//               { name: "tv", icon: <FaTv />, label: "TV" },
//             ].map((a) => (
//               <label
//                 key={a.name}
//                 className="flex items-center space-x-2 text-sm"
//               >
//                 <input
//                   type="checkbox"
//                   checked={form.amenities[a.name]}
//                   onChange={() => handleAmenityChange(a.name)}
//                 />
//                 <span className="flex items-center gap-2 text-gray-700">
//                   {a.icon} {a.label}
//                 </span>
//               </label>
//             ))}
//           </div>
//         </div>

//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
//           >
//             {editIndex !== null ? "Update Room" : "Save Room"}
//           </button>
//         </div>
//       </form>

//       {rooms.length > 0 && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//           {rooms.map((room, idx) => (
//             <div
//               key={idx}
//               className="bg-white border rounded-lg shadow hover:shadow-lg transition"
//             >
//               {room.image && (
//                 <img
//                   src={room.image}
//                   alt="Room"
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//               )}
//               <div className="p-4">
//                 <h5 className="font-bold text-lg text-gray-800">
//                   {room.roomName}
//                 </h5>
//                 <p className="text-sm text-gray-600">Floor: {room.floor}</p>
//                 <p className="text-sm text-gray-600">Beds: {room.beds}</p>
//                 <p className="text-sm text-gray-600">Rent: ₹{room.rent}</p>
//                 <div className="flex gap-2 mt-2 text-green-600 text-lg">
//                   {room.amenities.bed && <FaBed />}
//                   {room.amenities.chair && <FaChair />}
//                   {room.amenities.wifi && <FaWifi />}
//                   {room.amenities.tv && <FaTv />}
//                 </div>
//               </div>
//               <div className="flex justify-between items-center border-t p-2">
//                 <button
//                   onClick={() => handleEdit(idx)}
//                   className="text-blue-600 hover:text-blue-800"
//                 >
//                   <FaEdit />
//                 </button>
//                 <button
//                   onClick={() => handleDelete(idx)}
//                   className="text-red-600 hover:text-red-800"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RoomAdd;




import React, { useState, useEffect } from "react";
import {
  FaPlus,
  FaBed,
  FaMoneyBillWave,
  FaLayerGroup,
  FaListUl,
  FaImage,
  FaThLarge,
} from "react-icons/fa";

const amenitiesOptions = {
  roomEssentials: ["Table", "Chair", "Lamp", "Wardrobe"],
  comfortFeatures: ["AC", "Cooler", "Fan", "Heater"],
  bedTypes: ["Single Bed", "Double Bed", "Bunk Bed"],
  utilities: ["WiFi", "Geyser", "Attached Washroom", "Shared Washroom"],
};

const RoomAdd = () => {
  const [focusedField, setFocusedField] = useState("");
  const [roomData, setRoomData] = useState({
    roomName: "",
    roomType: "",
    floor: "",
    beds: "",
    rent: "",
    image: "",
    amenities: {
      roomEssentials: [],
      comfortFeatures: [],
      bedTypes: [],
      utilities: [],
    },
  });

  const [rooms, setRooms] = useState(() => {
    const savedRooms = localStorage.getItem("rooms");
    return savedRooms ? JSON.parse(savedRooms) : [];
  });

  const [showForm, setShowForm] = useState(false);

  // Save to localStorage whenever rooms change
  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(rooms));
  }, [rooms]);

  const handleChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (category, item) => {
    const updatedList = roomData.amenities[category].includes(item)
      ? roomData.amenities[category].filter((i) => i !== item)
      : [...roomData.amenities[category], item];

    setRoomData({
      ...roomData,
      amenities: {
        ...roomData.amenities,
        [category]: updatedList,
      },
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () =>
        setRoomData((prev) => ({ ...prev, image: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRooms = [...rooms, roomData];
    setRooms(updatedRooms); // this also triggers localStorage update via useEffect
    alert("Room added successfully!");
    setRoomData({
      roomName: "",
      roomType: "",
      floor: "",
      beds: "",
      rent: "",
      image: "",
      amenities: {
        roomEssentials: [],
        comfortFeatures: [],
        bedTypes: [],
        utilities: [],
      },
    });
    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updatedRooms = rooms.filter((_, i) => i !== index);
    setRooms(updatedRooms); // useEffect will update localStorage
  };

  const handleEdit = (index) => {
    setRoomData(rooms[index]);
    setShowForm(true);
    const updatedRooms = rooms.filter((_, i) => i !== index);
    setRooms(updatedRooms); // useEffect will update localStorage
  };

  const getFieldStyle = (name) =>
    `w-full flex items-center gap-2 border rounded-md px-4 py-2 transition-all duration-200 ${
      focusedField === name ? "border-[#5c4eff]" : "border-gray-300"
    }`;

  const getIconStyle = (name) => ({
    color: focusedField === name ? "#5c4eff" : "#6b7280",
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Rooms</h2>
      {rooms.length === 0 ? (
        <p className="text-center text-gray-500">No rooms added yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md border bg-white hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {room.image && (
                <img
                  src={room.image}
                  alt="Room"
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div className="space-y-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {room.roomName}
                    </h3>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                      {room.roomType}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    <FaBed className="inline mr-1 text-blue-500" />
                    Beds: <span className="font-medium">{room.beds}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    <FaMoneyBillWave className="inline mr-1 text-green-500" />
                    Rent: <span className="font-medium">₹{room.rent}</span>
                  </p>
                  {room.floor && (
                    <p className="text-sm text-gray-600">
                      <FaLayerGroup className="inline mr-1 text-purple-500" />
                      Floor: <span className="font-medium">{room.floor}</span>
                    </p>
                  )}
                </div>
                <div className="mt-4 flex justify-end gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-sm px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!showForm && (
        <div className="text-center">
          <button
            className="bg-[#5c4eff] text-white px-6 py-2 rounded-lg hover:bg-[#4a3ce3] transition-all duration-200"
            onClick={() => setShowForm(true)}
          >
            <FaPlus className="inline mr-2" />
            Add Room
          </button>
        </div>
      )}

      {showForm && (
        <>
          <h2 className="text-3xl font-bold mb-6 text-center mt-10">
            Add Room
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-1">Room Name</label>
                <div className={getFieldStyle("roomName")}>
                  <FaListUl style={getIconStyle("roomName")} />
                  <input
                    type="text"
                    name="roomName"
                    value={roomData.roomName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("roomName")}
                    onBlur={() => setFocusedField("")}
                    className="w-full outline-none"
                    placeholder="Enter room name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Room Type</label>
                <div className={getFieldStyle("roomType")}>
                  <FaThLarge style={getIconStyle("roomType")} />
                  <select
                    name="roomType"
                    value={roomData.roomType}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("roomType")}
                    onBlur={() => setFocusedField("")}
                    className="w-full outline-none bg-transparent"
                    required
                  >
                    <option value="">Select Room Type</option>
                    <option value="Single Room">Single Room</option>
                    <option value="Double Room">Double Room</option>
                    <option value="Shared Room">Shared Room</option>
                    <option value="Deluxe Room">Deluxe Room</option>
                    <option value="Suite">Suite</option>
                    <option value="PG">PG</option>
                    <option value="AC Room">AC Room</option>
                    <option value="Luxury Room">Luxury Room</option>
                    <option value="Dormitory">Dormitory</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Floor</label>
                <div className={getFieldStyle("floor")}>
                  <FaLayerGroup style={getIconStyle("floor")} />
                  <input
                    type="text"
                    name="floor"
                    value={roomData.floor}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("floor")}
                    onBlur={() => setFocusedField("")}
                    className="w-full outline-none"
                    placeholder="e.g. Ground, 1st"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Beds</label>
                <div className={getFieldStyle("beds")}>
                  <FaBed style={getIconStyle("beds")} />
                  <input
                    type="number"
                    name="beds"
                    value={roomData.beds}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("beds")}
                    onBlur={() => setFocusedField("")}
                    className="w-full outline-none"
                    placeholder="Number of beds"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Rent (₹)</label>
                <div className={getFieldStyle("rent")}>
                  <FaMoneyBillWave style={getIconStyle("rent")} />
                  <input
                    type="number"
                    name="rent"
                    value={roomData.rent}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("rent")}
                    onBlur={() => setFocusedField("")}
                    className="w-full outline-none"
                    placeholder="Monthly rent"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Room Image</label>
              <div className={getFieldStyle("image")}>
                <FaImage style={getIconStyle("image")} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  onFocus={() => setFocusedField("image")}
                  onBlur={() => setFocusedField("")}
                  className="w-full outline-none"
                />
              </div>
              {roomData.image && (
                <img
                  src={roomData.image}
                  alt="Room"
                  className="mt-3 rounded-md w-full max-h-64 object-cover"
                />
              )}
            </div>

            {Object.entries(amenitiesOptions).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold capitalize mb-2 mt-4">
                  {category.replace(/([A-Z])/g, " $1")}
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {items.map((item) => (
                    <label
                      key={item}
                      className="flex items-center space-x-2 text-sm cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={roomData.amenities[category].includes(item)}
                        onChange={() => handleCheckboxChange(category, item)}
                        className="accent-[#5c4eff]"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="text-center">
              <button
                type="submit"
                className="mt-6 bg-[#5c4eff] text-white px-6 py-2 rounded-lg hover:bg-[#4a3ce3] transition-all duration-200"
              >
                <FaPlus className="inline mr-2" />
                Add Room
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default RoomAdd;
