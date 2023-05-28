const express = require("express");
var db = require('../sqlCredentials')
const router = express.Router()



// Leave Request Form
router.post('/api/insertLeaveRequest', (req, res) => {
    const empId = req.body.empId;
    // const department = req.body.department;
    const leaveType = req.body.leaveType;
    const applicationDate = req.body.applicationDate;
    const fromDate = req.body.fromDate;
    const toDate = req.body.toDate;
    const totalDays = req.body.totalDays;
    const reason = req.body.reason;
    const LeavealrdytakncrrntmonthCL = req.body.LeavealrdytakncrrntmonthCL;
    const LeavealrdytakncrrntmonthLWP = req.body.LeavealrdytakncrrntmonthLWP;
    const TillprevsmonthleavetakenCL = req.body.TillprevsmonthleavetakenCL;
    const TillprevsmonthleavetakenLWP = req.body.TillprevsmonthleavetakenLWP;
    const BalenaceleaveexcludingthisleaveCL = req.body.BalenaceleaveexcludingthisleaveCL;
    // const leaveRequest = "INSERT INTO LeaveRequest(empId, department, leaveType, applicationDate, fromDate, toDate, reason) VALUES ('4880', 'it', 'casual', '2022-03-03', '2022-03-03', '2022-03-03', 'huhuihigb iuhuig yhgygiyg y');";
    const leaveRequest = "INSERT INTO proxy.LeaveRequest(empId, leaveType, applicationDate, fromDate, toDate, reason,LeavealrdytakncrrntmonthCL, LeavealrdytakncrrntmonthLWP,TillprevsmonthleavetakenCL,TillprevsmonthleavetakenLWP,BalenaceleaveexcludingthisleaveCL) VALUES (?,?,?,CURDATE(),?,?,?,?,?,?,?);";
    // db.query(leaveRequest, (err, result) => { await
    db.query(leaveRequest, [empId, leaveType, fromDate, toDate, reason, LeavealrdytakncrrntmonthCL, LeavealrdytakncrrntmonthLWP, TillprevsmonthleavetakenCL, TillprevsmonthleavetakenLWP, BalenaceleaveexcludingthisleaveCL], (err, result) => {

        if (err)
            console.log(err);
        else
            res.send(result);
    });
})



module.exports = router