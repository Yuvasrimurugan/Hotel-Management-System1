import { Link, NavLink } from "react-router-dom";
import "../common/navbar.css"


function Navbar() {
  
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top py-3">
      <div className="container">

        {/* Logo */}
        <NavLink
          className="navbar-brand fw-bold fs-3 text-warning"
          to="/"
        >
          🏨 HotelMS
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="menu">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? "active text-warning fw-semibold" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/hotels"
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? "active text-warning fw-semibold" : ""}`
                }
              >
                Hotels
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? "active text-warning fw-semibold" : ""}`
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? "active text-warning fw-semibold" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>

          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex gap-2">

            <Link
              to="/login"
              className="btn btn-outline-warning rounded-pill px-4"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="btn btn-warning rounded-pill px-4 fw-semibold"
            >
              Sign Up
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;