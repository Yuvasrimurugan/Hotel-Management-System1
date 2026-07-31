import { useState } from "react";
import { Link } from "react-router-dom";

import UserRegisterForm from "../../components/common/UserRegisterForm";
import HotelRegisterForm from "../../components/common/HotelRegisterForm";

function Signup() {
  const [activeTab, setActiveTab] = useState("customer");

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
    role: "",
    profileImage: null,
  });

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

  // Customer input

  const handleChange = (e) => {
    setUser({
      ...user,

      [e.target.name]: e.target.value,
    });

    // console.log("User Info",e.target.name, e.target.value)
  };

  // Customer image

  const handleImage = (e) => {
    setUser({
      ...user,

      profileImage: e.target.files[0],
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (activeTab === "customer") {
      console.log("Active Tab :", activeTab);

      setUser({
        ...user,
        role: "Customer"
      });
    } else if (activeTab === "hotel") {
      console.log("Active Tab :", activeTab);
      setUser({
        ...user,
        role: "Manager"
      });

      // Hotel input

      const handleHotelChange = (e) => {
        setHotel({
          ...hotel,

          [e.target.name]: e.target.value,
        });
      };

      // Hotel image

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
          alert("Password not match");
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

        try {
          const response = await fetch(
            "http://localhost:5000/api/auth/register",

            {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify(customerData),
            },
          );

          const data = await response.json();

          if (response.ok) {
            alert("Customer Registered");

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
          alert("Password not match");
          return;
        }

        const hotelData = {
          ...hotel,

          role: "Hotel",
        };

        try {
          const response = await fetch(
            "http://localhost:5000/api/hotel/register",

            {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify(hotelData),
            },
          );

          const data = await response.json();

          if (response.ok) {
            alert("Hotel Registered");

            window.location.href = "/login";
          } else {
            alert(data.message);
          }
        } catch (error) {
          console.log(error);

          alert("Server Error");
        }
      };

      return (
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow">
                <div className="signup-tabs">
                  <button
                    type="button"
                    className={`tab-btn ${activeTab === "customer" ? "customer-active" : ""
                      }`}
                    onClick={() => setActiveTab("customer")}
                  >
                    👤 Customer Registration
                  </button>

                  <button
                    type="button"
                    className={`tab-btn ${activeTab === "hotel" ? "hotel-active" : ""
                      }`}
                    onClick={() => setActiveTab("hotel")}
                  >
                    🏨 Hotel Registration
                  </button>
                </div>


                <div className="card-body p-5">

                  <h2 className="text-center mb-4">Sign Up</h2>
                  {activeTab === "customer" ? <UserRegisterForm user={user}
                    handleChange={handleChange}
                    handleImage={handleImage}
                    handleSubmit={handleSubmit} /> : <HotelRegisterForm />}
                  <div className="card-body p-5">
                    <h2 className="text-center mb-4">Signup</h2>

                    <div className="signup-tabs mb-4">
                      <button
                        type="button"
                        className="btn btn-primary me-2"
                        onClick={() => setActiveTab("customer")}
                      >
                        👤 Customer
                      </button>

                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => setActiveTab("hotel")}
                      >
                        🏨 Hotel
                      </button>
                    </div>

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
                      Already have account?
                      <Link to="/login" className="ms-2">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Signup;
