import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./roll.css";
export default function RollofFaculty(props) {
  console.log(props.updateUser.currentRole);

  return (
  //  <body>
<>
{props.updateUser.currentRole == "Admin" && (
      <div className="containerRoll">
        <form className="">
          <div className="SubComponent">
            <div className="row">
              <table style={{ marginTop: "0px" }}>
                <tr style={{ border: "0px" }}>
                  <td style={{ border: "0px" }}>
                    <section class=" card">
                      <div class="card__corner">
                        <div class="card__corner-triangle"></div>
                      </div>
                      <Link className="nav-link" to="/setUser">
                        <div class="profile">
                          <img
                            src=" https://drive.google.com/uc?export=view&id=12sha0zRyfV2KbOl5rRpQEB8przYyU4NI"
                            className="icon"
                          />

                          <label
                            className="label"
                            style={{
                              backgroundColor: "rgb(215, 235, 242)",
                              width: "200px",
                              borderBottomLeftRadius: "10px",
                              borderBottomRightRadius: "10px",
                            }}
                          >
                            <p style={{ marginTop: "10px" }}>Create User</p>
                          </label>
                        </div>
                      </Link>
                    </section>
                  </td>

                  <td style={{ border: "0px" }}>
                    <section class=" card">
                    <div class="card__corner">
                        <div class="card__corner-triangle"></div>
                      </div>
                      <Link className="nav-link" to="/editusers">
                        <div class="profile">
                          <img
                            src="https://drive.google.com/uc?export=view&id=1VbsY_4cim1MIhvvbePXnsTimjH1n3WK7"
                            className="icon"
                          />

                          <label
                            className="label"
                            style={{
                              backgroundColor: "rgb(215, 235, 242)",
                              width: "200px",
                              borderBottomLeftRadius: "10px",
                              borderBottomRightRadius: "10px",
                            }}
                          >
                            <p style={{ marginTop: "10px" }}>Edit User</p>
                          </label>
                        </div>
                      </Link>
                    </section>
                  </td>
                </tr>
                <tr style={{ border: "0px" }}>
                  <td style={{ border: "0px" }}>
                    <section class=" card">
                    <div class="card__corner">
                        <div class="card__corner-triangle"></div>
                      </div>
                      <Link className="nav-link" to="/allUsers">
                        <div class="profile">
                          <img
                            src="https://drive.google.com/uc?export=view&id=1GTowQBpxRiMWL50rGwX28EY1OK3p-mpR"
                            className="icon"
                          />
                          <label
                            className="label"
                            style={{
                              backgroundColor: "rgb(215, 235, 242)",
                              width: "200px",
                              borderBottomLeftRadius: "10px",
                              borderBottomRightRadius: "10px",
                             
                            }}
                          >
                            <p style={{ marginTop: "10px" }}>See All Users</p>
                          </label>
                        </div>
                      </Link>
                    </section>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </form>
      </div>
      )}


  <>
  {props.updateUser.currentRole == "Hod" && (
<div className="containerRoll">
<form className="">
  <div className="SubComponent">
    <div className="row">
      <table style={{ marginTop: "0px" }}>
        <tr style={{ border: "0px" }}>
          <td style={{ border: "0px" }}>
            <section class=" card">
              <div class="card__corner">
                <div class="card__corner-triangle"></div>
              </div>
              <Link className="nav-link" to="/allrequestforhod">
                <div class="profile">
                  <img
                    src="https://drive.google.com/uc?export=view&id=12cIhQkLiW0d89N6SSbVfOVX7DHXA2-LB"
                    className="icon"
                  />

                  <label
                    className="label"
                    style={{
                      backgroundColor: "rgb(215, 235, 242)",
                      width: "200px",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    <p style={{ marginTop: "10px" }}>Request For Hod</p>
                  </label>
                </div>
              </Link>
            </section>
          </td>

         
        
          <td style={{ border: "0px" }}>
            <section class=" card">
            <div class="card__corner">
                <div class="card__corner-triangle"></div>
              </div>
              <Link className="nav-link" to="/allUsers">
                <div class="profile">
                  <img
                    src="https://drive.google.com/uc?export=view&id=1GTowQBpxRiMWL50rGwX28EY1OK3p-mpR"
                    className="icon"
                  />
                  <label
                    className="label"
                    style={{
                      backgroundColor: "rgb(215, 235, 242)",
                      width: "200px",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                     
                    }}
                  >
                    <p style={{ marginTop: "10px" }}>See All Users</p>
                  </label>
                </div>
              </Link>
            </section>
          </td>
        </tr>
      </table>
    </div>
  </div>
</form>
</div>




























       /*<div  className='SubComponent'>
       <div className='row'>
      
       
     
        <section class=" card">
           <Link  className="nav-link" to="/allrequestforhod">
           <div class="profile">
           <img src="https://drive.google.com/uc?export=view&id=12cIhQkLiW0d89N6SSbVfOVX7DHXA2-LB" className="icon"/>
           <hr />
           <h5>Requestfor Hod</h5>
           </div>
           </Link>
       </section>
       <section class=" card">
       <Link  className="nav-link" to="/allUsers">
           <div class="profile">
           <img src="https://drive.google.com/uc?export=view&id=1GTowQBpxRiMWL50rGwX28EY1OK3p-mpR" className="icon"/>
           <hr />
             <h5>See Allusers</h5>
            
           </div>
           </Link>
       </section>
       
       </div>
    </div>*/
      )}
      </>

      </>






  //  </body>
  
  );
}
