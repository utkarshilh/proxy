import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logouticon from './logout icon.png'


export default function Navbar(props) {

    console.log(props);

    const handleLogoutButton = () => {
        props.updateUser.LogoutButton();
        // console.log(props);

        console.log(" i was not in the city")



    }

    console.log("inside navbar " + JSON.stringify(props.updateUser.currentRole))
    let g = 1
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link Link className="nav-link" aria-current="page" to="/requestleave">RequestLeave</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/allleaverequest">AllLeaveRequest</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to="/settimetable">SetTimeTable</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to="/allrequestforhod">Requested Leave (only for hod)</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to="/seetimetable">See Time Table</Link> </li>


                            <li className="nav-item"> <Link className="nav-link" to="/setarrangement">Set Arrangement</Link> </li>

                            {/* here condition is checked whether the current user is admin or not if the user is admin then only he or she be able to create new user */}
                            {(props.updateUser.currentRole == "Admin") && (<li className="nav-item"> <Link className="nav-link" to="/setUser">Set User</Link> </li>)}

                            <li className="nav-item"> <Link className="nav-link" to="/allArrangementRequest">All Arrangement Request</Link> </li>


                        </ul>

                        {/* <form class="form-inline my-2 my-lg-0"> */}

                        <button className="btn btn-dark shadow-none"> <img src={logouticon} alt="..." class=" btn-outline-success my-2 my-sm-0 " onClick={handleLogoutButton} /></button>
                        {/* </form> */}

                    </div>
                </div>
            </nav>
        </div>
    )
}
