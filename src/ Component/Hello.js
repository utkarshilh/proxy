import React, { useEffect, useState } from "react";
import Axios from "axios";
//import "./myProfile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Hello(props) {
  console.log(props.updateUser.currentUser);
  const empId = props.updateUser.currentUser;
  const [Proxy, setProxy] = useState([]);
 

  useEffect(() => {
   
    fetch(`/api/seetimetablex/${empId}/${dday}`).then((result) => {
      result.json().then((resp) => {
        console.warn("result", resp)
        setProxy(resp)
      })
    })

      
  }, []);

  return (
    <div className="container">
      <div >
        <div className="headerView">
          <p className="Heading">
           Your Details
           {Proxy.empId}
          </p>
        </div>
        {Proxy.length
          ? data.map((el, i) => {
              return (
                <>
                  <table>
                  <tr style={{ border: "0px" }}>
                      <td style={{ textAlign: "left", border: "0px" }}>
                        <strong className="Title">
                          Name:&nbsp;&nbsp;&nbsp;&nbsp;
                        </strong>
                        <span className="TitleResult">{el.empId}</span>
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
export default Hello;
