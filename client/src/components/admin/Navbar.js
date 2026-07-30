function Navbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <div className="container-fluid">

        <h4 className="mb-0 fw-bold text-primary">
          Hotel Management Admin
        </h4>

        <div className="ms-auto d-flex align-items-center">

          <span className="me-4 text-muted">
            {today}
          </span>

          <i
            className="bi bi-bell fs-4 me-4"
            style={{ cursor: "pointer" }}
          ></i>

          <div className="d-flex align-items-center">

            <img
              src="https://via.placeholder.com/40"
              alt="Admin"
              className="rounded-circle"
            />

            <div className="ms-2">
              <h6 className="mb-0">Admin</h6>
              <small className="text-muted">
                Administrator
              </small>
            </div>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;