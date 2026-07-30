import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
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

  try {
    const response = await fetch(
      "http://localhost:5000/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: user.firstName,
          lastname: user.lastName,
          email: user.email,
          phone: user.phone,
          password: user.password,
          dateOfBirth: user.dateOfBirth,
          gender: user.gender,
          address: user.address,
          role: user.role,
        }),
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
            <div className="card-body p-5">

              <h2 className="text-center mb-4">Sign Up</h2>

              <form onSubmit={handleSubmit}>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={user.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={user.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      value={user.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dateOfBirth"
                      value={user.dateOfBirth}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Gender</label>
                    <select
                      className="form-select"
                      name="gender"
                      value={user.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Profile Image</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImage}
                  />
                </div>

                {/* Optional: keep this only if users are allowed to choose a role */}
                <div className="mb-4">
                  <label className="form-label">Role</label>
                  <select
                    className="form-select"
                    name="role"
                    value={user.role}
                    onChange={handleChange}
                  >
                    <option value="Customer">Customer</option>
                    <option value="Hotel">Hotel</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>

              </form>

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