const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const saltRound = 10


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

// to set the final verdict of hod on request in table
app.post('/api/setFinalVerdict', (req, res) => {
    const id = req.body.id;
    const cstatus = req.body.currentstatus;

    const leaveRequest = "UPDATE LeaveRequest SET status = ? WHERE (requestId = ?);"
    db.query(leaveRequest, [cstatus, id], (err, result) => {

        if (err)
            console.log(err);
        else
            res.send(result);
    });


    console.log("hello" + cstatus + id)
})

// to get the time table of employee it will be modified later with current empId

app.get('/api/seetimetable', (req, res) => {
    const id = 9211;
    const day = 'monday';
    const seeTimeTbl = "(select 'monday' as dday, nine, ten, eleven, twelve, one, two, three from monday where empId = 9211 union all select  'tuesday' as dday, nine, ten, eleven, twelve, one, two, three  from tuesday where empId = 9211 union all select  'wednesday' as dday, nine, ten, eleven, twelve, one, two, three  from wednesday where empId = 9211 union all select 'thursday' as dday, nine, ten, eleven, twelve, one, two, three  from thrusday where empId = 9211 union all select  'friday' as dday, nine, ten, eleven, twelve, one, two, three from friday where empId = 9211 union all select 'saturday' as dday, nine, ten, eleven, twelve, one, two, three from saturday where empId = 9211 )";
    db.query(seeTimeTbl, (err, result) => {

        if (err)
            console.log(err);
        else {
            res.send(result);
            console.log('yyy')
        }
    });
    console.log(seeTimeTbl);
    console.log('h');
})


// Registartion section 
app.post('/api/setUser', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;

    bcrypt.hash(password, saltRound, (err, hash) => {
        if (err)
            console.log(err)



        const sqlRegister = "INSERT INTO loginPage (username,password,role) VALUES(?,?,?)";
        db.query(sqlRegister, [username, hash, role], (err, result) => {
            if (err)
                console.log(err)
            else {
                res.send(result);
                console.log(result)
            }
        })

    })

    console.log(req.body);


})