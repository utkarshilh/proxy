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


// to get all the leave request for employee level 
app.get('/api/allRequestedLeave', (req, res) => {
    const sqlSelect = "select * from LeaveRequest";

    db.query(sqlSelect, (err, result) => {
        if (err)
            console.log(err);
        else {
            console.log("swadikha happy now")
            res.send(result);
        }

    })

})


// to get all the request from the table and serving to hod 
app.get('/api/AllRequestForHod', (req, res) => {
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



// post request to insertLeave in the table 
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

    const leaveRequest = "INSERT INTO LeaveRequest(empId, department, leaveType, applicationDate, fromDate, toDate, reason) VALUES (?,?,?,CURDATE(),?,?,?);";
    // db.query(leaveRequest, (err, result) => {
    db.query(leaveRequest, [empId, department, leaveType, fromDate, toDate, reason], (err, result) => {

        if (err)
            console.log(err);
        else
            res.send(result);
    });





})


app.get('/', (req, res) => {

    res.send("This is not fair");

    console.log("i was executed");


})

app.listen(3001, () => {
    console.log("running on port 3001");
})


// to insert the time table of the given employee to the given day table name 

app.post('/api/setTimeTable', (req, res) => {

    const day = req.body.day;
    const empId = req.body.empId;
    const branch = "cse"
    const nine = req.body.nine;
    const ten = req.body.ten;
    const eleven = req.body.eleven;
    const twelve = req.body.twelve;
    const one = req.body.one;
    const two = req.body.two;
    const three = req.body.three;

    console.log(empId + " " + day + " " + branch + " " + nine + " " + ten + " " + eleven + " " + twelve + " " + one + " " + two + " " + three)






    const leaveRequest = "INSERT INTO LeaveRequest(empId, department, leaveType, applicationDate, fromDate, toDate, reason) VALUES ('4880', 'it', 'casual', '2022-03-03', '2022-03-03', '2022-03-03', 'huhuihigb iuhuig yhgygiyg y');";

    const setTimetbl = "INSERT INTO " + day + "(empId, branch,nine,ten, eleven, twelve, one,two , three) VALUES(?,?,?,?,?,?,?,?,?);";
    // db.query(leaveRequest, (err, result) => {
    db.query(setTimetbl, [empId, branch, nine, ten, eleven, twelve, one, two, three], (err, result) => {

        if (err)
            console.log(err);
        else
            res.send(result);
    });





})