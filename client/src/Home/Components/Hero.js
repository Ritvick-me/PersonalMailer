import React, { useEffect } from "react";
import MyIllustration from "../../MyFace.svg";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    const parallaxMe = document.querySelector(".rvp-hero-body");
    window.addEventListener("scroll", someFunc, false);

    function someFunc() {
      parallaxMe.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    }
    return () => {
      window.removeEventListener("scroll", someFunc);
    };
  }, []);
  return (
    <div id="rvp-hero">
      <div className="rvp-hero-body">
        <div className="rvp-hero-box">
          <div className="rvp-content-section">
            <h1>Ritvick V. Pandey</h1>
            <div className="rvp-outer-box">
              <div className="rvp-inner-box box-set-1">
                <div className="box-set-3 box-1">
                  <div className="rvp-content-body">
                    <h3 className="rvp-about-me">The John Doe to this URL</h3>
                    <h3 className="rvp-about-me">
                      A pre-final year student at SRMIST, Chennai
                    </h3>
                  </div>
                </div>
                <div className="box-set-4 box-2">
                  <div className="rvp-content-body">
                    <h3 className="rvp-about-me">
                      A rookie with a few thousand lines of code
                    </h3>
                    <h3 className="rvp-about-me">
                      ✔️gain experience
                      <br />
                      ✔️develop products
                    </h3>
                  </div>
                </div>
              </div>
              <div className="rvp-inner-box box-set-2">
                <div className="box-set-3 box-3">
                  <div className="rvp-content-body">
                    <h3 className="rvp-about-me">A full stack developer</h3>
                    <h3 className="rvp-about-me">
                      <code>🎯npm init</code>
                      <br />
                      <code>🎯npm create-react-app</code>
                      <br />
                      <code>🎯ng g c AngularProject</code>
                    </h3>
                  </div>
                </div>
                <div className="box-set-4 box-4">
                  <div className="rvp-content-body">
                    <h3 className="rvp-about-me">
                      Loves doodling designs using
                    </h3>
                    <h3 className="rvp-about-me">
                      Adobe Illustrator, Figma, Adobe Photoshop
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="rvp-life-to-ideas">
              He loves to bring
              <span className="rvp-span-1">
                <div>life</div>
                <div>ideas</div>
              </span>
              <span className="rvp-span-to">to</span>
              <span className="rvp-span-2">
                <div>life</div>
                <div>ideas</div>
              </span>
              <span className="rvp-span-dot">.</span>
            </h3>
          </div>
        </div>
        <div className="rvp-my-illustration">
          <img src={MyIllustration} alt="That's me" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
