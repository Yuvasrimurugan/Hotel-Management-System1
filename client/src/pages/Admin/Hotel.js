import { useState } from "react";

function Hotels() {
  const [hotels] = useState([
    {
      id: 1,
      name: "Grand Palace",
      city: "Chennai",
      rooms: 120,
      status: "Active",
    },
    {
      id: 2,
      name: "Royal Stay",
      city: "Coimbatore",
      rooms: 80,
      status: "Active",
    },
    {
      id: 3,
      name: "Green Leaf",
      city: "Madurai",
      rooms: 60,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Blue Moon",
      city: "Trichy",
      rooms: 95,
      status: "Active",
    },
  ]);

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Hotel Management</h2>

        <button className="btn btn-primary">
          + Add Hotel
        </button>
      </div>

      <div className="card shadow">

        <div className="card-body">

          <table className="table table-striped table-hover">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Hotel Name</th>
                <th>City</th>
                <th>Rooms</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {hotels.map((hotel) => (

                <tr key={hotel.id}>
                  <td>{hotel.id}</td>

                  <td>{hotel.name}</td>

                  <td>{hotel.city}</td>

                  <td>{hotel.rooms}</td>

                  <td>
                    <span
                      className={
                        hotel.status === "Active"
                          ? "badge bg-success"
                          : "badge bg-danger"
                      }
                    >
                      {hotel.status}
                    </span>
                  </td>

                  <td>
                    <button className="btn btn-warning btn-sm me-2">
                      Edit
                    </button>

                    <button className="btn btn-danger btn-sm">
                      Delete
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

export default Hotels;