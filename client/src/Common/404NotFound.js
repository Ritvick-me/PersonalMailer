import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Lily404 from "../Assets/Lily404.svg";
import "./404NotFound.css";

const NotFound = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <div className="rvp-NotFound">
        <div className="rvp-NotFound-structure">
          <div className="rvp-NotFound-body">
            <div className="d-block d-lg-none rvp-NotFound-placeholder">
              <img src={Lily404} alt="Lily404" />
            </div>
            <h1 className="rvp-NotFound-404">404</h1>
            <h3 className="rvp-NotFound-description">
              Lily seems to have lost the scent of what you were looking for.
            </h3>
            <NavLink exact to="/">
              <button className="rvp-NotFound-home-btn">Home</button>
            </NavLink>
            <button onClick={goBack} className="rvp-NotFound-back-btn">
              Back
            </button>
          </div>
          <div className="d-none d-lg-block rvp-NotFound-placeholder">
            <img src={Lily404} alt="Lily404" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
