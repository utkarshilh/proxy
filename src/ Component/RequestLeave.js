import React, { useState, useEffect } from "react";

import Axios from "axios";

export default function RequestLeave(props) {
  console.log(props.updateUser);
  const [empId, setEmpId] = useState(props.updateUser.currentUser);

  const [department, setDepartment] = useState("");

  const [leaveType, setLeaveType] = useState("");

  const [applicationDate, setApplicationDate] = useState("");

  const [fromDate, setFromDate] = useState("");

  const [toDate, setToDate] = useState("");

  const [totalDays, setTotalDays] = useState("");

  const [reason, setReason] = useState("");

  const submitRequest = (e) => {
    e.preventDefault();

    // finding the current days so that the applicaion date can be mentioned
    var nowDate = new Date();
    const temp = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
    console.log(temp)
    Axios.post("http://localhost:3001/api/insertLeaveRequest", {
      // here new varaibles have created using old variable + adding e before the old variable
      empId: empId,
      department: department,
      leaveType: leaveType,

      // here date is the variable that holds the current value of date in the year-month-date
      applicationDate: temp,
      fromDate: fromDate,
      toDate: toDate,
      totalDays: totalDays,
      reason: reason,
    }).then(() => {
      alert("successful insert");
    });
  };

  return (
    <div className="container">
      <h1>Leave Request</h1>

      <form className="ml-2 mr-2 w">
        {/* Empliyee id */}

        {/* <div className="form-group ">
          <label htmlFor="InputEmpId">Employee Id</label>
          <input
            type="number"
            name="empId"
            className="form-control"
            id="InputApplicationDate"
            aria-describedby="emailHelp"
            placeholder="input emp id"
            onChange={(e) => {
              setEmpId(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div> */}
       {/* branch */}
       <div className="form-group ">
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

       

        {/* from date */}
        <div className="form-group ">
          <label htmlFor="InputFromDate">FromDate</label>
          <input
            type="date"
            name="fromDate"
            onChange={(e) => {
              setFromDate(e.target.value);
              console.log(e.target.value);
            }}
            className="form-control"
            id="InputApplicationDate"
            aria-describedby="emailHelp"
            placeholder="Input Date"
          />
        </div>

        {/* to date */}
        <div className="form-group ">
          <label htmlFor="InputToDate">ToDate</label>
          <input
            type="date"
            name="toDate"
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

        <button
          type="submit"
          className="btn btn-primary"
          onClick={submitRequest}
        >
          Apply
        </button>
      </form>
    </div>
  );
}
