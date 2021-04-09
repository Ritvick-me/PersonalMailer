import React from "react";
import "./BubbleButton.css";

const BubbleButton = (props) => {
  return (
    <>
      <button className="rvp-button" onClick={props.openModal}>
        Enquire for availability
        <div className="rvp-bubbles rvp-bubble-red"></div>
        <div className="rvp-bubbles rvp-bubble-yellow"></div>
        <div className="rvp-bubbles rvp-bubble-purple"></div>
        <div className="rvp-bubbles rvp-bubble-pink"></div>
        <div className="rvp-bubbles rvp-bubble-green"></div>
        <div className="rvp-fix-an-appointment">{props.title}</div>
      </button>
    </>
  );
};

export default BubbleButton;
