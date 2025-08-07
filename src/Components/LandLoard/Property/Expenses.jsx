import React, { useState } from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";

const Expenses = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Electricity Bill - Green Residency",
      amount: "1200",
      date: "2025-08-01",
    },
    {
      id: 2,
      title: "Plumbing Repair - PG Room 2A",
      amount: "850",
      date: "2025-07-28",
    },
    {
      id: 3,
      title: "Water Tanker - Villa 3 Lake View",
      amount: "1500",
      date: "2025-08-02",
    },
    {
      id: 4,
      title: "AC Maintenance - Flat 402 Sky Heights",
      amount: "700",
      date: "2025-07-30",
    },
    {
      id: 5,
      title: "Cleaning Service - Lotus Hostel",
      amount: "600",
      date: "2025-07-27",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount || !formData.date) return;

    const newExpense = {
      ...formData,
      id: Date.now(),
    };

    setExpenses((prev) => [...prev, newExpense]);
    setFormData({ title: "", amount: "", date: "" });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FaMoneyCheckAlt /> Expenses
      </h2>
      <p className="text-gray-600 mb-4">
        Record and view all property-related expenses here.
      </p>

      {/* Expense Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow mb-6 space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Expense Title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add Expense
        </button>
      </form>

      {/* Expense List */}
      {expenses.length > 0 ? (
        <div className="bg-white rounded shadow p-4">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Title</th>
                <th className="text-left p-2">Amount</th>
                <th className="text-left p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id} className="border-b">
                  <td className="p-2">{expense.title}</td>
                  <td className="p-2">₹{expense.amount}</td>
                  <td className="p-2">{expense.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No expenses added yet.</p>
      )}
    </div>
  );
};

export default Expenses;
