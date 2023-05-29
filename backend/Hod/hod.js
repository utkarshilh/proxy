const express=require("express");
var db = require('../sqlCredentials')
const router=express.Router()


// to get all the request from the table and serving to hod 
router.get('/api/AllRequestForHod', (req, res) => {
    const sqlSelectPending = "select * from LeaveRequest where status='pending' order by applicationDate desc";

    db.query(sqlSelectPending, (err, result) => {
        if (err)
            console.log(err);
        else {
            console.log("hod requesting is working")
            res.send(result);
        }

    })

})


//To get requestdetailsfor hod based on empId
router.get('/api/AllRequestForHod/:requestId', (req, res) => {
    const requestId = req.params.requestId;
    const sqlSelectPending = "select * from LeaveRequest where status='pending'  && requestId=? ";

    db.query(sqlSelectPending, [requestId], (err, result) => {
        if (err)
            console.log(err);
        else {
            console.log("hod requesting is working")
            res.send(result);
        }

    })

})



//All request of faculties given to hod on Hodcard
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











router.get('/api/AllRequestForHod/proxy', (req, res) => {

    console.log(" i stated executing myself")

     //const sqlSelect = "SELECT t1., t2. FROM leaverequest t1 JOIN loginpage t2 ON t1.empId = t2.empId WHERE t1.empId = ? AND requestId = ?";

    // /const sqlSelect = "select * from loginpage where empId= ? ";/
    const sqlSelect = "SELECT * FROM proxy.ArrangementMainRequest WHERE empId = 12345 AND (forDate between '2023/03/06' AND  '2023/05/10')";
     
    db.query(sqlSelect, [empId, requestId], (err, result) => {
        if (err)
            console.log(err);
        else {

            res.send(result);
        }

    })

})



router.get("/xyz", (req,res)=>{
    const sqlGet="SELECT * FROM ArrangementMainRequest  WHERE empId = 12345 AND (forDate BETWEEN '2023-03-06' AND '2023-05-10')";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    });
});



  
  

module.exports= router