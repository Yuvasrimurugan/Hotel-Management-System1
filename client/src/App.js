import { BrowserRouter, Routes, Route } from "react-router-dom";

// Landing Pages
import HomeLayout from "./pages/Landing/HomeLayout";
import Home from "./pages/Landing/Home";
import AboutUs from "./pages/Landing/AboutUs";
import ContactUs from "./pages/Landing/ContactUs";
import Hotels from "./pages/Landing/Hotels";

// Authentication Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

// Dashboard
import Dashboard from "./pages/auth/Dashboard";

// Protected Route
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Pages */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="hotels" element={<Hotels />} />
        </Route>

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;