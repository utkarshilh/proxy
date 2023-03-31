import React from "react";


function Request(props) {



    const { empID, name, date, reason, section, lecture } = props.request;

    return (
        <div className="container">
            <div className="request">
                <div>
                    <span>Emp ID:</span>
                    <span>{empID}</span>
                </div>
                <div>
                    <span>Name:</span>
                    <span>{name}</span>
                </div>
                <div>
                    <span>Date:</span>
                    <span>{date}</span>
                </div>
                <div>
                    <span>Section:</span>
                    <span>{section} - Lecture {lecture}</span>
                </div>
                <div>
                    <span>Reason:</span>
                    <span>{reason}</span>
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
