import React, { useState } from "react";
import Heading from "../../Common/Heading";
import Links from "./Links";
import EnquiryModal from "./EnquiryModal";
import BubbleButton from "../../Common/BubbleButton";
import HandShake from "../../Assets/HandShake.svg";
import "./Socials.css";

const Socials = () => {
  const heading = [
    "Looks like he ",
    <span key="rvp-grabbed">grabbed</span>,
    " your attention",
    <span key=".">.</span>,
  ];

  const title = "Fix an appointment";

  const [toggleEnquiryModal, toggleState] = useState(false);

  const openModal = () => {
    toggleState(true);
  };

  const closeModal = () => {
    toggleState(false);
  };

  return (
    <>
      <div className="rvp-contact-hero">
        <div className="rvp-contact-handshake d-none d-lg-block">
          <img src={HandShake} alt="Add more" />
        </div>
        <div className="rvp-contact-title">
          <div>
            <Heading heading={heading} />
            <div className="rvp-contact-responsive-socials">
              <BubbleButton title={title} openModal={openModal} />
              <Links />
            </div>
          </div>
        </div>
        <div className="rvp-footer-credits">
          <p className="rvp-ritvick-v-pandey">
            Forged in 🔥 by <span>Ritvick V. Pandey</span>
          </p>
        </div>
        <EnquiryModal
          toggleEnquiryModal={toggleEnquiryModal}
          closeModal={closeModal}
        />
      </div>
    </>
  );
};

export default Socials;
