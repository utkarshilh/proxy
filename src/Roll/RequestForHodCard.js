import React, { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import "./requestForHod.css";

import Axios from "axios";

function RequestForHodCard(props) {
  const [allRequestForHod, setAllRequestForHod] = useState([]);
  const [allRequestForHodx, setAllRequestForHodx] = useState([]);
  let [show, setShow] = useState(true);
  let [showx, setShowx] = useState();
  useEffect(() => {
    console.log("useEffect executed");
    console.log("update was executed");
    Axios.get(`/api/AllRequestForHod/${requestId}`).then((response) => {
      
      setAllRequestForHodx(response.data);
    });
  }, []);

  const requestAccepted = (id) => {
    console.log(id);
    console.log("the current request is approved");

    Axios.post("/api/setFinalVerdict", {
      id: id,
      currentstatus: "Accepted",
    }).then(() => {
      alert("successful Accepted");
      update();
    });
  };
  const requestRejected = (id) => {
    Axios.post("/api/setFinalVerdict", {
      id: id,
      currentstatus: "Rejected",
    }).then(() => {
      alert("successful Rejected");
      update();
    });
  };

  const update = () => {
    console.log("update was executed");
    Axios.get("/api/AllRequestForHod").then((response) => {
      setAllRequestForHod(response.data);
    });
  };
  const {requestId}=useParams();
  function handleclick() {
    
    console.log("update was executed");
    Axios.get(`/api/AllRequestForHod/${requestId}`).then((response) => {
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
                <table style={{width:'500px'}}>
                  <tr>
                    <td scope="col">
                      <h5 style={{ textAlign: "left" }}>
                        <b>Request-User:.</b>
                      </h5>
                    </td>
                    <td> {val.empId}
                    
                    </td>
                  </tr>

                  <tr>
                    <td scope="col">
                      <h5 style={{ textAlign: "left" }}>
                        <b>RequestId:</b>
                      </h5>
                    </td>
                    <td>{val.requestId}</td>
                  </tr>

                  <tr>
                    <td scope="col">
                      <h5 style={{ textAlign: "left" }}>
                        <b>Duration:</b>
                      </h5>
                    </td>
                    <td>
                      <b>From</b>{val.fromDate.split('T')[0] } <b>To</b> {val.toDate.split('T')[0]}{" "}
                    </td>
                  </tr>

                  <tr>
                    <td scope="col">
                      <h5 style={{ textAlign: "left" }}>
                        <b>Reason:</b>
                      </h5>
                    </td>
                    <td>{val.reason}</td>
                  </tr>

                  <tr>
                    <td scope="col">
                      <h5 style={{ textAlign: "left" }}>
                        <b>Applied Date:</b>
                      </h5>
                    </td>
                    <td>{val.applicationDate.split('T')[0]}</td>
                  </tr>

                  <tr>
                    <td scope="col">
                      <h5 style={{ textAlign: "left" }}>
                        <b>Your Response:</b>
                      </h5>
                    </td>

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

                  <tr>
                    <td scope="col">
                    <Link to="/allrequestforhod">
                     <input type="button" value="Go Back"/>
                    </Link>
                    </td>
                    
                  </tr>
                </table>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RequestForHodCard;
