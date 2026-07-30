import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import Navbar from "../components/admin/Navbar";

function AdminLayout() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1">
        <Navbar />

        <div className="container-fluid p-4 bg-light" style={{ minHeight: "100vh" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;