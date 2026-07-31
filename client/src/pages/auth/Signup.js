import { useState } from "react";
import { Link } from "react-router-dom";
import UserRegisterForm from "../../components/common/UserRegisterForm";
import HotelRegisterForm from "../../components/common/HotelRegisterForm";

function Signup() {
  const [activeTab, setActiveTab] = useState("customer");

  // Hotel State
  const [hotel, setHotel] = useState({
    hotelName: "",
    hotelEmail: "",
    hotelPhone: "",
    hotelCategory: "",
    ownerName: "",
    ownerEmail: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    password: "",
    confirmPassword: "",
    logo: null,
  });

  // Customer State
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    profileImage: null,
  });

  // Customer Input Change
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Customer Image
  const handleImage = (e) => {
    setUser({
      ...user,
      profileImage: e.target.files[0],
    });
  };

  // Hotel Input Change
  const handleHotelChange = (e) => {
    setHotel({
      ...hotel,
      [e.target.name]: e.target.value,
    });
  };

  // Hotel Image
  const handleHotelImage = (e) => {
    setHotel({
      ...hotel,
      logo: e.target.files[0],
    });
  };

  // Customer Register
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const customerData = {
      firstname: user.firstName,
      lastname: user.lastName,
      email: user.email,
      phone: user.phone,
      password: user.password,
      dateOfBirth: user.dateOfBirth,
      gender: user.gender,
      address: user.address,
      role: "Customer",
    };

    console.log("Customer Data:", customerData);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(customerData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Customer Registration Successful");

        window.location.href = "/login";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  // Hotel Register
  const handleHotelSubmit = async (e) => {
    e.preventDefault();

    if (hotel.password !== hotel.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const hotelData = {
      ...hotel,
      role: "Manager",
    };

    console.log("Hotel Data:", hotelData);

    // Save in Local Storage
    const response = await fetch("http://localhost:5000/api/hotel/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hotelData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Hotel Registration Successful");
      window.location.href = "/login";
    } else {
      alert(data.message);
    }

    alert("Hotel Data Saved Successfully");

    /*
       Later replace this with backend API

       await fetch(
          "http://localhost:5000/api/hotel/register",
          {
             method:"POST",
             headers:{
                "Content-Type":"application/json"
             },
             body:JSON.stringify(hotelData)
          }
       )

    */
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="signup-tabs">
              <button
                type="button"
                className={`tab-btn ${
                  activeTab === "customer" ? "customer-active" : ""
                }`}
                onClick={() => setActiveTab("customer")}
              >
                👤 Customer Registration
              </button>

              <button
                type="button"
                className={`tab-btn ${
                  activeTab === "hotel" ? "hotel-active" : ""
                }`}
                onClick={() => setActiveTab("hotel")}
              >
                🏨 Hotel Registration
              </button>
            </div>

            <div className="card-body p-5">
              <h2 className="text-center mb-4">Sign Up</h2>

              {activeTab === "customer" ? (
                <UserRegisterForm
                  user={user}
                  handleChange={handleChange}
                  handleImage={handleImage}
                  handleSubmit={handleSubmit}
                />
              ) : (
                <HotelRegisterForm
                  hotel={hotel}
                  handleChange={handleHotelChange}
                  handleImage={handleHotelImage}
                  handleSubmit={handleHotelSubmit}
                />
              )}

              <p className="text-center mt-3">
                Already have an account?
                <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
