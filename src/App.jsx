// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// // ✅ Context
// import { AuthProvider } from "./Components/User_Section/Context/AuthContext";

// // ✅ Main Site Layout Components
// import Navbar from "./Components/User_Section/Navbar/navbar";
// import Footer from "./Components/User_Section/Footer/footer";

// // ✅ Main Site Pages
// import MainPage from "./Components/User_Section/Main/MainPage";
// import AllProperty from "./Components/User_Section/AllProperty/AllProperty";
// import PropertyDetails from "./Components/User_Section/AllProperty/PropertyDetails";
// import PG from "./Components/User_Section/PG/PG";
// import PgDetails from "./Components/User_Section/PG/PgDetails";
// import Login from "./Components/User_Section/Login&Signup/Login";
// import Signup from "./Components/User_Section/Login&Signup/Signup";
// import RentProperty from "./Components/User_Section/RentProperty/RentProperty";
// import SellProperty from "./Components/User_Section/SellProperty/SellProperty";
// import Contact from "./Components/User_Section/Contact/Contact";
// import Hostel from "./Components/User_Section/Hostel/Hostel";
// import HostelDetail from "./Components/User_Section/Hostel/HostelDetail";
// import Hotel_Banqute from "./Components/User_Section/Hotel_Banqute/Hotel_Banqute";
// import Hotel_BanquteDetails from "./Components/User_Section/Hotel_Banqute/Hotel_BanquteDetails";
// import RentPropertyDetail from "./Components/User_Section/RentProperty/RentPropertyDetails";
// import SellPropertyDetail from "./Components/User_Section/SellProperty/SellPropertyDetail";

// // ✅ User Section (Dashboard) Layout & Pages
// import UserLayout from "./Components/User_Section/UserSection/UserLayout";
// import ProfilePage from "./Components/User_Section/UserSection/pages/ProfilePage";
// import BookingsPage from "./Components/User_Section/UserSection/pages/BookingPage";

// function App() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Main Site Layout with Navbar & Footer */}
//           <Route
//             path="*"
//             element={
//               <div className="flex flex-col min-h-screen">
//                 <Navbar />
//                 <div className="flex-grow pt-20">
//                   <Routes>
//                     <Route path="/" element={<MainPage />} />
//                     <Route path="/properties" element={<AllProperty />} />
//                     <Route path="/property/:id" element={<PropertyDetails />} />
//                     <Route path="/pg" element={<PG />} />
//                     <Route path="/pg/:id" element={<PgDetails />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/hostel" element={<Hostel />} />
//                     <Route path="/hostel/:id" element={<HostelDetail />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/signup" element={<Signup />} />
//                     <Route path="/rent" element={<RentProperty />} />
//                     <Route path="/rent/:id" element={<RentPropertyDetail />} />
//                     <Route path="/sell" element={<SellProperty />} />
//                     <Route path="/sell/:id" element={<SellPropertyDetail />} />
//                     <Route path="/hotel" element={<Hotel_Banqute />} />
//                     <Route path="/hotel/:id" element={<Hotel_BanquteDetails />} />
//                   </Routes>
//                 </div>
//                 <Footer />
//               </div>
//             }
//           />

//           {/* User Dashboard Section (already includes header/footer inside layout) */}
//           <Route path="/user" element={<UserLayout />}>
//             <Route path="profile" element={<ProfilePage />} />
//             <Route path="bookings" element={<BookingsPage />} />
//           </Route>
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // ✅ Auth context
// import { AuthProvider } from "./Components/User_Section/Context/AuthContext";

// // ✅ Layouts
// import UserLayout from "./Components/User_Section/UserSection/UserLayout";
// import Layout from './Components/LandLoard/Layout/Layout';

// // ✅ Main Website Components
// import Navbar from "./Components/User_Section/Navbar/navbar";
// import Footer from "./Components/User_Section/Footer/footer";
// import MainPage from "./Components/User_Section/Main/MainPage";
// import AllProperty from "./Components/User_Section/AllProperty/AllProperty";
// import PropertyDetails from "./Components/User_Section/AllProperty/PropertyDetails";
// import PG from "./Components/User_Section/PG/PG";
// import PgDetails from "./Components/User_Section/PG/PgDetails";
// import Login from "./Components/User_Section/Login&Signup/Login";
// import Signup from "./Components/User_Section/Login&Signup/Signup";
// import RentProperty from "./Components/User_Section/RentProperty/RentProperty";
// import SellProperty from "./Components/User_Section/SellProperty/SellProperty";
// import Contact from "./Components/User_Section/Contact/Contact";
// import Hostel from "./Components/User_Section/Hostel/Hostel";
// import HostelDetail from "./Components/User_Section/Hostel/HostelDetail";
// import Hotel_Banqute from "./Components/User_Section/Hotel_Banqute/Hotel_Banqute";
// import Hotel_BanquteDetails from "./Components/User_Section/Hotel_Banqute/Hotel_BanquteDetails";
// import RentPropertyDetail from "./Components/User_Section/RentProperty/RentPropertyDetails";
// import SellPropertyDetail from "./Components/User_Section/SellProperty/SellPropertyDetail";

// // ✅ User Pages
// import ProfilePage from "./Components/User_Section/UserSection/pages/ProfilePage";
// import BookingsPage from "./Components/User_Section/UserSection/pages/BookingPage";

// // ✅ Landlord Dashboard Pages
// import Dashboard from './Components/LandLoard/Dashboard/Dashboard';
// import AddProperty from './Components/LandLoard/Property/AddProperty';
// import Tenants from "./Components/LandLoard/Tenant/Tenant";
// import PropertyDetail from "./Components/LandLoard/Property/PropertyDetail";
// import PropertyList from "./Components/LandLoard/Property/Propertylist";
// import Property from "./Components/LandLoard/Property/Property";
// import RoomOverview from "./Components/LandLoard/Property/RoomOverview";
// import TenantForm from "./Components/LandLoard/Tenant/TenantForm";
// import LandlordProfile from "./Components/LandLoard/Profile/LandlordProfile";
// import TenantList from "./Components/LandLoard/Tenant/TenantList";
// import TenantDetails from "./Components/LandLoard/Tenant/TenantDetails";
// import RoomAdd from "./Components/LandLoard/Property/RoomAdd";

// function App() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* 🌐 Public Website */}
//           <Route
//             path="*"
//             element={
//               <div className="flex flex-col min-h-screen">
//                 <Navbar />
//                 <div className="flex-grow pt-20">
//                   <Routes>
//                     <Route index element={<MainPage />} />
//                     <Route path="/properties" element={<AllProperty />} />
//                     <Route path="/property/:id" element={<PropertyDetails />} />
//                     <Route path="/pg" element={<PG />} />
//                     <Route path="/pg/:id" element={<PgDetails />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/hostel" element={<Hostel />} />
//                     <Route path="/hostel/:id" element={<HostelDetail />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/signup" element={<Signup />} />
//                     <Route path="/rent" element={<RentProperty />} />
//                     <Route path="/rent/:id" element={<RentPropertyDetail />} />
//                     <Route path="/sell" element={<SellProperty />} />
//                     <Route path="/sell/:id" element={<SellPropertyDetail />} />
//                     <Route path="/hotel" element={<Hotel_Banqute />} />
//                     <Route path="/hotel/:id" element={<Hotel_BanquteDetails />} />
//                   </Routes>
//                 </div>
//                 <Footer />
//               </div>
//             }
//           />

//           {/* 👤 User Section */}
//           <Route path="/user" element={<UserLayout />}>
//             <Route path="profile" element={<ProfilePage />} />
//             <Route path="bookings" element={<BookingsPage />} />
//           </Route>

//           {/* 🏠 Landlord Dashboard Section */}
//           <Route path="/landlord" element={<Layout />}>
//             <Route index element={<Dashboard />} />
//             <Route path="landlord-profile" element={<LandlordProfile />} />
//             <Route path="property-list" element={<PropertyList />} />
//             <Route path="add-property" element={<AddProperty />} />
//             <Route path="room-overview" element={<RoomOverview />} />
//             <Route path="add-room" element={<RoomAdd />} />
//             <Route path="property" element={<Property />} />
//             <Route path="property/:id" element={<PropertyDetail />} /> {/* ✅ fixed */}
//             <Route path="tenants" element={<Tenants />} />
//             <Route path="tenant-form" element={<TenantForm />} />
//             <Route path="tenant-list" element={<TenantList />} />
//             <Route path="tenant-details" element={<TenantDetails />} />
//           </Route>
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;







import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUs from "./Components/User_Section/About/AboutUs";


// ✅ Auth context
import { AuthProvider } from "./Components/User_Section/Context/AuthContext";

// ✅ Layouts
import UserLayout from "./Components/User_Section/UserSection/UserLayout";
import Layout from "./Components/LandLoard/Layout/Layout";

// ✅ Main Website Components
import Navbar from "./Components/User_Section/Navbar/navbar";
import Footer from "./Components/User_Section/Footer/footer";
import MainPage from "./Components/User_Section/Main/MainPage";
import AllProperty from "./Components/User_Section/AllProperty/AllProperty";
import PropertyDetails from "./Components/User_Section/AllProperty/PropertyDetails";
import PG from "./Components/User_Section/PG/PG";
import PgDetails from "./Components/User_Section/PG/PgDetails";
import Login from "./Components/User_Section/Login&Signup/Login";
import Signup from "./Components/User_Section/Login&Signup/Signup";
import RentProperty from "./Components/User_Section/RentProperty/RentProperty";
import SellProperty from "./Components/User_Section/SellProperty/SellProperty";
import Contact from "./Components/User_Section/Contact/Contact";
import Hostel from "./Components/User_Section/Hostel/Hostel";
import HostelDetail from "./Components/User_Section/Hostel/HostelDetail";
import Hotel_Banqute from "./Components/User_Section/Hotel_Banqute/Hotel_Banqute";
import Hotel_BanquteDetails from "./Components/User_Section/Hotel_Banqute/Hotel_BanquteDetails";
import RentPropertyDetail from "./Components/User_Section/RentProperty/RentPropertyDetails";
import SellPropertyDetail from "./Components/User_Section/SellProperty/SellPropertyDetail";
import BlogPage from "./Components/User_Section/Blog.jsx";
import HowItWorks from "./Components/User_Section/HowItWorks";



// ✅ User Pages
import ProfilePage from "./Components/User_Section/UserSection/pages/ProfilePage";
import BookingsPage from "./Components/User_Section/UserSection/pages/BookingPage";




// ✅ Landlord Dashboard Pages


// import Dashboard from "./Components/LandLoard/Dashboard/Dashboard";
// import AddProperty from "./Components/LandLoard/Property/AddProperty";
// import Tenants from "./Components/LandLoard/Tenant/Tenant";
// import PropertyDetail from "./Components/LandLoard/Property/PropertyDetail";
// import PropertyList from "./Components/LandLoard/Property/Propertylist";
// import Property from "./Components/LandLoard/Property/Property";
// import RoomOverview from "./Components/LandLoard/Property/RoomOverview";
// import TenantForm from "./Components/LandLoard/Tenant/TenantForm";
// import LandlordProfile from "./Components/LandLoard/Profile/LandlordProfile";
// import TenantList from "./Components/LandLoard/Tenant/TenantList";
// import TenantDetails from "./Components/LandLoard/Tenant/TenantDetails";
// import RoomAdd from "./Components/LandLoard/Property/RoomAdd";


import Dashboard from "./Components/LandLoard/Dashboard/Dashboard";
import AddProperty from "./Components/LandLoard/Property/AddProperty";
import Tenants from "./Components/LandLoard/Tenant/Tenant";
import PropertyDetail from "./Components/LandLoard/Property/PropertyDetail";
import PropertyList from "./Components/LandLoard/Property/Propertylist";
import Property from "./Components/LandLoard/Property/Property";
import RoomOverview from "./Components/LandLoard/Property/RoomOverview";
import TenantForm from "./Components/LandLoard/Tenant/TenantForm";
import LandlordProfile from "./Components/LandLoard/Profile/LandlordProfile";
import TenantList from "./Components/LandLoard/Tenant/TenantList";
import TenantDetails from "./Components/LandLoard/Tenant/TenantDetails";
import RoomAdd from "./Components/LandLoard/Property/RoomAdd";
import Tenant from "./Components/LandLoard/Tenant/Tenant";



// ✅ Tenant Section Components
import TenantLayout from "./Components/TenantSection/TenantLayout";
import TenantDashboard from "./Components/TenantSection/TenantDashboard";
import TenantProfile from "./Components/TenantSection/Profile/TenantProfile";
import TenantProperties from "./Components/TenantSection/Property/AllProperty";
import TenantPropertyDetails from "./Components/TenantSection/Property/PropertyDetails";
import RentPayments from "./Components/TenantSection/Rent/RentPayments";
import MaintenanceRequests from "./Components/TenantSection/Maintenance/MaintenanceRequests";
import RequestForm from "./Components/TenantSection/Maintenance/RequestForm";
import LeaseAgreement from "./Components/TenantSection/Lease/LeaseAgreement";
import Announcements from "./Components/TenantSection/Announcements";
import Support from "./Components/TenantSection/Support/Support";



// ✅ Seller Pages
import SellerLayout from "./Components/Seller_Section/Layout/SellerLayout";
import AddPropertySeller from "./Components/Seller_Section/Property/AddPropertySeller";
import SellerProperty from "./Components/Seller_Section/Property/SellerProperty";
import SellerPropertyDetail from "./Components/Seller_Section/Property/SellerPropertyDetail";
import EditPropertySeller from "./Components/Seller_Section/Property/EditpropertySeller";
import SellerProfile from "./Components/Seller_Section/Profile/SellerProfile";
import EnquiriesSeller from "./Components/Seller_Section/Property/EnquiriesSeller";
import SellerSubscription from "./Components/Seller_Section/Subscription/SellerSubscription";
import SellerHome from "./Components/Seller_Section/Home/SellerHome";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 🌐 Public Website */}
          <Route
            path="*"
            element={
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow pt-20">
                  <Routes>
                    <Route index element={<MainPage />} />
                    <Route path="/properties" element={<AllProperty />} />
                    <Route path="/property/:id" element={<PropertyDetails />} />
                    <Route path="/pg" element={<PG />} />
                    <Route path="/pg/:id" element={<PgDetails />} />
                    
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/hostel" element={<Hostel />} />
                    <Route path="/hostel/:id" element={<HostelDetail />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/rent" element={<RentProperty />} />
                    <Route path="/rent/:id" element={<RentPropertyDetail />} />
                    <Route path="/sell" element={<SellProperty />} />
                    <Route path="/sell/:id" element={<SellPropertyDetail />} />
                    
                    <Route path="/hotelbanqute" element={<Hotel_Banqute />} />
                    {/* <Route path="/hotel" element={<Hotel_Banqute />} /> */}
                    <Route path="/hotel/:id" element={<Hotel_BanquteDetails />}/>
                     <Route path="/banquet/:id" element={<Hotel_BanquteDetails />} />
                     <Route path="/about" element={<AboutUs />} />
                     <Route path="/blog" element={<BlogPage />} />
                     <Route path="/how-it-works" element={<HowItWorks />} />
                  </Routes>
                </div>
                <Footer />
              </div>
            }
          />



          {/* 👤 User Section */}
          <Route path="/user" element={<UserLayout />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="bookings" element={<BookingsPage />} />
          </Route>




          {/* 🏠 Landlord Dashboard Section */}

          {/* <Route path="/landlord" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="landlord-profile" element={<LandlordProfile />} />
            <Route path="property-list" element={<PropertyList />} />
            <Route path="add-property" element={<AddProperty />} />
            <Route path="room-overview" element={<RoomOverview />} />
            <Route path="add-room" element={<RoomAdd />} />
            <Route path="property" element={<Property />} />
            <Route path="property/:id" element={<PropertyDetail />} />{" "}
           
            <Route path="tenants" element={<Tenants />} />
            <Route path="tenant-form" element={<TenantForm />} />
            <Route path="tenant-list" element={<TenantList />} />
            <Route path="tenant-details" element={<TenantDetails />} />
          </Route> */}





          <Route path="/landlord" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="landlord-profile" element={<LandlordProfile />} />
            <Route path="property-list" element={<PropertyList />} />
            <Route path="add-property" element={<AddProperty />} />
            <Route path="room-overview" element={<RoomOverview />} />
            <Route path="add-room" element={<RoomAdd />} />
            <Route path="property" element={<Property />} />
            <Route path="property/:id" element={<PropertyDetail />} />
          
            <Route path="tenants" element={<Tenants />} />
            <Route path="tenant-form" element={<TenantForm />} />
            <Route path="tenant-list" element={<TenantList />} />
            <Route path="tenant-details" element={<TenantDetails />} />

            
           

          </Route>





          {/* 🧑‍💼 Tenant Dashboard Section */}

          <Route path="/tenant" element={<TenantLayout />}>
            <Route index element={<TenantProfile />} /> {/* Default */}
            <Route path="profile" element={<TenantProfile />} />
            {/* <Route path="my-room" element={<MyRoom />} /> */}
            <Route path="/tenant/properties" element={<TenantProperties />} />
            <Route
              path="/tenant/properties/:id"
              element={<TenantPropertyDetails />}
            />
            <Route path="rent-payments" element={<RentPayments />} />
            <Route path="maintenance" element={<MaintenanceRequests />} />
            <Route path="maintenance/request" element={<RequestForm />} />
            <Route path="lease" element={<LeaseAgreement />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="support" element={<Support />} />
          </Route>




          {/* 🧑‍💼 Seller Section */}
          <Route path="/seller" element={<SellerLayout />}>
            {/* Default route if user visits /seller directly */}
            <Route index element={<SellerHome />} />

            {/* Other routes */}
            <Route path="home" element={<SellerHome />} />
            <Route path="add-property" element={<AddPropertySeller />} />
            <Route path="property" element={<SellerProperty />} />
            <Route path="property/:id" element={<SellerPropertyDetail />} />
            <Route path="edit-property/:id" element={<EditPropertySeller />} />
            <Route path="seller-profile" element={<SellerProfile />} />
            <Route path="enquiries" element={<EnquiriesSeller />} />
            <Route path="subscription" element={<SellerSubscription />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
