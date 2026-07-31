import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import DashboardCard from "../../components/customer/DashboardCard";

function Dashboard() {
  // ================= Hooks (Always at the top) =================
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  // ================= Authentication =================
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  // ================= Dummy Booking Data =================
  const bookings = [
    {
      id: 1,
      hotel: "Royal Palace",
      date: "20-08-2026",
      time: "7:00 PM",
      status: "Confirmed",
    },
    {
      id: 2,
      hotel: "Sea View Resort",
      date: "25-08-2026",
      time: "6:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      hotel: "Hill Station Hotel",
      date: "30-08-2026",
      time: "8:30 PM",
      status: "Completed",
    },
  ];

  // ================= Search =================
  const handleSearch = () => {
    if (search.trim() === "") {
      alert("Please enter a hotel name");
      return;
    }

    navigate(`/hotels?search=${search}`);
  };

  return (
    <div className="container mt-5">

      {/* Welcome */}
      <div className="mb-4">
        <h2>Welcome Customer 👋</h2>
        <p className="text-muted">
          Search hotels and manage your bookings.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="row">

        <DashboardCard
          title="Bookings"
          value="15"
          color="primary"
        />

        <DashboardCard
          title="Upcoming"
          value="3"
          color="success"
        />

        <DashboardCard
          title="Favorites"
          value="8"
          color="warning"
        />

        <DashboardCard
          title="Profile"
          value="100%"
          color="danger"
        />

      </div>

      {/* Search */}
      <div className="card shadow mt-4">
        <div className="card-body">

          <h4>Search Hotels</h4>

          <div className="row mt-3">

            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                placeholder="Search by hotel name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="col-md-2">
              <button
                className="btn btn-primary w-100"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Quick Actions */}
      <div className="card shadow mt-4">
        <div className="card-body">

          <h4>Quick Actions</h4>

          <div className="row mt-3">

            <div className="col-md-3 mb-3">
              <button
                className="btn btn-primary w-100"
                onClick={() => navigate("/hotels")}
              >
                Hotels
              </button>
            </div>

            <div className="col-md-3 mb-3">
              <button
                className="btn btn-success w-100"
                onClick={() => navigate("/booking")}
              >
                Book Hotel
              </button>
            </div>

            <div className="col-md-3 mb-3">
              <button
                className="btn btn-warning w-100"
                onClick={() => navigate("/my-bookings")}
              >
                My Bookings
              </button>
            </div>

            <div className="col-md-3 mb-3">
              <button
                className="btn btn-info w-100 text-white"
                onClick={() => navigate("/profile")}
              >
                Profile
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Recent Bookings */}
      <div className="card shadow mt-4 mb-5">
        <div className="card-body">

          <h4>Recent Bookings</h4>

          <table className="table table-bordered table-hover mt-3">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Hotel</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {bookings.map((booking) => (

                <tr key={booking.id}>

                  <td>{booking.id}</td>

                  <td>{booking.hotel}</td>

                  <td>{booking.date}</td>

                  <td>{booking.time}</td>

                  <td>

                    <span
                      className={`badge ${
                        booking.status === "Confirmed"
                          ? "bg-success"
                          : booking.status === "Pending"
                          ? "bg-warning text-dark"
                          : "bg-secondary"
                      }`}
                    >
                      {booking.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;