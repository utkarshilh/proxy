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

              <p ><h4 style={{paddingTop:'10px'}}>Faculty  Details</h4></p>

            </div>

            <div className="containerView">

              <strong>ID:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              <span>{empId}</span>
              <br/>
              <br/>


              <strong>Name:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              <span>{user.name}</span>
              <br/>
              <br/>
              

              <strong>Email:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              <span>{user.Email}</span>
              <br/>
              <br/>
              <strong>Roll:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              <span>{user.roll}</span>
              <br/>
              <br/>

              <strong>Contact:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              <span>{user.ContactNo}</span>
              <br/>
              <br/>

              <strong>Department:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              <span>{user.Department}</span>
              <br/>
              <br/>

              <Link to="/editusers">
                 <button
                  style={{backgroundColor:'grey',
                  width:'90px', height:'39px',
                  marginRight:'50px',
                  border:'0px',
                  borderRadius:'7px'
                
                }} className="">Go Back</button>
              </Link>
              

           {/* </div>*/}

          </div>

         </div>
         </div>
      </div>
    )
  }


export default View
