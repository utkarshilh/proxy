import React, { Component } from "react";
import { Link } from "react-router-dom";
import RequestForHod from "./RequestForHod";
import SeeAllUsers from "../ Component/EditUser/SeeAllUsers";

export default function ControlHodAdmin(props) {
  console.log(props.updateUser.currentRole);

  return (
    <body>
        {props.updateUser.currentRole == "Admin" && (
           <>

           </>

        )}
        {props.updateUser.currentRole == "Hod" && (

         <>

         <RequestForHod updateUser={props}/>
       
         </>


        )}
     
    </body>
  );
}
