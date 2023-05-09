import { React, useEffect, useState } from "react";
import Axios from "axios";
import "./requestDetails.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function RequestDetails(props) {
  const emp = useState(props.updateUser.currentUser);
  const [empId, setEmpState] = useState(emp[0]);
  const [
    requestId,
    department,
    leaveType,
    applicationDate,
    fromDate,
    toDate,
    totalDays,
    reason,
    status,
  ] = useState("");
  const [allRequestedLeaveList, setAllRequestedLeaveList] = useState([]);

  useEffect(() => {
    Axios.get(`/api/allRequestedLeave/${empId}`).then((response) => {
      console.log(response);
      setAllRequestedLeaveList(response.data);
    });
  }, []);

  {
    /* <p> RequestId : {val.requestId} || reason :{val.reason} || status : {val.status}</p> */
  }

  const getStatusColor = (status) => {
    console.log(status);
    if (status === "Requested") {
      return "blue";
    } else if (status === "Rejected") {
      return "red";
    }else {
      return "Green";
    }
  };

  return (

    <div className="container">
        


      <div style={{width:'',
         height:'', border:'',
          
         }}>


{allRequestedLeaveList.map((val) => {
        return (

        <>
          <div className="" style={{width:'629px',
         height:'auto', border:'15px solid white',
          
         }}>
        <div style={{width:'700px',
         height:'100%',
          
          backgroundColor:'whitesmoke'}}>

         <div className="card-headerView" style={{/* borderRadius:'0 0 0 50%'*/}}>
                <label className="label">
                  <h1 style={{marginTop:'10px' }}>
                    <strong>Request Details</strong>
                  </h1>
                </label>
         </div>

         <div style={{ width:'600px', height:'100%', borderTopLeftRadius:'40px', backgroundColor:''}}>

<table  style={{  width:'550px', height:'100%',  marginLeft:'25px', marginBottom:'20px'}}>

<tr> <td>

  <strong>Leave Request:&nbsp;&nbsp;&nbsp;&nbsp;</strong>

 <p style={{textAlign:'left'}}>
  {val.fromDate} - {val.toDate}
</p>
</td></tr>




<tr><td>

<strong>Applied Date:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
<span>{val.applicationDate}</span>

</td></tr>

<tr style={{border:'0px', height:'80px'}}> <td style={{border:'0px'}}>

  <strong>Status:&nbsp;&nbsp;&nbsp;&nbsp;</strong>

<span
  style={{
    color: getStatusColor(val.status),
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
    border: "0px",
    
    display:'inline'
  }}
>
  {val.status.toUpperCase()}
</span>
</td></tr>

</table>


</div>
</div> 
</div>
        </>

        )})}



      </div>

    
    </div>

    /*
    <div className="modelxy">
      {allRequestedLeaveList.map((val) => {
        return (
          <div className="slide-container">
          <div
            className="containerxy"
            style={{
            
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginLeft:'250px'
            }}
          >
            <div
              className="model-contentxy"
              style={{
                alignItems: "center",
                marginLeft: "100px",
              }}
            >
              <div className="card-headerView">
                <label className="label">
                  <h1 style={{marginTop:'10px' }}>
                    <strong>Request Details</strong>
                  </h1>
                </label>
              </div>


              <div>

                <table>

                <tr> <td>
                
                  <strong>Leave Request:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                
                 <p>
                  {val.fromDate} - {val.toDate}
                </p>
               </td></tr>



              
            <tr><td>

               <strong>Applied Date:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              <span>{val.applicationDate}</span>

             </td></tr>

           <tr> <td>
                
                  <strong>Status:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
               
                <span
                  style={{
                    color: getStatusColor(val.status),
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                    border: "0px",
                    
                    display:'inline'
                  }}
                >
                  {val.status.toUpperCase()}
                </span>
          </td></tr>
               
                </table>


              </div>
            </div>
          </div>
          </div>
        );
      })}
    </div>*/
  );
}
export default RequestDetails;
