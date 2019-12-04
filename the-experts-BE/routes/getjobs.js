const express = require("express");
const router = express.Router({ mergeParams: true });
const queries = require("../queries");

router.get("/", function(req, res, next) {
  queries.jobs((err, response) => {
    if (err) next(err);
    res.json(response.rows);
  });
});
module.exports = router;
