import { React, useEffect, useState } from 'react'
import Axios from "axios";

export default function SetTimeTable(props) {
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

        Axios.post("http://localhost:3001/api/setTimeTable", {



            // here new varaibles have created using old variable + adding e before the old variable
            empId: empId,
            day: day,
            nine, nine,
            ten: ten,
            eleven: eleven,
            twelve: twelve,
            one: one,
            two: two,
            three: three



        }).then(() => {
            alert("successful insert");
        });
        // console.log(empId + " " + day + " " + " " + nine + " " + ten + " " + eleven + " " + twelve + " " + one + " " + two + " " + three)
    }

    return (
        <div>

            <div class="card text-center bg-dark text-white">
                <h1>Set Time Table</h1>
                <div class="card-body">
                    <form action="">

                        {/* Day section  */}
                        <div className="form-group ">
                            <label htmlFor="day">Day</label>
                            <br />
                            <select
                                name="day"
                                id=""
                                onChange={(e) => {
                                    setDay(e.target.value);
                                    console.log(e.target.value);
                                }}
                            >
                                <option value="" selected>Input Week Day </option>
                                <option value="Monday" >Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thrusday">Thrusday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>

                            </select>
                        </div>

                        {/* EmpId section : this is temprary section  */}
                        <div className="form-group ">
                            <label htmlFor="InputEmpId">Employee Id</label>
                            <input
                                type="number"
                                name="empId"
                                className="form-control"
                                id="InputApplicationDate"
                                aria-describedby="emailHelp"
                                placeholder="input emp id"
                                onChange={(e) => {
                                    setEmpId(e.target.value);
                                    console.log(e.target.value);
                                }}
                            />
                        </div>

                        {/* this is first lecture detail 9:00 - 10:00 */}
                        <div className="form-group ">
                            <label htmlFor="nine">9:00 AM - 10:00 AM</label>
                            <br />
                            <select
                                name="nine"
                                id=""
                                onChange={(e) => {
                                    setNine(e.target.value);
                                    console.log(e.target.value);
                                }}
                            >
                                <option value="" selected>Select</option>
                                <option value="4A" >4A</option>
                                <option value="4B">4B</option>
                                <option value="4B1">4B1</option>
                                <option value="4G">4G</option>
                                <option value="4H">4H</option>
                                <option value="Free">Free</option>

                            </select>
                        </div>

                        {/* this is first lecture detail 10:00 - 11:00 */}
                        <div className="form-group ">
                            <label htmlFor="ten">10:00 AM - 11:00 AM </label>
                            <br />
                            <select
                                name="ten"
                                id=""
                                onChange={(e) => {
                                    setTen(e.target.value);
                                    console.log(e.target.value);
                                }}
                            >
                                <option value="" selected>Select</option>
                                <option value="4A" >4A</option>
                                <option value="4B">4B</option>
                                <option value="4B1">4B1</option>
                                <option value="4G">4G</option>
                                <option value="4H">4H</option>
                                <option value="Free">Free</option>

                            </select>
                        </div>

                        {/* this is first lecture detail 11:00 - 12:00 */}
                        <div className="form-group ">
                            <label htmlFor="eleven">11:00 AM - 12:00 PM</label>
                            <br />
                            <select
                                name="eleven"
                                id=""
                                onChange={(e) => {
                                    setEleven(e.target.value);
                                    console.log(e.target.value);
                                }}
                            >
                                <option value="" selected>Select</option>
                                <option value="4A" >4A</option>
                                <option value="4B">4B</option>
                                <option value="4B1">4B1</option>
                                <option value="4G">4G</option>
                                <option value="4H">4H</option>
                                <option value="Free">Free</option>

                            </select>
                        </div>

                        {/* this is first lecture detail 12:00 - 01:00 */}
                        <div className="form-group ">
                            <label htmlFor="twelve">12:00 PM - 01:00 PM</label>
                            <br />
                            <select
                                name="twelve"
                                id=""
                                onChange={(e) => {
                                    setTwelve(e.target.value);
                                    console.log(e.target.value);
                                }}
                            >
                                <option value="" selected>Select</option>
                                <option value="4A" >4A</option>
                                <option value="4B">4B</option>
                                <option value="4B1">4B1</option>
                                <option value="4G">4G</option>
                                <option value="4H">4H</option>
                                <option value="Free">Free</option>

                            </select>
                        </div>

                        {/* this is first lecture detail 01:00 - 02:00 */}
                        <div className="form-group ">
                            <label htmlFor="one">01:00 PM - 02:00 PM</label>
                            <br />
                            <select
                                name="one"
                                id=""
                                onChange={(e) => {
                                    setOne(e.target.value);
                                    console.log(e.target.value);
                                }}
                            >
                                <option value="" selected>Select</option>
                                <option value="4A" >4A</option>
                                <option value="4B">4B</option>
                                <option value="4B1">4B1</option>
                                <option value="4G">4G</option>
                                <option value="4H">4H</option>
                                <option value="Free">Free</option>

                            </select>
                        </div>

                        {/* this is first lecture detail 02:00 - 03:00 */}
                        <div className="form-group ">
                            <label htmlFor="two">02:00 PM - 03 : 00 PM</label>
                            <br />
                            <select
                                name="two"
                                id=""
                                onChange={(e) => {
                                    setTwo(e.target.value);
                                    console.log(e.target.value);
                                }}
                            >
                                <option value="" selected>Select</option>
                                <option value="4A" >4A</option>
                                <option value="4B">4B</option>
                                <option value="4B1">4B1</option>
                                <option value="4G">4G</option>
                                <option value="4H">4H</option>
                                <option value="Free">Free</option>

                            </select>
                        </div>

                        {/* this is first lecture detail 03:00 - 04:00 */}
                        <div className="form-group ">
                            <label htmlFor="three">03:00 PM - 04:00 PM </label>
                            <br />
                            <select
                                name="three"
                                id=""
                                onChange={(e) => {
                                    setThree(e.target.value);
                                    console.log(e.target.value);
                                }}
                            >
                                <option value="" selected>Select</option>
                                <option value="4A" >4A</option>
                                <option value="4B">4B</option>
                                <option value="4B1">4B1</option>
                                <option value="4G">4G</option>
                                <option value="4H">4H</option>
                                <option value="Free">Free</option>

                            </select>
                        </div>

                    </form>
                    <button type="button" className="btn btn-success" onClick={submitTimeTable}>Success</button>
                </div>
            </div>



        </div >
    )
}
