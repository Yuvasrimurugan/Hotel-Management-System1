import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );


      const data = await response.json();


      if (response.ok) {

        // Store JWT token
        localStorage.setItem(
          "token",
          data.token
        );


        alert("Login Successful");


        // Redirect after login
        navigate("/");

      }
      else {

        alert(data.message);

      }


    }
    catch (error) {

      console.log(error);
      alert("Server Error");

    }

  };


  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Login
            </h2>


            <form onSubmit={handleSubmit}>


              <div className="mb-3">

                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>



              <div className="mb-3">

                <label>Password</label>

                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                />

              </div>



              <button 
                type="submit"
                className="btn btn-primary w-100"
              >
                Login
              </button>


            </form>


            <p className="text-center mt-3">

              Don't have an account?

              <Link to="/signup">
                {" "}Sign Up
              </Link>

            </p>


          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;