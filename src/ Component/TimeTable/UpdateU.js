import axios from 'axios';
import React, { Component } from 'react'
import { useState, useEffect } from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import{toast} from "react-toastify";


function UpdateU(props){
    const empId = props.updateUser.currentUser;
    const {dday} = useParams();

   const [users , setUsers]=useState([]);
    const [nine, setnine]=useState("");
    const [ten, setten]=useState("");
    const [eleven, seteleven]=useState("");
    const [twelve, settwelve]=useState("");
    const [one, setone]=useState("");
    const [two, settwo]=useState("");
    const [three, setthree]=useState("");
   
   useEffect(()=>{
    fetch(`/api/seetimetablex/${empId}/${dday}`).then((result)=>{
        result.json().then((resp)=>{
        console.warn("result", resp)
        setUsers(resp)
        setnine(resp[0].nine)
        setten(resp[0].ten)
        seteleven(resp[0].eleven)
        settwelve(resp[0].twelve)
        setone(resp[0].one)
        settwo(resp[0].two)
        setthree(resp[0].three)
        })
     })
    },[])
  
const navigate=useNavigate();

   const handleSubmit=(e)=>{
    e.preventDefault();
    //alert(dday)
    axios.put(`/updatetable/${empId}/${dday}`, {nine,ten,eleven,twelve,one,two,three})
    .then(res=>{
      if(res.data.updated){
       alert("Updated Successfully")
      // toast.success("contact updated  successfully!");
       navigate('/seetimetable')
      }else{
        alert("Not updated")
      }
    })
   }





    return (
      <div className='container'>

  <div className="model">
        <div className="model-content" style={{marginTop:"50px"}}>
       
   
        <div style={{marginTop:"50px"}}>
        <h1 style={{textDecorationLine: 'underline', textAlign:'center'}}>Update Time Table</h1>
         <form style={{
            margin:"auto",
            padding:"15px",
            maxWidth:"400px",
            alignContent:"center"
            
         }} 
         onSubmit={handleSubmit}
         >
     


            <label htmlFor="name">09:00 AM-10:00 AM</label>
            <input
            type="text"
            id="name"
            name="name"
            placeholder="your data....."
            value={nine||""}
            onChange={(e)=>{setnine(e.target.value)}}
             />
        

        <table>
          
          <tr>


           <td>  <label htmlFor="name">10:00 AM-11:00 AM</label>
            <input
            type="text"
            id="name"
            name="name"
            placeholder="your data....."
            value={ten||""}
            onChange={(e)=>{setten(e.target.value)}}
             />
        </td>

        <td> <label htmlFor="name">11:00 AM-12:00 PM</label>
            <input
            type="text"
            id="name"
            name="name"
            placeholder="your data....."
            value={eleven||""}
            onChange={(e)=>{seteleven(e.target.value)}}
             />
        </td>
      </tr>
      <tr>
      <td>

         <label htmlFor="name">12:00PM-01:00PM</label>
            <input
            type="text"
            id="name"
            name="name"
            placeholder="your data....."
            value={twelve||""}
            onChange={(e)=>{settwelve(e.target.value)}}
             />
      </td>

      <td>
           <label htmlFor="name">01:00PM-02:00PM</label>
            <input
            type="text"
            id="name"
            name="name"
            placeholder="your data....."
            value={one||""}
            onChange={(e)=>{setone(e.target.value)}}
             />
    </td>

    </tr>
    <tr>
    <td>
           <label htmlFor="name">02:00PM-03:00PM</label>
            <input
            type="text"
            id="name"
            name="name"
            placeholder="your data....."
            value={two||""}
            onChange={(e)=>{settwo(e.target.value)}}
             />
      </td>

      <td>
          <label htmlFor="name">03:00PM-04:00PM</label>
            <input
            type="text"
            id="name"
            name="name"
            placeholder="your data....."
            value={three||""}
            onChange={(e)=>{setthree(e.target.value)}}
             />
      </td>


</tr></table>









         <button className='btn btn-success'>update</button>
          
          <Link to="/seetimetable">
          <input type="button" value="Go Back"/>
          </Link>






         </form>
        </div>




  </div>
  </div>

      </div>
    )
  }


export default UpdateU
