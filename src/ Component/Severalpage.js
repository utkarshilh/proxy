import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


 {/*----All imported Pages-------*/}
import Dashboard from './Navbar/Dashboard';


{/*  My Profile   */}
import MyProfile from './CreateUsers/MyProfile';


{/* Time Table Related Pages */}
import SeeTable from './TimeTable/SeeTable';
import SetTheTimeTable from './TimeTable/SetTheTimeTable';
import UpdateU from './TimeTable/UpdateU';


{/*  Request Related Pages  */}
import Request from '../Roll/Request';
import LeaveRequestForm from './Request/LeaveRequestForm';
import RequestDetails from './Request/RequestDetails';
import SetArrangement from './SetArrangement';
import Main from './SetArrangementRequest/Main'



{/* Admin Related Pages */}
import Registration from './CreateUsers/Registration';
import SeeAllUsers from './EditUser/SeeAllUsers';
import EditUsers from './EditUser/EditUsers';
import View from './EditUser/View';
import UpdateUsers from './EditUser/UpdateUsers';



{/*  HOD Related Pages  */}
import RequestForHod from '../Roll/RequestForHod';
import RequestForHodCard from '../Roll/RequestForHodCard';
import RollofFaculty from '../Roll/RollofFaculty';
import ControlHodAdmin from '../Roll/ControlHodAdmin';
import Hello from './Hello';


export default function Severalpage(props) {
    console.log("several page " + JSON.stringify(props))


    return (


        <Router>
              <Dashboard updateUser={props} />
            <Routes>

              {/*  My Profile   */}
                 <Route exact path="/x" element={<MyProfile updateUser={props} />}></Route>
                 <Route exact path="/profile" element={<MyProfile updateUser={props} />}></Route>


              {/* Time Table */}
                 <Route exact path="/seetimetable" element={<SeeTable updateUser={props} />} />
                 <Route exact path="/settimetable" element={<SetTheTimeTable updateUser={props} />} />
                 <Route exact path="/updatetable/:dday" element={<UpdateU updateUser={props} />}></Route>


              {/*  Request Related Pages  */}
                <Route exact path="/request" element={<Request updateUser={props} />}></Route>
                <Route exact path="/requestleave" element={<LeaveRequestForm updateUser={props} />} />
                <Route exact path="/allleaverequest" element={<RequestDetails updateUser={props} />} />
                <Route exact path="/setarrangement" element={<SetArrangement updateUser={props} />} />
                <Route exact path='/allArrangementRequest' element={<Main updateUser={props} />}></Route>
                <Route exact path='/ showArrangementRequest' element={<Main updateUser={props} />}></Route>


              {/* Admin Related Pages */}
                <Route exact path="/allUsers" element={<SeeAllUsers updateUser={props} />}></Route>
                <Route exact path="/editusers" element={<EditUsers updateUser={props} />}></Route>
                <Route exact path="/view/:empId" element={<View updateUser={props} />}></Route>
                <Route exact path="/update/:empId" element={<UpdateUsers updateUser={props} />}></Route>
                <Route exact path='/setUser' element={<Registration updateUser={props} />}></Route>


            {/*  HOD Related Pages  */}
                <Route exact path="/hod/:requestId/:empId" element={<RequestForHodCard updateUser={props} />}></Route>
                <Route exact path="/roll" element={<RollofFaculty updateUser={props} />}></Route>
                <Route exact path="/pqr" element={<ControlHodAdmin updateUser={props} />}></Route>       
                <Route exact path="/allrequestforhod" element={<RequestForHod updateUser={props} />} />
                <Route exact path="/" element={<Hello updateUser={props} />} />
                

            </Routes>

        </Router>



    )
}
