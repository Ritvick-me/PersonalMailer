import React from "react";
import { NavLink } from "react-router-dom";
import Heading from "./Heading";
import MyLogo from "../portfolio-logo-ritvick.svg";
import MySignature from "../Assets/MySignature.svg";
import "./Footer.css";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Footer = () => {
  const heading = "Like what you see?";
  return (
    <>
      <div className="rvp-footer">
        <div className="rvp-footer-logo">
          <NavLink exact to="/">
            <img
              className="rvp-my-logo"
              onClick={scrollToTop}
              src={MyLogo}
              alt="My logo"
            />
          </NavLink>
          <br />
          <NavLink exact to="/">
            <img
              className="rvp-my-sign"
              onClick={scrollToTop}
              src={MySignature}
              alt="My signature"
            />
          </NavLink>
        </div>
        <div className="rvp-footer-details">
          <div className="rvp-footer-heading">
            <Heading heading={heading} />
            <p className="rvp-footer-showcase-text">
              Have something on mind that needs to be showcased?
              <br />
              Or perhaps you'd like to know me more, first?
            </p>
          </div>

          <div className="rvp-button-area">
            <button type="button">Smash to connect</button>
          </div>
          <ul className="rvp-socials">
            <li>
              <a href="tel:+919940445192">
                <i className="fab fa-phone-square-alt"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ritvick-v-pandey/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=+919506500334"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp-square"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ritvick-me"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-square"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="rvp-footer-credits">
          <p className="rvp-ritvick-v-pandey">
            Forged in 🔥 by <span>Ritvick V. Pandey</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
