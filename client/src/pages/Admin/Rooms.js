import { useState } from "react";

function Rooms() {
  const [rooms] = useState([
    {
      id: 1,
      hotel: "Grand Palace",
      roomNo: "101",
      type: "Single",
      price: 2500,
      status: "Available",
    },
    {
      id: 2,
      hotel: "Grand Palace",
      roomNo: "102",
      type: "Double",
      price: 3500,
      status: "Booked",
    },
    {
      id: 3,
      hotel: "Royal Stay",
      roomNo: "201",
      type: "Suite",
      price: 6000,
      status: "Available",
    },
    {
      id: 4,
      hotel: "Green Leaf",
      roomNo: "301",
      type: "Deluxe",
      price: 4500,
      status: "Maintenance",
    },
  ]);

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Room Management</h2>

        <button className="btn btn-primary">
          + Add Room
        </button>
      </div>

      <div className="card shadow">

        <div className="card-body">

          <table className="table table-hover table-bordered">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Hotel</th>
                <th>Room No</th>
                <th>Room Type</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {rooms.map((room) => (

                <tr key={room.id}>
                  <td>{room.id}</td>
                  <td>{room.hotel}</td>
                  <td>{room.roomNo}</td>
                  <td>{room.type}</td>
                  <td>₹{room.price}</td>

                  <td>
                    <span
                      className={
                        room.status === "Available"
                          ? "badge bg-success"
                          : room.status === "Booked"
                          ? "badge bg-danger"
                          : "badge bg-warning text-dark"
                      }
                    >
                      {room.status}
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

export default Rooms;