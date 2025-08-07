import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const hotelbanqute = [
  {
    id: 1,
    propertyType: "hotel",
    name: "Regal Palace Hotel",
    image: "https://r1imghtlak.mmtcdn.com/47bd2b486f3411e798fc0a4cef95d023.jpg",
    city: "Mumbai",
    location: "Andheri West",
    rating: 4.5,
    pricePerNight: 4200,
    amenities: ["Free Wi-Fi", "Pool", "Parking", "Multi-cuisine Restaurant"],
    status: "available",
    contact: "+91-9000000001",
    description: "Elegant hotel with premium rooms and modern amenities for leisure and business stays."
  },
  {
    id: 2,
    propertyType: "hotel",
    name: "Urban Link Hotel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKe9c2rBhT-tpCJtNHmEx6X52syXmBCqyn3DFqrhaCNsGPS3OzJl9pZ0IDhqrSRgv1PXD5&s",
    city: "Delhi",
    location: "Dwarka",
    rating: 4.0,
    pricePerNight: 3100,
    amenities: ["AC Rooms", "Room Service", "Lift", "Wi-Fi"],
    status: "available",
    contact: "+91-9000000002",
    description: "Affordable stay option with cozy rooms and business-friendly services."
  },
     {
    id: 101,
    propertyType: "banquet",
    name: "Crystal Banquet Hall",
    image: "https://media.gettyimages.com/id/1133167868/photo/decorated-wedding-hall-with-stage.jpg?s=612x612&w=0&k=20&c=DexYtEw29w1CGrVI7QIyRGg8jUBWlq8rttkrrGqfQmk=",
    city: "Mumbai",
    location: "Andheri East",
    capacity: 200,
    pricePerEvent: 80000,
    amenities: ["Stage", "Catering", "Lighting", "Valet Parking"],
    status: "available",
    contact: "+91-9000000101",
    description: "Spacious banquet hall perfect for weddings, receptions, and corporate events."
  },
  {
    id: 102,
    propertyType: "banquet",
    name: "Emerald Celebration Hall",
    image: "https://media.gettyimages.com/id/2157918418/photo/the-modern-interior-of-the-event-hall-ready-for-a-wedding-reception.jpg?s=612x612&w=0&k=20&c=JLjpzl1VY_GMy-8bXrEds7_Bb0F1rbYdwaieEhTWzYs=",
    city: "Delhi",
    location: "Janakpuri",
    capacity: 150,
    pricePerEvent: 60000,
    amenities: ["AC Hall", "Sound System", "Decoration", "Catering"],
    status: "available",
    contact: "+91-9000000102",
    description: "Modern banquet venue ideal for family functions and office parties."
  }
];

function Hotel_Banqute() {
  const [loading, setLoading] = useState(true);
  const [filteredHotels, setFilteredHotels] = useState(hotelbanqute);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [capacityRange, setCapacityRange] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo({ top: 0, behavior: "smooth" });

    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleFilter = () => {
    let filtered = hotels.filter((hotel) => {
      const matchesSearch =
        hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCity = selectedCity ? hotel.city === selectedCity : true;

      const matchesCapacity = (() => {
        const capacity = hotel.banquet.capacity;
        if (capacityRange === "0-100") return capacity <= 100;
        if (capacityRange === "101-150") return capacity > 100 && capacity <= 150;
        if (capacityRange === "151+") return capacity > 150;
        return true;
      })();

      const matchesPrice = (() => {
        const price = hotel.banquet.pricePerEvent;
        if (priceRange === "0-40000") return price <= 40000;
        if (priceRange === "40001-70000") return price > 40000 && price <= 70000;
        if (priceRange === "70001+") return price > 70000;
        return true;
      })();

      return matchesSearch && matchesCity && matchesCapacity && matchesPrice;
    });

    setFilteredHotels(filtered);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSelectedCity("");
    setCapacityRange("");
    setPriceRange("");
    setFilteredHotels(hotels);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f8fa] py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6"
        data-aos="fade-down"
      >
        Hotels with Banquet Halls
      </h2>

     

      <div
  className="max-w-5xl mx-auto mb-8 
             bg-white/30 backdrop-blur-md 
             border border-blue-500/50 shadow-lg
             rounded-xl p-4
             flex flex-col items-center gap-4"
  style={{
    boxShadow: "0 0 12px rgba(59,130,246,0.6)",
    minHeight: "80px",
  }}
>
  <div className="flex flex-wrap justify-center gap-4 w-full">
    <input
      type="text"
      placeholder="Search by name, city, or location"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border border-blue-500/50 p-2 rounded w-56 bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <select
      value={selectedCity}
      onChange={(e) => setSelectedCity(e.target.value)}
      className="border border-blue-500/50 p-2 rounded w-44 bg-white/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All Cities</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Delhi">Delhi</option>
      <option value="Kolkata">Kolkata</option>
      <option value="Bangalore">Bangalore</option>
    </select>

    <select
      value={capacityRange}
      onChange={(e) => setCapacityRange(e.target.value)}
      className="border border-blue-500/50 p-2 rounded w-44 bg-white/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All Capacities</option>
      <option value="0-100">Up to 100</option>
      <option value="101-150">101 - 150</option>
      <option value="151+">151+</option>
    </select>

    <select
      value={priceRange}
      onChange={(e) => setPriceRange(e.target.value)}
      className="border border-blue-500/50 p-2 rounded w-44 bg-white/50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All Prices</option>
      <option value="0-40000">₹0 - ₹40K</option>
      <option value="40001-70000">₹40K - ₹70K</option>
      <option value="70001+">₹70K+</option>
    </select>
  </div>

  {/* ✅ Buttons Below */}
  <div className="flex gap-4 mt-2">
    <button
      onClick={handleFilter}
      className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 shadow-lg"
    >
      Search
    </button>

    <button
      onClick={handleReset}
      className="bg-gray-400 text-white px-5 py-2 rounded hover:bg-gray-500"
    >
      Reset
    </button>
  </div>
</div>


      {/* ✅ Hotels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10 mt-6">
        {filteredHotels.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No hotels found.
          </p>
        ) : (
          filteredHotels.map((hotel, index) => (
            <Link
  to={`/hotelbanqute/${hotel.id}`}
  state={{ hotel }}
  key={hotel.id}
  data-aos="fade-up"
  data-aos-delay={index * 100}
>
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
    <img
      src={hotel.image || "https://via.placeholder.com/400x300?text=No+Image"}
      alt={hotel.name}
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-blue-700">
        {hotel.name}
      </h3>
      <p className="text-sm text-gray-600">
        {hotel.location}, {hotel.city}
      </p>
      <p className="mt-2 text-gray-700">
        {hotel.description.substring(0, 50)}...
      </p>
    </div>
  </div>
</Link>

          ))
        )}
      </div>
    </div>
  );
}

export default Hotel_Banqute;