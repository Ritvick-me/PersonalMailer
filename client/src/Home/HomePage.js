import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/AboutMe";
import Contributions from "./Components/Contributions";
import FreeTime from "./Components/FreeTime";
import CaptureFaces from "./Components/CaptureFaces";
import Hobbies from "./Components/Hobbies";
import Footer from "../Common/Footer";
import CameraPopUp from "../Home/Components/CameraPopUp";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Contributions />
      <FreeTime />
      <CaptureFaces />
      <Hobbies />
      <Footer />
      <CameraPopUp />
    </div>
  );
};

export default HomePage;
