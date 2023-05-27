import { React, useEffect, useState } from "react";
import "./seeusers.css";
import "./Popupview.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SeeAllUsers(props) {
  const [data, setData] = useState([]);
  const [record, setRecords] = useState(data);
  const loadData = async () => {
    const response = await axios.get("/api/get");
    setData(response.data);
    setRecords(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  /* To search the faculty */
  const Filter = (event) => {
    const filteredRecords = data.filter((f) =>
      f.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecords(filteredRecords);
  };

  return (
    <div className="containerSeeUsers" id="containerSeeUsers">
      <form className="formSeeUsers">
        <label className="label">
          <strong>All Users</strong>
        </label>
        <input
          type="text"
          className="form-control"
          id="form-control"
          onChange={Filter}
          placeholder="search here.."
        />
        <div id="card-bodySeeUsers">
          <table className="SeeTable" id="SeeTable">
            <tr>
              <th className="Seetablecol">SNo...</th>
              <th className="Seetablecol">EmpId</th>
              <th className="Seetablecol">Name</th>
              <th className="Seetablecol">Role</th>
              <th className="Seetablecol">Email</th>
              <th className="Seetablecol">Gender</th>
              <th className="Seetablecol">Department</th>
              <th className="Seetablecol">ContactNo</th>
              <th className="Seetablecol">Date Of ..Joining</th>
            </tr>

            {record.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td className="Seetablecol">{index + 1}</td>

                  <td className="Seetablecol">{item.empId}</td>
                  <td className="Seetablecol">{item.name}</td>
                  <td className="Seetablecol">{item.role}</td>
                  <td className="Seetablecol">{item.email}</td>
                  <td className="Seetablecol">{item.Gender}</td>
                  <td className="Seetablecol">{item.Department}</td>
                  <td className="Seetablecol">{item.ContactNo}</td>
                </tr>
              );
            })}
          </table>
        </div>
        :<div id=""></div>
      </form>
    </div>
  );
}
export default SeeAllUsers;
