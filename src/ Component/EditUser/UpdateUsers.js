import { useState, useEffect } from "react";
import {useNavigate, useParams, Link,  } from "react-router-dom";
import "./UpdateUsers.css";
import axios from "axios";
import{toast} from "react-toastify";






const initialState={
    name:"",
    Email:"",
    ContactNo:""

};


 function UpdateUsers( props) {
  console.log(props.updateUser.currentUser);
 // const empId = props.updateUser.currentUser;



   const[state, setState]=useState(initialState);
   const {name, Email, ContactNo}=state;
 
   //const history=useNavigate();
   const {empId} = useParams();
   //const {dday}=useParams 
   const navigate = useNavigate();


/*   
function a(props){
  alert(props.data)
}*/
   
   useEffect(()=>{
      axios
      .get(`/api/get/${empId}`)
      .then((resp)=> setState({...resp.data[0]}));
      
     // alert(empId)
     // alert(emp)

   }, [empId]);

   const handleSubmit=(e)=>{
      e.preventDefault();
      if(!name || !Email || !ContactNo){
        toast.error("Please provide value into each input field");
      }else{
        if(!empId){
          axios.post("/api/post", {
            name,
            Email,
            ContactNo  
          })
          .then(()=>{
            setState({name:"", Email:"", ContactNo:""})
          })
          .catch((err)=>toast.error(err.response.date));
          toast.success("contact Added successfully!");
        }else{
          axios.put(`/api/update/${empId}`, {
            name,
            Email,
            ContactNo  
          })
          .then(()=>{
            setState({name:"", Email:"", ContactNo:""})
            alert("successfull insert");
          })
          .catch((err)=>toast.error(err.response.date));
          toast.success("contact updated  successfully!");

        }
         // setTimeout(() =>{navigate(alert("updated successfully"))});
      }
   };






   

   const handleInputChange=(e)=>{
    const {name, value}=e.target;
    setState({...state, [name]:value});
   };

    return (
      <div style={{marginTop:"100px"}}>
         <form style={{
            margin:"auto",
            padding:"15px",
            maxWidth:"400px",
            alignContent:"center"
         }} 

           onSubmit={handleSubmit}
         >
            <label htmlFor="name">Name</label>
            <input
            type="text"
            id="name"
            name="name"
            placeholder="your Name....."
            value={name || ""}
            onChange={handleInputChange}
             />

            
            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            name="email"
            placeholder="your email....."
            value={Email || ""}
            onChange={handleInputChange}
             />


            <label htmlFor="contact">ContactNo</label>
            <input
            type="number"
            id="contact"
            name="contact"
            placeholder="your contact No....."
            value={ContactNo || ""}
            onChange={handleInputChange}
             />



          <input type="submit" value={empId ? "update":"save"}/>
          <Link to="/">
          <input type="button" value="Go Back"/>
          </Link>






         </form>
      </div>
    )
  }


export default UpdateUsers
