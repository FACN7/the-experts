const express = require("express");
const router = express.Router({ mergeParams: true });
const queries = require("../queries/index");

router.post("/", function(req, res, next) {
  queries.addContractor(
    req.params.name,
    req.params.job,
    (err, response) => {
      if (err) next(err);
      res.send(response.rows);
    },
    req.params.rating
  );
});
module.exports = router;
