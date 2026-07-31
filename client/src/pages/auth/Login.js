import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

<<<<<<< HEAD
        });

    };



    const handleSubmit=async(e)=>{

        e.preventDefault();


        try{

            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {

                    method:"POST",

                    headers:{
                        "Content-Type":"application/json"
                    },


                    body:JSON.stringify({

                        email:formData.email,

                        password:formData.password

                    })

                }
                
            );
            if(response.data.success){

            // Save Token
            localStorage.setItem("token", response.data.token);

            // Save User (Optional)
            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            // Go to Dashboard
            navigate("/dashboard");

        }
        

            



            const data = await response.json();



            if(response.ok){


                // Store Token

                localStorage.setItem(
                    "token",
                    data.token
                );


                // Store User

                localStorage.setItem(
                    "user",
                    JSON.stringify(data.user)
                );


                alert("Login Successful");


                navigate("/dashboard");


            }
            else{

                alert(data.message);

            }
=======
      if (response.ok) {
        localStorage.setItem("token", data.token);
>>>>>>> dd3a941303b556735c142db725241a804095a0d8

        localStorage.setItem("user", JSON.stringify(data.user));

        const role = data.user.Role || data.user.role;

        if (role?.toLowerCase() === "admin") {
          navigate("/admin");
        } else if (role?.toLowerCase() === "hotel") {
          navigate("/Hotel");
        } else {
          navigate("/Dashboard");
        }
      } else {
        setError(data.message || "Invalid login details");
      }
    } catch (error) {
      setError("Server connection failed");

      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container-fluid vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "#f5f7fb",
      }}
    >
      <div className="row w-100 justify-content-center">
        <div className="col-md-5 col-lg-4">
          <div className="card shadow-lg border-0 rounded-4 p-4">
            <div className="text-center mb-4">
              <div
                className="bg-primary text-white rounded-circle mx-auto mb-3"
                style={{
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                }}
              >
                🏨
              </div>

              <h2 className="fw-bold">Welcome Back</h2>

              <p className="text-muted">Login to Hotel Management System</p>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>

                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope"></i>
                  </span>

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
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>

                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>

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
                  tabIndex={-1}
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i
                      className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}
                    ></i>
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
              <span className="text-muted">Don't have an account?</span>

              <Link to="/signup" className="text-decoration-none ms-2 fw-bold">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
