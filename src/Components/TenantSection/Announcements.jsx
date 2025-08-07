import React from "react";

const announcements = [
  {
    id: 1,
    title: "Water Supply Maintenance",
    message:
      "Water supply will be interrupted on 5th August from 10 AM to 2 PM due to maintenance work.",
    date: "2025-07-28",
  },
  {
    id: 2,
    title: "Fire Drill Notice",
    message:
      "A fire safety drill will be conducted on 3rd August at 11 AM. All tenants are requested to participate.",
    date: "2025-07-25",
  },
];

const TenantAnnouncements = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Announcements</h2>

      {announcements.length === 0 ? (
        <p className="text-gray-500">No announcements at this time.</p>
      ) : (
        <div className="space-y-4">
          {announcements.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow p-5 border-l-4 border-blue-600"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <p className="text-gray-700">{item.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TenantAnnouncements;
