import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./edit.css";
//import{toast} from "react-toastify";
import axios from "axios";

 function Edit(){
    const [data, setData] = useState([]);
    const loadData =async()=>{
        const response=await axios.get("http://localhost:3005/api/get");
        setData(response.data);
    };

    useEffect(()=>{
        loadData();
   },[]);


 const deleteContact=(id)=>{
    if(window.confirm("Are you sure you want to delet the contact!")){
        axios.delete(`http://localhost:3001/api/remove/${id}`);
        toast.success("contact deleted successfully");
        setTimeout(() => loadData(), 500);
    }
 };
    return (
    <div style={{marginTop:"30px"}} className="container">
        
        <div>
        <h1>Faculty Details  
       {/* <Link to="/createuser">
           <button className="btn btn-contact" style={{alignItems:"center"}}>Add contact</button>
    </Link>*/} </h1>
       </div>
         <table className="styled-table">
         
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>SNo.</th>
                    <th style={{textAlign:"center"}}> Name.</th>
                    <th style={{textAlign:"center"}}>Role</th>
                    <th style={{textAlign:"center"}}> Email</th>
                    <th style={{textAlign:"center"}}>Department</th>
                    <th style={{textAlign:"center"}}>ContactNo</th>
                     <th style={{textAlign:"center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>{
                    return(
                        <tr key={item.id}>
                            <th scope="row">
                                {index+1}
                            </th>
                            
                            <td>{item.username}</td>
                            <td>{item.role}</td>
                            <td>{item.Email}</td>
                            <td>{item.Department}</td>
                            <td>{item.ContactNo}</td>
                            <td>
                                <Link to={`/update/${item.id}`}>
                                 <button className="btn btn-edit">Edit</button>
                                </Link>
                                <button className="btn btn-delete" onClick={()=>deleteContact(item.id)}>Delete</button>
                                <Link to={`/view/${item.id}`}>
                                 <button className="btn btn-view">View</button>
                                </Link>
                            </td>

                        </tr>
                    )

})}
            </tbody>

       
         </table>
      

      </div>
    )
  }


export default Edit
