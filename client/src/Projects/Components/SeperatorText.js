import React from "react";
import Heading from "../../Common/Heading";
import "./SeperatorText.css";

const SeperatorText = () => {
  const heading = [
    "Some of these projects saw the ",
    <span key="SeperatorText" className="span-seperator-text">
      light of day
    </span>,
    " and some, just taught.",
  ];

  return (
    <div>
      <div className="rvp-seperator-text">
        <div>
          <div className="rvp-seperator-text-body">
            <Heading heading={heading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeperatorText;
