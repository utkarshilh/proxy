
import { React, useEffect, useState } from 'react'
import Axios from "axios";

export default function SeeTimeTable(props) {
    // const [dday, nine, ten, eleven, twelve, one, two, three] = useState("");
    // const [seeTimeTable, setSeeTimeTable] = useState([]);

    // useEffect(() => {
    //     Axios.get("http://localhost:3001/api/seetimetable").then(
    //         (response) => {
    //             setSeeTimeTable(response.data);
    //             console.log(response + " ab bol ")
    //         }
    //     );
    // }, []);

    const [dday, nine, ten, eleven, twelve, one, two, three] = useState("");
    const [seeTimeTable, setSeeTimeTable] = useState([]);

    const empId = props.updateUser.currentUser;


    useEffect(() => {
        Axios.get(`http://localhost:3001/api/seetimetable/${empId}`).then(
            (response) => {

                setSeeTimeTable(response.data);
            }
        );
    }, []);

    return (
        <div className='container'>
            <h1>Time Table</h1>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">09:00 AM - 10:00 AM</th>
                        <th scope="col">10:00 AM - 11:00 AM</th>
                        <th scope="col">11:00 AM- 12:00 PM</th>
                        <th scope="col">12:00 PM- 01:00 PM</th>
                        <th scope="col">01:00 PM- 02:00 PM</th>
                        <th scope="col">02:00 PM- 03:00 PM</th>
                        <th scope="col">03:00 PM- 04:00 PM</th>
                    </tr>
                </thead>
                <tbody>


                    {seeTimeTable.map((val) => {
                        return (
                            <tr>
                                <th scope="row">{val.dday}</th>
                                <td>{val.nine}</td>
                                <td>{val.ten}</td>
                                <td>{val.eleven}</td>
                                <td>{val.twelve}</td>
                                <td>{val.one}</td>
                                <td>{val.two}</td>
                                <td>{val.three}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}
