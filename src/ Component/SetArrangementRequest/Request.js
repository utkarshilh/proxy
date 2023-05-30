import React from "react";

function Request(props) {
  console.log(props);

  // const [emp,setEmp] = useState(props.request)

  const { empID, name, date, reason, section, lecture } = props.request;

  console.log("yahan ki leave request " + JSON.stringify(props.request.empId));

  return (
    <div className="container">
      <div className="request">
        <h4 style={{width:'100%',height:'40px', padding:'10px',backgroundColor:'skyblue',color:'white'}}><span style={{marginLeft:'100px'}}>{name}'s Request to take their class</span></h4>
        <ul>
          <li>
            <div>
              <strong>Emp ID:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              <span>{props.request.empId}</span>
            </div>
          </li>

          <li>
            <div>
              <strong>Date:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              <span>{new Date(date).toLocaleDateString("en-GB")}</span>
            </div>
          </li>

          {/*<div>
                    <span>Name:</span>
                    <span>{name}</span>
               </div>*/}

          <li>
            <div>
              <strong>Section:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              <span>{section} </span>
            </div>
          </li>
          <li>
            <div>
              <strong>Lecture:&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              <span>{lecture}</span>
            </div>
          </li>
        </ul>

        <div className="buttons">
          <button className="accept" onClick={() => props.onAccept(empID)}>
            Accept
          </button>
          <button className="reject" onClick={() => props.onReject(empID)}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

export default Request;
