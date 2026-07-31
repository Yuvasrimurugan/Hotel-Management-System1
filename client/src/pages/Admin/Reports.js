function Reports() {
  return (
    <div className="container-fluid">

      <h2 className="mb-4">Reports</h2>

      {/* Summary Cards */}

      <div className="row">

        <div className="col-md-3 mb-4">
          <div className="card shadow text-center">
            <div className="card-body">
              <h5>Total Revenue</h5>
              <h2 className="text-success">₹8,50,000</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow text-center">
            <div className="card-body">
              <h5>Total Hotels</h5>
              <h2 className="text-primary">35</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow text-center">
            <div className="card-body">
              <h5>Total Users</h5>
              <h2 className="text-warning">120</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow text-center">
            <div className="card-body">
              <h5>Total Bookings</h5>
              <h2 className="text-danger">560</h2>
            </div>
          </div>
        </div>

      </div>

      {/* Monthly Revenue */}

      <div className="card shadow mb-4">

        <div className="card-header bg-primary text-white">
          Monthly Revenue
        </div>

        <div className="card-body">

          <table className="table table-bordered">

            <thead className="table-light">
              <tr>
                <th>Month</th>
                <th>Revenue</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>January</td>
                <td>₹50,000</td>
              </tr>

              <tr>
                <td>February</td>
                <td>₹72,000</td>
              </tr>

              <tr>
                <td>March</td>
                <td>₹95,000</td>
              </tr>

              <tr>
                <td>April</td>
                <td>₹1,10,000</td>
              </tr>

              <tr>
                <td>May</td>
                <td>₹1,25,000</td>
              </tr>

              <tr>
                <td>June</td>
                <td>₹1,40,000</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* Top Hotels */}

      <div className="card shadow">

        <div className="card-header bg-success text-white">
          Top Performing Hotels
        </div>

        <div className="card-body">

          <table className="table table-hover">

            <thead className="table-light">
              <tr>
                <th>Hotel</th>
                <th>Bookings</th>
                <th>Revenue</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Grand Palace</td>
                <td>150</td>
                <td>₹2,40,000</td>
              </tr>

              <tr>
                <td>Royal Stay</td>
                <td>120</td>
                <td>₹1,95,000</td>
              </tr>

              <tr>
                <td>Blue Moon</td>
                <td>95</td>
                <td>₹1,60,000</td>
              </tr>

              <tr>
                <td>Green Leaf</td>
                <td>80</td>
                <td>₹1,20,000</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Reports;