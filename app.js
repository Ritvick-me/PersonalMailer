require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mailer = require("./PortfolioEnquiryFormDetails");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT || 5000 || 3000, () => {
  console.log("Server connected to " + (process.env.PORT || 5000 || 3000));
});

app.use("/PortfolioEnquiryFormDetails", mailer);
