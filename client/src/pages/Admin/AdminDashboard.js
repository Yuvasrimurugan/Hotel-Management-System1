import { useEffect, useState } from "react";

function AdminDashboard() {
  const [data, setData] = useState({
    users: 10,
    hotels: 0,
    bookings: 0,
    revenue: 0,
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/dashboard")
      .then((res) => res.json())

      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div className="container-fluid">
      <h2 className="mb-4">Admin Dashboard</h2>

      <div className="row">
        <div className="col-md-3">
          <div className="card shadow p-3 text-center">
            <h5>Total Users</h5>

            <h2>{data.users}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow p-3 text-center">
            <h5>Hotels</h5>

            <h2>{data.hotels}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow p-3 text-center">
            <h5>Bookings</h5>

            <h2>{data.bookings}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow p-3 text-center">
            <h5>Revenue</h5>

            <h2>₹{data.revenue}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
