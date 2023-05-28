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
                    <strong> Requested User:</strong>
                    
                  </td>
                  <td>
                    {val.empId}&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    <b>From</b>&nbsp;&nbsp;{val.fromDate.split("T")[0]}{" "}
                      <b>&nbsp;&nbsp;To&nbsp;&nbsp;</b> {val.toDate.split("T")[0]}{" "}
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
