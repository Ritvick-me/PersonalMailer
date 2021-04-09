import React from "react";
import Heading from "../../Common/Heading";
import AddMoreIcon from "../../Assets/MoreProjects.svg";
import "./ProjectsTitleHero.css";

const ProjectsTitleHero = () => {
  const heading = [
    "What has been carefully ",
    <span key="rvp-tailored">Tailored</span>,
    " by him before",
    <span key=".">.</span>,
  ];

  return (
    <>
      <div className="rvp-projects-hero">
        <div className="rvp-projects-title">
          <Heading heading={heading} />
        </div>
        <div className="rvp-projects-plus">
          <img src={AddMoreIcon} alt="Add more" />
        </div>
      </div>
    </>
  );
};

export default ProjectsTitleHero;
