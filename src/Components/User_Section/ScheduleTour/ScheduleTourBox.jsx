import { useState } from "react";
import { FaPhone, FaWhatsapp, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

const ScheduleTourBox = () => {
  const [activeTab, setActiveTab] = useState("schedule");
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date();

  // Generate next 7 days
  const next7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i);
    return date;
  });

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });
  };

  const handleSubmit = () => {
    alert(`Tour requested for: ${selectedDate}`);
  };

  return (
    <div className="w-full md:w-[350px] bg-white shadow-lg rounded-xl p-5 sticky top-24">
      {/* Top Tabs */}
      <div className="flex justify-between mb-5">
        <button
          onClick={() => setActiveTab("schedule")}
          className={`flex-1 py-2 text-center font-semibold rounded-l-lg transition ${
            activeTab === "schedule"
              ? "bg-indigo-600 text-white shadow"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Schedule Tour
        </button>
        <button
          onClick={() => setActiveTab("visits")}
          className={`flex-1 py-2 text-center font-semibold rounded-r-lg transition ${
            activeTab === "visits"
              ? "bg-indigo-600 text-white shadow"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          My Visits
        </button>
      </div>

      {/* Schedule Tour Tab */}
      {activeTab === "schedule" && (
        <div className="space-y-4">
          {/* Scrollable Dates */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {next7Days.map((date, i) => (
              <button
                key={i}
                onClick={() => setSelectedDate(formatDate(date))}
                className={`min-w-[70px] px-3 py-2 text-sm border rounded-lg transition ${
                  selectedDate === formatDate(date)
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {formatDate(date)}
              </button>
            ))}
          </div>

          {/* Manual Date & Time Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Date & Time
            </label>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-indigo-600" />
              <input
                type="datetime-local"
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Action Buttons: Call, Send Message */}
          <div className="flex justify-between items-center gap-3">
            <a
              href="tel:+91 9110091413"
              className="flex-1 bg-indigo-500 text-white py-2 px-3 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-600 transition"
            >
              <FaPhone /> Call
            </a>
            {/* <a
              href="mailto:info@example.com"
              className="flex-1 bg-indigo-500 text-white py-2 px-3 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-600 transition"
            >
              <FaEnvelope /> Send Msg
            </a> */}
          </div>

          {/* WhatsApp Button (Full width) */}
          <div>
            <a
              href="https://wa.me/+919110091413"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#006400] text-white py-2 px-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1ebe5d] transition"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Add Notes
            </label>
            <textarea
              rows="3"
              placeholder="Your message..."
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            Submit Tour Request
          </button>
        </div>
      )}

      {/* My Visits Tab */}
      {activeTab === "visits" && (
        <div className="space-y-4">
          <ul className="space-y-3">
            <li className="border p-3 rounded-lg bg-gray-50">
              <p className="text-sm font-medium text-gray-800">Rohit Sharma</p>
              <p className="text-xs text-gray-500">Visited on 01 Aug 2025</p>
            </li>
            <li className="border p-3 rounded-lg bg-gray-50">
              <p className="text-sm font-medium text-gray-800">Anjali Verma</p>
              <p className="text-xs text-gray-500">Visited on 02 Aug 2025</p>
            </li>
            <li className="border p-3 rounded-lg bg-gray-50">
              <p className="text-sm font-medium text-gray-800">Rahul Singh</p>
              <p className="text-xs text-gray-500">Visited on 03 Aug 2025</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ScheduleTourBox;






// import { useState } from "react";
// import { FaPhone, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";

// const ScheduleTourBox = () => {
//   const [activeTab, setActiveTab] = useState("schedule");
//   const [selectedDate, setSelectedDate] = useState(null);
//   const today = new Date();

//   const next7Days = Array.from({ length: 7 }, (_, i) => {
//     const date = new Date();
//     date.setDate(today.getDate() + i);
//     return date;
//   });

//   const formatDate = (date) => {
//     return date.toLocaleDateString("en-GB", {
//       weekday: "short",
//       day: "2-digit",
//       month: "short",
//     });
//   };

//   const handleSubmit = () => {
//     alert(`Tour requested for: ${selectedDate}`);
//   };

//   return (
//     <div className="w-full md:w-[350px] bg-white shadow-xl rounded-2xl p-5 sticky top-24 max-h-[90vh] overflow-y-auto custom-scrollbar">
//       {/* Top Tabs */}
//       <div className="flex justify-between mb-5">
//         <button
//           onClick={() => setActiveTab("schedule")}
//           className={`flex-1 py-2 text-center font-semibold rounded-l-lg transition ${
//             activeTab === "schedule"
//               ? "bg-indigo-600 text-white shadow"
//               : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           Schedule Tour
//         </button>
//         <button
//           onClick={() => setActiveTab("visits")}
//           className={`flex-1 py-2 text-center font-semibold rounded-r-lg transition ${
//             activeTab === "visits"
//               ? "bg-indigo-600 text-white shadow"
//               : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           My Visits
//         </button>
//       </div>

//       {/* Schedule Tour Tab */}
//       {activeTab === "schedule" && (
//         <div className="space-y-5">
//           {/* Scrollable Dates */}
//           <div className="flex gap-2 overflow-x-auto no-scrollbar">
//             {next7Days.map((date, i) => (
//               <button
//                 key={i}
//                 onClick={() => setSelectedDate(formatDate(date))}
//                 className={`min-w-[70px] px-3 py-2 text-sm border rounded-lg transition ${
//                   selectedDate === formatDate(date)
//                     ? "bg-indigo-500 text-white"
//                     : "bg-gray-100 text-gray-800"
//                 }`}
//               >
//                 {formatDate(date)}
//               </button>
//             ))}
//           </div>

//           {/* Manual Date & Time Picker */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Select Date & Time
//             </label>
//             <div className="flex items-center gap-2">
//               <FaCalendarAlt className="text-indigo-600" />
//               <input
//                 type="datetime-local"
//                 className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//           </div>

//           {/* Call Button */}
//           <div className="flex justify-between items-center gap-3">
//             <a
//               href="tel:+919110091413"
//               className="flex-1 bg-indigo-500 text-white py-2 px-3 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-600 transition"
//             >
//               <FaPhone /> Call
//             </a>
//           </div>

//           {/* WhatsApp Button */}
//           <div>
//             <a
//               href="https://wa.me/+919110091413"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full bg-[#006400] text-white py-2 px-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1ebe5d] transition"
//             >
//               <FaWhatsapp /> WhatsApp
//             </a>
//           </div>

//           {/* Notes */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Add Notes
//             </label>
//             <textarea
//               rows="3"
//               placeholder="Your message..."
//               className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button
//             onClick={handleSubmit}
//             className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
//           >
//             Submit Tour Request
//           </button>
//         </div>
//       )}

//       {/* My Visits Tab */}
//       {activeTab === "visits" && (
//         <div className="space-y-4">
//           <ul className="space-y-3">
//             <li className="border p-3 rounded-lg bg-gray-50">
//               <p className="text-sm font-medium text-gray-800">Rohit Sharma</p>
//               <p className="text-xs text-gray-500">Visited on 01 Aug 2025</p>
//             </li>
//             <li className="border p-3 rounded-lg bg-gray-50">
//               <p className="text-sm font-medium text-gray-800">Anjali Verma</p>
//               <p className="text-xs text-gray-500">Visited on 02 Aug 2025</p>
//             </li>
//             <li className="border p-3 rounded-lg bg-gray-50">
//               <p className="text-sm font-medium text-gray-800">Rahul Singh</p>
//               <p className="text-xs text-gray-500">Visited on 03 Aug 2025</p>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ScheduleTourBox;
