import React from "react";
import { useState } from 'react'



export default function MainLogin() {
    const [usernameLog, setUsernameLog] = useState("")
    const [passwordLog, setPasswordLog] = useState("")

    const [role, setRole] = useState("")

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
                    <button>Login</button>
                    <br />
                </div>
            </div>
        </div>
    )
}
