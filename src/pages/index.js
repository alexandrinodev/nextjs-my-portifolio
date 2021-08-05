import { useState, useEffect } from "react";
import HomeSection from "../components/HomeSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Footer from "../components/Footer";
import Experiences from "../components/Experiences";
import Skill from "../components/Skill";


const Home = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const [blackHeader, setBlackHeader] = useState(false);

  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  useEffect(() => {
    const scrollListner = () => {
      if (window.scrollY > 530) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListner);

    return () => {
      window.removeEventListener("scroll", scrollListner);
    };
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} black={blackHeader} />
        <HomeSection />
        <About />
        <Skill />
        <Experiences />
      <Footer />
    </>
  );
};

export default Home;
