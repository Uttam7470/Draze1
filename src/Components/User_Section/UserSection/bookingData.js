// src/components/UserProfile/bookingsData.js

const bookingsData = {
  Rent: [
    { id: "RENT001", date: "2025-07-25", amount: 1500, status: "Confirmed" },
    { id: "RENT002", date: "2025-07-28", amount: 1700, status: "Pending" },
  ],
  Sell: [
    { id: "SELL001", date: "2025-07-22", amount: 750000, status: "Completed" },
  ],
  PG: [
    { id: "PG001", date: "2025-07-21", amount: 5000, status: "Cancelled" },
  ],
  Hostel: [
    { id: "HOS001", date: "2025-07-23", amount: 3000, status: "Confirmed" },
  ],
  Banquet: [
    { id: "BANQ001", date: "2025-07-26", amount: 10000, status: "Confirmed" },
  ],
};

export default bookingsData;
