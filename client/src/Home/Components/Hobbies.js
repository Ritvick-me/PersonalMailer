import React, { useState, useEffect } from "react";
import SliderModal from "../../Common/SliderModal";
import Poetry from "../../Assets/Poetry.png";
import Designing from "../../Assets/Designing.png";
import Travelling from "../../Assets/Travelling.jpg";
import PlayButton from "../../Assets/Play.svg";
import "./Hobbies.css";

const hobbySlider = () => {
  const writing = document.querySelector(".rvp-poetry-outer");
  const travelling = document.querySelector(".rvp-travelling-outer");
  const designing = document.querySelector(".rvp-designing-outer");
  writing.addEventListener("mouseover", () => {
    const subtitle = document.querySelector(".rvp-hobbies-list");
    subtitle.style.transform = "translateY(-1.45rem)";
  });
  writing.addEventListener("mouseout", () => {
    const subtitle = document.querySelector(".rvp-hobbies-list");
    subtitle.style.transform = "translateY(0rem)";
  });
  travelling.addEventListener("mouseover", () => {
    const subtitle = document.querySelector(".rvp-hobbies-list");
    subtitle.style.transform = "translateY(-2.85rem)";
  });
  travelling.addEventListener("mouseout", () => {
    const subtitle = document.querySelector(".rvp-hobbies-list");
    subtitle.style.transform = "translateY(0rem)";
  });
  designing.addEventListener("mouseover", () => {
    const subtitle = document.querySelector(".rvp-hobbies-list");
    subtitle.style.transform = "translateY(-4.3rem)";
  });
  designing.addEventListener("mouseout", () => {
    const subtitle = document.querySelector(".rvp-hobbies-list");
    subtitle.style.transform = "translateY(0rem)";
  });
};

const Hobbies = () => {
  useEffect(() => {
    hobbySlider();
    modalToggler();
    return () => {};
  }, []);

  const [modalContent, ToggleModalOn] = useState("");

  const modalToggler = () => {
    const playButtons = document.querySelectorAll(".rvp-play");
    playButtons.forEach((button, index) => {
      button.onclick = () => {
        if (index === 0) {
          ToggleModalOn("Writing");
        } else if (index === 1) {
          ToggleModalOn("Travelling");
        } else if (index === 2) {
          ToggleModalOn("Designing");
        }
      };
    });
  };

  const closeModal = () => {
    ToggleModalOn("");
  };

  return (
    <div>
      <div className="rvp-hobbies">
        <div>
          <div className="rvp-hobbies-body">
            <div className="rvp-poetry-outer">
              <div className="rvp-poetry">
                <img src={Poetry} alt="Poetry" />
                <div className="rvp-play">
                  <img src={PlayButton} alt="Play" />
                </div>
              </div>
            </div>
            <div className="rvp-more-hobbies">
              <div className="rvp-travelling-outer">
                <div className="rvp-travelling">
                  <img src={Travelling} alt="Travelling" />
                  <div className="rvp-play">
                    <img src={PlayButton} alt="Play" />
                  </div>
                </div>
              </div>
              <div className="rvp-designing-outer">
                <div className="rvp-designing">
                  <img src={Designing} alt="Designing" />
                  <div className="rvp-play">
                    <img src={PlayButton} alt="Play" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="rvp-his-hobbies-subtitle">
            Loves to
            <span>
              <ul className="rvp-hobbies-list">
                <li>Hover</li>
                <li>write</li>
                <li>travel</li>
                <li>design</li>
              </ul>
            </span>
          </h3>
        </div>
      </div>
      <SliderModal modalContent={modalContent} closeModal={closeModal} />
    </div>
  );
};

export default Hobbies;
