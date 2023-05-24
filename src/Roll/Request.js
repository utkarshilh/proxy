import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./roll.css";
export default function Request(props) {
  console.log(props.updateUser.currentRole);

  return (
    <body>
      {/*<div className="containerRoll">  className="formRoll" id="formRoll"    className="SubComponent" id="SubComponent"*/}
        <form >
          <div   className="SubComponent" id="SubComponent" >
            <div className="row">
              <table id="Tableroll">
                <tr style={{ border: "0px" }}>
                  <td className="TablData" style={{ border: "0px" }}>
                    <section class=" card">
                    <div class="card__corner">
                        <div class="card__corner-triangle"></div>
                      </div>
                      <Link className="nav-link" to="/requestleave">
                        <div class="profile">
                          <img
                            src=" https://drive.google.com/uc?export=view&id=12x4A6jKXjU7w54iCizajBnwEQU5ATGxO"
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
                            {" "}
                            <p style={{ marginTop: "10px" }}>
                              LeaveRequestForm
                            </p>
                          </label>
                        </div>
                      </Link>
                    </section>
                  </td>


                  
                  <td className="TablData" style={{ border: "0px" }}>
                    <section class=" card">
                      <div class="card__corner">
                        <div class="card__corner-triangle"></div>
                      </div>
                      <Link className="nav-link" to="/setarrangement">
                        <div class="profile">
                          <img
                            src=" https://drive.google.com/uc?export=view&id=14hxnLbJEtPwiX9VwiNEOE5DCzT1wnKDe"
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
                            <p style={{ marginTop: "10px" }}>
                              Find Available Teachers
                            </p>
                          </label>
                        </div>
                      </Link>
                    </section>
                  </td>
                  
                  
                </tr>
                <tr style={{ border: "0px" }}>
                  <td className="TablData" style={{ border: "0px" }}>
                    <section class=" card">
                      <div class="card__corner">
                        <div class="card__corner-triangle"></div>
                      </div>
                      <Link className="nav-link" to="/allleaverequest">
                        <div class="profile">
                          <img
                            src=" https://drive.google.com/uc?export=view&id=12ESF6YtSph4L_NDdFjCt9enEiU0PhdxK"
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
                            <p style={{ marginTop: "10px" }}>
                              LeaveRequestDetails
                            </p>
                          </label>
                        </div>
                      </Link>
                    </section>
                  </td>
                  <td className="TablData" style={{ border: "0px" }}>
                    <section class=" card">
                      <div class="card__corner">
                        <div class="card__corner-triangle"></div>
                      </div>
                      <Link className="nav-link" to="/allArrangementRequest">
                        <div class="profile">
                          <img
                            src=" https://drive.google.com/uc?export=view&id=12IS_PcWln2ZqQ_oNk_LxjTqfsXUScOZI"
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
                            <p style={{ marginTop: "10px" }}>
                             Teacher's Request to take the class
                            </p>
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
      {/*</div>*/}
    </body>
  );
}
