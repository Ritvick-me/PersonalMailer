import React, { useState, useRef } from "react";
import ReturnArrow from "../../Assets/ReturnArrow.svg";
import BubbleButton from "../../Common/BubbleButton";
import ConfirmationModal from "./ConfirmationModal";
import "./EnquiryModal.css";

const EnquiryModal = (props) => {
  const title = "Enquire for availability";
  let enquiryFormData = {
    preference: [
      {
        date: useRef(null),
        time: useRef("6pm IST"),
      },
      {
        date: useRef(null),
        time: useRef("6pm IST"),
      },
      {
        date: useRef(null),
        time: useRef("6pm IST"),
      },
    ],
  };
  const [err, showError] = useState("");

  const [isConfirmModal, toggleConfirmModal] = useState(false);

  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Open and Close confirmation modal. $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  const openConfirmationModal = (e) => {
    let count = 0;
    e.preventDefault();
    enquiryFormData.preference.forEach((e) => {
      if (!e.date.current.value) count++;
    });
    if (count === 0) {
      showError("");
      toggleConfirmModal(true);
    } else
      showError(
        count +
          " field(s) are left blank. Kindly make sure to fill all details."
      );
  };

  const closeConfirmationModal = () => {
    toggleConfirmModal(false);
  };

  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Setting minimum preferences. $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const minDate1 =
    currentDate.getFullYear() +
    "-" +
    ("0" + (Number(currentDate.getMonth()) + 1)).slice(-2) +
    "-" +
    ("0" + currentDate.getDate()).slice(-2);

  currentDate.setDate(currentDate.getDate() + 1);
  const minDate2 =
    currentDate.getFullYear() +
    "-" +
    ("0" + (Number(currentDate.getMonth()) + 1)).slice(-2) +
    "-" +
    ("0" + currentDate.getDate()).slice(-2);

  currentDate.setDate(currentDate.getDate() + 1);
  const minDate3 =
    currentDate.getFullYear() +
    "-" +
    ("0" + (Number(currentDate.getMonth()) + 1)).slice(-2) +
    "-" +
    ("0" + currentDate.getDate()).slice(-2);

  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Setting maximum preferences. $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  currentDate.setDate(currentDate.getDate() + 2);
  const maxDate1 =
    currentDate.getFullYear() +
    "-" +
    ("0" + (Number(currentDate.getMonth()) + 1)).slice(-2) +
    "-" +
    ("0" + currentDate.getDate()).slice(-2);

  currentDate.setDate(currentDate.getDate() + 1);
  const maxDate2 =
    currentDate.getFullYear() +
    "-" +
    ("0" + (Number(currentDate.getMonth()) + 1)).slice(-2) +
    "-" +
    ("0" + currentDate.getDate()).slice(-2);

  currentDate.setDate(currentDate.getDate() + 1);
  const maxDate3 =
    currentDate.getFullYear() +
    "-" +
    ("0" + (Number(currentDate.getMonth()) + 1)).slice(-2) +
    "-" +
    ("0" + currentDate.getDate()).slice(-2);

  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Autofill Calendar. $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  const autoFillDate = () => {
    const pref1Date = new Date(
      enquiryFormData.preference[0].date.current.value
    );
    pref1Date.setDate(pref1Date.getDate() + 1);
    enquiryFormData.preference[1].date.current.value =
      pref1Date.getFullYear() +
      "-" +
      ("0" + (Number(pref1Date.getMonth()) + 1)).slice(-2) +
      "-" +
      ("0" + pref1Date.getDate()).slice(-2);

    pref1Date.setDate(pref1Date.getDate() + 1);
    enquiryFormData.preference[2].date.current.value =
      pref1Date.getFullYear() +
      "-" +
      ("0" + (Number(pref1Date.getMonth()) + 1)).slice(-2) +
      "-" +
      ("0" + pref1Date.getDate()).slice(-2);
  };

  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Autofill Time. $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  const autoFillTime = () => {
    enquiryFormData.preference[1].time.current.value =
      enquiryFormData.preference[0].time.current.value;
    enquiryFormData.preference[2].time.current.value =
      enquiryFormData.preference[0].time.current.value;
  };

  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ EnquiryModal function return value. $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  return (
    <>
      <div
        className={
          props.toggleEnquiryModal
            ? "rvp-contact-Enquiry-modal rvp-toggle-on"
            : "rvp-contact-Enquiry-modal rvp-contact-modal-delay"
        }
      >
        <div className="rvp-contact-modal-background">
          <div
            className={
              props.toggleEnquiryModal
                ? "rvp-contact-modal-rear-body rvp-toggle-on"
                : "rvp-contact-modal-rear-body rvp-contact-remove-modal-delay"
            }
            onClick={props.closeModal}
          ></div>
          <div className="rvp-contact-modal-body">
            <button
              className="rvp-contact-modal-return"
              onClick={props.closeModal}
            >
              <img src={ReturnArrow} alt="ReturnArrow" />
              <p>Return</p>
            </button>
            <div className="rvp-contact-modal-structure">
              <div className="rvp-preference-field">
                <h2 className="rvp-modal-enquiry-heading">
                  Enquire for a meet
                </h2>
                <h3 className="rvp-modal-enquiry-subheading">
                  Provide any three preferrable time slots
                </h3>
                <form>
                  <div className="rvp-preference-field">
                    <label className="rvp-preference-1">Preference 1:</label>
                    <br />
                    <input
                      type="date"
                      name="pref1"
                      min={minDate1}
                      max={maxDate1}
                      ref={enquiryFormData.preference[0].date}
                      onChange={autoFillDate}
                    />
                    <select
                      required
                      ref={enquiryFormData.preference[0].time}
                      onChange={autoFillTime}
                    >
                      <option disabled defaultValue>
                        Time
                      </option>
                      <option value="6pm IST">6pm IST</option>
                      <option value="8pm IST">8pm IST</option>
                      <option value="10pm IST">10pm IST</option>
                    </select>
                  </div>
                  <div className="rvp-preference-field">
                    <label className="rvp-preference-2">Preference 2:</label>
                    <br />
                    <input
                      type="date"
                      name="pref1"
                      min={minDate2}
                      max={maxDate2}
                      ref={enquiryFormData.preference[1].date}
                    />
                    <select required ref={enquiryFormData.preference[1].time}>
                      <option disabled defaultValue>
                        Time
                      </option>
                      <option>6pm IST</option>
                      <option>8pm IST</option>
                      <option>10pm IST</option>
                    </select>
                  </div>
                  <div className="rvp-preference-field">
                    <label className="rvp-preference-3">Preference 3:</label>
                    <br />
                    <input
                      type="date"
                      name="pref1"
                      min={minDate3}
                      max={maxDate3}
                      ref={enquiryFormData.preference[2].date}
                    />
                    <select required ref={enquiryFormData.preference[2].time}>
                      <option disabled defaultValue>
                        Time
                      </option>
                      <option>6pm IST</option>
                      <option>8pm IST</option>
                      <option>10pm IST</option>
                    </select>
                  </div>
                  <div className="rvp-fix-an-appointment-button">
                    <p className="rvp-enquiry-error">{err}</p>
                    <BubbleButton
                      title={title}
                      openModal={openConfirmationModal}
                    />
                    <button
                      className="rvp-contact-modal-responsive-return"
                      type="button"
                      onClick={props.closeModal}
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
      <ConfirmationModal
        isConfirmModal={isConfirmModal}
        closeConfirmationModal={closeConfirmationModal}
        enquiryFormData={enquiryFormData}
      />
    </>
  );
};

export default EnquiryModal;
