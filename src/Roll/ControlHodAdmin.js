import React, { useEffect, useState } from "react";
//import "./trial.css";

import { Link } from "react-router-dom";
import axios from "axios";
import { Transform } from "form-data";
function  ControlHodAdmin(props) {
  console.log(props);

  //For image
  console.log(props.updateUser.currentUser);
  const empId = props.updateUser.currentUser;
  const [seedata, setData] = useState([]);

  ////////////////////////////////////////////////////////////

  const handleLogoutButton = () => {
    props.updateUser.LogoutButton();
    // console.log(props);

    console.log(" i was not in the city");
  };

  console.log("inside navbar " + JSON.stringify(props.updateUser.currentRole));
  let g = 1;

  /////////////////////////////////////////////////////////////////////////////////

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
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      {/* start top navbar history*/}
      <nav>
        <h1
          style={{
            color: " white",
            textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
          }}
        >
          United College Of Engineering And Research
        </h1>

        <i class="bx bxs-message-dots"></i>
        <Link
          className="nav-link"
          to="javascript:history.back()"
          style={{ textAlign: "center" }}
        >
          <label for="openSidebarMenu1" class="sidebarIconToggle1">
            <div className="spinner1 top1"></div>
            <div className="spinner1 middle1"></div>
            <div className="spinner1 bottom1"></div>
          </label>
          {/* <img  
            src="https://drive.google.com/uc?export=view&id=14b4iBIe6o5uheHJ3WUieiAPhHPhKAkx9"
            className="Btm"
            style={{ width: "35px" }}
        />*/}
        </Link>
      </nav>

      {/* end top navbar */}

      {/* start top navbar animation */}
      <input type="checkbox" id="openSidebarMenu" />
      <label
        for="openSidebarMenu"
        class="sidebarIconToggle"
        style={{ position: "fixed" }}
      >
        <div className="spinner top"></div>
        <div className="spinner middle"></div>
        <div className="spinner bottom"></div>
      </label>
      {/* end top navbar animation */}

      {/*Sidebar start
        <aside>
            <div class="sidebar">content
               <div  class="container">*/}

      <section id="sidebar">
        {/* For Image*/}

        <label
          style={{
            backgroundColor: "rgb(215, 235, 242)",
            width: "100%",
            height: "150px",
            textAlign: "left",
            borderTopRightRadius: "10px",
          }}
        >
          {seedata.map((val) => {
            return (
              <div>
                <img
                  src={`/uploads/${val.userimg}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    boxShadow: " 0 0 40px -10px rgba(0, 0,0, 0.25)",
                    borderRadius: "50%",
                    float: "left",
                    marginTop: "20px",
                    marginLeft: "10px",
                    border: "2.5px solid  black",
                  }}
                  className=""
                />
                <br></br>
                <ul style={{ marginLeft: "100px" }}>
                  <li>
                    <h5 style={{ marginTop: "30px" }}>You Are {val.role}</h5>
                  </li>
                  <li>
                    {" "}
                    <p>{val.name} </p>
                  </li>
                </ul>
              </div>
            );
          })}
          {/*  <h2 style={{marginTop:"20px"}}>You Are Admin..</h2> box-shadow: 0 0 40px -10px rgba(0, 0,0, 0.25);border: 1.5px solid  rgb(197, 217, 224);
           <p style={{textAlign:'left'}}>12345<br/>CSE Department</p>*/}
        </label>

        <ul class="side-menu top">
          <li class="active">
            <a>
              <i class="bx bxs-shopping-bag-alt">
              <Link Link className="nav-link" id="nav-link" aria-current="page" to="/profile">
              <img
                src="https://drive.google.com/uc?export=view&id=14TPv2FelBv-IPz5EEl6dQqA7NzYF-Z1W"
                
                className="imageicon" id="" 
              />

             
              My Profile
              </Link>
              </i>
            </a>
          </li>

          {/* <li class="active"> 
                <a>
                        <i class='bx bxs-shopping-bag-alt' ></i>
                        <label>Time table
                       
                           <div className="spinner1 top" ></div>
                           <div className="spinner1 middle"></div>
                           <div className="spinner1 bottom"></div>
                            
                        <ul class="side-menu top" >
                            <li class="active"><a> <i class='bx bxs-shopping-bag-alt' >1</i></a></li>
                            <li class="active"><a> <i class='bx bxs-shopping-bag-alt' >2</i></a></li>
                            <li class="active"><a> <i class='bx bxs-shopping-bag-alt' >2</i></a></li>
            </ul>
                        
                       
                        
                        </label>
                  </a>
                </li>
               
                <li class="active">     
                  <a>
                        <i class='bx bxs-shopping-bag-alt' ></i>
                       
                       <Link className="nav-link" to="/settimetable" >SetOwnTimeTable</Link> 
                     
                       
                  </a>
                </li>
                
                <li class="active">
                    <a>
                        <i class='bx bxs-shopping-bag-alt' ></i>
                         <Link className="nav-link" to="/seetimetable">ShowMyTimeTable</Link> 
                    </a>
                </li>*/}

          <li class="active">
            <a>
              <i class="bx bxs-shopping-bag-alt"></i>
              <img
                src="https://drive.google.com/uc?export=view&id=14PmuBOBzILwZC_dm25zNVWg2-f-xGsbm"
                style={{ width: "20px", borderRadius: "50%", float: "left" }}
                className=""
              />
              <Link className="nav-link" to="/seetimetable">
                Time-Table
              </Link>
            </a>
          </li>
          <li class="active">
            <a>
              <i class="bx bxs-group"></i>
              <img
                src="https://drive.google.com/uc?export=view&id=13ZNULshZuWTZdT_NK_9JG2Q2Oloix64q"
                style={{ width: "20px", borderRadius: "50%", float: "left" }}
                className=""
              />
              <Link Link className="nav-link" aria-current="page" to="/request">
                Request
              </Link>
            </a>
          </li>

          {/*
                <li class="active">
                    <a>
                        <i class='bx bxs-group' ></i>
                        <Link Link className="nav-link" aria-current="page" to="/requestleave">LeaveRequestForm</Link>
                    </a>
                </li>
                <li class="active">
                    <a>
                        <i class='bx bxs-group' ></i>
                        <Link Link className="nav-link" aria-current="page" to="/allleaverequest">MyRequestDetails</Link>
                    </a>
                </li>
                <li class="active">
                    <a>
                        <i class='bx bxs-group' ></i>
                        <Link className="nav-link" to="/boss">Accept/Reject-Requests</Link> 
                    </a>
            </li>*/}
          {props.updateUser.currentRole == "Admin" && (
            <li className="active">
              <a>
                <i class="bx bxs-message-dots"></i>
                <img
                  src="https://drive.google.com/uc?export=view&id=14GaAIlMno4zn9juc8uWALCu2EpDQUAuM"
                  style={{ width: "20px", borderRadius: "50%", float: "left" }}
                  className=""
                />
                <Link className="nav-link" to="/roll">
                  Admin
                </Link>
              </a>
            </li>
          )}
          {props.updateUser.currentRole == "Hod" && (
            <li className="active">
              <a>
                <i class="bx bxs-message-dots"></i>
                <img
                  src="https://drive.google.com/uc?export=view&id=14GaAIlMno4zn9juc8uWALCu2EpDQUAuM"
                  style={{ width: "20px", borderRadius: "50%", float: "left" }}
                  className=""
                />
                <Link className="nav-link" to="/roll">
                  HOD
                </Link>
              </a>
            </li>
          )}

          <a>
            <i class="bx bxs-message-dots"></i>
            <Link
              className="nav-link"
              style={{ textAlign: "center", padding: "50px" }}
            >
              <img
                src="https://drive.google.com/uc?export=view&id=13WtVjlIykWmSXYqxTnHUkV-lPkp-pYZV"
                style={{ width: "70px", borderRadius: "50%" }}
                className="Img"
                onClick={handleLogoutButton}
              />
              <p>Logout</p>
            </Link>
            {/* <i class='bx bxs-message-dots' ></i>
                        <Link className="nav-link" to="javascript:history.back()"  style={{textAlign:'center'}} >
                        <img src="https://drive.google.com/uc?export=view&id=1FRqBSzYUcIB6em2LmzElhN0VZeRHA1yz"  style={{width: '50px'}}  />
                       </Link>*/}
          </a>
        </ul>
      </section>

      {/* </div>
   </div>
</aside>
 Sidebar end*/}
    </div>
  );
}

export default ControlHodAdmin;
