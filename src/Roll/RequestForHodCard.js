import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./requestForHod.css";
import { useNavigate } from 'react-router-dom'
import Axios from "axios";

function RequestForHodCard(props) {
  const [allRequestForHod, setAllRequestForHod] = useState([]);
  const [allRequestForHodx, setAllRequestForHodx] = useState([]);
  let [show, setShow] = useState(true);
  let [showx, setShowx] = useState();

  const [proxy, setProxy] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");



  const { requestId } = useParams();
  const { empId } = useParams();
  useEffect(() => {

    Axios.get(`/api/AllRequestForHod/${requestId}/${empId}`).then(
      (response) => {
        console.log(new Date(response.data[0].fromDate).toLocaleDateString('en-GB'))
        setFromDate(new Date(response.data[0].fromDate).toLocaleDateString('en-GB'))
        setToDate(new Date(response.data[0].toDate).toLocaleDateString('en-GB'))

        setAllRequestForHodx(response.data);


        Axios.get("/api/AllRequestForHod/proxy",
          {
            data: {
              empId: empId,
              fromDate: fromDate,
              toDate: toDate
            }
          }).then((response) => {
            console.log("it was executed")
            // setProxy(response.data);
          }
          );
      }
    );




    // Axios.get("/api/AllRequestForHod", {
    //   empId: empId,
    //   forDate: ,
    //   toDate
    // }).then(
    //   (response) => {
    //     setProxy(response.data);
    //   }
    // );


  }, []);

  const navigate = useNavigate();
  const requestAccepted = (id) => {
    console.log(id);
    console.log("the current request is approved");

    Axios.post("/api/setFinalVerdict", {
      id: id,
      currentstatus: "Accepted",
    }).then(() => {
      alert("successful Accepted");
      update();
      navigate("/allrequestforhod")

    });
  };
  const requestRejected = (id) => {
    Axios.post("/api/setFinalVerdict", {
      id: id,
      currentstatus: "Rejected",
    }).then(() => {
      alert("successful Rejected");
      update();
      navigate("/allrequestforhod")
    });
  };

  const update = () => {
    console.log("update was executed");
    Axios.get("/api/AllRequestForHod").then((response) => {
      setAllRequestForHod(response.data);
    });
  };

  function handleclick() {
    console.log("update was executed");
    Axios.get(`/api/allRequestedLeave/${empId}`).then((response) => {
      setShowx(x);
      setAllRequestForHodx(response.data);
    });
  }

  return (
    <div className="model">
      <div className="model-content">
        <div class="card-bodyRequestForHod">
          {allRequestForHodx.map((val, index) => {
            return (
              <>
                <h3 style={{ backgroundColor: "gray", color: "white" }}>
                  Leave Application Form For Faculty
                </h3>
                <table
                  style={{
                    width: "100%",
                    height: "100%",
                    align: "center",
                    textAlign: "center",
                    cellpadding: "24px",
                    border: "1px solid black",
                  }}
                >
                  <tr style={{ border: "1px solid gray" }}>
                    <th
                      colSpan={5}
                      style={{ border: "1px solid", textAlign: "center" }}
                    >
                      {val.name}
                    </th>
                    <th
                      colSpan={2}
                      style={{ border: "1px solid ", textAlign: "center" }}
                    >
                      {val.Department}
                    </th>
                    <th
                      colSpan={3}
                      style={{ border: "1px solid", textAlign: "center" }}
                    >
                      DOJ : 18-05-1999
                    </th>
                  </tr>

                  <tr style={{ border: "1px solid black" }}>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      Reason for Leave{" "}
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      Nature of the leave
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      Date of Leave
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      Duration of leave
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                      colSpan={2}
                    >
                      Leave already taken in the Current Month{" "}
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                      colSpan={2}
                    >
                      Till Previous Month Leave Taken{" "}
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      Balance Leave Excluding this Leave{" "}
                    </th>
                  </tr>

                  <tr>
                    <td style={{ border: "1px solid black" }} rowSpan={2}>
                      {val.reason}{" "}
                    </td>
                    <td style={{ border: "1px solid black" }} rowSpan={2}>
                      {val.leaveType}{" "}
                    </td>
                    <td style={{ border: "1px solid black" }} rowSpan={2}>
                      {" "}
                      {val.fromDate.split("T")[0]}
                    </td>
                    <td style={{ border: "1px solid black" }} rowSpan={2}>
                      {" "}
                      <b>From</b>&nbsp;&nbsp;{new Date(val.fromDate).toLocaleDateString('en-GB')}&nbsp;&nbsp;
                      <b>To&nbsp;&nbsp;</b>{new Date(val.toDate).toLocaleDateString('en-GB')}
                    </td>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      {" "}
                      CL
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      LWP{" "}
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      {" "}
                      CL
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      LWP{" "}
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      CL
                    </th>
                  </tr>

                  <tr style={{ border: "1px solid black" }}>
                    <td style={{ border: "1px solid black" }}>
                      {val.LeavealrdytakncrrntmonthCL}{" "}
                    </td>

                    <td style={{ border: "1px solid black" }}>
                      {val.LeavealrdytakncrrntmonthLWP}{" "}
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      {" "}
                      {val.TillprevsmonthleavetakenCL}
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      {val.TillprevsmonthleavetakenLWP}{" "}
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      {" "}
                      {val.BalenaceleaveexcludingthisleaveCL}
                    </td>
                  </tr>

                  <tr style={{ border: "1px solid black" }}>
                    <th
                      style={{ border: "1px solid black", textAlign: "center" }}
                      colSpan={9}
                    >
                      Arrangement of Duties during absence
                    </th>
                  </tr>

                  <tr style={{ border: "1px solid black" }}>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                      colSpan={2}
                    >
                      Date
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      Subject/Lab/Others
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      sem & sec
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      Time
                    </th>
                    <th
                      style={{
                        border: "1px solid black",
                        backgroundColor: "whitesmoke",
                      }}
                      colSpan={4}
                    >
                      Name of Sign. of Person Agreed
                    </th>
                  </tr>

                  <tr style={{ border: "1px solid black" }}>
                    <td style={{ border: "1px solid black" }} colSpan={2}>
                      18-05-199
                    </td>
                    <td style={{ border: "1px solid black" }}>C programming</td>
                    <td style={{ border: "1px solid black" }}>8A</td>
                    <td style={{ border: "1px solid black" }}>nine</td>
                    <td style={{ border: "1px solid black" }} colSpan={4}>
                      {" "}
                      Utkarsh Tripathi
                    </td>
                  </tr>

                  <tr style={{ border: "1px solid black" }}>
                    <td style={{ border: "1px solid black" }} colSpan={2}>
                      18-05-199
                    </td>
                    <td style={{ border: "1px solid black" }}>C programming</td>
                    <td style={{ border: "1px solid black" }}>8A</td>
                    <td style={{ border: "1px solid black" }}>nine</td>
                    <td style={{ border: "1px solid black" }} colSpan={4}>
                      {" "}
                      Utkarsh Tripathi
                    </td>
                  </tr>

                  <tr style={{ border: "1px solid black" }}>
                    <td style={{ border: "1px solid black" }} colSpan={2}>
                      18-05-199
                    </td>
                    <td style={{ border: "1px solid black" }}>C programming</td>
                    <td style={{ border: "1px solid black" }}>8A</td>
                    <td style={{ border: "1px solid black" }}>nine</td>
                    <td style={{ border: "1px solid black" }} colSpan={4}>
                      {" "}
                      Utkarsh Tripathi
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                          requestAccepted(val.requestId);
                        }}
                      >
                        Accept
                      </button>

                    </td> <td>

                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          requestRejected(val.requestId);
                        }}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                </table>
              </>
            );
          })}
          {/*<h5 style={{ textAlign: "left" }}>
      <b style={{textAlign:'center'}}>Your Response:</b>
        </h5>*/}
        </div>
        <Link to="/allrequestforhod">
          <input type="button" value="Go Back" />
        </Link>
      </div>
    </div>
  );
}

export default RequestForHodCard;
