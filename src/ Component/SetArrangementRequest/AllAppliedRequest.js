import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios';
export default function AllAppliedRequest(props) {


    const [request, setRequest] = useState([])
    useEffect(() => {

        Axios.post("/api/getallappliedarrangementdetail", {
            empId: props.currentUser
        }).then(
            (response) => {
                console.log("this is really very cool" + JSON.stringify(response.data))

                setRequest(response.data)
                console.log("this is requestId " + requests[0].requestId)
            }
        );
    }, []);
    const getStatusColor = (status) => {
        console.log(status)
        if (status === 'pending') {
            return 'blue';
        } else if (status === 'rejected') {
            return 'red';
        } else {
            return 'Green';
        }
    };

    return (
        <div>
            <h1 className='text-center'>All Response Of Arragement Request </h1>

            {request.map((val) => {
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
                                    <span style={{ fontWeight: 'bold' }}>Date:</span>
                                    <span style={{ marginLeft: '4px' }}>{new Date(val.forDate).toLocaleDateString('en-GB')}</span>

                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}>
                                    <span style={{ fontWeight: 'bold' }}>Section:</span>
                                    <span style={{ marginLeft: '8px' }}>{val.section}</span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}>
                                    <span style={{ fontWeight: 'bold' }}>Lecture:</span>
                                    <span style={{ marginLeft: '8px' }}>{val.lecture}</span>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}>

                                    {
                                        (val.status == 'accepted') ?
                                            (<div>
                                                <span style={{ fontWeight: 'bold' }}>Accepted By</span>
                                                <span style={{ marginLeft: '8px' }}>{val.otherEmpId} : {"  "}{val.name}</span>
                                            </div>) : (null)
                                    }


                                </div>


                            </div>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}
