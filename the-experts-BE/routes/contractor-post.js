const express = require("express");
const router = express.Router({ mergeParams: true });
const queries = require("../queries/index");

router.post("/", function(req, res, next) {
  queries.addContractor(
    req.params.name,
    req.params.job,
    (err, dataResponse) => {
      if (err) next(err);
      res.json(dataResponse);
    },
    req.params.rating
  );
});
module.exports = router;
