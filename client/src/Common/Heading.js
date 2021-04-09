import React from "react";
import "./Heading.css";

const Heading = ({ heading }) => {
  return (
    <div>
      <h1 className="rvp-heading-body">{heading}</h1>
    </div>
  );
};

export default Heading;
