function Settings() {
  return (
    <div className="container-fluid">

      <h2 className="mb-4">Settings</h2>

      <div className="row">

        {/* Admin Profile */}
        <div className="col-md-6">

          <div className="card shadow mb-4">

            <div className="card-header bg-primary text-white">
              Admin Profile
            </div>

            <div className="card-body">

              <form>

                <div className="mb-3">
                  <label className="form-label">
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value="Administrator"
                    readOnly
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    value="admin@gmail.com"
                    readOnly
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                >
                  Edit Profile
                </button>

              </form>

            </div>

          </div>

        </div>

        {/* Change Password */}
        <div className="col-md-6">

          <div className="card shadow mb-4">

            <div className="card-header bg-success text-white">
              Change Password
            </div>

            <div className="card-body">

              <form>

                <div className="mb-3">
                  <label className="form-label">
                    Current Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    New Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-success"
                >
                  Update Password
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

      {/* System Settings */}

      <div className="card shadow">

        <div className="card-header bg-dark text-white">
          System Settings
        </div>

        <div className="card-body">

          <div className="form-check form-switch mb-3">

            <input
              className="form-check-input"
              type="checkbox"
              defaultChecked
            />

            <label className="form-check-label">
              Enable Notifications
            </label>

          </div>

          <div className="form-check form-switch mb-3">

            <input
              className="form-check-input"
              type="checkbox"
              defaultChecked
            />

            <label className="form-check-label">
              Enable Email Alerts
            </label>

          </div>

          <button className="btn btn-primary">
            Save Settings
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;