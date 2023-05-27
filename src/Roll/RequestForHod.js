import { React, useEffect, useState } from "react";
import Axios from "axios";
import "./requestForHod.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";

function RequestForHod(props) {
  const [allRequestForHod, setAllRequestForHod] = useState([]);
  const [allRequestForHodx, setAllRequestForHodx] = useState([]);
  let [show, setShow] = useState(true);
  let [showx, setShowx] = useState();
  useEffect(() => {
    console.log("useEffect executed");
    Axios.get("/api/AllRequestForHod").then((response) => {
      setAllRequestForHod(response.data);
      setAllRequestForHodx(response.data);
      // console.log(response.data);
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
  function handleclick(x) {
    alert(x);
    console.log("update was executed");
    Axios.get(`/api/AllRequestForHod/${x}`).then((response) => {
      setShowx(x);
      setAllRequestForHodx(response.data);
    });
  }

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div className="containerRequestForHod">
      <form className="formRequestForHod">
        <label className="label">
          <h1>
            <strong>All Leave Request Of Users..</strong>
          </h1>
        </label>

        <div class="card-bodyRequestForHod">
          {allRequestForHod.map((val, index) => {
            return (
              <table>
                <tr key={val.empId}>
                  <td>{index + 1}</td>
                  <td scope="col">
                    <h5 style={{ textAlign: "left" }}>
                      <b>Request-User:</b>
                    </h5>
                  </td>
                  <td>
                    {val.empId}&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    {val.applicationDate.split("T")[1].split(".")[0]}
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link to={`/hod/${val.requestId}/${val.empId}`}>
                      <button
                        style={{
                          backgroundColor: "skyblue",
                          border: "0px",
                          width: "70px",
                          height: "40px",
                          borderRadius: "10px",
                        }}
                        className="btn btn-view"
                      >
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
              </table>
            );
          })}
        </div>
      </form>
    </div>
  );
}
export default RequestForHod;
