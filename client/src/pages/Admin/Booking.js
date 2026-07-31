import { useState } from "react";

function Bookings() {
  const [bookings] = useState([
    {
      id: "BK101",
      customer: "Rahul",
      hotel: "Grand Palace",
      checkIn: "01-08-2026",
      checkOut: "03-08-2026",
      amount: 5000,
      status: "Confirmed",
    },
    {
      id: "BK102",
      customer: "Priya",
      hotel: "Royal Stay",
      checkIn: "05-08-2026",
      checkOut: "07-08-2026",
      amount: 6500,
      status: "Pending",
    },
    {
      id: "BK103",
      customer: "Arun",
      hotel: "Green Leaf",
      checkIn: "10-08-2026",
      checkOut: "12-08-2026",
      amount: 4500,
      status: "Cancelled",
    },
    {
      id: "BK104",
      customer: "Kiran",
      hotel: "Blue Moon",
      checkIn: "15-08-2026",
      checkOut: "18-08-2026",
      amount: 7000,
      status: "Confirmed",
    },
  ]);

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Booking Management</h2>

        <input
          type="text"
          className="form-control"
          placeholder="Search Booking..."
          style={{ width: "300px" }}
        />
      </div>

      <div className="card shadow">

        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-dark">

              <tr>
                <th>Booking ID</th>
                <th>Customer</th>
                <th>Hotel</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {bookings.map((booking) => (

                <tr key={booking.id}>

                  <td>{booking.id}</td>
                  <td>{booking.customer}</td>
                  <td>{booking.hotel}</td>
                  <td>{booking.checkIn}</td>
                  <td>{booking.checkOut}</td>
                  <td>₹{booking.amount}</td>

                  <td>
                    <span
                      className={
                        booking.status === "Confirmed"
                          ? "badge bg-success"
                          : booking.status === "Pending"
                          ? "badge bg-warning text-dark"
                          : "badge bg-danger"
                      }
                    >
                      {booking.status}
                    </span>
                  </td>

                  <td>
                    <button className="btn btn-info btn-sm me-2">
                      View
                    </button>

                    <button className="btn btn-danger btn-sm">
                      Cancel
                    </button>
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

export default Bookings;