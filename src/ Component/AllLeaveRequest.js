import { React, useEffect, useState } from 'react'
import Axios from "axios";
export default function AllLeaveRequest() {
    const [empId, department, leaveType, applicationDate, fromDate, toDate, totalDays, reason, status] = useState("");
    const [allRequestedLeaveList, setAllRequestedLeaveList] = useState([]);



    useEffect(() => {
        Axios.get("http://localhost:3001/api/allRequestedLeave").then(
            (response) => {
                setAllRequestedLeaveList(response.data);
            }
        );
    }, []);







    // setAllRequestedLeave([
    //     ...reason,
    //     {
    //         empId: empId,
    //         department: department,
    //         leaveType: leaveType,
    //         applicationDate: applicationDate,
    //         fromDate: fromDate,
    //         toDate: toDate,
    //         totalDays: totalDays,
    //         reason: reason,
    //     }
    // ]);



    return (
        <div>
            <h1>all Requested Leave</h1>
            {allRequestedLeaveList.map((val) => {
                return (
                    <p> empID : {val.empId} || reason :{val.reason} || status : {val.status}</p>

                )
            })}

        </div>
    )
}

