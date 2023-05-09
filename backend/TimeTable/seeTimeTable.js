const express=require("express");
var db = require('../sqlCredentials')
const router=express.Router()


//To see the time table-->
router.get('/api/seetimetable/:empId', (req, res) => {
    console.log("i was executed")
    const empId = req.params.empId;
    console.log("hello hello " + empId)
    const id = req.params.empId;
    const day = 'monday';
    const seeTimeTbl = "(select 'monday' as dday, nine, ten, eleven, twelve, one, two, three from monday where empId = ? union all select  'tuesday' as dday, nine, ten, eleven, twelve, one, two, three  from tuesday where empId = ? union all select  'wednesday' as dday, nine, ten, eleven, twelve, one, two, three  from wednesday where empId = ? union all select 'thursday' as dday, nine, ten, eleven, twelve, one, two, three  from thrusday where empId = ? union all select  'friday' as dday, nine, ten, eleven, twelve, one, two, three from friday where empId = ? union all select 'saturday' as dday, nine, ten, eleven, twelve, one, two, three from saturday where empId = ? )";
    db.query(seeTimeTbl, [id, id, id, id, id, id], (err, result) => {

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


// To insert the time table of the given employee to the given day table name update--->
router.post('/api/setTimeTable', (req, res) => {

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




//To see the time table based on the empId and day---->
router.get('/api/seetimetablex/:empId/:dday', (req, res) => {
    console.log("i was executed")
    const empId = req.params.empId;
    console.log("hello hello " + empId)
    const id = req.params.empId;
   const dday = req.params.dday;//'monday';day
    const seeTimeTbl = "SELECT*FROM "+dday+" Where empId=?";
    db.query(seeTimeTbl, [id, dday], (err, result) => {

        if (err)
            console.log(err);
        else {
            res.send(result);
            console.log('yyy')
        }
    });
   // console.log(seeTimeTbl);
   // console.log(day);
   // console.log('h');
})


//To update the timetable based on their empId and day-->
router.put('/updatetable/:empId/:dday', (req, res) => {
     const nine = req.body.nine;
     const ten = req.body.ten;
     const eleven = req.body.eleven;
     const twelve = req.body.twelve;
     const one = req.body.one;
     const two = req.body.two;
     const three = req.body.three;
    const empId = req.params.empId;
    const dday = req.params.dday;
     console.log( nine )
     const setTimetbl = "UPDATE "+ dday + " SET nine=?, ten=?, eleven=?, twelve=?, one=?, two=?, three=? WHERE empId = ?";
     db.query(setTimetbl, [nine,ten,eleven,twelve,one,two,three,empId], (err, result) => {
 
         if (err)
             console.log(err);
         else
         console.log("yaha hai " + JSON.stringify(dday));
             return res.json({updated:true})//res.send(result);
     });
 })
 
module.exports= router