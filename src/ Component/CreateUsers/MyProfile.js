import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Registration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MyProfile(props) {
  console.log(props.updateUser.currentUser);
  const empId = props.updateUser.currentUser;
  const [data, setData] = useState([]);
//const empId=12345;
  const getUserData = async () => {
    const res = await axios.get(`/getdata/${empId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.data.status == 201) {
      console.log("data get");
      setData(res.data.data);
    } else {
      console.log("error");
    }
  };


/////////////////////
const getUserDatax = async () => {
  const res = await axios.get("/getdata", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.data.status == 201) {
    console.log("data get");
    setData(res.data.data);
  } else {
    console.log("error");
  }
};


const [show, setshow]=useState(true);


  useEffect(() => {
    getUserData();
   // getUserDatax();
  }, []);

  return (
    <div className="containerRegister">
      <form className="formRegister">
        {/*<label className="label">
          <h1>
            <strong>My Profile</strong>
          </h1>
  </label>*/}
        {/* {`/uploads/${el.userimg}`*/}
        <div style={{backgroundColor:'white',marginTop:'50px',height:'580px',width:'1250px' }}>
        {data.length > 0
          ? data.map((el, i) => {
              return (
                <>
        <label className="label" style={{
          marginTop:'0px', width:'1309px'}} >
            <table><tr>
                    {/* <td>  <img
                      src={`http://localhost:3001/uploads/${el.userimg}`}
                      style={{
                        width: "100px",
                        height:"100px",
                        borderRadius: "50%",
                       marginLeft:'0px',
                        marginTop: "0px",
                      color:'red'
                      }}
                      className=""
                    /></td>*/}

                       
        <td style={{border:'0px'}} > <h2  style={{textDecorationLine: 'underline'}}>
            <strong>Your Details</strong>
           
          </h2></td>
          </tr></table>
        </label>





       
                  <div class="card-bodyRegister">
                   
                    <table>
                     <tr  style={{border:'0px'}}>
                     

                      
                          <td  style={{textAlign:'left' }}> <label >
                            <h4 style={{display:'inline'}}><b>Role:</b>&nbsp;&nbsp;</h4>
                            <h5 style={{display:'inline',textDecorationLine: 'underline' ,fontStyle:'oblique'}}>{el.role}</h5></label>
                          </td>
                         


                    </tr>
                    <tr  style={{border:'0px'}}>

                            <td  style={{textAlign:'left'}}><label>
                              <h4 style={{display:'inline'}}><b>Email:&nbsp;&nbsp;</b></h4>
                              <h5 style={{display:'inline',textDecorationLine: 'underline' ,fontStyle:'oblique'}}>{el.Email}</h5></label>
                            </td>
                    </tr>
                             
                    <tr  style={{border:'0px'}}>
                            <td  style={{textAlign:'left'}}><label>
                              <h4 style={{display:'inline'}}><b>Department:&nbsp;&nbsp;</b></h4>
                              <h5 style={{display:'inline',textDecorationLine: 'underline' ,fontStyle:'oblique'}}>{el.Department}</h5></label>
                            </td>
                    </tr>
                    <tr  style={{border:'0px'}}>

                            <td  style={{textAlign:'left'}}><label>
                              <h4 style={{display:'inline'}}><b>EmpId:&nbsp;&nbsp;</b></h4>
                              <h5 style={{display:'inline',textDecorationLine: 'underline' ,fontStyle:'oblique'}}>{el.empId}</h5></label>
                            </td>
                    </tr>
                    <tr  style={{border:'0px'}}>

                            <td  style={{textAlign:'left'}}><label>
                              <h4 style={{display:'inline'}}><b>Username:&nbsp;&nbsp;</b></h4>
                              <h5 style={{display:'inline',textDecorationLine: 'underline' ,fontStyle:'oblique'}}>{el.name}</h5></label>
                            </td>
                    </tr>
                    <tr  style={{border:'0px'}}>

                            <td  style={{textAlign:'left'}}><label>
                              <h4 style={{display:'inline'}}><b>ContactNO:&nbsp;&nbsp;</b></h4>
                              <h5 style={{display:'inline',textDecorationLine: 'underline' ,fontStyle:'oblique'}}>{el.ContactNo}</h5></label>
                            </td>

                            
                          

                      
                    {/*  <td  style={{border:'0px'}}>
                         
                      <ul>
                            <li  style={{textAlign:'left'}}> <label ><b >EmpId:</b>
                            <p style={{textDecorationLine: 'underline', textAlign:'left',fontStyle:'oblique'}}>{el.empId}</p></label> </li>
                            <li  style={{textAlign:'left'}}> <label><b>Username:</b>
                             <p style={{textDecorationLine: 'underline',textAlign:'left',fontStyle:'oblique'}}>{el.name}</p></label></li>
                            <li  style={{textAlign:'left'}}> <label><b>ContactNo</b>
                            <p style={{textDecorationLine: 'underline',textAlign:'left',fontStyle:'oblique'}}>{el.ContactNo}</p></label></li>
                           
                          </ul>


                    </td>*/}
                     </tr>
                   
                     
                    </table>
                  </div>
                </>
              );
            })
          : ""}
          </div>
      </form>
      
    </div>
  );
}
export default MyProfile;
