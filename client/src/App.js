import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLayout from "./pages/Landing/HomeLayout";
import Home from "./pages/Landing/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ContactUs from "./pages/Landing/ContactUs";
import AboutUs from "./pages/Landing/AboutUs";
import Hotels from "./pages/Landing/Hotels";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout Route */}
        <Route path="/" element={<HomeLayout />}>
          {/* Home Page */}
          <Route index element={<Home />} />

          {/* Landing Pages */}
          <Route path="contactus" element={<ContactUs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="hotels" element={<Hotels />} />
        </Route>

        {/* Authentication Pages (without Navbar/Footer) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;