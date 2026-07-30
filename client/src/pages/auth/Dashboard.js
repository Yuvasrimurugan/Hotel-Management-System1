function Dashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container py-5">

      <div className="card shadow p-4">

        <h2>
          Welcome {user?.firstname} {user?.lastname}
        </h2>

        <p>
          Email: {user?.email}
        </p>

        <h3>
          Customer Dashboard
        </h3>

      </div>

    </div>
  );
}

export default Dashboard;