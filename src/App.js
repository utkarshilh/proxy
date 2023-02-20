import React from 'react'

import { useState } from 'react'

import A from './ Component/A';
import B from './ Component/B';
import MainLogin from './ Component/MainLogin';
import Severalpage from './ Component/Severalpage';
import Navbar from './ Component/Navbar';
import './App.css'



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [currentRole, setCurrentRole] = useState("");


  const updateUser = (props) => {
    console.log(" ta ta ta ")
    console.log(JSON.stringify(props));


    setCurrentUser(JSON.stringify(props.userName));
    setCurrentRole(JSON.stringify(props.role));

    console.log("current userName:" + JSON.stringify(currentUser));
    console.log("current role : " + JSON.stringify(currentRole));




  }

  const changeLoginStatus = () => {

    setIsAuthenticated(true);

  }


  return (
    <div>
      {
        isAuthenticated ?
          <Severalpage /> :
          <MainLogin changeLoginStatus={changeLoginStatus} updateUser={updateUser} />
      }

    </div>

  )
}
export default App


