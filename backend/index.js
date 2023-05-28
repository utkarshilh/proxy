var db = require("./sqlCredentials");
const express = require("express");
const router = require("./routes/router");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const saltRound = 10;
const mysql = require("mysql");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// for image upload-->
app.use(router);
app.use("/uploads", express.static("./uploads"));

//All editing/Admin Related files-->
const editUsers = require("./Edit/EditUser");
app.use(editUsers);

// Time table Related files-->
const seeTable = require("./TimeTable/seeTimeTable");
app.use(seeTable);

// Request Related Pages
const requestDetails = require("./Requests/requestDetail");
app.use(requestDetails);

// Request Related Pages
const hod = require("./Hod/hod");
app.use(hod);

// to set the final verdict of hod on request in table
app.post("/api/setFinalVerdict", (req, res) => {
  const id = req.body.id;
  const cstatus = req.body.currentstatus;

  const leaveRequest =
    "UPDATE LeaveRequest SET status = ? WHERE (requestId = ?);";
  db.query(leaveRequest, [cstatus, id], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });

  console.log("hello" + cstatus + id);
});

// to find the the current section he is teachign according to his time table--->
app.post("/api/getTheSection", (req, res) => {
  const empId = req.body.empId;
  const lec = req.body.lec;
  const day = req.body.day;
  const sqlQuery = `select ${lec} from ${day} where empId=${empId}`;
  // "select ? from ? where empId=?";
  db.query(sqlQuery, (err, result) => {
    if (err) console.log(err);
    else {
      res.send(result);
    }
  });
  console.log(req.body);
});

// get the teacher list for the arrangement--->
app.post("/api/getArrangement", (req, res) => {
  const day = req.body.day;
  const lecture = req.body.lecture;
  const section = req.body.section;
  const query = `SELECT proxy.loginPage.empId, proxy.loginPage.name,proxy.loginPage.Email,proxy.loginPage.ContactNo , 'Request' as current_status
    FROM ${day}
    JOIN proxy.loginPage ON proxy.${day}.empId = proxy.loginPage.empId
    WHERE proxy.${day}.${lecture} = 'free'`;
  console.log(query);
  db.query(query, [day, lecture], (err, result) => {
    if (err) console.log(err);
    else {
      console.log("this is result from backend side ");
      console.log(result);
      res.send(result);
    }
  });
});

// this is the section that is requesting currently---->
app.post("/api/arrangementRequestIntoTable", (req, res) => {
  console.log(req.body)
  const reqId = req.body.reqId;
  const empId = req.body.empId;
  const otherEmpId = req.body.otherEmpId;
  const date = req.body.date;
  const lecture = req.body.lecture;

  const section = req.body.section;
  const reason =
    " this is comming from the backend side and it is default value";
  const checkQuery =
    "SELECT * FROM proxy.ArrangementMainRequest WHERE requestId = ? ";

  // Check if the value already exists in the table
  db.query(
    checkQuery,
    [reqId, empId, otherEmpId, section, lecture, reason],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        if (!(result.length > 0)) {
          // Value do not exists in the table, do nothing
          const insertQuery = `INSERT INTO proxy.ArrangementMainRequest
                (requestId,empId,forDate,section,lecture,reason) VALUES(?, ?,?,?,?,?)`;
          db.query(
            insertQuery,
            [reqId, empId, date, section, lecture, reason],
            (err, result) => {
              if (err) {
                console.log(err);
                res.send(err);
              } else {
                console.log("Record inserted successfully");
              }
            }
          );
        }
        // Value does not exist in the table, insert new record

        //puting the request to the seconday table of arrangment Request table
        const thisRequestId = reqId + otherEmpId;

        const query = `INSERT INTO proxy.ArrangementRequestSecondary
                (id,requestId,empId,otherEmpId) VALUES(?,?,?,?)`;
        db.query(
          query,
          [thisRequestId, reqId, empId, otherEmpId],
          (err, result) => {
            if (err) {
              console.log(err);
              res.send(err)
            } else {
              console.log("Record inserted successfully");
              res.send("successfully inserted ")
            }
          }
        );
      }
    }
  );
  console.log(
    reqId +
    " " +
    empId +
    " " +
    otherEmpId +
    " " +
    date +
    " " +
    lecture +
    " " +
    date +
    " " +
    lecture +
    " " +
    section
  );
});

// this section is rendering the total request made to this emp by others to take the lecture
app.post("/api/getfreeteacher", (req, res) => {
  console.log("i was executed atleast once");
  const empId = req.body.empId;
  const query = `SELECT proxy.ArrangementMainRequest.requestId, proxy.ArrangementRequestSecondary.id as secondaryId, proxy.ArrangementMainRequest.empId, proxy.loginPage.name, proxy.ArrangementMainRequest.requestDate, proxy.ArrangementMainRequest.forDate as date,proxy.ArrangementMainRequest.section,proxy.ArrangementMainRequest.lecture,proxy.ArrangementMainRequest.reason FROM proxy.ArrangementRequestSecondary JOIN proxy.loginPage 
    ON proxy.ArrangementRequestSecondary.empId = proxy.loginPage.empId 
        JOIN proxy.ArrangementMainRequest
        ON proxy.ArrangementRequestSecondary.requestId = proxy.ArrangementMainRequest.requestId 
        WHERE proxy.ArrangementRequestSecondary.otherEmpId = ? and proxy.ArrangementMainRequest.status ='pending'
    `;
  db.query(query, [empId], (err, result) => {
    if (err) console.log(err);
    else {
      res.send(result);
    }
  });
});

app.post("/api/allarrengementrequesthandleaccept", (req, res) => {
  const empId = req.body.empId;
  const reqId = req.body.reqId;
  const updatedstatus = "accepted";

  const query1 =
    "UPDATE proxy.ArrangementMainRequest SET otherEmpId = ?, status = ? WHERE (requestId = ?)";
  const query2 =
    "DELETE FROM proxy.ArrangementRequestSecondary WHERE (requestId = ? );";

  db.query(query1, [empId, updatedstatus, reqId], (err, result) => {
    if (err) console.log(err);
    else {
      db.query(query2, [reqId], (err, result) => {
        if (err) console.log(err);
        else {
          res.send("done");
        }
      });
    }
  });
});

app.post("/api/allarrengementrequesthandlereject", (req, res) => {
  console.log("reject button is working from the backend as well");

  const empId = req.body.empId;
  const reqId = req.body.reqId;
  const updatedstatus = "rejected";

  console.log(empId + " " + reqId + " " + updatedstatus);

  const query1 =
    "DELETE FROM proxy.ArrangementRequestSecondary WHERE (otherEmpId = ? );";
  const query2 =
    "select * from proxy.ArrangementRequestSecondary where (requestId = ?)";

  const query3 =
    "UPDATE proxy.ArrangementMainRequest SET status = ? WHERE (requestId = ?)";

  db.query(query1, [empId], (err, result) => {
    if (err) {
      // console.log("sql error")
      console.log({ err: err });
    } else {
      db.query(query2, [reqId], (err, result) => {
        if (err) {
          console.log(err);
        }
        if (!(result.length > 0)) {
          db.query(query3, [updatedstatus, reqId], (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send("updated successfully");
            }
          });
        }
      });
    }
  });
});

// this section is getting all the current status of applied arrangment request

app.post("/api/getallappliedarrangementdetail", (req, res) => {
  const empId = req.body.empId;
  console.log("this section is not executed hello" + empId);

  const query1 = "SELECT * FROM proxy.ArrangementMainRequest where empID = ?;";

  db.query(query1, [empId], (err, result) => {
    if (err) console.log(err);
    else {
      console.log("this is the latest result" + JSON.stringify(result));
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
