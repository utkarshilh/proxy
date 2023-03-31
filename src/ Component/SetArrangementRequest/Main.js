
import React, { useState } from 'react';
import RequestList from './RequestList';
import "./Main.css";
export default function Main(props) {
    const [requests, setRequests] = useState([
        {
            empID: 123,
            name: "John Doe",
            date: "2023-03-29",
            reason: "Sick leave",
            section: "4A",
            lecture: 5,
        },
        {
            empID: 456,
            name: "Jane Smith",
            date: "2023-04-01",
            reason: "Vacation uhajhfa jahjashf ajshfjas jfahjfhdjfds jafhjahf asjfhasjfhaj fjashfjsahf ajf jashfjas jfahjfhkajhjakhfja ",
            section: "3B",
            lecture: 3,
        },
        {
            empID: 123,
            name: "John Doe",
            date: "2023-03-29",
            reason: "Sick leave",
            section: "4A",
            lecture: 5,
        },
        {
            empID: 456,
            name: "Jane Smith",
            date: "2023-04-01",
            reason: "Vacation ",
            section: "3B",
            lecture: 3,
        },
        {
            empID: 123,
            name: "John Doe",
            date: "2023-03-29",
            reason: "Sick leave",
            section: "4A",
            lecture: 5,
        },
        {
            empID: 456,
            name: "Jane Smith",
            date: "2023-04-01",
            reason: "Vacation",
            section: "3B",
            lecture: 3,
        }
        // add more requests here
    ]);

    function handleAccept(empID) {
        // TODO: handle accept request with empID
        console.log("accepted was clicked")
    }

    function handleReject(empID) {
        // TODO: handle reject request with empID

        console.log("i was clicked")
    }

    return (
        <div className='Main'>

            <RequestList
                requests={requests}
                onAccept={handleAccept}
                onReject={handleReject}

            />
        </div>

    );
}


