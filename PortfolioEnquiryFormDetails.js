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

router.post("/", async (req, res) => {
  const mailBody = req.body;

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
      mailBody.time3,
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
});

module.exports = router;
