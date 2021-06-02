import { useState } from "react";
import HomeSection from "../components/HomeSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeSection />
      <About />
      <Footer />
    </>
  );
};

export default Home;
