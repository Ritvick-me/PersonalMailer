require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mailer = require("./PortfolioEnquiryFormDetails");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT || 5000 || 3000, () => {
  console.log("Server connected to " + (process.env.PORT || 5000 || 3000));
});

app.use("/PortfolioEnquiryFormDetails", mailer);
