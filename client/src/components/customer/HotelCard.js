import React from "react";

function HotelCard({ hotel }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow h-100">

        <img
          src={hotel.image}
          className="card-img-top"
          alt={hotel.name}
          style={{ height: "220px", objectFit: "cover" }}
        />

        <div className="card-body">

          <h4>{hotel.name}</h4>

          <p className="text-muted">
            📍 {hotel.city}
          </p>

          <p>
            ⭐ {hotel.rating}
          </p>

          <p>
            ₹ {hotel.price} / Night
          </p>

          <button className="btn btn-primary w-100">
            View Details
          </button>

        </div>

      </div>
    </div>
  );
}

export default HotelCard;