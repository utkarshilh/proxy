/* SetTheTimeTable */
import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./setTable.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SetTheTimeTable(props) {

  const [empId, setEmpId] = useState(props.updateUser.currentUser);

  const [day, setDay] = useState("");

  const [emp, setEmp] = useState("");

  const [nine, setNine] = useState("");

  const [ten, setTen] = useState("");

  const [eleven, setEleven] = useState("");

  const [twelve, setTwelve] = useState("");

  const [one, setOne] = useState("");

  const [two, setTwo] = useState("");

  const [three, setThree] = useState("");

  const submitTimeTable = () => {

    if (!day || !nine || !ten || !eleven || !twelve || !one || !two || !three) {
      alert("fields cannot be blank")
      return;


    }



    Axios.post("/api/setTimeTable", {
      // here new varaibles have created using old variable + adding e before the old variable
      empId: empId,
      day: day,
      nine,
      nine,
      ten: ten,
      eleven: eleven,
      twelve: twelve,
      one: one,
      two: two,
      three: three,
    }).then((res) => {

      if (res.data.code == "ER_DUP_ENTRY")
        alert("Time table for the same date is already set you can update in the edit option")
      else {
        alert("successful insert");
      }

    });
    // console.log(empId + " " + day + " " + " " + nine + " " + ten + " " + eleven + " " + twelve + " " + one + " " + two + " " + three)
  };

  return (
    <div className="containerTable">
      <form className="formTable">
        <label className="label" style={{
          backgroundColor: '',
          width: '1190px', height: '90px', marginTop: '20px'
        }} >
          <h1 style={{ textDecorationLine: 'underline' }}>
            <strong> Set Time Table...</strong>

          </h1>
        </label>

        <div class="card-body1">
          <form action="">
            <table>
              <tr style={{ border: "0px" }}>
                {/* Day section  */}
                <td style={{ border: "0px" }}>
                  <div className="form-group ">
                    <label htmlFor="day" id="label" style={{ marginLeft: '10px' }}>Day</label>
                    <br />
                    <select
                      name="day"
                      id=""
                      onChange={(e) => {
                        setDay(e.target.value);
                      }}
                    >
                      <option value="" selected >
                        Input Week Day{" "}
                      </option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                    </select>
                  </div>
                  <hr></hr>
                </td>

                {/* EmpId section : this is temprary section  */}
                <td style={{ border: "0px" }}>
                  <div className="form-group ">
                    <label htmlFor="nine" id="label" style={{ marginLeft: '10px' }}>9:00 AM - 10:00 AM</label>
                    <br />
                    <select
                      name="nine"
                      id=""
                      onChange={(e) => {
                        setNine(e.target.value);

                      }}
                    >
                      <option value="" selected>
                        Select
                      </option>
                      <option value="4A">4A</option>
                      <option value="4B">4B</option>
                      <option value="4B1">4B1</option>
                      <option value="4G">4G</option>
                      <option value="4H">4H</option>
                      <option value="Free">Free</option>
                    </select>

                  </div>
                  <hr></hr>
                </td>

              </tr>
              <tr style={{ border: "0px" }}>
                {/* this is first lecture detail 9:00 - 10:00 */}
                <td style={{ border: "0px" }}>
                  <div className="form-group ">
                    <label htmlFor="ten" id="label" style={{ marginLeft: '10px' }}>10:00 AM - 11:00 AM </label>
                    <br />
                    <select
                      name="ten"
                      id=""
                      onChange={(e) => {
                        setTen(e.target.value);

                      }}
                    >
                      <option value="" selected>
                        Select
                      </option>
                      <option value="4A">4A</option>
                      <option value="4B">4B</option>
                      <option value="4B1">4B1</option>
                      <option value="4G">4G</option>
                      <option value="4H">4H</option>
                      <option value="Free">Free</option>
                    </select>

                  </div>
                  <hr></hr>
                </td>

                {/* this is first lecture detail 10:00 - 11:00 */}
                <td style={{ border: "0px" }}>
                  <div className="form-group ">
                    <label htmlFor="eleven" id="label" style={{ marginLeft: '10px' }}>11:00 AM - 12:00 PM</label>

                    <br />
                    <select
                      name="eleven"
                      id=""
                      onChange={(e) => {
                        setEleven(e.target.value);

                      }}
                    >
                      <option value="" selected>
                        Select
                      </option>
                      <option value="4A">4A</option>
                      <option value="4B">4B</option>
                      <option value="4B1">4B1</option>
                      <option value="4G">4G</option>
                      <option value="4H">4H</option>
                      <option value="Free">Free</option>
                    </select>

                  </div>
                  <hr></hr>
                </td>
              </tr>
              <tr style={{ border: "0px" }}>
                {/* this is first lecture detail 11:00 - 12:00 */}
                <td style={{ border: "0px" }}>
                  <div className="form-group ">
                    <label htmlFor="twelve" id="label" style={{ marginLeft: '10px' }}>12:00 PM - 01:00 PM</label>
                    <br />
                    <select
                      name="twelve"
                      id=""
                      onChange={(e) => {
                        setTwelve(e.target.value);

                      }}
                    >
                      <option value="" selected>
                        Select
                      </option>
                      <option value="4A">4A</option>
                      <option value="4B">4B</option>
                      <option value="4B1">4B1</option>
                      <option value="4G">4G</option>
                      <option value="4H">4H</option>
                      <option value="Free">Free</option>
                    </select>
                  </div>
                  <hr></hr>
                </td>

                {/* this is first lecture detail 12:00 - 01:00 */}
                <td style={{ border: "0px" }}>
                  <div className="form-group ">
                    <label htmlFor="one" id="label" style={{ marginLeft: '10px' }}>01:00 PM - 02:00 PM</label>
                    <br />
                    <select
                      name="one"
                      id=""
                      onChange={(e) => {
                        setOne(e.target.value);

                      }}
                    >
                      <option value="" selected>
                        Select
                      </option>
                      <option value="4A">4A</option>
                      <option value="4B">4B</option>
                      <option value="4B1">4B1</option>
                      <option value="4G">4G</option>
                      <option value="4H">4H</option>
                      <option value="Free">Free</option>
                    </select>
                  </div>
                  <hr></hr>
                </td>
              </tr>
              <tr style={{ border: "0px" }}>
                {/* this is first lecture detail 01:00 - 02:00 */}
                <td style={{ border: "0px" }}>
                  <div className="form-group ">
                    <label htmlFor="two" id="label" style={{ marginLeft: '10px' }}>02:00 PM - 03 : 00 PM</label>
                    <br />
                    <select
                      name="two"
                      id=""
                      onChange={(e) => {
                        setTwo(e.target.value);

                      }}
                    >
                      <option value="" selected>
                        Select
                      </option>
                      <option value="4A">4A</option>
                      <option value="4B">4B</option>
                      <option value="4B1">4B1</option>
                      <option value="4G">4G</option>
                      <option value="4H">4H</option>
                      <option value="Free">Free</option>
                    </select>
                  </div>
                  <hr></hr>
                </td>

                {/* this is first lecture detail 02:00 - 03:00 */}
                <td style={{ border: "0px" }}>
                  <div className="form-group ">
                    <label htmlFor="three" id="label" style={{ marginLeft: '10px' }}>03:00 PM - 04:00 PM </label>
                    <br />
                    <select
                      name="three"
                      id=""
                      onChange={(e) => {
                        setThree(e.target.value);

                      }}
                    >
                      <option value="" selected>
                        Select
                      </option>
                      <option value="4A">4A</option>
                      <option value="4B">4B</option>
                      <option value="4B1">4B1</option>
                      <option value="4G">4G</option>
                      <option value="4H">4H</option>
                      <option value="Free">Free</option>
                    </select>
                  </div>
                  <hr></hr>
                </td>
              </tr>

            </table>
          </form>
          {/*  <button type="button" className="btn btn-success" onClick={submitTimeTable}>Success</button>*/}
        </div>
        <button type="button" className="button1" onClick={submitTimeTable}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default SetTheTimeTable;
