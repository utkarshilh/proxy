import React, { useState } from 'react';
import './SetArrangement.css';

function SetArrangement() {
    const [date, setDate] = useState("");
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");
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
        const [hours, minutes] = time.split(":");
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
                    onChange={(event) => setDate(event.target.value)}
                />

                <label className="label">Day</label>
                <input
                    className="input"
                    type="text"
                    value={day}
                    onChange={(event) => setDay(event.target.value)}
                />

                <label className="label">Time</label>
                <input
                    className="input"
                    type="time"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                />

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
