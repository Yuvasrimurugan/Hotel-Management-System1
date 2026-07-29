import { Link } from "react-router-dom";

function Signup() {

  return (

    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Create Account
            </h2>

            <form>

              <div className="mb-3">
                <label>Full Name</label>

                <input
                  className="form-control"
                  placeholder="Enter Full Name"
                />

              </div>

              <div className="mb-3">

                <label>Email</label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />

              </div>

              <div className="mb-3">

                <label>Phone Number</label>

                <input
                  className="form-control"
                  placeholder="Enter Phone Number"
                />

              </div>

              <div className="mb-3">

                <label>Password</label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                />

              </div>

              <div className="mb-3">

                <label>Confirm Password</label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                />

              </div>

              <button className="btn btn-success w-100">
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