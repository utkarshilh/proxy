import React, { Component } from 'react'
import { useState, useEffect } from "react";
import {useNavigate, useParams, Link} from "react-router-dom";

import axios from "axios";
import{toast} from "react-toastify";

const initialState={
    nine:""
};
function UpdateTimeTable(props) {

//const [data, setdata]=useState([]);
//const [nine, setnine]=useState("")
const empId = props.updateUser.currentUser;
  const[state, setState]=useState(initialState);
    //const {nine}=state;
    const {dday} = useParams();
    const history=useNavigate();
   // const empId = props.updateUser.currentUser;
    //const empId = 12345;//useParams();
   // const {dday} = useParams();
   /* useEffect(()=>{
       axios
       .get(`http://localhost:3001/api/seetimetable/${empId}`)
       .then((resp)=> {setdata(resp)
        setnine(resp[0].nine)

    });
 
    }, [empId]);*/
    const [users , setUsers]=useState([]);
    const [branch, setbranch]=useState("");
    const [nine, setnine]=useState("");
    const [ten, setten]=useState("");
   // const dday=useParams();
function getList(){
   const empI=12345;
   const dday='monday';
    fetch(`/api/seetimetablex/${empI}/${dday}`).then((result)=>{
        result.json().then((resp)=>{
        console.warn("result", resp)
        setUsers(resp)
        setbranch(resp[0].branch)
        setnine(resp[0].nine)
        setten(resp[0].ten)
        })
     })
}
    useEffect(()=>{
       getList();
     
    },[])
 
    
 
  
 
    return (
      <div className='container'>
        <div style={{marginTop:"100px"}}>
         <form style={{
            margin:"auto",
            padding:"15px",
            maxWidth:"400px",
            alignContent:"center"
         }} 

          
         >
            <label htmlFor="name">nine</label>
            <input
            type="text"
            id="name"
            name="name"
            placeholder="your data....."
            value={nine||""}
            onChange={(e)=>{setnine(e.target.value)}}
           // onChange={handleInputChange}
            
             />
         <label>hi.g.{users.nine}</label>
            
        <hi>shdklhslk</hi>

          <input type="submit" value='update'/>
          
          <Link to="/">
          <input type="button" value="Go Back"/>
          </Link>






         </form>
      </div>
      </div>
    )
  
}

export default UpdateTimeTable
