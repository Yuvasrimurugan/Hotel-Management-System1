import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLayout from "./pages/Landing/HomeLayout";
import Home from "./pages/Landing/Home";
 import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ContactUs from "./pages/Landing/ContactUs";
import AboutUs from "./pages/Landing/AboutUs";
import Hotels from "./pages/Landing/Hotels";
import Dashboard from "./pages/auth/Dashboard";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomeLayout />}>

          <Route index element={<Home />} />

          <Route path="contactus" element={<ContactUs />} />

          <Route path="aboutus" element={<AboutUs />} />

          <Route path="hotels" element={<Hotels />} />

        </Route>


        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />


      </Routes>

    </BrowserRouter>

  );
}

export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App(){

//   return(
//     <BrowserRouter>

//       <Routes>

//         <Route 
//           path="/"
//           element={<h1>Home Working</h1>}
//         />

//         <Route 
//           path="/dashboard"
//           element={<h1>Dashboard Working</h1>}
//         />

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;