import { BrowserRouter, Routes, Route } from "react-router-dom";

// Landing Pages
import HomeLayout from "./pages/Landing/HomeLayout";
import Home from "./pages/Landing/Home";
import ContactUs from "./pages/Landing/ContactUs";
import AboutUs from "./pages/Landing/AboutUs";
import Hotel from "./pages/Landing/Hotels";
import Dashboard from "./pages/customer/Dashboard";
// import Hotel from "./pages/Landing/Hotels";

// Authentication
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

// Admin Layout
import AdminLayout from "./layouts/AdminLayout";

// Admin Pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Hotels from "./pages/Admin/Hotel";
import Rooms from "./pages/Admin/Rooms";
import Users from "./pages/Admin/Users";
import Bookings from "./pages/Admin/Booking";
import Restaurants from "./pages/Admin/Restaurants";
import Payments from "./pages/Admin/Payments";
import Reports from "./pages/Admin/Reports";
import Settings from "./pages/Admin/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />

          <Route path="contactus" element={<ContactUs />} />

          <Route path="aboutus" element={<AboutUs />} />

          <Route path="hotels" element={<Hotels />} />
        </Route>

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hotels" element={<Hotels />} />


        {/* Admin Module */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="users" element={<Users />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="payments" element={<Payments />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;