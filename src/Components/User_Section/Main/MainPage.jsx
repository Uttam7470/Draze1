



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardCarousel from "../Card_Carousel/CardCarousel";
import PGHostelSection from "./PGHostelSection";
import {
  FaQuoteLeft,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaHome,
  FaBed,
  FaRulerCombined,
  FaUser,
  FaRupeeSign,
  FaCheckCircle,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./RentalSlider.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Main.css";
import pg_hostelData from "./pg-hostel";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

function MainPage() {

  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

 const [pgHostelData, setPgHostelData] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("https://api.nearprop.com/api/properties");
        const data = await response.json();
        setProperties(data?.data || []);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
    
  }, []);






  const rentProperties = [
    {
      id: 1,
      name: "Greenview PG",
      title: "Modern 2BHK Apartment",
      location: "Koramangala, Bangalore",
      rent: 9500,
      area: 450,
      type: "PG",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      description: "Fully furnished PG with Wi-Fi, meals, and daily cleaning.",
    },
    {
      id: 2,
      name: "Urban Nest Flats",
      title: "Luxury Studio Apartment",
      location: "Andheri West, Mumbai",
      rent: 23000,
      area: 850,
      type: "1BHK Apartment",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      description: "1BHK apartment with modular kitchen and security services.",
    },
    {
      id: 3,
      name: "Cozy Hostel",
      title: "Family 3BHK Flat",
      location: "Sector 62, Noida",
      rent: 7000,
      area: 300,
      type: "Hostel",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&auto=format&fit=crop&q=60",
      description:
        "Affordable hostel accommodation for students and professionals.",
    },
    {
      id: 4,
      name: "Lake View Rooms",
      location: "Salt Lake, Kolkata",
      title: "Cozy 1BHK in City Center",
      rent: 12000,
      area: 600,
      type: "Room",
      image:
        "https://media.istockphoto.com/id/1438437647/photo/christmas-celebration-at-luxury-lake-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=vBeyQjLc4DwX9qRa3SqtfdnxjH2Oj47buIRVGn3Xn38=",
      description:
        "Spacious room near lake with natural light and attached washroom.",
    },
    {
      id: 5,
      name: "Studio Stay",
      location: "Gachibowli, Hyderabad",
      title: "PG for Girls - AC Rooms",
      rent: 18000,
      area: 550,
      type: "Studio Apartment",
      image:
        "https://images.unsplash.com/photo-1610224353475-f589ea4993f6?w=600&auto=format&fit=crop&q=60",
      description:
        "Modern studio apartment with fully equipped kitchen and AC.",
    },
    {
      id: 6,
      name: "Girls PG Heaven",
      title: "Modern 2BHK Apartment",
      location: "Viman Nagar, Pune",
      rent: 8500,
      area: 400,
      type: "PG",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      description: "Safe and hygienic girls PG with food and laundry services.",
    },
    {
      id: 7,
      name: "Greenview PG",
      title: "Modern 2BHK Apartment",
      location: "Koramangala, Bangalore",
      rent: 9500,
      area: 450,
      type: "PG",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      description: "Fully furnished PG with Wi-Fi, meals, and daily cleaning.",
    },
    {
      id: 8,
      name: "Urban Nest Flats",
      title: "Luxury Studio Apartment",
      location: "Andheri West, Mumbai",
      rent: 23000,
      area: 850,
      type: "1BHK Apartment",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      description: "1BHK apartment with modular kitchen and security services.",
    },
  ];

  const hotelBanquetData = [
    {
      id: 1,
      name: "Sunrise Hotel",
      images: [
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1721739225219-87ee747f7b1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      city: "Indore",
      location: "Vijay Nagar",
      propertyType: "Hotel",
      bedrooms: 2,
      price: 4500,
      amenities: ["Wi-Fi", "Food", "Laundry"],
      tag: "Featured",
    },
    {
      id: 2,
      name: "Royal Banquet",
      images: [
        "https://www.shutterstock.com/image-photo/banquet-hall-tables-chairs-set-600nw-2438817641.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeexhcweyKTMM6WX3WQsgC-eWVMC6ihRUEBPKrgUIRb742BhxZxV64d9aF_7pTmqQEhXA&usqp=CAU",
      ],
      city: "Bhopal",
      location: "MP Nagar",
      propertyType: "Banquet",
      bedrooms: 0,
      price: 25000,
      amenities: ["AC", "Catering", "Stage"],
      tag: "Sale",
    },
    {
      id: 3,
      name: "Royal Banquet",
      images: [
        "https://media.istockphoto.com/id/584573082/photo/wedding-hall-or-other-function-facility-set-for-fine-dining.jpg?s=612x612&w=0&k=20&c=Ox9T0JIeGaCXPs_EEoAy5Uc98mY_kCnP9pTz06tb6iI=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40qF-BcHGarsjuLJdEsiOLfzKBAWOOJ_9T0UAikdPapeSJnblTW2TLjIGwVux_40Ke74&usqp=CAU",
      ],
      city: "Bhopal",
      location: "MP Nagar",
      propertyType: "Banquet",
      bedrooms: 0,
      price: 25000,
      amenities: ["AC", "Catering", "Stage"],
      tag: "Sale",
    },
  ];

  const exploreProperties = [
    {
      id: 101,
      name: "Elegant Villa",
      images: [
        "https://www.shutterstock.com/image-illustration/expensive-private-villa-swimming-pool-260nw-1070624348.jpg",
        "https://www.shutterstock.com/image-photo/modern-luxury-villa-swimming-pool-260nw-676661263.jpg",
      ],
      city: "Indore",
      location: "Green Park",
      propertyType: "Sell",
      price: 8500000,
      amenities: ["Garden", "Garage", "Balcony"],
      tag: "For Sale",
    },
    {
      id: 102,
      name: "Cozy Apartment",
      images: [
        "https://media.gettyimages.com/id/184357099/photo/luxury-apartments.jpg?s=612x612&w=0&k=20&c=PQv3tNVaCHhfMtVKJ8nQXPEhAj9iUnQGU-0qxq1SOS8=",
        "https://media.gettyimages.com/id/165581203/photo/condominiums-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=hU7oCjrNWmdekD3quBx-s_k0HxVpCOLxsW7uF0imyTg=",
      ],
      city: "Bhopal",
      location: "New Market",
      propertyType: "Rent",
      price: 12500,
      amenities: ["AC", "Furnished", "Parking"],
      tag: "Featured",
    },
    {
      id: 103,
      name: "Office Space",
      images: [
        "https://plus.unsplash.com/premium_photo-1661931749081-23d69ddb62d1?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661934685187-4fe3595dc2c7?q=80&w=1221&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      city: "Ujjain",
      location: "Freeganj",
      propertyType: "Commercial",
      price: 45000,
      amenities: ["Conference Room", "Lift", "Security"],
      tag: "Hot",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ravi Kumar",
      role: "Tenant - PG",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback:
        "Great experience! I found a clean and affordable PG within 24 hours. Highly recommend this platform.",
    },
    {
      id: 2,
      name: "Meena Joshi",
      role: "Landlord - Hostel",
      avatar: "https://randomuser.me/api/portraits/women/58.jpg",
      feedback:
        "As a landlord, it was super easy to list my property. Got multiple inquiries within a day!",
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Banquet Owner",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
      feedback:
        "The platform made it easy to promote my banquet hall. Bookings have significantly increased!",
    },
    {
      id: 4,
      name: "Neha Verma",
      role: "Flat Renter",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback:
        "I loved the user interface and how fast I could schedule property visits. Kudos to the team!",
    },
    {
      id: 5,
      name: "Suraj Singh",
      role: "Student - Hostel",
      avatar: "https://randomuser.me/api/portraits/men/21.jpg",
      feedback:
        "I moved from a different city and found the perfect hostel within budget. Everything was transparent!",
    },
    {
      id: 6,
      name: "Pooja Thakur",
      role: "Banquet Customer",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      feedback:
        "Booking a banquet for my brother’s wedding was so easy here. Got a great deal and quick support!",
    },
  ];

  const agents = [
    {
      id: 1,
      name: "Rahul Mehta",
      role: "Senior Property Advisor",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      phone: "+91 9876543210",
      email: "rahul@estatehub.com",
      linkedin: "https://linkedin.com/in/rahulmehta",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Hostel Specialist",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      phone: "+91 8123456789",
      email: "priya@estatehub.com",
      linkedin: "https://linkedin.com/in/priyasharma",
    },
    {
      id: 3,
      name: "Amit Chauhan",
      role: "Banquet Coordinator",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
      phone: "+91 9988776655",
      email: "amit@estatehub.com",
      linkedin: "https://linkedin.com/in/amitchauhan",
    },
  ];

  const cities = [
    {
      id: 1,
      name: "Indore",
      description: "Cleanest city in India with vibrant lifestyle.",
      image:
        "https://img.freepik.com/free-photo/indian-city-buildings-scene_23-2151823136.jpg?ga=GA1.1.586528727.1721893114&semt=ais_hybrid&w=740",
    },
    {
      id: 2,
      name: "Bhopal",
      description: "City of Lakes and rich heritage sites.",
      image:
        "https://img.freepik.com/premium-photo/buildings-city-against-sky_1048944-3332402.jpg?ga=GA1.1.586528727.1721893114&semt=ais_hybrid&w=740",
    },
    {
      id: 3,
      name: "Mumbai",
      description: "The financial capital and city of dreams.",
      image:
        "https://img.freepik.com/free-photo/city-skyline-with-residential-district_1359-108.jpg?ga=GA1.1.586528727.1721893114&semt=ais_hybrid&w=740",
    },
    {
      id: 4,
      name: "Delhi",
      description: "The heart of India with history and modern life.",
      image:
        "https://img.freepik.com/free-photo/glittering-glass-aluminium-cladded-skyscrapers-monsoon-mumbais-lower-parel-worli-areas_469504-19.jpg?ga=GA1.1.586528727.1721893114&semt=ais_hybrid&w=740",
    },
    // {
    //   id: 5,
    //   name: "Delhi",
    //   description: "The heart of India with history and modern life.",
    //   image: "https://source.unsplash.com/600x400/?delhi,city",
    // },
  ];

  const images = [
    "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/2204602504/photo/luxurious-lakeside-residence-with-manicured-gardens-and-dock-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=lXYF230RtZORap6gkZwcTsh1KPKeqIh1fKmNZfMzFZI=",
    "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww",
    "https://media.istockphoto.com/id/187324934/photo/repetitive-neighborhood.jpg?s=612x612&w=0&k=20&c=EdV51hq5ynKvncQ8rEHFQjzrsU0rMx7T-CAcPo859B8=",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.01);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const particles = Array.from({ length: 30 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 4 + 2,
    speed: Math.random() * 0.05 + 0.02,
  }));

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 40;
    const y = (e.clientY / innerHeight - 0.5) * 40;
    setMousePos({ x, y });
  };

  const shapes = [
    { size: 50, top: "10%", left: "20%", color: "#5C4EFF" },
    { size: 80, top: "30%", left: "70%", color: "#FF7A59" },
    { size: 40, top: "60%", left: "10%", color: "#00C9A7" },
    { size: 60, top: "50%", left: "50%", color: "#FFD93D" },
  ];

  const positions = [
    { top: "10%", left: "10%" },
    { top: "10%", left: "70%" },
    { top: "60%", left: "70%" },
    { top: "60%", left: "10%" },
  ];

  const durationPerStep = 3;
  const totalDuration = positions.length * durationPerStep;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="pt-16 h-[90vh] bg-center bg-no-repeat flex items-center justify-center text-white text-center relative"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1223059837/photo/cityscape-of-a-modern-residential-area-with-apartment-buildings-new-green-urban-landscape-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=6xDsp8tz1LG0GBNe6OkZ70JFK4DdS7EinETappvzef4=')`,
          backgroundSize: "cover",
          opacity: "1",
        }}
      >
        <div className="bg-black/40 absolute inset-0" />
        <div className="relative z-10 px-6" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Draze Living
          </h1>
          <p className="text-lg md:text-2xl max-w-xl mx-auto mb-6">
            Discover rental properties, PGs, hostels & more — designed for your
            comfort.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-20">
            <button
              onClick={() => navigate("/rent")}
              className="glow-border-btn"
              style={{ padding: "10px 24px" }}
            >
              For Rent
            </button>
            <button
              onClick={() => navigate("/sell")}
              className="glow-border-btn"
            >
              For Sell
            </button>
            <button
              onClick={() => navigate("/hotels")}
              className="glow-border-btn"
            >
              Hotel
            </button>
            <button
              onClick={() => navigate("/banqutes")}
              className="glow-border-btn"
            >
              Banquet
            </button>
            <button
              onClick={() => navigate("/pg")}
              className="glow-border-btn"
              style={{ padding: "10px 40px" }}
            >
              PG
            </button>
            <button
              onClick={() => navigate("/hostel")}
              className="glow-border-btn"
              style={{ padding: "10px 30px" }}
            >
              Hostel
            </button>
          </div>
        </div>
      </section>

      {/* PG & Hostel Section */}

      {/* <section className="py-8 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-indigo-500 mb-8" data-aos="fade-up">
          Affordable PGs & Hostels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pg_hostelData.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden text-left"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4 space-y-3">
                <h3 className="text-xl font-bold text-center text-[#5C4EFF]">{item.name}</h3>
                <p className="flex items-center text-gray-600 text-sm gap-2">
                  <FaMapMarkerAlt className="text-[#5C4EFF]" />
                  {item.city}, {item.location}
                </p>
                <p className="flex items-center text-sm gap-2">
                  <FaHome className="text-[#5C4EFF]" />
                  <span className="font-semibold">Type:</span> {item.propertyType}
                </p>
                <p className="flex items-center text-sm gap-2">
                  <FaBed className="text-[#5C4EFF]" />
                  <span className="font-semibold">Bedrooms:</span> {item.bedrooms}
                </p>
                <p className="flex items-center text-sm gap-2">
                  <FaRupeeSign className="text-[#5C4EFF]" />
                  <span className="font-semibold">Price:</span> ₹{item.price}/month
                </p>
                <div className="flex items-start gap-2 text-sm">
                  <FaCheckCircle className="mt-1 text-[#5C4EFF]" />
                  <div>
                    <span className="font-semibold">Amenities:</span> {item.amenities.join(", ")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* <section className="py-8 px-6 bg-gray-50 text-center">
        <h2
          className="text-3xl font-bold text-indigo-500 mb-8"
          data-aos="fade-up"
        >
          Affordable PGs & Hostels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pg_hostelData.map((item, index) => (
            <Link
              to={`/${item.propertyType}/${item.id}`}
              state={item}
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden text-left"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-3">
                <h3 className="text-xl font-bold text-center text-[#5C4EFF]">
                  {item.name}
                </h3>
                <p className="flex items-center text-gray-600 text-sm gap-2">
                  <FaMapMarkerAlt className="text-[#5C4EFF]" />
                  {item.city}, {item.location}
                </p>
                <p className="flex items-center text-sm gap-2">
                  <FaHome className="text-[#5C4EFF]" />
                  <span className="font-semibold">Type:</span>{" "}
                  {item.propertyType}
                </p>
                <p className="flex items-center text-sm gap-2">
                  <FaBed className="text-[#5C4EFF]" />
                  <span className="font-semibold">Bedrooms:</span>{" "}
                  {item.bedrooms}
                </p>
                <p className="flex items-center text-sm gap-2">
                  <FaRupeeSign className="text-[#5C4EFF]" />
                  <span className="font-semibold">Price:</span> ₹{item.price}
                  /month
                </p>
                <div className="flex items-start gap-2 text-sm">
                  <FaCheckCircle className="mt-1 text-[#5C4EFF]" />
                  <div>
                    <span className="font-semibold">Amenities:</span>{" "}
                    {item.amenities.join(", ")}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section> */}

  <PGHostelSection />
    

      {/* Popular Rental Properties */}
      <section className="py-8 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-indigo-500 mb-8">
          Popular Rental Properties
        </h2>
        <div className="max-w-6xl mx-auto relative">
          <CardCarousel items={rentProperties} />
        </div>
      </section>

      {/* <section className="py-16 bg-gray-100">
     
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Explore Cities</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Discover properties in top cities tailored for lifestyle, work, and comfort.
        </p>
      </div>

     
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {cities.map((city) => (
          <div
            key={city.id}
            className="relative group rounded-xl shadow-lg overflow-hidden"
            style={{ width: "250px", height: "350px" }}
          >
            
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            
            <div className="absolute inset-0">
              <div className="absolute bottom-0 left-0 w-full h-0 bg-black bg-opacity-60 group-hover:h-1/2 transition-all duration-500 ease-in-out overflow-hidden">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-lg font-semibold">{city.name}</h3>
                  <p className="text-sm">{city.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
       </section> */}

      <section className="py-16 bg-gray-100">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Explore Cities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Discover properties in top cities tailored for lifestyle, work, and
            comfort.
          </p>
        </div>

        {/* City Cards */}
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {cities.map((city) => (
            <div
              key={city.id}
              className="relative group rounded-xl shadow-lg overflow-hidden"
              style={{ width: "250px", height: "350px" }}
            >
              {/* City Image */}
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Slide-Up Overlay */}
              <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-black bg-opacity-60 group-hover:h-1/2 transition-all duration-500 ease-in-out overflow-hidden flex items-center justify-center">
                  <div className="text-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 px-4">
                    <h3 className="text-lg font-semibold">{city.name}</h3>
                    <p className="text-sm">{city.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hotels and Banquet Halls */}

      
{/* 
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-indigo-500 mb-4">
              Discover Hotels and Banquet Hall
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated selection of premium properties, showcasing
              the best in residential and commercial real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {hotelBanquetData.map((item) => (
              <Link
                key={item.id}
                to={`/${item.propertyType.toLowerCase()}/${item.id}`}
                state={{ item }}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border block"
              >
              
                <div className="relative w-full h-48">
                  <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded z-10 shadow-lg">
                    {item?.tag || "Featured"}
                  </div>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2500 }}
                    modules={[Autoplay]}
                    className="w-full h-48"
                  >
                    {(item.images && item.images.length > 0
                      ? item.images
                      : ["https://via.placeholder.com/400x200?text=No+Image"]
                    ).map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={img}
                          alt={`${item.name}-${i}`}
                          className="w-full h-48 object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

           
                <div className="p-4 space-y-1">
                  <h3 className="text-lg font-bold text-blue-700">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <FaMapMarkerAlt /> {item.location}, {item.city}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Type:</span>{" "}
                    {item.propertyType}
                  </p>

                
                  {item.bedrooms && item.bedrooms > 0 && (
                    <p className="text-sm flex items-center gap-1">
                      <FaBed /> {item.bedrooms} Bedrooms
                    </p>
                  )}

             
                  <p className="text-sm flex items-center gap-1">
                    <FaRupeeSign /> ₹
                    {item.price
                      ? item.price.toLocaleString()
                      : item.banquet?.pricePerEvent
                      ? item.banquet.pricePerEvent.toLocaleString()
                      : "N/A"}
                  </p>

               
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.amenities &&
                      item.amenities.map((amenity, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {amenity}
                        </span>
                      ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-indigo-500 mb-4">
            Discover Hotels and Banquet Hall
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of premium properties, showcasing
            the best in residential and commercial real estate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hotelBanquetData.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                navigate(`/hotel-banquet/${item.id}`, { state: { hotel: item } })
              }
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border cursor-pointer"
            >
              <div className="relative w-full h-48">
                <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded z-10 shadow-lg">
                  {item?.tag || "Featured"}
                </div>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 2000 }}
                  pagination={false}
                  navigation={false}
                  modules={[Autoplay]}
                  className="w-full h-48"
                >
                  {item.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`${item.name}-${i}`}
                        className="w-full h-48 object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="text-lg font-bold text-blue-700">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm flex items-center gap-1">
                  <FaMapMarkerAlt /> {item.location}, {item.city}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Type:</span>{" "}
                  {item.propertyType}
                </p>
                {item.bedrooms > 0 && (
                  <p className="text-sm flex items-center gap-1">
                    <FaBed /> {item.bedrooms} Bedrooms
                  </p>
                )}
                <p className="text-sm flex items-center gap-1">
                  <FaRupeeSign /> ₹{item.price.toLocaleString()}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.amenities.map((amenity, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       </section> */}

      {/* Explore Properties */}

      <section className="py-10 px-6 bg-[#f8f9fb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-indigo-500 mb-4">
              Explore Properties
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover a variety of premium homes, apartments, and commercial
              spaces designed for your lifestyle and business needs.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-gray-500">Loading properties...</p>
          ) : (
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              loop
              autoplay={{ delay: 3000 }}
              navigation
              modules={[Autoplay, Navigation]}
              className="pb-10"
            >
              {properties.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    className="bg-white rounded-xl shadow hover:shadow-lg transition border h-[480px] flex flex-col cursor-pointer"
                    onClick={() =>
                      navigate(`/property/${item.id}`, {
                        state: { property: item },
                      })
                    }
                  >
                    {/* Image Slider */}
                    <div className="relative w-full h-[200px] overflow-hidden">
                      <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded z-10 shadow-lg">
                        {item?.label || "Featured"}
                      </div>

                      {item.imageUrls && item.imageUrls.length > 0 ? (
                        <Swiper
                          spaceBetween={10}
                          slidesPerView={1}
                          loop
                          autoplay={{ delay: 2000 }}
                          modules={[Autoplay]}
                          className="w-full h-full"
                        >
                          {item.imageUrls.map((img, i) => (
                            <SwiperSlide key={i}>
                              <img
                                src={
                                  img.startsWith("http")
                                    ? img
                                    : `https://api.nearprop.com${img}`
                                }
                                alt={`Property ${item.title} - ${i}`}
                                className="w-full h-full object-cover"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      ) : (
                        <img
                          src="https://via.placeholder.com/400x300?text=No+Image"
                          alt="No Image"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-blue-700 truncate">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm flex items-center gap-1">
                          <FaMapMarkerAlt className="text-blue-600" />
                          {item.address}, {item.city}
                        </p>
                        <p className="text-sm flex items-center gap-1 text-gray-600">
                          <FaHome /> Type: {item.type}
                        </p>
                        <p className="text-sm flex items-center gap-1 text-gray-600">
                          <FaRupeeSign /> ₹{item.price?.toLocaleString()}
                        </p>
                        <p className="text-sm flex items-center gap-1 text-gray-600">
                          <FaUser className="text-green-600" />
                          Owner: {item.owner?.name}
                        </p>
                        <p className="text-sm flex items-center gap-1 text-gray-600">
                          <FaRulerCombined className="text-purple-600" />
                          Area: {item.area} sqft
                        </p>
                      </div>

                      {/* <div className="flex flex-wrap gap-2 mt-2">
                        {(item.amenities || [])
                          .slice(0, 4)
                          .map((amenity, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                            >
                              {amenity}
                            </span>
                          ))}
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <div className="text-center mt-8">
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white uppercase tracking-wider font-semibold py-3 px-10 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
              onClick={() => navigate("/properties")}
            >
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* Trusted Agents */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-indigo-500 mb-4">
              Meet Our Trusted Agents
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals ready to guide you in every step of your
              property journey—whether you're looking to rent, buy, or
              celebrate.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center"
              >
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-white shadow-md -mt-14 mb-4 bg-white"
                />
                <h4 className="text-xl font-semibold text-gray-800">
                  {agent.name}
                </h4>
                <p className="text-sm text-gray-500">{agent.role}</p>
                <p className="text-gray-600 mt-2 italic text-sm">
                  “Here to make your property experience seamless.”
                </p>
                <div className="flex justify-center gap-4 mt-4 text-gray-600 text-lg">
                  <a
                    href={`tel:${agent.phone}`}
                    className="hover:text-blue-600"
                    title="Call"
                  >
                    <FaPhoneAlt />
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="hover:text-red-500"
                    title="Email"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href={agent.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700"
                    title="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-indigo-500">
              What Our Users Say
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Hear it from real users who found their dream property or the
              perfect tenant through us.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-md p-6 relative hover:shadow-lg transition"
              >
                <FaQuoteLeft className="text-yellow-500 text-2xl absolute top-4 left-4" />
                <p className="text-gray-700 text-sm mt-8 mb-4 italic">
                  "{testimonial.feedback}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section
        className="relative h-[400px] rounded-xl mx-6 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #1e3c72, #2a5298)",
              "linear-gradient(135deg, #6a11cb, #2575fc)",
              "linear-gradient(135deg, #11998e, #38ef7d)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            className="absolute w-32 h-32 object-cover rounded-lg border-4 border-white shadow-lg"
            style={{
              top: i < 2 ? "15%" : "60%",
              left: i % 2 === 0 ? "10%" : "75%",
              rotate: "45deg",
            }}
            animate={{
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              y: [0, i < 2 ? -15 : 15, 0],
              rotate: [45, 48, 45],
            }}
            transition={{ repeat: Infinity, duration: 3 + i }}
            whileHover={{ scale: 1.1 }}
          />
        ))}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
          style={{
            transform: `translate(${mousePos.x / 10}px, ${mousePos.y / 10}px)`,
          }}
        >
          <motion.h2
            className="text-4xl md:text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Start your journey with{" "}
            <span className="text-yellow-300">Draze Living</span>
          </motion.h2>
          <motion.p
            className="mt-3 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Find rentals, PGs & hostels like never before.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}

export default MainPage;



















