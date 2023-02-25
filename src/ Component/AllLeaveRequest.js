import { React, useEffect, useState } from 'react'
import Axios from "axios";

export default function AllLeaveRequest(props) {
    const emp = useState(props.updateUser.currentUser);
    const [empId, setEmpState] = useState(emp[0]);
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

    {/* <p> RequestId : {val.requestId} || reason :{val.reason} || status : {val.status}</p> */ }

    const getStatusColor = (status) => {
        console.log(status)
        if (status === 'Requested') {
            return 'blue';
        } else if (status === 'Rejected') {
            return 'red';
        } else {
            return 'Green';
        }
    };

    return (
        <div>
            <h1>all Requested Leave</h1>
            {allRequestedLeaveList.map((val) => {
                return (
                    <div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#F8F8F8',
                            padding: '16px',
                            border: '1px solid #E6E6E6'
                        }}>
                            <div style={{
                                color: getStatusColor(val.status),
                                fontSize: '24px',
                                fontWeight: 'bold',
                                marginBottom: '16px'
                            }}>
                                {val.status.toUpperCase()}
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                fontSize: '18px'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginBottom: '8px'
                                }}>
                                    <span style={{ fontWeight: 'bold' }}>Leave Request:</span>
                                    <span style={{ marginLeft: '8px' }}>{val.fromDate} - {val.toDate}</span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}>
                                    <span style={{ fontWeight: 'bold' }}>Applied Date:</span>
                                    <span style={{ marginLeft: '8px' }}>{val.applicationDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

