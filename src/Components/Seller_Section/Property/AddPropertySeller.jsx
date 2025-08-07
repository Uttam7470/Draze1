import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const amenitiesList = ["WiFi",
  "Parking",
  "Security",
  "Power Backup",
  "Water Supply",
  "Lift",
  "Garden",
  "CCTV",
  "Housekeeping"];

const AddPropertySeller = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    title: "",
    type: "",
    price: "",
    description: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    bedroom: "",
    bathroom: "",
    amenities: [],
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const toggleAmenity = (amenity) => {
    setForm((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("properties")) || [];
    localStorage.setItem("properties", JSON.stringify([...saved, form]));
    alert("✅ Property added successfully!");
    setForm({
      title: "",
      type: "",
      price: "",
      description: "",
      images: "",
      address: "",
      city: "",
      pincode: "",
      state: "",
      bedroom: "",
      bathroom: "",
      amenities: [],
      email: "",
      contact: "",
    });
    setStep(1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  return (
    <div className="min-h-screen pt-24 px-4 bg-gray-100 flex justify-center">
      <div className="bg-white w-full max-w-3xl p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          Add Property (Step {step}/3)
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Property Title"
                className="w-full p-3 border rounded"
                required
              />
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full p-3 border rounded text-gray-700"
                required
              >
                <option value="">Select Property Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Flat">Flat</option>
                <option value="PG">PG</option>
                <option value="Hostel">Hostel</option>
              </select>

              <input
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                placeholder="Price (₹)"
                className="w-full p-3 border rounded"
                required
              />
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full p-3 border rounded"
                rows="4"
                required
              />
              <input
                name="images"
                value={form.images}
                onChange={handleChange}
                placeholder="Enter image URLs (comma-separated)"
                className="w-full p-3 border rounded"
                required
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full p-3 border rounded"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="p-3 border rounded"
                  required
                />
                <input
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="p-3 border rounded"
                  required
                />
              </div>
              <input
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                className="w-full p-3 border rounded"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="bedroom"
                  value={form.bedroom}
                  onChange={handleChange}
                  placeholder="Bedrooms"
                  type="number"
                  className="p-3 border rounded"
                  required
                />
                <input
                  name="bathroom"
                  value={form.bathroom}
                  onChange={handleChange}
                  placeholder="Bathrooms"
                  type="number"
                  className="p-3 border rounded"
                  required
                />
              </div>
              <div>
                <p className="mb-2 font-medium text-gray-700">Amenities</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {amenitiesList.map((item) => (
                    <button
                      type="button"
                      key={item}
                      className={`flex items-center justify-between p-2 border rounded hover:bg-indigo-100 transition ${
                        form.amenities.includes(item)
                          ? "bg-indigo-200 border-indigo-500"
                          : ""
                      }`}
                      onClick={() => toggleAmenity(item)}
                    >
                      {item}
                      {form.amenities.includes(item) && (
                        <FaCheckCircle className="text-green-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                className="w-full p-3 border rounded"
                required
              />
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Contact Number"
                type="tel"
                className="w-full p-3 border rounded"
                required
              />
            </div>
          )}

          <div className="flex justify-between pt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Submit Property
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPropertySeller;
