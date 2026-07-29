import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

function HomeLayout() {
  return (
    <div className="home-layout">
      <Navbar />

      <main className="home-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default HomeLayout;