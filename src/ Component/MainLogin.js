import React from "react";
import { useState } from 'react'

import Axios from 'axios'



export default function MainLogin(props) {


    const [usernameLog, setUsernameLog] = useState("")
    const [passwordLog, setPasswordLog] = useState("")

    const [role, setRole] = useState("")

    const login = () => {
        // console.log("this is happy happy")
        // Axios.post("http://localhost3001/api/login", {
        //     username: usernameLog,
        //     password: passwordLog,
        //     status: setRole
        // }).then((response) => {
        //     if (response.data.message)
        //         alert("invalid credentials")
        //     else {
        //         console.log(Response);
        //         setIsAuthenticated(true);
        //     }
        // })

        Axios.post('http://localhost:3001/api/login', {
            username: usernameLog,
            password: passwordLog,
            status: role
        }).then((response) => {
            if (response.data.message)
                alert(response.data.message)
            else {
                console.log("this is comming response " + response.data[0].username)
                const temp = {
                    userName: response.data[0].empId,
                    role: response.data[0].role
                }
                // setIsAuthenticated(true);
                props.updateUser({
                    userName: temp.userName,
                    role: temp.role

                })

                // console.log("ye ho gaya na to bs ");
                // console.log(JSON.stringify(temp));

                props.changeLoginStatus();
            }
        }).catch((error) => {
            // handle the rejected state
            // console.log("helloe " + error);
            alert(error)
        });
    }
    return (
        <div>
            <div className="form">
                <div className="login">
                    <h1>Login</h1>
                    <label>Username</label>
                    <br />
                    <input type="text" placeholder='Username...'
                        onChange={(e) => {
                            setUsernameLog(e.target.value);
                            console.log(usernameLog)
                        }} />
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="password" placeholder='password...' onChange={(e) => {
                        setPasswordLog(e.target.value);
                        console.log(passwordLog)
                    }} />
                    <br />

                    <label>Password</label>
                    <br />

                    <select name="Role" id="" onChange={(e) => {
                        setRole(e.target.value);
                        console.log(role)
                    }}>
                        <option seledted value="Select">Select</option>
                        <option value="Admin">Admin</option>
                        <option value="Faculty">Faculty</option>
                        <option value="Hod">Hod</option>
                    </select>
                    <br />
                    <br />
                    <button onClick={login}>Login</button>
                    <br />
                </div>
            </div>
        </div>
    )
}
