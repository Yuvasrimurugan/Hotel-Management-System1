function AdminDashboard() {
  return (
    <div>
      <h2 className="mb-4">Dashboard</h2>

      {/* Dashboard Cards */}
      <div className="row">

        <div className="col-md-3 mb-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <h5>Total Users</h5>
              <h2 className="text-primary">120</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <h5>Total Hotels</h5>
              <h2 className="text-success">35</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <h5>Total Rooms</h5>
              <h2 className="text-warning">420</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <h5>Total Bookings</h5>
              <h2 className="text-danger">560</h2>
            </div>
          </div>
        </div>

      </div>

      {/* Revenue Card */}
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card shadow border-0">
            <div className="card-body">
              <h4>Total Revenue</h4>
              <h2 className="text-success">₹8,50,000</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="card shadow border-0">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Recent Bookings</h5>
        </div>

        <div className="card-body">
          <table className="table table-bordered table-hover">

            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Hotel</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#1001</td>
                <td>Rahul</td>
                <td>ABC Hotel</td>
                <td>₹4500</td>
                <td>
                  <span className="badge bg-success">
                    Confirmed
                  </span>
                </td>
              </tr>

              <tr>
                <td>#1002</td>
                <td>Priya</td>
                <td>Grand Palace</td>
                <td>₹3500</td>
                <td>
                  <span className="badge bg-warning text-dark">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>#1003</td>
                <td>Arun</td>
                <td>Royal Stay</td>
                <td>₹5200</td>
                <td>
                  <span className="badge bg-danger">
                    Cancelled
                  </span>
                </td>
              </tr>

              <tr>
                <td>#1004</td>
                <td>Kiran</td>
                <td>Green Leaf</td>
                <td>₹4100</td>
                <td>
                  <span className="badge bg-success">
                    Confirmed
                  </span>
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;