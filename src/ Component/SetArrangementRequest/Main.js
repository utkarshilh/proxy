import { useEffect } from 'react';
import Axios from 'axios';
import React, { useState } from 'react';
import RequestList from './RequestList';

import "./Main.css";
import AllAppliedRequest from './AllAppliedRequest';
import AllAcceptedArrangementRequest from "./AllAcceptedArrangementRequest"

export default function Main(props) {

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    console.log("useEffect executed");
    Axios.post("/api/getfreeteacher", {
      empId: props.updateUser.currentUser
    }).then((response) => {
      console.log("this is really very cool" + JSON.stringify(response))
      setRequests(response.data)
      console.log("this is requestId " + requests[0].requestId)
    });
  }, []);

  function handleAccept() {
    console.log("accepted was clicked")
    Axios.post("/api/allarrengementrequesthandleaccept", {
      empId: props.updateUser.currentUser,
      reqId: requests[0].requestId
    }).then((response) => {
      alert(response.data + "Im here");
      update();
    });
  }

  function handleReject() {
    console.log("i was clicked")
    console.log(props.updateUser.currentUser)
    Axios.post("/api/allarrengementrequesthandlereject", {
      empId: props.updateUser.currentUser,
      reqId: requests[0].requestId
    }).then((response) => {
      alert(response.data);
      update();
    });
  }

  function update() {
    Axios.post("/api/getfreeteacher", {
      empId: props.updateUser.currentUser
    }).then((response) => {
      setRequests(response.data);
    });
  }

  return (
    <div style={{ marginTop: '70px' }}>
      <div className='Main'>
        <RequestList
          requests={requests}
          onAccept={handleAccept}
          onReject={handleReject}
        />


    <AllAppliedRequest currentUser={props.updateUser.currentUser} />


<AllAcceptedArrangementRequest empId={props.updateUser.currentUser}/>
      </div>
    </div>
  );
}
