import { React, useEffect, useState } from 'react'
import Axios from "axios";

export default function AllRequestForHod() {

    const [allRequestForHod, setAllRequestForHod] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/AllRequestForHod").then(
            (response) => {

                setAllRequestForHod(response.data);
                console.log(response.data);


            }
        );
    }, []);

    const requestAccepted = () => {
        console.log("the current request is approved")

        //     Axios.post("http://localhost:3001/api/finalVerdict", 'Accepted').then(() => {
        //   alert("successful Accepted");
        // });
    }
    const requestRejected = () => {
        // console.log("the current request")
        // Axios.post("http://localhost:3001/api/finalVerdict", 'Rejected').then(() => {
        //     alert("successful Rejected");
        //   });

    }
    return (
        <div>
            <h1>All Request</h1>
            {allRequestForHod.map((val) => {
                return (
                    <div>


                        {/* <p> empID : {val.empId} || reason :{val.reason}</p>
                        <button>Accept</button>
                        <button>Reject`1`</button> */}

                        <div className="card text-center">
                            <div className="card-header">
                                {val.empId}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{val.reason}</h5>
                                <p className="card-text">From {val.fromDate} To {val.toDate} </p>
                                <button type="button" className="btn btn-success" onClick={requestAccepted}>Accept</button>
                                <button type="button" className="btn btn-danger" onClick={requestRejected}>Reject</button>

                            </div>
                            <div className="card-footer text-muted">
                                applied on {val.applicationDate}
                            </div>
                            <br />
                        </div>



                    </div>

                )
            })}
        </div>
    )
}


