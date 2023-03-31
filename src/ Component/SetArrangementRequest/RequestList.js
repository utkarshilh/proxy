import React from "react";
import Request from "./Request";

function RequestList(props) {
    return (

        <div className="request-list">
            {props.requests.map((request) => (
                <Request
                    key={request.empID}
                    request={request}
                    onAccept={props.onAccept}
                    onReject={props.onReject}
                />
            ))}

        </div>
    );
}

export default RequestList;