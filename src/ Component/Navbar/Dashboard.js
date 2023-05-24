import React, { useEffect, useState } from "react";
import "./Dash.css";
import "./Dash2.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Transform } from "form-data";
function Dashboard(props) {
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
      <nav id="navbar">
        <h1
         
        >
         Proxy
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
        <label className="upperpartofsidebar">
          {seedata.map((val) => {
            return (
              <div>
                <table style={{ border: "0px" }}>
                  <tr style={{ border: "0px" }}>
                    <td style={{ border: "0px" }}>
                      <img
                        src={`/uploads/${val.userimg}`}
                        className="Sidebaruserimg"
                      />

                      <ul
                        className="sidebarName"
                        style={
                          {
                            /* marginLeft: "100px"*/
                          }
                        }
                      >
                        <li>
                          <h5
                            style={
                              {
                                /* marginTop: "30px"*/
                              }
                            }
                          >
                            You Are {val.role}
                          </h5>

                          <p>{val.name} </p>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </div>
            );
          })}
        </label>



        

        <ul class="side-menu top">
          <li class="active">
            <a>
              <i class="bx bxs-shopping-bag-alt">
                <Link
                  Link
                  className="nav-link"
                  id="nav-link"
                  aria-current="page"
                  to="/profile"
                >
                  <img
                    src="https://drive.google.com/uc?export=view&id=14TPv2FelBv-IPz5EEl6dQqA7NzYF-Z1W"
                    className="imageicon"
                    id=""
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
                </li>
                 style={{ width: "20px", borderRadius: "50%", float: "left" }}
                
                
                */}

          <li class="active">
            <a>
              <i class="bx bxs-shopping-bag-alt">
                <Link className="nav-link" to="/seetimetable">
                  <img
                    src="https://drive.google.com/uc?export=view&id=14PmuBOBzILwZC_dm25zNVWg2-f-xGsbm"
                    className="imageicon"
                  />
                  Time-Table
                </Link>
              </i>
            </a>
          </li>

          <li class="active">
            <a>
              <i class="bx bxs-shopping-bag-alt">
                <Link
                  Link
                  className="nav-link"
                  aria-current="page"
                  to="/request"
                >
                  <img
                    src="https://drive.google.com/uc?export=view&id=13ZNULshZuWTZdT_NK_9JG2Q2Oloix64q"
                    className="imageicon"
                  />
                  Request
                </Link>
              </i>
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
                <i class="bx bxs-shopping-bag-alt">
                  <Link className="nav-link" to="/roll">
                    <img
                      src="https://drive.google.com/uc?export=view&id=14GaAIlMno4zn9juc8uWALCu2EpDQUAuM"
                      className="imageicon"
                    />
                    Admin
                  </Link>
                </i>
              </a>
            </li>
          )}
          {props.updateUser.currentRole == "Hod" && (
            <li className="active">
              <a>
                <i class="bx bxs-shopping-bag-alt">
                  <Link className="nav-link" to="/roll">
                    <img
                      src="https://drive.google.com/uc?export=view&id=14GaAIlMno4zn9juc8uWALCu2EpDQUAuM"
                      className="imageicon"
                    />
                    HOD
                  </Link>
                </i>
              </a>
            </li>
          )}

          <a>
            <i class="bx bxs-message-dots"></i>
            <Link className="nav-link" id="logout">
              <img
                src="https://drive.google.com/uc?export=view&id=13WtVjlIykWmSXYqxTnHUkV-lPkp-pYZV"
                className="logoutimg"
                onClick={handleLogoutButton}
              />
              <p className="name" onClick={handleLogoutButton}>Logout</p>
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

export default Dashboard;
