const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const getContractor = require("./routes/contractor-results");
const getUser = require("./routes/getUser");
const jobs = require("./routes/getjobs");
const getUserById = require("./routes/getUserById");

const {
  comparePasswords,
  hashPassword
} = require("./public/javascripts/passwordmangment");
const { sign, verify } = require("jsonwebtoken");
const getReview = require("./routes/getReview");
const queries = require("./queries/index");
const env = require("env2");
const { validationResult } = require("express-validator");
const checkArray = require("./public/javascripts/validator");
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
app.use("/getUser/:email", getUser);
app.use("/jobs", jobs);
app.use("/getUser/:email", getUser);
app.use("/getUserById/:id", getUserById);

app.get("/auth", (req, res, next) => {
  const jwt = req.cookies.jwt;
  if (!jwt) {
    res.json({ msg: "Not Authintcated" });
    return;
  }
  verify(jwt, SECRET, (err, user) => {
    if (err) next(err);
    queries.getUser(user.email, (err, dataResponse) => {
      if (err) {
        next(err);
        return;
      }
      if (!dataResponse) {
        res.json({ msg: `there is jwt but no such email ${user.email}` });
        return;
      }
      res.json(user);
    });
  });
});

app.post("/addContractor", function(req, res, next) {
  queries.addContractor(
    req.body.name,
    req.body.job,
    err => {
      if (err) next(err);
      queries.addjob(req.body.job.toLowerCase(), error => {
        if (error) next(error);
      });
      res.json("all done");
    },
    req.body.likes
  );
});

app.post("/addReview", function(req, res, next) {
  try {
    queries.addReview(req.body, (err, dataResponse) => {
      if (err) next(err);
      res.json(dataResponse);
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", function(req, res, next) {
  queries.getUser(req.body.email, (err, dataResponse) => {
    if (err) {
      next(err);
      return;
    }
    if (dataResponse.rows.length <= 0) {
      return res.json({ isExist: false });
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
          return res.json({ isExist: false });
        }
        const user = { ...dataResponse.rows[0] };
        delete user.user_password;
        const jwt = sign(JSON.stringify(user), SECRET);
        res.cookie("jwt", jwt);
        user.status = "you are logged in successfully";
        res.json(user);
      }
    );
  });
});

app.post("/signup", checkArray, function(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).jsonp(errors.array());
  }
  hashPassword(req.body.user_password, (err, hashedPws) => {
    if (err) next(err);
    const bodyWithHashedPwd = { ...req.body, user_password: hashedPws };
    queries.addUser(bodyWithHashedPwd, (error, dataResponse) => {
      if (error) {
        if (error.message.includes("duplicate key")) {
          res.json({ isExist: true, message: "email already exists" });
        } else {
          next(error);
        }
        return;
      }
      const user = { ...bodyWithHashedPwd };
      delete user.hashedPws;
      const jwt = sign(JSON.stringify(user), SECRET);
      res.cookie("jwt", jwt);
      res.json("you signed up successfully");
    });
  });
});

app.post("/updateLikes", (req, res, next) => {
  queries.updateLikes(req.body.id, err => {
    if (err) next(err);
    res.json({ msg: "updated sucsuccessfully" });
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
