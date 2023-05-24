import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./myProfile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MyProfile(props) {
  console.log(props.updateUser.currentUser);
  const empId = props.updateUser.currentUser;
  const [data, setData] = useState([]);
  //const empId=12345;
  const getUserData = async () => {
    const res = await axios.get(`/getdata/${empId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.data.status == 201) {
      console.log("data get");
      setData(res.data.data);
    } else {
      console.log("error");
    }
  };

  /////////////////////
  const getUserDatax = async () => {
    const res = await axios.get("/getdata", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.data.status == 201) {
      console.log("data get");
      setData(res.data.data);
    } else {
      console.log("error");
    }
  };

  const [show, setshow] = useState(true);

  useEffect(() => {
    getUserData();
    // getUserDatax();
  }, []);

  return (
    <div className="formMyprofile" id="formMyprofile">
      <div className="Myprofile" id="Myprofile">
        <div className="headerView">
          <p className="Heading">
           Your Details
          </p>
        </div>
        {data.length
          ? data.map((el, i) => {
              return (
                <>
                  <table>
                    <tr style={{ border: "0px" }}>
                      <td style={{ textAlign: "left", border: "0px" }}>
                        <strong className="Title">
                          Roll:&nbsp;&nbsp;&nbsp;&nbsp;
                        </strong>
                        <span className="TitleResult">{el.role}</span>
                      </td>
                    </tr>
                    <tr style={{ border: "0px" }}>
                      <td style={{ textAlign: "left", border: "0px" }}>
                        <strong className="Title">
                          Email:&nbsp;&nbsp;&nbsp;&nbsp;
                        </strong>
                        <span className="TitleResult">{el.Email}</span>
                      </td>
                    </tr>

                    <tr style={{ border: "0px" }}>
                      <td style={{ textAlign: "left", border: "0px" }}>
                        <strong className="Title">
                          Department:&nbsp;&nbsp;&nbsp;&nbsp;
                        </strong>
                        <span className="TitleResult">{el.Department}</span>
                      </td>
                    </tr>
                    <tr style={{ border: "0px" }}>
                      <td style={{ textAlign: "left", border: "0px" }}>
                        <strong className="Title">
                          EmpId:&nbsp;&nbsp;&nbsp;&nbsp;
                        </strong>
                        <span className="TitleResult">{el.empId}</span>
                      </td>
                    </tr>
                    <tr style={{ border: "0px" }}>
                      <td style={{ textAlign: "left", border: "0px" }}>
                        <strong className="Title">
                          Name:&nbsp;&nbsp;&nbsp;&nbsp;
                        </strong>
                        <span className="TitleResult">{el.name}</span>
                      </td>
                    </tr>
                    <tr style={{ border: "0px" }}>
                      <td style={{ textAlign: "left", border: "0px" }}>
                        <strong className="Title">
                          ContactNo:&nbsp;&nbsp;&nbsp;&nbsp;
                        </strong>
                        <span className="TitleResult">{el.ContactNo}</span>
                      </td>
                    </tr>
                  </table>
                </>
              );
            })
          : ""}
      </div>
    </div>
  );
}
export default MyProfile;
