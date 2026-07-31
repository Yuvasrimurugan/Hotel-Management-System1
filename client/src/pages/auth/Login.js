import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log("LOGIN RESPONSE:", data);

      if (!response.ok) {
        setError(data.message || "Invalid email or password");

        return;
      }

      // Save User

      localStorage.setItem("user", JSON.stringify(data.user));

      // Save Token if available

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      const role = data.user?.role?.toLowerCase();

      console.log("ROLE:", role);

      // Role Redirect

      if (role === "admin") {
        navigate("/admin");
      } else if (role === "hotel") {
        navigate("/hotel/dashboard");
      } else if (role === "customer") {
        navigate("/customer/dashboard");
      } else {
        setError("Role not found");
      }
    } catch (error) {
      console.log(error);

      setError("Backend server not connected");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
      }}
    >
      <div className="col-md-5 col-lg-4">
        <div className="card shadow-lg border-0 rounded-4 p-4">
          <div className="text-center mb-4">
            <div
              className="rounded-circle bg-primary text-white mx-auto d-flex align-items-center justify-content-center"
              style={{
                width: "75px",

                height: "75px",

                fontSize: "35px",
              }}
            >
              🏨
            </div>

            <h2 className="fw-bold mt-3">Welcome Back</h2>

            <p className="text-muted">Hotel Management System</p>
          </div>

          {error && (
            <div className="alert alert-danger text-center">{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>

              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Password</label>

              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              className="btn btn-primary w-100 py-2 fw-bold"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="text-center mt-4">
            <span>Don't have account?</span>

            <Link to="/signup" className="ms-2 fw-bold">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
