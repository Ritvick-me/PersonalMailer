import React, { useState, useRef } from "react";
import validator from "email-validator";
import axios from 'axios';
import ReturnArrow from "../../Assets/ReturnArrow.svg";
import BubbleButton from "../../Common/BubbleButton";
import "./ConfirmationModal.css";

const ConfirmationModal = (props) => {
  const title = "Confirm";

  const [err, showError] = useState("");
  const [success, showSuccess] = useState("");

  let email = useRef(null);
  let name = useRef(null);
  let checkbox1 = useRef(null);
  let checkbox2 = useRef(null);

  // Email validator library called.

  const emailValidator = () => {
    return validator.validate(email.current.value);
  };

  const executeSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    let isEmail = emailValidator();
    if (!name.current.value) {
      return showError("Please provide a name.");
    }
    if (!isEmail) {
      return showError("Please provide a valid Email ID.");
    }
    if (!checkbox1.current.checked || !checkbox2.current.checked) {
      return showError("Please read and accept the above conditions.");
    }
    const finalData = {
      date1: props.enquiryFormData.preference[0].date.current.value,
      time1: props.enquiryFormData.preference[0].time.current.value,
      date2: props.enquiryFormData.preference[1].date.current.value,
      time2: props.enquiryFormData.preference[1].time.current.value,
      date3: props.enquiryFormData.preference[2].date.current.value,
      time3: props.enquiryFormData.preference[2].time.current.value,
      email: email.current.value,
      name: name.current.value,
    };
    console.log(finalData);

    axios({
      url: 'https://personal-mailer.herokuapp.com/PortfolioEnquiryFormDetails/',
      method: 'post',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(finalData)
    })
    .then((res) => { 
      showSuccess("Form submitted successfully. Ritvick will get in touch with you soon.");
      const delay = 10000;
      setTimeout(() => {
        showSuccess("");
      }, delay); 
    })
    .catch((error) => {
      showError("Oops! There was a problem submitting your form.", error);
    });
    
  };

  return (
    <>
      <div
        className={
          props.isConfirmModal
            ? "rvp-contact-confirm-modal rvp-toggle-on"
            : "rvp-contact-confirm-modal rvp-contact-modal-delay"
        }
      >
        <div className="rvp-contact-modal-background">
          <div
            className={
              props.isConfirmModal
                ? "rvp-contact-modal-rear-body rvp-toggle-on"
                : "rvp-contact-modal-rear-body rvp-contact-remove-modal-delay"
            }
            onClick={props.closeConfirmationModal}
          ></div>
          <div className="rvp-contact-modal-body">
            <button
              className="rvp-contact-modal-return"
              onClick={props.closeConfirmationModal}
            >
              <img src={ReturnArrow} alt="ReturnArrow" />
              <p>Return</p>
            </button>
            <div className="rvp-contact-modal-structure">
              <div className="rvp-preference-field">
                <h2 className="rvp-modal-confirm-heading">
                  Schedule an appointment
                </h2>
                <form action="https://formspree.io/f/mgerelke" method="POST">
                  <div className="rvp-details-field">
                    <label className="rvp-name">Name</label>
                    <br />
                    <input type="text" name="name" required ref={name} />
                  </div>
                  <div className="rvp-details-field">
                    <label className="rvp-email">Email:</label>
                    <br />
                    <input type="email" name="email" required ref={email} />
                  </div>
                  <div className="rvp-details-field rvp-contact-checkboxes">
                    <input
                      className="rvp-checkbox"
                      type="checkbox"
                      id="condition1"
                      name="condition1"
                      value="condition1"
                      ref={checkbox1}
                      required
                    />
                    <label htmlFor="condition1">
                      Booking a slot does not guarantee its confirmation.
                    </label>
                    <br />
                  </div>
                  <div className="rvp-details-field rvp-contact-checkboxes">
                    <input
                      className="rvp-checkbox"
                      type="checkbox"
                      id="condition2"
                      name="condition2"
                      value="condition2"
                      ref={checkbox2}
                      required
                    />
                    <label htmlFor="condition2">
                      You will recieve confirmation email seperately with a
                      meeting link.
                    </label>
                    <br />
                  </div>
                  <div className="rvp-fix-an-appointment-button rvp-modal-2-submit">
                    <p className="rvp-enquiry-error">{err}</p>
                    <p className="rvp-enquiry-success">{success}</p>
                    <BubbleButton title={title} openModal={executeSubmit} />
                    <button
                      className="rvp-contact-modal-responsive-return"
                      type="button"
                      onClick={props.closeConfirmationModal}
                    >
                      Return
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
