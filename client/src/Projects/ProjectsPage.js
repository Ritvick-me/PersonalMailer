import React from "react";
import ProjectsTitleHero from "./Components/ProjectsTitleHero";
import ProjectsShowcase from "./Components/ProjectsShowcase";
import Footer from "../Common/Footer";

const ProjectsPage = () => {
  return (
    <div>
      <ProjectsTitleHero />
      <ProjectsShowcase />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
