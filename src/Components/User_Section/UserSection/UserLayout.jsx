import { Outlet } from "react-router-dom";
import HeaderSection from "./HeaderSection";

export default function UserLayout() {
  return (
    <>
      <HeaderSection />
      <div className="container mx-auto py-6">
        <Outlet /> {/* This renders ProfilePage or BookingsPage */}
      </div>
    </>
  );
}
