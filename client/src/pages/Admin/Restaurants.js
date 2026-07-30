import { useState } from "react";

function Restaurants() {
  const [restaurants] = useState([
    {
      id: 1,
      name: "Spice Garden",
      hotel: "Grand Palace",
      cuisine: "South Indian",
      rating: 4.8,
      status: "Open",
    },
    {
      id: 2,
      name: "Royal Kitchen",
      hotel: "Royal Stay",
      cuisine: "North Indian",
      rating: 4.5,
      status: "Open",
    },
    {
      id: 3,
      name: "Green Food Court",
      hotel: "Green Leaf",
      cuisine: "Chinese",
      rating: 4.2,
      status: "Closed",
    },
    {
      id: 4,
      name: "Blue Sky Restaurant",
      hotel: "Blue Moon",
      cuisine: "Multi Cuisine",
      rating: 4.7,
      status: "Open",
    },
  ]);

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Restaurant Management</h2>

        <button className="btn btn-primary">
          + Add Restaurant
        </button>
      </div>

      <div className="card shadow">

        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Restaurant</th>
                <th>Hotel</th>
                <th>Cuisine</th>
                <th>Rating</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {restaurants.map((restaurant) => (

                <tr key={restaurant.id}>

                  <td>{restaurant.id}</td>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.hotel}</td>
                  <td>{restaurant.cuisine}</td>
                  <td>{restaurant.rating} ⭐</td>

                  <td>
                    <span
                      className={
                        restaurant.status === "Open"
                          ? "badge bg-success"
                          : "badge bg-danger"
                      }
                    >
                      {restaurant.status}
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

export default Restaurants;