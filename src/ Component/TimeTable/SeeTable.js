import { React, useEffect, useState } from "react";
import Axios from "axios";
import "./seeTable.css";
import "./UpdateU";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import UpdateTimeTable from "./UpdateTimeTable";
function SeeTable(props) {

    const [dday, nine, ten, eleven, twelve, one, two, three] = useState("");
    const [seeTimeTable, setSeeTimeTable] = useState([]);

    const empId = props.updateUser.currentUser;


    useEffect(() => {
        Axios.get(`/api/seetimetable/${empId}`).then(
            (response) => {

                setSeeTimeTable(response.data);
            }
        );
    }, []);



    const [data, setData] = useState([]);
    const loadData =async()=>{
        const response=await axios.get("/api/get");
        setData(response.data);
    };

   /* useEffect(()=>{
        loadData();
   },[]);*/





   const [users , setUsers]=useState([]);
   const [branch, setbranch]=useState("");
  // const [nine, setnine]=useState("");
  // const [ten, setten]=useState("");
  // const dday=useParams();
function getList(){
  const dday=props.data;
  const empId=props.id;
   fetch(`http://localhost:3001/api/seetimetablex/${empId}/${dday}`).then((result)=>{
       result.json().then((resp)=>{
       console.warn("result", resp)
       setUsers(resp)
       setbranch(resp[0].branch)
       setnine(resp[0].nine)
       setten(resp[0].ten)
       })
    })
}
let a=false;
   useEffect(()=>{
    loadData();
  //  getList();
     
    
   },[])
  function selectUser(){
   a=true;
  }

  return (
    <div className="containerSeeTable" id="containerSeeTable">
      <form className="formSeeTable" id="formSeeTable">
        <label className="label">
          <h1>
            <strong>My Time Table..</strong>
          </h1>
        </label>
        <label className="Setnewtimetablelabel" id="Setnewtimetablelabel">

        <Link to="/settimetable">
                  <button className="btn btn-edit" style={{backgroundColor:'green'}}>+Set New TimeTable</button>
        </Link>
        </label>
       
       
        <div class="card-body2">
       
        
            <table className="tablesee">
            <tr>
              <th scope="col" className="colm"  >Day</th>
              <th scope="col" className="colm" >09:00 AM - 10:00 AM</th>
              <th scope="col" className="colm"  >10:00 AM - 11:00 AM</th>
              <th scope="col" className="colm" >11:00 AM- 12:00 PM</th>
              <th scope="col" className="colm"  >12:00 PM- 01:00 PM</th>
              <th scope="col" className="colm"  >01:00 PM- 02:00 PM</th>
              <th scope="col" className="colm"  >02:00 PM- 03:00 PM</th>
              <th scope="col" className="colm"  >03:00 PM- 04:00 PM</th>
              <th scope="col" className="colm" >Action</th>
            </tr>

            {seeTimeTable.map((val) => {
              return (
                <tr>
                  <td scope="row" className="colm" ><b>{val.dday}</b></td>
                  <td className="colm" >{val.nine}</td>
                  <td className="colm">{val.ten}</td>
                  <td className="colm">{val.eleven}</td>
                  <td className="colm">{val.twelve}</td>
                  <td className="colm">{val.one}</td>
                  <td className="colm">{val.two}</td>
                  <td className="colm">{val.three}</td>
                  <td className="colm">
                           
                             <Link to={`/updatetable/${val.dday}`}>
                                 <button className="edit"> Edit </button>
                                </Link>
                            </td>
                </tr>
              );
            })}
          </table>
        </div>
      </form>
    </div>
  );
}
export default SeeTable;
