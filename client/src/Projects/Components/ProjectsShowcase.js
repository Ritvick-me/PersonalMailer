import React from "react";
import AllProjects from "../../Assets/AllProjects";
import EvenProjects from "./EvenProjects";
import OddProjects from "./OddProjects";
import SeperatorText from "./SeperatorText";
import "./ProjectsShowcase.css";

const ProjectsShowcase = () => {
  const allProjects = AllProjects.map((project, index) => {
    if (
      (index + 1) % 2 !== 0 &&
      Math.ceil(AllProjects.length / 2) === index + 1
    ) {
      return (
        <div key={index}>
          <div className="rvp-projects-arrangement-odd">
            <OddProjects project={project} />
          </div>
          <SeperatorText />
        </div>
      );
    } else if ((index + 1) % 2 !== 0) {
      return (
        <div key={index} className="rvp-projects-arrangement-odd">
          <OddProjects project={project} />
        </div>
      );
    }
    return (
      <div key={index} className="rvp-projects-arrangement-even">
        <EvenProjects project={project} />
      </div>
    );
  });

  return (
    <>
      <div className="rvp-projects-showcase">
        <div className="rvp-projects-showcase-body">{allProjects}</div>
      </div>
    </>
  );
};

export default ProjectsShowcase;
