import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";
import baseurl from "../../../../BaseUrl.js";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { user, login } = useAuth();
  const [isOpen, setIsOpen] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    aadhaar: "",
    mobile: "",
    pan: "",
    address: "",
    pinCode: "",
    state: "",
    dob: "",
    gender: "",
  });

  const [profilePhoto, setProfilePhoto] = useState(null);
  const navigate = useNavigate();

  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const fullName = `${form.firstName} ${form.lastName}`;

    if (!fullName || !form.email || !form.aadhaar || !form.pan) {
      alert("Please fill all required fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", fullName);
    formData.append("email", form.email);
    formData.append("mobile", form?.mobile);
    formData.append("aadhaar", form.aadhaar);
    formData.append("pan", form.pan);
    formData.append("address", form.address);
    formData.append("pinCode", form.pinCode);
    formData.append("state", form.state);
    formData.append("dob", form.dob);
    formData.append("gender", form.gender);
    if (profilePhoto) {
      formData.append("profilePhoto", profilePhoto);
    }

    try {
      const res = await axios.post(
        `${baseurl}/landlord/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 201) {
        const updatedUser = {
          ...user,
          ...form,
          name: fullName,
          isRegistered: true,
        };
        login(updatedUser);
        const token = res.data.token;
        localStorage.setItem("token", token);
        navigate("/landlord");
        closeModal();
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Error while registering. Please try again.");
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]"
          onClick={closeModal}
        >
          <div
            className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-8 relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl transition"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-center text-[#183c2c] mb-6">
              Complete Your Registration
            </h2>
            <form
              onSubmit={handleSignup}
              encType="multipart/form-data"
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  className="input-field"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="input-field"
              />
               <input
                type="mobile"
                name="mobile"
                placeholder="mobile "
                value={form.mobile}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="aadhaar"
                placeholder="Aadhaar Number"
                value={form.aadhaar}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="pan"
                placeholder="PAN Number"
                value={form.pan}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="address"
                placeholder="Full Address"
                value={form.address}
                onChange={handleChange}
                className="input-field"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="pinCode"
                  placeholder="Pin Code"
                  value={form.pinCode}
                  onChange={handleChange}
                  className="input-field"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={form.state}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  className="input-field"
                />
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Profile Photo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="block w-full text-sm text-gray-500
                             file:mr-4 file:py-2 file:px-4
                             file:rounded-lg file:border-0
                             file:text-sm file:font-semibold
                             file:bg-[#5C4EFF] file:text-white
                             hover:file:bg-[#4b3edd]
                             cursor-pointer"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#5C4EFF] text-white py-3 rounded-lg font-medium hover:bg-[#4b3edd] transition duration-300"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;