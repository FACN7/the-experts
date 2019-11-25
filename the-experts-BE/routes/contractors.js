var express = require("express");
var router = express.Router();
var queries = require("../queries/index");

/* GET contractors listing. */
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/:job", (req, res) => {
  console.log(req.params);
  queries.getContractor(req.params.job, (err, response) => {
    console.log(req.params);
    if (err) console.log(err);

    res.send(response);
  });
});

module.exports = router;
