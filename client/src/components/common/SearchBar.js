function SearchBar() {
  return (
    <div className="container mt-3">

      <div className="card shadow">

        <div className="card-body">

          <div className="row">

            <div className="col-md-3">
              <input
                className="form-control"
                placeholder="Location"
              />
            </div>

            <div className="col-md-3">
              <input
                type="date"
                className="form-control"
              />
            </div>

            <div className="col-md-3">
              <input
                type="date"
                className="form-control"
              />
            </div>

            <div className="col-md-3">

              <button className="btn btn-primary w-100">
                Search Hotels
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SearchBar;