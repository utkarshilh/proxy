

import { useEffect } from 'react';
import Axios from 'axios';
import React, { useState } from 'react';
import RequestList from './RequestList';

import "./Main.css";
import AllAppliedRequest from './AllAppliedRequest';
export default function Main(props) {
    // const [requests, setRequests] = useState([
    //     {
    //         empID: 123,
    //         name: "John Doe",
    //         date: "2023-03-29",
    //         reason: "Sick leave",
    //         section: "4A",
    //         lecture: 5,
    //     }
    //     // add more requests here
    // ]);
    const [requests, setRequests] = useState([]);



    useEffect(() => {
        console.log("useEffect executed");
        Axios.post("/api/getfreeteacher", {
            empId: props.updateUser.currentUser
        }).then(
            (response) => {
                console.log("this is really very cool" + JSON.stringify(response))

                setRequests(response.data)
                console.log("this is requestId " + requests[0].requestId)
            }
        );
    }, []);

    function handleAccept() {
        // TODO: handle accept request with empID
        console.log("accepted was clicked")

        Axios.post("/api/allarrengementrequesthandleaccept",
            {
                empId: props.updateUser.currentUser,
                reqId: requests[0].requestId
            }).then(
                (response) => {
                    alert(response.data);
                    update();


                }
            )
    }
    function handleReject() {
        console.log("i was clicked")

        console.log(props.updateUser.currentUser)
        Axios.post("/api/allarrengementrequesthandlereject",
            {
                empId: props.updateUser.currentUser,
                reqId: requests[0].requestId
            }).then(
                (response) => {
                    alert(response.data);
                    update();

                }
            )
    }

    return (
        <div className='container'>
        <div className='Main'>

            <RequestList
                requests={requests}
                onAccept={handleAccept}
                onReject={handleReject}

            />
            <AllAppliedRequest currentUser={props.updateUser.currentUser} />
        </div>
        </div>

    );
}


