import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import AllLeaveRequest from './AllLeaveRequest';

import Navbar from './Navbar';
import RequestLeave from './RequestLeave';
import SetTimeTable from './SetTimeTable';

//import AllRequestForHod from './AllRequestForHod';
import SeeTimeTable from './SeeTimeTable';
import SetArrangement from './SetArrangement';
import SetUser from './SetUser';


import Main from './SetArrangementRequest/Main'


//import A from './A'
//import B from './B'
//import Home from './Home';
import Dashboard from './Navbar/Dashboard';
//import Admin from '../Roll/Admin';
import Edit from './EditUser/Edit';
//import TimeTable from '../Roll/TimeTable';
import Request from '../Roll/Request';

//import Hod from '../Roll/Hod';
import Users from './EditUser/Users';
import Profile from '../Roll/Profile';
import Register from './EditUser/Register';
//import SetTable from './TimeTable/SetTimetablex';

import SeeTable from './TimeTable/SeeTable';
import SeeAllUsers from './EditUser/SeeAllUsers';
import LeaveRequestForm from './Request/LeaveRequestForm';
import RequestDetails from './Request/RequestDetails';
import RequestForHod from '../Roll/RequestForHod';
import EditUsers from './EditUser/EditUsers';
import UpdateUsers from './EditUser/UpdateUsers';
import View from './EditUser/View';
import SetTheTimeTable from './TimeTable/SetTheTimeTable';
import Login from './Login';
import Registration from './CreateUsers/Registration';
import MyProfile from './CreateUsers/MyProfile';
//import UpdateTimeTable from './TimeTable/UpdateTimeTable';
import UpdateU from './TimeTable/UpdateU';

import RequestForHodCard from '../Roll/RequestForHodCard';
import RollofFaculty from '../Roll/RollofFaculty';
import ControlHodAdmin from '../Roll/ControlHodAdmin';
import Card from '../Roll/Card';

export default function Severalpage(props) {

 // console.log(props.updateUser.currentRole);
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const [userName, setUserName] = useState("");
    // const [userType, setUserType] = useState("");

    console.log("several page " + JSON.stringify(props))


    return (


        <Router>
              <Dashboard updateUser={props} />
              {/*<Navbar updateUser={props} />  */}
            

            <Routes>
            <Route exact path="/x" element={<MyProfile updateUser={props} />}></Route>
            <Route exact path="/" element={<Card updateUser={props} />}></Route>
                {/*<Route exact path="/x" element={<B updateUser={props} />}></Route>*/}
                <Route exact path="/pqr" element={<ControlHodAdmin updateUser={props} />}></Route>
                <Route exact path="/hod/:requestId/:empId" element={<RequestForHodCard updateUser={props} />}></Route>
                <Route exact path="/profile" element={<MyProfile updateUser={props} />}></Route>
               
                <Route exact path="/view/:empId" element={<View updateUser={props} />}></Route>
                <Route exact path="/login" element={<Login updateUser={props} />}></Route>
                <Route exact path="/update/:empId" element={<UpdateUsers updateUser={props} />}></Route>
                <Route exact path="/allUsers" element={<SeeAllUsers updateUser={props} />}></Route>
                <Route exact path="/editusers" element={<EditUsers updateUser={props} />}></Route>
                <Route exact path="/roll" element={<RollofFaculty updateUser={props} />}></Route>
                 <Route exact path="/updatetable/:dday" element={<UpdateU updateUser={props} />}></Route>
                 <Route exact path="/settimetable" element={<SetTheTimeTable updateUser={props} />} />
                <Route exact path="/seetimetable" element={<SeeTable updateUser={props} />} /> 
                <Route exact path='/setUser' element={<Registration updateUser={props} />}></Route>







                {/*<Route exact path="/timetable" element={<TimeTable updateUser={props} />}></Route>*/}
              {/*  <Route exact path="/requestleave" element={<RequestLeave updateUser={props} />} />
               <Route exact path="/profile" element={<Profile updateUser={props} />}></Route>
                <Route exact path="/view/:id" element={<View updateUser={props} />}></Route>
               <Route exact path="/update/:id" element={<UpdateUsers updateUser={props} />}></Route>
              */}
              {/*  <Route exact path="/allleaverequest" element={<AllLeaveRequest updateUser={props} />} />*/}
                {/*<Route exact path="/settimetable" element={<SetTimeTable updateUser={props} />} />*/}
               {/* <Route exact path="/allrequestforhod" element={<AllRequestForHod updateUser={props} />} />*/}
               {/* <Route exact path="/seetimetable" element={<SeeTimeTable updateUser={props} />} />*/}
               {/* <Route exact path='/setUser' element={<SetUser updateUser={props} />}></Route>*/}
                {/*<Route exact path='/setUser' element={<Register updateUser={props} />}></Route>*/}
               





               {/*----Request Related Link-------*/}
               <Route exact path="/setarrangement" element={<SetArrangement updateUser={props} />} />
               <Route exact path='/ showArrangementRequest' element={<Main updateUser={props} />}></Route>
                <Route exact path='/allArrangementRequest' element={<Main updateUser={props} />}></Route>
                <Route exact path="/allrequestforhod" element={<RequestForHod updateUser={props} />} />
                <Route exact path="/allleaverequest" element={<RequestDetails updateUser={props} />} />
                <Route exact path="/requestleave" element={<LeaveRequestForm updateUser={props} />} />
                <Route exact path="/request" element={<Request updateUser={props} />}></Route>

            </Routes>

        </Router>



    )
}
