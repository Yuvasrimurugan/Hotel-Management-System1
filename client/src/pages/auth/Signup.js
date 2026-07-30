import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({

    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""

  });


  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };


  const handleSubmit = async(e)=>{

    e.preventDefault();


    if(formData.password !== formData.confirmPassword){

      alert("Passwords do not match");
      return;

    }


    try{

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {

          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify({

            firstname:formData.firstname,
            lastname:formData.lastname,
            email:formData.email,
            phone:formData.phone,
            password:formData.password

          })

        }
      );


      const data = await response.json();


      if(response.ok){

        alert("Registration Successful");

        navigate("/login");

      }
      else{

        alert(data.message);

      }


    }
    catch(error){

      console.log(error);

      alert("Server Error");

    }

  };


  return (

    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4">


            <h2 className="text-center mb-4">
              Create Account
            </h2>


            <form onSubmit={handleSubmit}>


              <div className="mb-3">

                <label>First Name</label>

                <input
                  type="text"
                  name="firstname"
                  className="form-control"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />

              </div>



              <div className="mb-3">

                <label>Last Name</label>

                <input
                  type="text"
                  name="lastname"
                  className="form-control"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />

              </div>



              <div className="mb-3">

                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>



              <div className="mb-3">

                <label>Phone</label>

                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>



              <div className="mb-3">

                <label>Password</label>

                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

              </div>



              <div className="mb-3">

                <label>Confirm Password</label>

                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />

              </div>



              <button
                className="btn btn-success w-100"
                type="submit"
              >
                Register
              </button>


            </form>


            <p className="text-center mt-3">

              Already have an account?

              <Link to="/login">
                {" "}Login
              </Link>

            </p>


          </div>

        </div>

      </div>

    </div>

  );

}


export default Signup;