import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <a className="navbar-brand fw-bold" href="/">
          HotelMS
        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link">Hotels</a>
            </li>

            <li className="nav-item">
              <a className="nav-link">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>

            <li className="nav-item me-2">
  <Link className="btn btn-outline-light" to="/login">
    Login
  </Link>
</li>

<li className="nav-item">
  <Link className="btn btn-warning" to="/signup">
    Sign Up
  </Link>
</li>
          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;