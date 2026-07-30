import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/auth/Dashboard";

import HomeLayout from "./pages/Landing/HomeLayout";
import Home from "./pages/Landing/Home";
import ContactUs from "./pages/Landing/ContactUs";
import AboutUs from "./pages/Landing/AboutUs";
import Hotels from "./pages/Landing/Hotels";


function App() {

  return (

    <BrowserRouter>

      <Routes>


        {/* First Page */}
        <Route 
          path="/" 
          element={<Login />} 
        />


        {/* Authentication */}
        <Route 
          path="/login" 
          element={<Login />} 
        />


        <Route 
          path="/signup" 
          element={<Signup />} 
        />


        {/* Dashboard */}
        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />


        {/* Landing Pages */}
        <Route 
          path="/home" 
          element={<HomeLayout />}
        >

          <Route 
            index 
            element={<Home />} 
          />


          <Route 
            path="contactus" 
            element={<ContactUs />} 
          />


          <Route 
            path="aboutus" 
            element={<AboutUs />} 
          />


          <Route 
            path="hotels" 
            element={<Hotels />} 
          />


        </Route>


      </Routes>


    </BrowserRouter>

  );

}


export default App;