
import { React, useEffect, useState } from 'react'
import axios from "axios";

export default function allUsers(props) {
    const [data, setData] = useState([]);
    const loadData =async()=>{
        const response=await axios.get("http://localhost:3005/api/get");
        setData(response.data);
    };

    useEffect(()=>{
        loadData();
   },[]);

    return (
        <div className='container' >
            <h1>Time Table</h1>
            <table class="table">
            <thead class="thead-dark">
                    <tr>
                    <th >SNo.</th>
                    <th >EmpId</th> 
                    <th >Name</th>
                    <th >Role</th>
                    <th >Email</th>
                    <th >Gender</th>
                    <th >Department</th>
                    <th >ContactNo</th>
                    <th >Date Of Joining</th>
                    </tr>
                </thead>
                <tbody >
                {data.map((item,index)=>{
                    return(
                        <tr key={item.id}>
                            <td >
                                {index+1}
                            </td>
                            
                            
                            <td >{item.empId}</td>
                            <td>{item.name}</td>
                            <td >{item.role}</td>
                            <td >{item.email}</td>
                            <td >{item.Gender}</td>
                            <td >{item.Department}</td>
                            <td >{item.ContactNo}</td>
                            
                            
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}
