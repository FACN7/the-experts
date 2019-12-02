const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const getContractor = require("./routes/contractor-results");
const {
  comparePasswords,
  hashPassword
} = require("./public/javascripts/passwordmangment");
const { sign, verify } = require("jsonwebtoken");
const getReview = require("./routes/getReview");
const queries = require("./queries/index");
const env = require("env2");

env("./config.env");
const SECRET = process.env.SECRET;

const cors = require("cors");

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/contractor-results/:job", getContractor);
app.use("/getReview/:contractor_id", getReview);

app.post("/addContractor", function(req, res, next) {
  queries.addContractor(
    req.body.name,
    req.body.job,
    (err, dataResponse) => {
      if (err) next(err);
      res.json(dataResponse);
    },
    req.body.rating
  );
});

app.post("/addReview", function(req, res, next) {
  queries.addReview(req.body, (err, dataResponse) => {
    if (err) next(err);
    res.json(dataResponse);
  });
});

app.post("/login", function(req, res, next) {
  queries.getUser(req.body.email, (err, dataResponse) => {
    if (err) {
      next(err);
      return;
    }
    comparePasswords(
      req.body.user_password,
      dataResponse.rows[0].user_password,
      (error, result) => {
        if (error) {
          next(err);
          return;
        }
        if (!result) {
          res.json(null);
          return;
        }
        const jwt = sign(req.body.email, SECRET);
        res.cookie("jwt", jwt);
        res.send("you are logged in successfully");
      }
    );
  });
});

app.post("/signup", function(req, res, next) {
  hashPassword(req.body.user_password, (err, hashedPws) => {
    if (err) next(err);
    const bodyWithHashedPwd = { ...req.body, user_password: hashedPws };
    queries.addUser(bodyWithHashedPwd, (error, dataResponse) => {
      if (error) {
        if (error.message.includes("duplicate key"))
          res.send("email already exists");
        else {
          next(error);
        }
        return;
      }
      const jwt = sign(bodyWithHashedPwd.email, SECRET);
      res.cookie("jwt", jwt);
      res.send("you signed up successfully");
    });
  });
});

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
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error 500");
});

module.exports = app;
