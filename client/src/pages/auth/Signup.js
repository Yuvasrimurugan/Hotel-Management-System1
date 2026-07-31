import { useState } from "react";
import { Link } from "react-router-dom";
import UserRegisterForm from "../../components/common/UserRegisterForm";
import HotelRegisterForm from "../../components/common/HotelRegisterForm";
function Signup() {
  const [activeTab, setActiveTab] = useState("customer");

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

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    // console.log("User Info",e.target.name, e.target.value)
  };

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
    console.log("Active Tab :",activeTab);

       setUser({
      ...user,
      role:"Customer"});
    } else if (activeTab === "hotel") {
       console.log("Active Tab :",activeTab);
       setUser({
      ...user,
      role:"Manager"});
    }
    try {
       console.log(user);
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",

          body: JSON.stringify({
            firstname: user.firstName,
            lastname: user.lastName,
            email: user.email,
            phone: user.phone,
            password: user.password,
            dateOfBirth: user.dateOfBirth,
            gender: user.gender,
            address: user.address,
            role: user.role

          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );



      const data = await response.json();

      if (response.ok) {
        alert("Registration Successful");
        window.location.href = "/login";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
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

              <p className="text-center mt-3">
                Already have an account?{" "}
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