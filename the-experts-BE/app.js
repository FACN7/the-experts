const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const getContractor = require("./routes/contractor-results");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/contractor-results/:job", getContractor);

if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "..", "the-experts-fe", "build"))
  );
  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "..", "the-experts-fe", "build", "index.html")
    );
  });
}



module.exports = app;
