import React, { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import axios from 'axios';
import "./view.css";





  function View() {

    const [user, setUser]=useState({});

    const {empId}=useParams();


    useEffect(()=>{
        axios
        .get(`/api/get/${empId}`)
        .then((resp)=> setUser({...resp.data[0]}));
  
     }, [empId]);


    return (
      <div  style={{marginTop:"150px"}}>

          <div className="modelx">
        <div className="model-contentx" style={{marginTop:"50px"}}>


       {/*  <div className="cardView">*/}
            <div className="card-headerView">

              <p ><h4 style={{paddingTop:'10px'}}>User Contact Detail</h4></p>

            </div>

            <div className="containerView">

              <strong>ID:</strong>
              <span>{empId}</span>
              <br/>
              <br/>


              <strong>Name:</strong>
              <span>{user.name}</span>
              <br/>
              <br/>
              

              <strong>Email:</strong>
              <span>{user.Email}</span>
              <br/>
              <br/>
              

              <strong>Contact</strong>
              <span>{user.ContactNo}</span>
              <br/>
              <br/>

              <Link to="/">
                 <button className="btn btn-edit">Go Back</button>
              </Link>
              

           {/* </div>*/}

          </div>

         </div>
         </div>
      </div>
    )
  }


export default View
