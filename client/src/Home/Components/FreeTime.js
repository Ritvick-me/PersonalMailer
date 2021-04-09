import React from "react";
import Heading from "../../Common/Heading";
import "./FreeTime.css";

const FreeTime = () => {
  const heading = [
    "What he does in his ",
    <span key="FreeTime" className="span-free-time">
      free time
    </span>,
    " apart from playing fetch with his pet 🐶",
  ];

  return (
    <div>
      <div className="rvp-free-time">
        <div>
          <div className="rvp-free-time-body">
            <Heading heading={heading} />
          </div>
          <h3 className="rvp-subtitle">
            And <span>crying</span> when his code doesn't work—
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FreeTime;
