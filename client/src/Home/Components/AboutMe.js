import React, { useEffect } from "react";
import Heading from "../../Common/Heading";
import Logos from "../../Assets/Logos";
import "./AboutMe.css";

// Tech stacks data

const technologies = [
  {
    name: "React",
    efficiency: "70%",
  },
  {
    name: "Angular",
    efficiency: "55%",
  },
  {
    name: "Svelte",
    efficiency: "90%",
  },
  {
    name: "HTML5",
    efficiency: "80%",
  },
  {
    name: "CSS",
    efficiency: "90%",
  },
  {
    name: "Java Script",
    efficiency: "70%",
  },
  {
    name: "Node",
    efficiency: "60%",
  },
  {
    name: "MongoDB",
    efficiency: "70%",
  },
];

//mobile-scroll animation

const objectAnimator = () => {
  window.addEventListener("scroll", mobileScrollFunction);
};

const mobileScrollFunction = () => {
  const distance = document.querySelector(".rvp-about-me-body").offsetTop + 300;
  const currentDistance = window.innerHeight + window.scrollY;
  const mobile = document.querySelector(".rvp-mobile-design");
  if (currentDistance >= distance) {
    mobile.style.transform =
      "translateY(" +
      (60 - (currentDistance - distance) / 14) +
      "%) rotateZ(10deg)";
    var x = window.matchMedia("(max-width: 768px)");
    if (x.matches) {
      mobile.style.transform =
        "translateY(" +
        (60 - (currentDistance - distance) / 16) +
        "%) rotateZ(0deg)";
      if (60 - (currentDistance - distance) / 16 <= 0) {
        mobile.style.transform = "translateY(0)";
      }
    }
  }
};

//mobile-scroll default animation on page reload

const defaultobjectHeight = () => {
  const distance = document.querySelector(".rvp-about-me-body").offsetTop + 100;
  const currentDistance = window.innerHeight + window.scrollY;
  const mobile = document.querySelector(".rvp-mobile-design");
  mobile.style.transform =
    "translateY(" +
    (80 - (currentDistance - distance) / 12) +
    "%) rotateZ(10deg)";
  var x = window.matchMedia("(max-width: 768px)");
  if (x.matches) {
    mobile.style.transform =
      "translateY(" +
      (80 - (currentDistance - distance) / 12) +
      "%) rotateZ(0deg)";
  }
};

// Mobile Logo animation starts here========================================================================

var timer = 0;
const speed = 5000;
let count = 1;
var mediaMargin = 21.1;
var marginPushBack = 21.1;

//Set default margins based on viewport size

const marginDefault = () => {
  var x = window.matchMedia("(max-width: 400px)");
  if (x.matches) mediaMargin = 19.1;
  else mediaMargin = 21.1;
  marginPushBack = mediaMargin;
};

// Looping function

var skillsTimeout;

const skillsScroller = (callback, factor, times) => {
  var internalCallback = (function (factor) {
    return function () {
      if (++factor >= 0) {
        skillsTimeout = window.setTimeout(internalCallback, times);
        times = callback();
      }
    };
  })(factor);

  setTimeout(internalCallback, factor);
};

// Definition of animation carousel

const skillsScrollerCallbackFunction = () => {
  const logoImages = document.querySelectorAll(".rvp-logos");
  const totalImages = logoImages.length;
  const scrollingBody = document.querySelector(".rvp-logo-bar");
  if (count === 1) {
    timer = speed;
    scrollingBody.style.display = "inline";
    marginPushBack = 0;
    scrollingBody.style.marginLeft = marginPushBack + "rem";
    count += 1;
  } else if (count !== 1 && count <= totalImages + 1) {
    scrollingBody.style.opacity = 1;
    scrollingBody.style.marginLeft = marginPushBack + "rem";
    count += 1;
    marginPushBack = marginPushBack - mediaMargin;
    if (count === totalImages + 2) {
      timer = 400;
    }
  } else if (count === totalImages + 2) {
    scrollingBody.style.marginLeft = marginPushBack + "rem";
    count += 1;
    marginPushBack = mediaMargin;
    scrollingBody.style.opacity = 0;
  } else {
    count = 1;
    scrollingBody.style.marginLeft = mediaMargin + "rem";
    timer = 300;
  }
  return timer;
};

// Mobile logo animation ends here==========================================================================

// Skills rating starts here================================================================================

const scrollUpSpeed = 5000;
const marginConstant = 3.2;
var marginRotateTop = 3.2;
var ratingCount = 1;
var scrollUpTimer = 0;

// Looping function

var ratingClearTimeout;

const rateScrollFunction = (callback, factor, times) => {
  var internalCallback = (function (factor) {
    return function () {
      if (++factor >= 0) {
        ratingClearTimeout = window.setTimeout(internalCallback, times);
        times = callback();
      }
    };
  })(factor);

  setTimeout(internalCallback, factor);
};

// Definition of animation carousel

const rateScrollCallbackFunction = () => {
  const logoContent = document.querySelectorAll(".rvp-inline-headings");
  const totalSkills = logoContent.length;
  const scrollingBody = document.querySelectorAll(".rvp-inline-headings");
  if (ratingCount === 1) {
    scrollUpTimer = scrollUpSpeed;
    marginRotateTop = 0;
    scrollingBody.forEach((e) => {
      e.style.transform = "translateY(" + marginRotateTop + "rem)";
    });
    ratingCount += 1;
  } else if (ratingCount !== 1 && ratingCount <= totalSkills + 1) {
    scrollingBody.forEach((e) => {
      e.style.opacity = 1;
    });
    if (ratingCount >= 2 && ratingCount < totalSkills + 2) {
      const progressBar = scrollingBody[ratingCount - 2].querySelector(
        ".rvp-current-progress"
      );
      progressBar.style.transitionDuration = "1s";
      const efficiency = technologies[ratingCount - 2].efficiency;
      progressBar.style.width = efficiency;
    }
    scrollingBody.forEach((e) => {
      e.style.transform = "translateY(" + marginRotateTop + "rem)";
    });
    ratingCount += 1;
    marginRotateTop = marginRotateTop - marginConstant;
    if (ratingCount === totalSkills + 2) {
      scrollUpTimer = 400;
    }
  } else if (ratingCount === totalSkills + 2) {
    scrollingBody.forEach((e) => {
      e.style.transform = "translateY(" + marginRotateTop + "rem)";
    });
    ratingCount += 1;
    marginRotateTop = marginConstant;
    scrollingBody.forEach((e) => {
      e.style.opacity = 0;
    });
  } else {
    scrollingBody.forEach((e, index) => {
      const progressBar = e.querySelector(".rvp-current-progress");
      progressBar.style.width = "0";
    });
    ratingCount = 1;
    scrollingBody.forEach((e) => {
      e.style.transform = "translateY(" + marginRotateTop + "rem)";
    });
    scrollUpTimer = 300;
  }
  return scrollUpTimer;
};

// Skills rating ends here==================================================================================

const AboutMe = () => {
  const heading = [
    "Learning makes him ",
    <span key="[tick]">tick</span>,
    " and ",
    <span key="[flick]">flick</span>,
    ".",
  ];
  const techStacks = technologies;

  useEffect(() => {
    defaultobjectHeight();
    objectAnimator();
    marginDefault();
    skillsScroller(skillsScrollerCallbackFunction, 10, timer);
    rateScrollFunction(rateScrollCallbackFunction, 10, scrollUpTimer);
    return () => {
      window.removeEventListener("scroll", mobileScrollFunction);
      clearTimeout(skillsTimeout);
      clearTimeout(ratingClearTimeout);
    };
  }, []);

  const techno = techStacks.map((technology) => {
    return (
      <div className="rvp-inline-headings" key={technology.name}>
        <h3 className="rvp-tech-heading">{technology.name}</h3>
        <div className="rvp-max-progress-bar">
          <div className="rvp-current-progress"></div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="rvp-about-me-body">
        <div className="container-fluid">
          <div className="row align-items-end justify-content-center">
            <div className="col col-12 col-lg-6 rvp-scroll-handler">
              <div className="rvp-about-me-box">
                <div>
                  <Heading heading={heading} />
                  <p className="rvp-para">
                    It makes him TICK off <span>technologies</span> from his
                    bucket list and build <span>projects</span> to settle his
                    FLICKING fingers
                  </p>
                </div>
                <div className="rvp-skills rvp-sm-margin">{techno}</div>
              </div>
            </div>
            <div className="col col-12 col-lg-6 px-0 rvp-column-bottom-margin">
              <div className="rvp-mobile-design">
                <div className="rvp-logo-bar">
                  <img
                    className="rvp-logos"
                    src={Logos.ReactLogo}
                    alt="React"
                  />
                  <img
                    className="rvp-logos"
                    src={Logos.AngularLogo}
                    alt="Angular"
                  />
                  <img
                    className="rvp-logos"
                    src={Logos.SvelteLogo}
                    alt="Svelte"
                  />
                  <img className="rvp-logos" src={Logos.HTMLLogo} alt="HTML" />
                  <img className="rvp-logos" src={Logos.CSSLogo} alt="CSS" />
                  <img className="rvp-logos" src={Logos.JSLogo} alt="JS" />
                  <img className="rvp-logos" src={Logos.NodeLogo} alt="Node" />
                  <img
                    className="rvp-logos"
                    src={Logos.MongodbLogo}
                    alt="Node"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
