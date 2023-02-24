import { React, useEffect, useState } from 'react'
import Axios from "axios";
export default function AllLeaveRequest(props) {



    const emp = useState(props.updateUser.currentUser);

    const [empId, setEmpState] = useState(emp[0]);


    console.log("this this " + empId)





    const [requestId, department, leaveType, applicationDate, fromDate, toDate, totalDays, reason, status] = useState("");
    const [allRequestedLeaveList, setAllRequestedLeaveList] = useState([]);






    useEffect(() => {
        Axios.get(`http://localhost:3001/api/allRequestedLeave/${empId}`).then(
            (response) => {

                console.log(response)
                setAllRequestedLeaveList(response.data);
            }
        );
    }, []);

    return (
        <div>
            <h1>all Requested Leave</h1>
            {allRequestedLeaveList.map((val) => {
                return (
                    <p> RequestId : {val.requestId} || reason :{val.reason} || status : {val.status}</p>

                )
            })}

        </div>
    )
}

