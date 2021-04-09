import React, { useRef } from "react";
import Webcam from "react-webcam";
import "./CaptureFaces.css";

const CaptureFaces = () => {
  const webcamRef = useRef(null);

  return (
    <div>
      <div className="rvp-capture-faces">
        <div>
          <div className="rvp-mobile-device">
            <div className="rvp-camera-background">
              <Webcam
                className="rvp-camera"
                audio={false}
                mirrored={true}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                allow="camera; microphone;"
              />
            </div>
            <div className="rvp-mobile-camera"></div>
          </div>
          <h3 className="rvp-capture-caption">
            Loves to capture <span>beautiful</span> faces.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CaptureFaces;
