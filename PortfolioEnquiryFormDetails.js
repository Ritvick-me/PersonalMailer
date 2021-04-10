const axios = require("axios");
const validator = require("email-validator");
const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const verifyReCaptcha = async (token) => {
  const secret = process.env.RECAPTCHA_SECRET;
  const response = await axios({
    url: `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    method: "post",
  });

  return response.data.success;
};

const validateEmptyDates = (date1, date2, date3) => {
  if (!date1 || !date2 || !date3) return false;
  return true;
};

const validateTwinningSlots = (date1, date2, date3, time1, time2, time3) => {
  let repititiveData = {};
  let key1 = date1 + time1;
  let key2 = date2 + time2;
  let key3 = date3 + time3;
  repititiveData[key1] = 1;
  if (repititiveData[key2]) {
    return false;
  } else repititiveData[key2] = 1;
  if (repititiveData[key3]) {
    return false;
  }
  return true;
};

const emailValidator = (email) => {
  return validator.validate(email);
};

router.post("/", async (req, res) => {
  const human = await verifyReCaptcha(req.headers["x-recaptcha-token"]);

  if (!human) {
    res.status(400).json({ status: false });
    return;
  }

  try {
    const mailBody = req.body;

    let isEmptyDate = validateEmptyDates(
      mailBody.date1,
      mailBody.date2,
      mailBody.date3
    );
    if (!isEmptyDate) {
      res.status(400).json({ status: false });
      return;
    }

    let isSlotTwinning = validateTwinningSlots(
      mailBody.date1,
      mailBody.date2,
      mailBody.date3,
      mailBody.time1,
      mailBody.time2,
      mailBody.time3
    );
    if (!isSlotTwinning) {
      res.status(400).json({ status: false });
      return;
    }

    if (!mailBody.name) {
      res.status(400).json({ status: false });
      return;
    }

    let isEmail = emailValidator(mailBody.email);
    if (!isEmail) {
      res.status(400).json({ status: false });
      return;
    }

    if (!mailBody.topic) {
      res.status(400).json({ status: false });
      return;
    }

    const mailOptions = {
      from: mailBody.email,
      to: process.env.EMAIL,
      subject: "Appointment request from " + mailBody.name,
      text:
        "Supplicant's name: " +
        mailBody.name +
        "\nSupplicant's Email: " +
        mailBody.email +
        "\n\nPreference 1: \n\tDate:" +
        mailBody.date1 +
        "\tTime: " +
        mailBody.time1 +
        "\n\nPreference 1: \n\tDate:" +
        mailBody.date2 +
        "\tTime: " +
        mailBody.time2 +
        "\n\nPreference 1: \n\tDate:" +
        mailBody.date3 +
        "\tTime: " +
        mailBody.time3 +
        "\n\nTopic: " +
        mailBody.topic,
    };

    await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("Mail could not be sent...\n", err);
        res.status(500).json({ status: false });
        return;
      }
      console.log("Mail was sent...");
      res.status(202).json({ status: true });
    });
  } catch {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
