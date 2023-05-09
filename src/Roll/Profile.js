import React,  { useEffect,useState }  from 'react';
import Axios from 'axios';
import './profile.css';
import axios from 'axios';

function Profile(props) {
    console.log(props.updateUser.currentUser);
      const username=  props.updateUser.currentUser
  const [data , setData]=useState([]);

const getUserData=async()=>{
  const res=await axios.get(`http://localhost:3001/getdata/${username}`,{
    headers:{
      "Content-Type":"application/json"
    }
  });
  if(res.data.status==201){
    console.log("data get");
    setData(res.data.data)
   }else{
    console.log("error")
   }
}


const dltUser=async(id)=>{
  console.log(id)
  const res=await axios.delete(`http://localhost:3001/${id}`,{
    headers:{
      "Content-Type":"application/json"
    }
  });
  if(res.data.status==201){
     getUserData()
   }else{
    console.log("error")
   }
}

useEffect(()=>{
  getUserData()
},[])
 
    
    return (
        <div className="container1">
            
            <form className="form1" >
                <label className="label"><h1><strong>Profile</strong></h1></label>
                <hr/>
                
                <ul>
                    <li><label  style={{fontSize:"20px",color:"gray"}}><strong>Name:</strong></label></li>
                    <li><label  style={{fontSize:"20px",color:"gray"}}><strong>Role:</strong></label></li>
                    <li><label  style={{fontSize:"20px",color:"gray"}}><strong>Department:</strong></label></li>
                    <li><label  style={{fontSize:"20px",color:"gray"}}><strong>ContactNo:</strong></label></li>
                </ul>
                              
                {/*
                  data.length>0 ? data.map((el,i)=>{
                      return(
                          <>
    
                             <label><strong>UserName:</strong>{el.username}</label>
                               <label><strong>Role:</strong>{el.role}</label>
                             <label><strong>Department:</strong>{el.Department}</label>
                             <label><strong>ContactNo:</strong>{el.ContactNo}</label>
                               <label><strong>Email:</strong>{el.Email}</label>
                                 </>
        )
    }):""
*/}
</form>
     </div>
        

           
            
              
        
        
    );
}
export default Profile;
