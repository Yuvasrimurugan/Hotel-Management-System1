import { useState } from "react";

function Users() {
  const [users] = useState([
    {
      id: 1,
      name: "Rahul",
      email: "rahul@gmail.com",
      phone: "9876543210",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya",
      email: "priya@gmail.com",
      phone: "9876501234",
      status: "Blocked",
    },
    {
      id: 3,
      name: "Arun",
      email: "arun@gmail.com",
      phone: "9123456780",
      status: "Active",
    },
    {
      id: 4,
      name: "Kiran",
      email: "kiran@gmail.com",
      phone: "9988776655",
      status: "Active",
    },
  ]);

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>User Management</h2>

        <input
          type="text"
          className="form-control"
          placeholder="Search User..."
          style={{ width: "300px" }}
        />

      </div>

      <div className="card shadow">

        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-dark">

              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {users.map((user) => (

                <tr key={user.id}>

                  <td>{user.id}</td>

                  <td>{user.name}</td>

                  <td>{user.email}</td>

                  <td>{user.phone}</td>

                  <td>
                    <span
                      className={
                        user.status === "Active"
                          ? "badge bg-success"
                          : "badge bg-danger"
                      }
                    >
                      {user.status}
                    </span>
                  </td>

                  <td>

                    <button
                      className={
                        user.status === "Active"
                          ? "btn btn-warning btn-sm me-2"
                          : "btn btn-success btn-sm me-2"
                      }
                    >
                      {user.status === "Active" ? "Block" : "Unblock"}
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

export default Users;