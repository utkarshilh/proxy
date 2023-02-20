import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllLeaveRequest from './AllLeaveRequest';

import Navbar from './Navbar';
import RequestLeave from './RequestLeave';
import SetTimeTable from './SetTimeTable';
import MainLogin from './MainLogin';
import AllRequestForHod from './AllRequestForHod';
import SeeTimeTable from './SeeTimeTable';
import SetArrangement from './SetArrangement';
import SetUser from './SetUser';


import A from './A'
import B from './B'
import Home from './Home';
export default function Severalpage() {



    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const [userName, setUserName] = useState("");
    // const [userType, setUserType] = useState("");

    return (


        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/requestleave" element={<RequestLeave />} />
                <Route exact path="/allleaverequest" element={<AllLeaveRequest />} />
                <Route exact path="/settimetable" element={<SetTimeTable />} />
                <Route exact path="/allrequestforhod" element={<AllRequestForHod />} />
                <Route exact path="/seetimetable" element={<SeeTimeTable />} />
                <Route exact path="/setarrangement" element={<SetArrangement />} />
                <Route exact path='/setUser' element={<SetUser />}></Route>

            </Routes>
        </Router>



    )
}
