import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LilyConstruction from "../Assets/LilyConstruction.svg";
import "./UnderConstruction.css";

const UnderConstruction = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <div className="rvp-UnderConstruction">
        <div className="rvp-UnderConstruction-structure">
          <div className="d-none d-lg-block rvp-UnderConstruction-placeholder">
            <img src={LilyConstruction} alt="Lily404" />
          </div>
          <div className="rvp-UnderConstruction-body">
            <div className="d-lg-none rvp-UnderConstruction-placeholder">
              <img src={LilyConstruction} alt="Lily404" />
            </div>
            <h1 className="rvp-UnderConstruction-404">Bzzz...</h1>
            <h3 className="rvp-UnderConstruction-description">
              Looks like the bees are cooking something delicious! Be back soon
              for a taste!
            </h3>
            <NavLink exact to="/">
              <button className="rvp-UnderConstruction-home-btn">Home</button>
            </NavLink>
            <button onClick={goBack} className="rvp-UnderConstruction-back-btn">
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
