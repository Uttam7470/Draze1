import React, { useState } from "react";
import {
  FaHome,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaHourglassHalf,
} from "react-icons/fa";

const dummyData = {
  enquiries: [
   { property: "Green Meadows Apartment", user: "Ishaan", date: "2025-08-04" },
{ property: "Sunset Boulevard Villa", user: "Meera", date: "2025-08-05" },
{ property: "Cityscape PG", user: "Rohan", date: "2025-08-06" },
{ property: "Palm Grove Mansion", user: "Anaya", date: "2025-08-07" },
{ property: "Harmony Heights", user: "Vivaan", date: "2025-08-08" },
{ property: "Maple Leaf Residency", user: "Sara", date: "2025-08-09" },
{ property: "Elite Urban Homes", user: "Ayaan", date: "2025-08-10" },
{ property: "Silver Springs Estate", user: "Tara", date: "2025-08-11" },
{ property: "Lakefront Luxury Flats", user: "Arjun", date: "2025-08-12" },

  ],
  scheduled: [
  { property: "Palm Grove Heights", user: "Ishita", date: "2025-08-08", time: "11:00 AM" },
{ property: "Skyline Residency", user: "Aryan", date: "2025-08-09", time: "3:30 PM" },
{ property: "Urban Oasis PG", user: "Sanya", date: "2025-08-10", time: "9:00 AM" },
{ property: "Ocean View Villa", user: "Karan", date: "2025-08-11", time: "5:00 PM" },
{ property: "Serenity Towers", user: "Jiya", date: "2025-08-12", time: "12:30 PM" },
{ property: "Sunset Boulevard Villa", user: "Ritik", date: "2025-08-13", time: "10:15 AM" },
{ property: "Lakeside Residency", user: "Avni", date: "2025-08-14", time: "2:45 PM" },
{ property: "Maple Leaf PG", user: "Neeraj", date: "2025-08-15", time: "4:00 PM" },
{ property: "Gardenia Apartments", user: "Tanya", date: "2025-08-16", time: "1:00 PM" },

  ],
  allVisits: [
   { property: "Horizon PG", user: "Rahul", status: "Pending" },
{ property: "Elite Mansion", user: "Mehul", status: "Completed" },
{ property: "Palm Grove Heights", user: "Ishita", status: "Cancelled" },
{ property: "Skyline Residency", user: "Aryan", status: "Completed" },
{ property: "Urban Oasis PG", user: "Sanya", status: "Pending" },
{ property: "Serenity Towers", user: "Jiya", status: "Completed" },
{ property: "Sunset Boulevard Villa", user: "Ritik", status: "Cancelled" },
{ property: "Lakeside Residency", user: "Avni", status: "Pending" },
{ property: "Maple Leaf PG", user: "Neeraj", status: "Completed" },

  ],
};

const EnquiriesSeller = () => {
  const [activeTab, setActiveTab] = useState("enquiries");

  const tabStyle = (tab) =>
    `px-5 py-2 text-sm sm:text-base font-semibold rounded-t-xl transition-all duration-200 ${
      activeTab === tab
        ? "bg-[#5c4eff] text-white shadow"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`;

  const renderContent = () => {
    const items = dummyData[activeTab];

    if (!items?.length) return <p className="text-gray-500">No data found.</p>;

    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="flex items-center gap-2 text-[#5c4eff] text-lg font-semibold mb-2">
              <FaHome /> {item.property}
            </h3>
            <p className="flex items-center gap-2 text-gray-700 text-sm">
              <FaUserAlt className="text-[#5c4eff]" /> User: {item.user}
            </p>
            {item.date && (
              <p className="flex items-center gap-2 text-gray-700 text-sm">
                <FaCalendarAlt className="text-[#5c4eff]" /> Date: {item.date}
              </p>
            )}
            {item.time && (
              <p className="flex items-center gap-2 text-gray-700 text-sm">
                <FaClock className="text-[#5c4eff]" /> Time: {item.time}
              </p>
            )}
            {item.status && (
              <p className="flex items-center gap-2 text-gray-700 text-sm mt-1">
                {item.status === "Completed" && (
                  <>
                    <FaCheckCircle className="text-green-500" /> Status: Completed
                  </>
                )}
                {item.status === "Pending" && (
                  <>
                    <FaHourglassHalf className="text-yellow-500" /> Status: Pending
                  </>
                )}
                {item.status === "Cancelled" && (
                  <>
                    <FaTimesCircle className="text-red-500" /> Status: Cancelled
                  </>
                )}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-25 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#5c4eff] text-center">Enquiries & Visits</h2>

      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        <button className={tabStyle("enquiries")} onClick={() => setActiveTab("enquiries")}>
           Enquiries
        </button>
        <button className={tabStyle("scheduled")} onClick={() => setActiveTab("scheduled")}>
           Scheduled Visits
        </button>
        <button className={tabStyle("allVisits")} onClick={() => setActiveTab("allVisits")}>
           All Visits
        </button>
      </div>

      <div className="bg-gray-50 p-5 rounded-xl border shadow">{renderContent()}</div>
    </div>
  );
};

export default EnquiriesSeller;
