import Navbar from "../../components/common/Navbar";
import Hero from "../../components/common/Hero";
import SearchBar from "../../components/common/SearchBar";
import FeaturedHotels from "../../components/common/FeaturedHotels";
import Features from "../../components/common/Features";
import Footer from "../../components/common/Footer";

function Home() {
  return (
    <>
      
      <SearchBar />
      <FeaturedHotels />
      <Features />
    </>
  );
}

export default Home;