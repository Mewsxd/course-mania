import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../home components/HeroSection";
import Partners from "../home components/Partners";
import PopularCourses from "../home components/PopularCourses";
import CertificationCourses from "../home components/CertificationCourses";
import InstructedCourses from "../home components/InstructedCourses";
import plant from "../assets/plant.svg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Partners />
      <PopularCourses />
      <CertificationCourses />
      <InstructedCourses />
      <Footer />
    </div>
  );
};

export default Home;
