import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import hotels from "../../data/hotels";

function HotelDetails() {

    const navigate = useNavigate();

    const { id } = useParams();

    const hotel = hotels.find(
        (hotel) => hotel.id === Number(id)
    );

    if (!hotel) {

        return (

            <div className="container mt-5">

                <h2 className="text-danger">

                    Hotel Not Found

                </h2>

            </div>

        );

    }

    return (

        <div className="container mt-5">

            <button
                className="btn btn-secondary mb-4"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>

            <div className="card shadow">

                <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="card-img-top"
                    style={{
                        height: "450px",
                        objectFit: "cover"
                    }}
                />

                <div className="card-body">

                    <h2>

                        {hotel.name}

                    </h2>

                    <h5 className="text-muted">

                        📍 {hotel.city}

                    </h5>

                    <h5 className="text-warning">

                        ⭐ {hotel.rating}

                    </h5>

                    <h4 className="text-success">

                        ₹ {hotel.price} / Night

                    </h4>

                    <hr />

                    <h4>Description</h4>

                    <p>

                        {hotel.description}

                    </p>

                    <hr />

                    <h4>Amenities</h4>

                    <div className="row">

                        {

                            hotel.amenities.map((item, index) => (

                                <div
                                    key={index}
                                    className="col-md-4 mb-2"
                                >

                                    ✅ {item}

                                </div>

                            ))

                        }

                    </div>

                    <hr />

                    <h4>Available Rooms</h4>

                    <table className="table table-bordered">

                        <thead className="table-dark">

                            <tr>

                                <th>Room Type</th>

                                <th>Price</th>

                                <th>Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                hotel.rooms.map((room, index) => (

                                    <tr key={index}>

                                        <td>

                                            {room.type}

                                        </td>

                                        <td>

                                            ₹ {room.price}

                                        </td>

                                        <td>

                                            <button
                                                className="btn btn-primary"
                                                onClick={() =>
                                                    navigate(
                                                        `/booking/${hotel.id}`
                                                    )
                                                }
                                            >
                                                Book Now
                                            </button>

                                        </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default HotelDetails;