import { React, useEffect, useState } from 'react'


import "./Mainlogin.css";
import Axios from 'axios'
//import Login from "./Login";






export default function MainLogin(props) {


   
    const [usernameLog, setUsernameLog] = useState("")
    const [passwordLog, setPasswordLog] = useState("")
   const [loginStatus, setLoginStatus]=useState("")
    const [role, setRole] = useState("")
    Axios.defaults.withCredentials=true;
   
    const login = () => {
        // console.log("this is happy happy")i was executed
    // Axios.post("http://localhost3001/api/login", {
        //     username: usernameLog,S
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


        Axios.post('/api/login', {
            username: usernameLog,
            password: passwordLog,
            status: role
        }).then((response) => {
            if (response.data.message)
           // setLoginStatus(response.data.message);
                alert(response.data.message)
            else {
              //setLoginStatus(response.data[0].username);
             // console.log(response.data[0].username)
                //alert("this is comming response after login" + response.data[0].empId)
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




/*
    useEffect(()=>{
        Axios.get("http://localhost:3001/api/login").then((response)=>{
            if(response.data.loggedIn==true){
            setLoginStatus(response.data.user[0].userName)}
        });
      },[]);*/


    return (
        <div >
            <div  className="f" >
               <div className="z">
               <div className="l">
      <img src="https://drive.google.com/uc?export=view&id=1tCfSnwEUvsTXY_vjWhP-8BgDtvT_5D3A" className='user'/>
          <h1>Login</h1>
          <label>Username</label>
          <br />
         <input type="text" placeholder='Username...'
         
              onChange={(e) => {
                  setUsernameLog(e.target.value);
                  console.log(usernameLog)
              }}/>
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
        </div>
    )
}


