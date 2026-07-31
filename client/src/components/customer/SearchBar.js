import React from "react";

function SearchBar({
    search,
    setSearch,
    city,
    setCity,
    minPrice,
    setMinPrice
}) {

    return (

        <div className="card shadow mb-4">

            <div className="card-body">

                <div className="row">

                    <div className="col-md-4">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Hotel..."
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                        />

                    </div>

                    <div className="col-md-3">

                        <select
                            className="form-select"
                            value={city}
                            onChange={(e)=>setCity(e.target.value)}
                        >

                            <option value="">All Cities</option>

                            <option>Chennai</option>

                            <option>Bangalore</option>

                            <option>Trichy</option>

                            <option>Coimbatore</option>

                        </select>

                    </div>

                    <div className="col-md-3">

                        <input
                            type="number"
                            className="form-control"
                            placeholder="Max Price"
                            value={minPrice}
                            onChange={(e)=>setMinPrice(e.target.value)}
                        />

                    </div>

                    <div className="col-md-2">

                        <button className="btn btn-primary w-100">

                            Search

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default SearchBar;