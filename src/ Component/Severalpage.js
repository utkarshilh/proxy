import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllLeaveRequest from './AllLeaveRequest';

import Navbar from './Navbar';
import RequestLeave from './RequestLeave';
import SetTimeTable from './SetTimeTable';

import AllRequestForHod from './AllRequestForHod';
import SeeTimeTable from './SeeTimeTable';
import SetArrangement from './SetArrangement';
import SetUser from './SetUser';


import Main from './SetArrangementRequest/Main'


import A from './A'
import B from './B'
import Home from './Home';
export default function Severalpage(props) {


    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const [userName, setUserName] = useState("");
    // const [userType, setUserType] = useState("");

    console.log("several page " + JSON.stringify(props))


    return (


        <Router>
            <Navbar updateUser={props} />

            <Routes>
                <Route exact path="/" element={<Home updateUser={props} />}></Route>
                <Route exact path="/requestleave" element={<RequestLeave updateUser={props} />} />
                <Route exact path="/allleaverequest" element={<AllLeaveRequest updateUser={props} />} />
                <Route exact path="/settimetable" element={<SetTimeTable updateUser={props} />} />
                <Route exact path="/allrequestforhod" element={<AllRequestForHod updateUser={props} />} />
                <Route exact path="/seetimetable" element={<SeeTimeTable updateUser={props} />} />
                <Route exact path="/setarrangement" element={<SetArrangement updateUser={props} />} />
                <Route exact path='/setUser' element={<SetUser updateUser={props} />}></Route>
                <Route exact path='/ showArrangementRequest' element={<Main updateUser={props} />}></Route>
                <Route exact path='/allArrangementRequest' element={<Main updateUser={props} />}></Route>

            </Routes>

        </Router>



    )
}
