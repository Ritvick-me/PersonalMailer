import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TopProjects from "../../Assets/TopProjects";
import ExploreMoreLogo from "../../Assets/Explore.svg";
import "./Contributions.css";

// Contributions button heights and width

const setHeight = () => {
  var button = document.querySelectorAll(".rvp-tablet-buttons");
  var x = window.matchMedia("(min-width: 993px)");
  if (x.matches) {
    var imageHeight = document.querySelector(".rvp-contributions img")
      .offsetHeight;
    button.forEach((e) => {
      e.style.height = imageHeight / 5 + "px";
    });
  } else {
    var imageWidth = document.querySelector(".rvp-contributions img")
      .offsetWidth;
    button.forEach((e) => {
      e.style.width = imageWidth / 5 + "px";
    });
  }
  const tabletHeight = document.querySelector(".rvp-tablet-view").offsetHeight;
  const contributionHeader = document.querySelector(
    ".rvp-contributions-section"
  ).offsetHeight;
  const contributionSection = document.querySelector(".rvp-my-contributions");
  contributionSection.style.height =
    tabletHeight + contributionHeader + 50 + "px";
};

// Tablet parallax effect

const tabletPrallax = () => {
  window.addEventListener("scroll", tabletParallaxFunction);
};

const tabletParallaxFunction = () => {
  setHeight();
  const sectionDistance =
    document.querySelector(".rvp-my-contributions").offsetTop + 300;
  const scrolledDistance = window.innerHeight + window.scrollY;
  const tablet = document.querySelector(".rvp-tablet-view");
  if (
    scrolledDistance > sectionDistance &&
    45 - (scrolledDistance - sectionDistance) / 10 > 0
  ) {
    tablet.style.transform =
      "rotateX(" + (45 - (scrolledDistance - sectionDistance) / 10) + "deg)";
  }
};

// Tablet default parallax effect on page reload

const defaultTabletParallax = () => {
  const sectionDistance =
    document.querySelector(".rvp-my-contributions").offsetTop + 300;
  const scrolledDistance = window.innerHeight + window.scrollY;
  const tablet = document.querySelector(".rvp-tablet-view");
  if (45 - (scrolledDistance - sectionDistance) / 10 > 45)
    tablet.style.transform = "rotateX(45deg)";
  else if (
    45 - (scrolledDistance - sectionDistance) / 10 > 0 &&
    45 - (scrolledDistance - sectionDistance) / 10 < 45
  )
    tablet.style.transform =
      "rotateX(" + (45 - (scrolledDistance - sectionDistance) / 10) + "deg)";
  else if (45 - (scrolledDistance - sectionDistance) / 10 < 0)
    tablet.style.transform = "rotateX(0deg)";
};

// Tablet contribution buttons animation

const contributionButton = () => {
  const buttons = document.querySelectorAll(".rvp-tablet-buttons");
  buttons[0].classList = "rvp-tablet-buttons rvp-tablet-active"; //Adding default active class to the first button
  const rightArrow = document.querySelector(".rvp-right-arrow path");
  rightArrow.classList = "rvp-active-arrows"; //Add default active arrow button
  const activeCarouselImage = document.querySelector(".rvp-tablet-carousel");
  activeCarouselImage.src = TopProjects.projects[0].website;
};

const contributionButtonFunction = (e, project) => {
  const activeCarouselImage = document.querySelector(".rvp-tablet-carousel");
  const buttons = document.querySelectorAll(".rvp-tablet-buttons");
  buttons.forEach((button) => {
    button.classList = "rvp-tablet-buttons";
  });
  var activeIndex;
  TopProjects.projects.forEach((proj, index) => {
    if (proj.name === project) {
      activeIndex = index;
    }
  });
  e.currentTarget.classList = "rvp-tablet-buttons rvp-tablet-active";
  if (!e.currentTarget.classList.contains("rvp-explorer-button")) {
    activeCarouselImage.src = TopProjects.projects[activeIndex].website;
    activeCarouselImage.alt = TopProjects.projects[activeIndex].name;
  }
  if (
    e.currentTarget.classList.contains("rvp-tablet-active") &&
    activeIndex === 0
  ) {
    const rightArrow = document.querySelector(".rvp-right-arrow path");
    const leftArrow = document.querySelector(".rvp-left-arrow path");
    rightArrow.classList = "rvp-active-arrows";
    leftArrow.classList = "";
  } else if (
    e.currentTarget.classList.contains("rvp-tablet-active") &&
    activeIndex === TopProjects.logos.length - 1
  ) {
    const rightArrow = document.querySelector(".rvp-right-arrow path");
    const leftArrow = document.querySelector(".rvp-left-arrow path");
    rightArrow.classList = "";
    leftArrow.classList = "rvp-active-arrows";
  } else if (
    e.currentTarget.classList.contains("rvp-tablet-active") &&
    activeIndex === buttons.length - 1
  ) {
    const rightArrow = document.querySelector(".rvp-right-arrow path");
    const leftArrow = document.querySelector(".rvp-left-arrow path");
    rightArrow.classList = "";
    leftArrow.classList = "rvp-active-arrows";
  } else {
    const rightArrow = document.querySelector(".rvp-right-arrow path");
    const leftArrow = document.querySelector(".rvp-left-arrow path");
    rightArrow.classList = "rvp-active-arrows";
    leftArrow.classList = "rvp-active-arrows";
  }
};

// Arrow keys integration code

var currentIndex = 0;

// Right arrow function

const rightArrowFunction = (rightArrow) => {
  const activeCarouselImage = document.querySelector(".rvp-tablet-carousel");
  if (rightArrow.currentTarget.classList.contains("rvp-active-arrows")) {
    const contributionButtons = document.querySelectorAll(
      ".rvp-tablet-buttons"
    );
    contributionButtons.forEach((e, index) => {
      if (e.classList.contains("rvp-tablet-active")) {
        currentIndex = index;
        e.classList = "rvp-tablet-buttons";
      }
    });
    contributionButtons.forEach((e, index) => {
      if (index === currentIndex + 1) {
        e.classList = "rvp-tablet-buttons rvp-tablet-active";
        if (index !== contributionButtons.length - 1) {
          activeCarouselImage.src = TopProjects.projects[index].website;
          activeCarouselImage.alt = TopProjects.projects[index].name;
        } else {
          activeCarouselImage.src = TopProjects.projects[0].website;
          activeCarouselImage.alt = TopProjects.projects[0].name;
        }
        if (e.classList.contains("rvp-tablet-active") && index === 0) {
          const rightArrow = document.querySelector(".rvp-right-arrow path");
          const leftArrow = document.querySelector(".rvp-left-arrow path");
          rightArrow.classList = "rvp-active-arrows";
          leftArrow.classList = "";
        } else if (
          e.classList.contains("rvp-tablet-active") &&
          index === TopProjects.logos.length - 1
        ) {
          const rightArrow = document.querySelector(".rvp-right-arrow path");
          const leftArrow = document.querySelector(".rvp-left-arrow path");
          rightArrow.classList = "";
          leftArrow.classList = "rvp-active-arrows";
        } else {
          const rightArrow = document.querySelector(".rvp-right-arrow path");
          const leftArrow = document.querySelector(".rvp-left-arrow path");
          rightArrow.classList = "rvp-active-arrows";
          leftArrow.classList = "rvp-active-arrows";
        }
      }
    });
  }
};

// Left arrow function

const leftArrowFunction = (leftArrow) => {
  const activeCarouselImage = document.querySelector(".rvp-tablet-carousel");
  if (leftArrow.currentTarget.classList.contains("rvp-active-arrows")) {
    const contributionButtons = document.querySelectorAll(
      ".rvp-tablet-buttons"
    );
    contributionButtons.forEach((e, index) => {
      if (e.classList.contains("rvp-tablet-active")) {
        currentIndex = index;
        e.classList = "rvp-tablet-buttons";
      }
    });
    contributionButtons.forEach((e, index) => {
      if (index === currentIndex - 1) {
        e.classList = "rvp-tablet-buttons rvp-tablet-active";
        if (index !== contributionButtons.length - 1) {
          activeCarouselImage.src = TopProjects.projects[index].website;
          activeCarouselImage.alt = TopProjects.projects[index].name;
        } else {
          activeCarouselImage.src = TopProjects.projects[0].website;
          activeCarouselImage.alt = TopProjects.projects[0].name;
        }
        if (e.classList.contains("rvp-tablet-active") && index === 0) {
          const rightArrow = document.querySelector(".rvp-right-arrow path");
          const leftArrow = document.querySelector(".rvp-left-arrow path");
          rightArrow.classList = "rvp-active-arrows";
          leftArrow.classList = "";
        } else if (
          e.classList.contains("rvp-tablet-active") &&
          index === TopProjects.logos.length - 1
        ) {
          const rightArrow = document.querySelector(".rvp-right-arrow path");
          const leftArrow = document.querySelector(".rvp-left-arrow path");
          rightArrow.classList = "";
          leftArrow.classList = "rvp-active-arrows";
        } else {
          const rightArrow = document.querySelector(".rvp-right-arrow path");
          const leftArrow = document.querySelector(".rvp-left-arrow path");
          rightArrow.classList = "rvp-active-arrows";
          leftArrow.classList = "rvp-active-arrows";
        }
      }
    });
  }
};

const Contributions = () => {
  useEffect(() => {
    window.onload = () => {
      setHeight();
    };
    defaultTabletParallax();
    contributionButton();
    tabletPrallax();

    return () => {
      window.removeEventListener("scroll", tabletParallaxFunction);
    };
  }, []);

  const [displayedContributionStacks, changeState] = useState(() =>
    TopProjects.projects[0].stacks.map((stack, index) => [
      <img
        key={index}
        className="rvp-stacks"
        src={stack}
        alt={TopProjects.projects[0].name}
      />,
    ])
  );

  const displayStacksList = (project) => {
    var newIndex;
    TopProjects.projects.forEach((e, index) => {
      if (e.name === project) {
        newIndex = index;
      }
    });

    const stacksUsed = TopProjects.projects[newIndex].stacks.map(
      (stack, index) => {
        return (
          <img
            key={index}
            className="rvp-stacks"
            src={stack}
            alt={TopProjects.projects[newIndex].name}
          />
        );
      }
    );

    changeState(stacksUsed);
  };

  const nextProject = (e) => {
    var newIndex = 0;

    if (e.currentTarget.parentElement.classList.contains("rvp-right-arrow")) {
      rightArrowFunction(e);
    } else {
      leftArrowFunction(e);
    }

    const currentProject = document.querySelector(".rvp-tablet-carousel").alt;

    TopProjects.projects.forEach((e, index) => {
      if (e.name === currentProject) {
        newIndex = index;
      } else if (currentProject === " ") {
        newIndex = 0;
      }
    });

    const stacksUsed = TopProjects.projects[newIndex].stacks.map(
      (stack, index) => {
        return (
          <img
            key={index}
            className="rvp-stacks"
            src={stack}
            alt={TopProjects.projects[newIndex].name}
          />
        );
      }
    );

    changeState(stacksUsed);
  };

  const exploreMore = () => {
    const stacksUsed = [];

    changeState(stacksUsed);
  };

  const topProjectLogos = TopProjects.logos.map((logo) => {
    return (
      <div
        key={logo.name}
        className="rvp-tablet-buttons"
        onClick={(e) => {
          displayStacksList(logo.name);
          contributionButtonFunction(e, logo.name);
        }}
      >
        <img src={logo.icon} alt="SRMKZILLA" />
        <p className="rvp-d-none rvp-d-lg-block">{logo.name}</p>
      </div>
    );
  });

  return (
    <>
      <div className="rvp-my-contributions">
        <div className="rvp-contributions-section">
          <h3>His top notch contributions</h3>
          <svg
            className="rvp-left-arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 162.53 184.83"
          >
            <path
              onClick={(leftArrow) => nextProject(leftArrow)}
              d="M4.63,100.44l144,83.14a9.27,9.27,0,0,0,13.9-8V9.28a9.26,9.26,0,0,0-13.9-8L4.63,84.39A9.27,9.27,0,0,0,4.63,100.44Z"
            />
          </svg>
          <svg
            className="rvp-right-arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 162.53 184.83"
          >
            <path
              onClick={(rightArrow) => nextProject(rightArrow)}
              d="M157.9,84.39,13.9,1.26A9.26,9.26,0,0,0,0,9.28V175.56a9.27,9.27,0,0,0,13.9,8l144-83.14A9.27,9.27,0,0,0,157.9,84.39Z"
            />
          </svg>
          {displayedContributionStacks}
          <div className="rvp-tablet-view">
            <div className="rvp-tablet-sidebar">
              {topProjectLogos}
              <NavLink exact to="/projects">
                <div
                  className="rvp-tablet-buttons rvp-explorer-button"
                  onClick={() => exploreMore()}
                >
                  <img width="45px" src={ExploreMoreLogo} alt="Explore" />
                  <p className="rvp-d-none rvp-d-lg-block">Explore more...</p>
                </div>
              </NavLink>
            </div>
            <div className="rvp-contributions">
              <img className="rvp-tablet-carousel" src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contributions;
