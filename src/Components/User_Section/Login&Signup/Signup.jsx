import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";
import baseurl from "../../../../BaseUrl.js";
import { useNavigate } from "react-router-dom";
function Signup({ onClose }) {
  const { user, login } = useAuth(); // user already has phone & role
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    aadhaar: "",
    pan: "",
    address: "",
    pinCode: "",
    state: "",
    dob: "",
    gender: "",
  });

  const [profilePhoto, setProfilePhoto] = useState(null);

  const navigate = useNavigate();
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
    formData.append("mobile", user?.phone || "");
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
        `${baseurl}/landlord/register`, // Ensure this is the correct endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`, // ensure token is present in context
          },
        }
      );

      if (res.status === 200) {
        const updatedUser = {
          ...user,
          ...form,
          name: fullName,
          isRegistered: true,
        };
        login(updatedUser); // update context
        const token = res.data.token; // Assuming the token is returned in the response
        localStorage.setItem("token", token); // Store token in localStorage
        navigate("/landlord"); 
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Error while registering. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center text-[#183c2c] mb-6">
          Complete Your Signup ({user?.role || "User"})
        </h2>

        <form onSubmit={handleSignup} encType="multipart/form-data">
          <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="form-input" />
          <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="form-input" />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="form-input" />
          <input type="text" name="aadhaar" placeholder="Aadhaar" value={form.aadhaar} onChange={handleChange} className="form-input" />
          <input type="text" name="pan" placeholder="PAN" value={form.pan} onChange={handleChange} className="form-input" />
          <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} className="form-input" />
          <input type="text" name="pinCode" placeholder="Pin Code" value={form.pinCode} onChange={handleChange} className="form-input" />
          <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} className="form-input" />
          <input type="date" name="dob" placeholder="DOB" value={form.dob} onChange={handleChange} className="form-input" />
          <select name="gender" value={form.gender} onChange={handleChange} className="form-input">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label className="block text-sm text-gray-700 mt-3 mb-1">Profile Photo</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} className="form-input" />

          <button type="submit" className="w-full bg-[#5C4EFF] text-white py-2 rounded-md hover:bg-[#4b3edd] mt-4">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
