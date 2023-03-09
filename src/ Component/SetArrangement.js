import React, { useState } from 'react';
import Axios from 'axios';
import './SetArrangement.css';

function SetArrangement(props) {
    console.log(props.updateUser.currentUser);

    const [date, setDate] = useState("");
    const [day, setDay] = useState("");
    const [lecture, setLecture] = useState("");
    const [section, setSection] = useState("");

    const [teachers, setTeachers] = useState([
        { name: "John Doe", available: true },
        { name: "Jane Smith", available: false },
        { name: "Bob Johnson", available: true },
        { name: "Sarah Lee", available: true },
        { name: "Mike Chen", available: false },
        { name: "Emily Wang", available: true },
        { name: "utkarsh", available: true },
        { name: "utkarsh", available: true }
    ]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Use the date and time to create a date object
        const [hours, minutes] = lecture.split(":");

        const selectedDate = new Date(`${date} ${hours}:${minutes}`);

        // Use the selected date to make an API request to get the available teachers
        // Set the list of available teachers using setTeachers
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label className="label">Date</label>
                <input
                    className="input"
                    type="date"
                    value={date}
                    onChange={
                        (event) => {

                            setDate(event.target.value)
                            const dateObj = new Date(event.target.value);
                            console.log(dateObj)
                            const options = { weekday: 'long', timeZone: 'Asia/Kolkata' };
                            const dayOfWeek = dateObj.toLocaleDateString('en-US', options);
                            setDay(dayOfWeek)
                            console.log(day)


                        }

                    }
                />

                <label className="label">Day</label>
                <input
                    className="input"
                    type="text"
                    // value={day}
                    value={day}
                    readOnly
                // onChange={(event) => setDay(event.target.value)}
                />

                <label className="label">Lecture</label>
                <select name="lecture" id=""
                    onChange={
                        (event) => {
                            setLecture(event.target.value);


                            Axios.post("http://localhost:3001/api/getTheSection", {

                                empId: props.updateUser.currentUser,
                                lec: event.target.value,
                                day: day,

                            }).then((response) => {
                                // console.log("hello " + JSON.stringify(Object.values(response.data[0])[0]));
                                setSection(Object.values(response.data[0])[0])

                            });

                            console.log("happy birthday to you " + event.target.value);
                        }
                    }
                >
                    <option value="" selected>Select</option>
                    <option value="nine">09:00 AM - 10:00 AM</option>
                    <option value="ten">10:00 AM - 11:00 AM</option>
                    <option value="eleven">11:00 AM - 12:00 PM</option>
                    <option value="twelve">12:00 PM - 01:00 PM</option>
                    <option value="one">01:00 PM - 02:00 PM</option>
                    <option value="two">02:00 PM - 03:00 PM</option>
                    <option value="three">03:00 PM - 04:00 PM </option>

                </select>
                <br />


                <label className="label">Section</label>
                {/* <input
                    className="input"
                    type="time"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                /> */}
                <input
                    className="Section"
                    type="text"
                    // value={day}
                    value={section}
                    readOnly
                // onChange={(event) => setDay(event.target.value)}
                />
                <br />
                <button className="button" type="submit">Find Available Teachers</button>
            </form>

            {teachers.length > 0 ? (
                <div className="teacher-card-container">
                    {teachers.map((teacher) => (
                        <div>
                            <div className="teacher-card" key={teacher.id}>
                                <h3>{teacher.name}</h3>
                                <p>Subject: {teacher.subject}</p>
                                <p>Email: {teacher.email}</p>
                                <p>Phone: {teacher.phone}</p>
                                <button className='request-button' onClick={() => handleRequest(teacher.name)}>Request</button>

                            </div>
                            <br />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No available teachers.</p>
            )}
        </div>
    );
}
export default SetArrangement;
