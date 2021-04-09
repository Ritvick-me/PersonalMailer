import React, { useRef, useState, useEffect } from "react";
import "./CameraPopUp.css";

const CameraPopUp = () => {
  const popup = useRef();

  const closePopup = () => {
    popup.current.classList.add("rvp-popup-close-menu");
    localStorage.setItem("isPopupDisabled", true);
    localStorage.setItem("buttonClickTime", Date.now());
  };

  useEffect(() => {
    var constraints = (window.constraints = {
      audio: false,
      video: true,
    });
    const isCamEnabled = async () => {
      const data = await navigator.mediaDevices
        .getUserMedia(constraints)
        .then((data) => {
          localStorage.clear();
          return data.active;
        })
        .catch((err) => {
          console.log("Camera access denied: ", err);
          const isPopupDisabled = localStorage.getItem("isPopupDisabled");
          const buttonClickTime = localStorage.getItem("buttonClickTime");
          const timeNow = Date.now();
          const duration = 86400000;
          const timeDifference = timeNow - buttonClickTime;
          if (timeDifference >= duration && buttonClickTime) {
            localStorage.clear();
          }
          if (isPopupDisabled) {
            popup.current.classList.add("rvp-popup-close-menu");
          }
        });
      if (data) {
        changeState(true);
      }
    };
    isCamEnabled();
  }, []);

  const [isCam, changeState] = useState(false);

  return (
    <>
      <div
        ref={popup}
        className={isCam ? "rvp-popup rvp-popup-d-none" : "rvp-popup"}
      >
        <div className="rvp-popup-content">
          <h3>Allow camera permission for a better user experience.</h3>
          <p>The website does not collect any personal information.</p>
        </div>
        <button className="rvp-popup-close" onClick={closePopup}>
          close
        </button>
      </div>
    </>
  );
};

export default CameraPopUp;
