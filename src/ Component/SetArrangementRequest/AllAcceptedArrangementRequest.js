import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from "react"


export default function AllAcceptedArrangementRequest(props) {
    
  
    const [AllAcceptedArrangementRequest, setAllAcceptedArrangementRequest] = useState([]);


    useEffect(() => {

        Axios.post("/api/AllAcceptedArrangementRequest", {
            empId: props.empId
           

        }).then(
            (response) => {

                console.log("kya raha response" + JSON.stringify(response.data))
                


                setAllAcceptedArrangementRequest(response.data)
                console.log("chalo this is not really very cool " + JSON.stringify(AllAcceptedArrangementRequest))
                console.log(typeof AllAcceptedArrangementRequest)
            }
        );
    }, []);
    return (
        <div style={{marginLeft:'200px'}}>
            <h1>Hello this is main component</h1>


            <table class="table center">


                <thead>
                    <tr>
                        <th scope="col">EmpId</th>
                        <th scope="col">Name</th>
                        <th scope="col">ForDate</th>
                        <th scope="col">Lecture</th>
                    </tr>
                </thead>

                {/* {Object.keys(AllAcceptedArrangementRequest).map((request, key) => (
                    <tbody>
                        <tr>
                            {console.log(request)};
                            <th scope="row">{AllAcceptedArrangementRequest[request]}</th>
                            <td>{AllAcceptedArrangementRequest.empId}</td>
                            <td>{AllAcceptedArrangementRequest.forDate}</td>
                            <td>{AllAcceptedArrangementRequest.lecture}</td>
                        </tr>
                    </tbody>
                ))
                } */}

                {AllAcceptedArrangementRequest.map((item) => (


                    <tbody>
                        <tr>

                            <th scope="row">{item.empId}</th>
                            <td>{item.name}</td>
                            <td>{new Date(item.forDate).toLocaleDateString('en-GB')}</td>
                            <td>{item.lecture}</td>


                        </tr>
                    </tbody>
                ))}
            </table>
        </div >
    )
}