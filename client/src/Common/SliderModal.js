import React, { useState, useEffect } from "react";
import Writing from "../Assets/Poetry.mp4";
import Travelling from "../Assets/Travelling.3gp";
import GoBack from "../Assets/GoBack.svg";
import "./SliderModal.css";

const SliderModal = ({ modalContent, closeModal }) => {
  let iframe;
  const [iframeVideo, setState] = useState(modalContent);

  useEffect(() => {
    setState(modalContent);
  }, [modalContent]);

  const hideModal = () => {
    setState("");
    closeModal();
  };

  if (modalContent === "Writing") {
    iframe = (
      <video className="rvp-hobby-log" controls>
        <source src={Writing} type="video/mp4" />
      </video>
    );
  } else if (modalContent === "Travelling") {
    iframe = (
      <video className="rvp-hobby-log" controls>
        <source src={Travelling} type="video/mp4" />
      </video>
    );
  }
  if (modalContent === "Designing") {
    iframe = (
      <video className="rvp-hobby-log" controls>
        <source src={Travelling} type="video/mp4" />
      </video>
    );
  }

  return (
    <>
      <div className={iframeVideo ? "rvp-modal" : "rvp-modal rvp-hide-modal"}>
        <div className="rvp-modal-structure">
          <div className="rvp-modal-background" onClick={hideModal}></div>
          <div className="rvp-modal-body">{iframe}</div>
          <img
            className="rvp-go-back"
            src={GoBack}
            alt="Go back"
            onClick={hideModal}
          />
        </div>
      </div>
    </>
  );
};

export default SliderModal;
