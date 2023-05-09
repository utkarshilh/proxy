const express=require("express");
var db = require('../sqlCredentials')
const router=express.Router()

router.get('/api/allRequestedLeave/:empId', (req, res) => {
    console.log(" i was executednnnn")



    const empId = req.params.empId;
    console.log("ss=" + empId);

    const sqlSelect = "select * from LeaveRequest where empId= ? ";

    db.query(sqlSelect, [empId], (err, result) => {
        if (err)
            console.log(err);
        else {

            res.send(result);
        }

    })

})
module.exports= router