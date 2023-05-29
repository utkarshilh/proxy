import React from "react";


function Request(props) {

    console.log(props)

    // const [emp,setEmp] = useState(props.request)


    const { empID, name, date, reason, section, lecture } = props.request;

    console.log("yahan ki leave request " + JSON.stringify(props.request.empId))

    return (
        <div className="container">
            <div className="request">
                <div>
                    <span>Emp ID:</span>
                    <span>{props.request.empId}</span>
                </div>
                <div>
                    <span>Name:</span>
                    <span>{name}</span>
                </div>
                <div>
                    <span>Date:</span>
                    <span>{new Date(date).toLocaleDateString('en-GB')}</span>
                </div>
                <div>
                    <span>Section:</span>
                    <span>{section} </span>
                </div>
                <div>
                    <span>Lecture:</span>
                    <span>{lecture}</span>
                </div>

                <div className="buttons">
                    <button className="accept" onClick={() => props.onAccept(empID)}>Accept</button>
                    <button className="reject" onClick={() => props.onReject(empID)}>Reject</button>
                </div>
            </div>
        </div>


    );
}

export default Request;
