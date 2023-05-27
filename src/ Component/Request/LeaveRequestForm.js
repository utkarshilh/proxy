import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./LeaveRequestForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function LeaveRequestForm(props) {
  console.log(props.updateUser);
  const [empId, setEmpId] = useState(props.updateUser.currentUser);

  //const [department, setDepartment] = useState("");

  const [leaveType, setLeaveType] = useState("");

  const [applicationDate, setApplicationDate] = useState("");

  const [fromDate, setFromDate] = useState("");

  const [toDate, setToDate] = useState("");

  const [totalDays, setTotalDays] = useState("");

  const [reason, setReason] = useState("");
  const [LeavealrdytakncrrntmonthCL, setLeavealrdytakncrrntmonthCL] = useState("");
  const [LeavealrdytakncrrntmonthLWP, setLeavealrdytakncrrntmonthLWP] = useState("");
  const [TillprevsmonthleavetakenCL, setTillprevsmonthleavetakenCL] = useState("");
  const [TillprevsmonthleavetakenLWP, setTillprevsmonthleavetakenLWP] = useState("");
  const [BalenaceleaveexcludingthisleaveCL, setBalenaceleaveexcludingthisleaveCL] = useState("");
  const submitRequest = (e) => {
    e.preventDefault();

    // finding the current days so that the applicaion date can be mentioned
    var nowDate = new Date();
    const temp =
      nowDate.getFullYear() +
      "-" +
      (nowDate.getMonth() + 1) +
      "-" +
      nowDate.getDate();
    console.log(temp);
    Axios.post("/api/insertLeaveRequest", {
      // here new varaibles have created using old variable + adding e before the old variable
      empId: empId,
      //department: department,
      leaveType: leaveType,

      // here date is the variable that holds the current value of date in the year-month-date
      applicationDate: temp,
      fromDate: fromDate,
      toDate: toDate,
      totalDays: totalDays,
      reason: reason,
      LeavealrdytakncrrntmonthCL:LeavealrdytakncrrntmonthCL,
      LeavealrdytakncrrntmonthLWP:LeavealrdytakncrrntmonthLWP,
      TillprevsmonthleavetakenCL:TillprevsmonthleavetakenCL,
      TillprevsmonthleavetakenLWP:TillprevsmonthleavetakenLWP,
      BalenaceleaveexcludingthisleaveCL:BalenaceleaveexcludingthisleaveCL,

    }).then(() => {
      alert("successful insert");
    });
  };

  return (
    <div className="containerRequestForm">
      <form className="formRequestForm">
        <label className="label">
          <h1>
            <strong>Leave Request Form</strong>
          </h1>
        </label>

        <div class="card-bodyRequestForm">
          <table>
            <tr style={{ border: "0px" }}>
              {/*<td  style={{ border: "0px" }}>
                
                <div className="form-group">
                  <label htmlFor="InputEmpId">Branch</label>
                  <br />
                  <select
                    name="department"
                    id=""
                    onChange={(e) => {
                      setDepartment(e.target.value);
                      console.log(e.target.value);
                    }}
                  >
                    <option value="">Input your Branch </option>
                    <option value="CS">CSE</option>
                    <option value="IT">IT</option>
                    <option value="EE">EE</option>
                    <option value="EN">EN</option>
                    <option value="EC">EC</option>
                    <option value="ME">ME</option>
                  </select>
                </div>
                <hr></hr>
                  </td>*/}
              {/*
              </tr>

                <tr>*/}
              <td style={{ border: "0px" }}>
                {/* leave type  */}
                <div className="form-group ">
                  <label htmlFor="InputEmpId">Leave Type</label>
                  <br />
                  <select
                    name="leaveType"
                    id=""
                    onChange={(e) => {
                      setLeaveType(e.target.value);
                      console.log(e.target.value);
                    }}
                  >
                    <option value="">Leave Type </option>
                    <option value="Casual">Casual</option>
                    <option value="First Half">Frist Half</option>
                    <option value="Second Half">Second Half</option>
                    <option value="One Day">One Day</option>
                  </select>
                </div>
                <hr></hr>
              </td>


           </tr>
           <tr>
              <td style={{ border: "0px" }}>
                <div className="form-group">
                  <label htmlFor="InputEmpId">
                    Leave already taken in the Current Monthe
                  </label>
                  <ul>
                    <li>
                    <strong style={{color:'darkblue'}}> 1.Casual Leave</strong>
                     <input
                    type="number"
                   
                    placeholder="Enter your Casual leave count day..."
                    onChange={(e) => {
                      setLeavealrdytakncrrntmonthCL(e.target.value);
                      console.log(e.target.value);
                    }}
                    />

                    </li>

                    <li>
                    <strong style={{color:'darkblue'}}> 2.Leave With Pay</strong>
                     <input
                    type="number"
                    placeholder="Enter your Leave with pay count day..."
                    onChange={(e) => {
                      setLeavealrdytakncrrntmonthLWP(e.target.value);
                      console.log(e.target.value);
                    }}
                    />
                    </li>

                  </ul>
                 

                </div>
                <hr></hr>
              </td>

                

              <td style={{ border: "0px" }}>
                <div className="form-group">
                  <label htmlFor="InputEmpId">
                   Till Previous Monthe Leave Taken
                  </label>
                  <ul>
                    <li>
                    <strong style={{color:'darkblue'}}> 1.Casual Leave</strong>
                     <input
                    type="number"
                    placeholder="Enter your Casual leave count day..."
                    onChange={(e) => {
                      setTillprevsmonthleavetakenCL(e.target.value);
                      console.log(e.target.value);
                    }}
                    />
                    </li>

                    <li>
                    <strong style={{color:'darkblue'}}> 2.Leave With Pay</strong>
                     <input
                    type="number"
                    placeholder="Enter your Leave with pay count day..."
                    onChange={(e) => {
                      setTillprevsmonthleavetakenLWP(e.target.value);
                      console.log(e.target.value);
                    }}
                    />
                    </li>

                  </ul>
                 

                </div>
                <hr></hr>
              </td>
            </tr>


            <tr>
            

            <td style={{ border: "0px" }}>
                <div className="form-group">
                  <label htmlFor="InputEmpId">
                    Balence Leave Excluding this Leave
                  </label>
                  <ul>
                    <li>
                    <strong style={{color:'darkblue'}}> 1.Casual Leave</strong>
                     <input
                    type="number"
                    placeholder="Enter your Casual leave count day..."
                    onChange={(e) => {
                      setBalenaceleaveexcludingthisleaveCL(e.target.value);
                      console.log(e.target.value);
                    }}
                    />
                    </li>

                   

                  </ul>
                 

                </div>
                <hr></hr>
              </td>


            </tr>

            <tr style={{ border: "0px" }}>
              <td style={{ border: "0px" }}>
                {/* from date */}
                <div className="form-group ">
                  <label htmlFor="InputFromDate">FromDate</label>

                  <input
                    type="date"
                    min="2023-04-03"
                    max="2023-12-31"
                    name="fromDate"
                    id="InputApplicationDate"
                    style={{
                      height: "60px",
                      width: "559px",
                      border: "1.5px solid  rgb(197, 217, 224)",
                      borderRadius: "5px",
                      fontFamily: "Times New Roman, Times, serif",
                    }}
                    onChange={(e) => {
                      setFromDate(e.target.value);
                      console.log(e.target.value);
                    }}
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Input Date"
                  />
                </div>

                <hr></hr>
              </td>
              {/* </tr>

                <tr>*/}
              <td style={{ border: "0px" }}>
                {/* to date */}
                <div className="form-group ">
                  <label htmlFor="InputToDate">ToDate</label>
                  <input
                    type="date"
                    min="2023-04-03"
                    max="2023-12-31"
                    name="toDate"
                    style={{
                      height: "60px",
                      width: "559px",
                      border: "1.5px solid  rgb(197, 217, 224)",
                      borderRadius: "5px",
                      fontFamily: "Times New Roman, Times, serif",
                    }}
                    onChange={(e) => {
                      setToDate(e.target.value);
                      console.log(e.target.value);
                    }}
                    className="form-control"
                    id="InputApplicationDate"
                    aria-describedby="emailHelp"
                    placeholder="Input Date"
                  />
                </div>
                <hr></hr>
              </td>
            </tr>

            <tr style={{ border: "0px" }}>
              <td style={{ border: "0px" }}>
                {/* Reason section  */}
                <div className="form-group">
                  <label htmlFor="reason">Reason</label>
                  <textarea
                    name="reason"
                    onChange={(e) => {
                      setReason(e.target.value);
                      console.log(e.target.value);
                    }}
                    type="text area"
                    className="form-control w-30"
                    id="exampleInputPassword1"
                    placeholder="Reason"
                  ></textarea>
                </div>
              </td>

               

              <td style={{ border: "0px" }}>
                {/* Reason section  */}
                <div className="form-group">
                  <button style={{width:'250px', height:'60px', borderRadius:'10px', backgroundColor:'green', marginTop:'20px'}}>+Add Subject Teacher</button>
                 
                </div>
              </td>




            </tr>
          </table>
        </div>
        <button
          type="submit"
          className="buttonRequestForm"
          onClick={submitRequest}
        >
          Apply
        </button>
      </form>
    </div>
  );
}
export default LeaveRequestForm;
