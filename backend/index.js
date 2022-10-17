const express = require('express');
const bodyParser = require('body-parser');

const mysql = require('mysql')
const app = express();

const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Ishaan@123",
    database: "proxy",



})

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/insertLeaveRequest', (req, res) => {

    const empId = req.body.empId;
    const department = req.body.department;
    const leaveType = req.body.leaveType;
    const applicationDate = req.body.applicationDate;
    const fromDate = req.body.fromDate;
    const toDate = req.body.toDate;
    const totalDays = req.body.totalDays;
    const reason = req.body.reason;


    // const leaveRequest = "INSERT INTO LeaveRequest(empId, department, leaveType, applicationDate, fromDate, toDate, reason) VALUES ('4880', 'it', 'casual', '2022-03-03', '2022-03-03', '2022-03-03', 'huhuihigb iuhuig yhgygiyg y');";

    const leaveRequest = "INSERT INTO LeaveRequest(empId, department, leaveType, applicationDate, fromDate, toDate, reason) VALUES (?,?,?,?,?,?,?);";
    // db.query(leaveRequest, (err, result) => {
    db.query(leaveRequest, [empId, department, leaveType, applicationDate, fromDate, toDate, reason], (err, result) => {

        if (err)
            console.log(err);
        else
            res.send(result);
    });





})
app.get('/', (req, res) => {

    res.send("llo world how are you");

    console.log("i was executed");


})

app.listen(3001, () => {
    console.log("running on port 3001");
})
