const express = require("express");
const router = express.Router({ mergeParams: true });
const queries = require("../queries/index");

router.get("/", function(req, res, next) {
  queries.getContractor(req.params.job, (err, response) => {
    if (err) next(err);
    res.send(response.rows);
  });
});
module.exports = router;
