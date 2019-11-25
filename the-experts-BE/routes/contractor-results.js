var express = require("express");
var router = express.Router();
var queries= require("../queries/index")
router.get("/", function(req, res, next) {
    console.log("hellow world")
    queries.getContractor(req.params.job,(err,response)=>{
        if(err) console.log(err);

        res.send(response);

    })
});
module.exports = router;