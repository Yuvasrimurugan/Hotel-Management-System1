import { useState } from "react";

function Payments() {
  const [payments] = useState([
    {
      id: "PAY101",
      bookingId: "BK101",
      customer: "Rahul",
      amount: 5000,
      method: "UPI",
      status: "Paid",
      date: "01-08-2026",
    },
    {
      id: "PAY102",
      bookingId: "BK102",
      customer: "Priya",
      amount: 6500,
      method: "Credit Card",
      status: "Pending",
      date: "05-08-2026",
    },
    {
      id: "PAY103",
      bookingId: "BK103",
      customer: "Arun",
      amount: 4500,
      method: "Cash",
      status: "Failed",
      date: "10-08-2026",
    },
    {
      id: "PAY104",
      bookingId: "BK104",
      customer: "Kiran",
      amount: 7000,
      method: "Net Banking",
      status: "Paid",
      date: "15-08-2026",
    },
  ]);

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Payment Management</h2>

        <input
          type="text"
          className="form-control"
          placeholder="Search Payment..."
          style={{ width: "300px" }}
        />
      </div>

      <div className="card shadow">

        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-dark">
              <tr>
                <th>Payment ID</th>
                <th>Booking ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {payments.map((payment) => (

                <tr key={payment.id}>

                  <td>{payment.id}</td>
                  <td>{payment.bookingId}</td>
                  <td>{payment.customer}</td>
                  <td>₹{payment.amount}</td>
                  <td>{payment.method}</td>

                  <td>
                    <span
                      className={
                        payment.status === "Paid"
                          ? "badge bg-success"
                          : payment.status === "Pending"
                          ? "badge bg-warning text-dark"
                          : "badge bg-danger"
                      }
                    >
                      {payment.status}
                    </span>
                  </td>

                  <td>{payment.date}</td>

                  <td>
                    <button className="btn btn-info btn-sm">
                      View
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

export default Payments;