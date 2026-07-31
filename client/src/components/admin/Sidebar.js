import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuStyle = ({ isActive }) => ({
    display: "block",
    padding: "12px 20px",
    color: isActive ? "#0d6efd" : "#fff",
    backgroundColor: isActive ? "#fff" : "transparent",
    textDecoration: "none",
    borderRadius: "8px",
    marginBottom: "8px",
    fontWeight: isActive ? "600" : "400",
  });

  return (
    <div
      className="bg-dark text-white p-3"
      style={{
        width: "250px",
        minHeight: "100vh",
      }}
    >
      <h3 className="text-center mb-4">Hotel Admin</h3>

      <NavLink to="/admin" end style={menuStyle}>
        <i className="bi bi-speedometer2 me-2"></i>
        Dashboard
      </NavLink>

      <NavLink to="/admin/hotels" style={menuStyle}>
        <i className="bi bi-building me-2"></i>
        Hotels
      </NavLink>

      <NavLink to="/admin/rooms" style={menuStyle}>
        <i className="bi bi-door-open me-2"></i>
        Rooms
      </NavLink>

      <NavLink to="/admin/users" style={menuStyle}>
        <i className="bi bi-people me-2"></i>
        Users
      </NavLink>

      <NavLink to="/admin/bookings" style={menuStyle}>
        <i className="bi bi-calendar-check me-2"></i>
        Bookings
      </NavLink>

      <NavLink to="/admin/restaurants" style={menuStyle}>
        <i className="bi bi-cup-hot me-2"></i>
        Restaurants
      </NavLink>

      <NavLink to="/admin/payments" style={menuStyle}>
        <i className="bi bi-credit-card me-2"></i>
        Payments
      </NavLink>

      <NavLink to="/admin/reports" style={menuStyle}>
        <i className="bi bi-bar-chart me-2"></i>
        Reports
      </NavLink>

      <NavLink to="/admin/settings" style={menuStyle}>
        <i className="bi bi-gear me-2"></i>
        Settings
      </NavLink>
    </div>
  );
}

export default Sidebar;