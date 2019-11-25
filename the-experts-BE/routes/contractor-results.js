var express = require("express");
var router = express.Router({ mergeParams: true });
var queries= require("../queries/index")
router.get("/", function(req, res, next) {
    console.log(req.params)
    queries.getContractor(req.params.job,(err,response)=>{
        if(err) console.log(err);
// console.log(response);
        res.send(response);

    })
});
module.exports = router;