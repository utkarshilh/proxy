const express=require("express");
var db = require('../sqlCredentials')
const router=express.Router()

   
    router.get('/api/AllRequestForHod/:requestId/:empId', (req, res) => {
    console.log(" i was executednnnn")

    

    const empId = req.params.empId;
    const requestId = req.params.requestId;
    console.log("ss=" + empId);
    console.log("ss=" + requestId);
    /*const sqlSelect = "SELECT *FROM leaverequest JOIN allfaculty where leaverequest.empId = allfaculty.id AND empId=1003";/api/allRequestedLeave/:empId */

   const sqlSelect = "SELECT t1.*, t2.* FROM leaverequest t1 JOIN loginpage t2 ON t1.empId = t2.empId WHERE t1.empId = ? AND requestId = ?";

   /*const sqlSelect = "select * from loginpage where empId= ? ";*/

    db.query(sqlSelect, [empId,requestId], (err, result) => {
        if (err)
            console.log(err);
        else {

            res.send(result);
        }

    })

})
module.exports= router