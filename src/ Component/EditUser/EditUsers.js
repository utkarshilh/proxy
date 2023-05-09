import { React, useEffect, useState } from "react";
import Axios from "axios";
import {Link} from "react-router-dom";
import{toast} from "react-toastify";
import "./editUsers.css";
import axios from "axios";
import {  useNavigate} from "react-router-dom";
function EditUsers(props) {
  
  
    const [data, setData] = useState([]);
    const [record, setRecords] = useState(data);
    const loadData =async()=>{
        const response=await axios.get("/api/get");
        setData(response.data);
        setRecords(response.data)
    };

    useEffect(()=>{
        loadData();
   },[]);

   const navigate = useNavigate();
 const deleteContact=(empId)=>{
    if(window.confirm("Are you sure you want to delet the contact!")){
        axios.delete(`/api/remove/${empId}`);
        loadData();
       // toast.success("contact deleted successfully");
        //setTimeout(() => loadData(), 500);
      // navigate("./");
    }
  
 };
 

 const Filter = (event) => {
  const filteredRecords = data.filter((f) =>
    f.name.toLowerCase().includes(event.target.value.toLowerCase())
  );
  setRecords(filteredRecords);
};

  return (
    <div className="containerEditUsers">
      <form className="formEditUsers">
        <label className="label">
          <h1>
            <strong>Edit Users..</strong>
          </h1>
        </label>
        <input
          type="text"
          style={{ width: "1250px" }}
          className="form-control"
          onChange={Filter}
          placeholder="search here"
        />
       
        <div class="card-bodyEditUsers"> 
                
        
                
          <table className="EditTable">
            
          
            <tr>
                    <th style={{textAlign:"center", height:'60px'}}>SNo</th>
                    <th style={{textAlign:"center"}}> empId</th>
                    <th style={{textAlign:"center", height:'60px'}}> Name</th>
                   
                   {/*   //const {empId} = useParams();

                    <th style={{textAlign:"center"}}> Email</th>
                    <th style={{textAlign:"center"}}>Department</th>
                    <th style={{textAlign:"center"}}>ContactNo</th>*/}
                    <th style={{textAlign:"center", height:'60px'}}>Action</th>
            </tr>
          
           {record.map((item,index)=>{
                    return(
                        <tr key={item.empId}>
                            <td scope="row" style={{textAlign:'center'}}>
                                {index+1}
                            </td>
                            <td>{item.empId}</td>
                            <td>{item.name}</td>

                           {/* <td>{item.role}</td>
                            <td>{item.Email}</td>
                            <td>{item.Department}</td>
                    <td>{item.ContactNo}</td>*/}
                            <td>
                            <Link to={`/update/${item.empId}`}>
                                 <button className="btn btn-edit">Edit</button>
                                </Link>
                                <button className="btn btn-delete" onClick={()=>deleteContact(item.empId)}>Delete</button>
                                <Link to={`/view/${item.empId}`}>
                                 <button className="btn btn-view">View</button>
                                </Link>
                            </td>

                        </tr>
                    )

})}

           
                
             
        
          </table>
         
         
         </div>
        
        
      </form>
    </div>
  );
}
export default EditUsers;
