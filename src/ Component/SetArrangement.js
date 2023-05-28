import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './SetArrangement.css';

import axios from 'axios';

function SetArrangement(props) {


    const [date, setDate] = useState("");
    const [day, setDay] = useState("");
    const [lecture, setLecture] = useState("");
    const [section, setSection] = useState("");
    const [teachers, setTeachers] = useState([]);
    const [emp, setEmp] = useState(props.updateUser.currentUser)
    // const [teachers, setTeachers] = useState([
    //     { name: "John Doe", available: true },
    //     { name: "Jane Smith", available: false },
    //     { name: "Bob Johnson", available: true },
    //     { name: "Sarah Lee", available: true },
    //     { name: "Mike Chen", available: false },
    //     { name: "Emily Wang", available: true },
    //     { name: "utkarsh", available: true },
    //     { name: "utkarsh", available: true }
    // ]);

    useEffect(() => {

    }, [day]);

    const handleSubmit = (event) => {


        event.preventDefault();

        // Use the date and time to create a date object
        const [hours, minutes] = lecture.split(":");

        const selectedDate = new Date(`${date} ${hours}:${minutes}`);

        // Use the selected date to make an API request to get the available teachers
        // Set the list of available teachers using setTeachers
    };

    const handleAvailabeRequest = () => {

        if (day == "Sunday") {
            alert("you cannot apply the arrangement for sunday")

        }

        else if (date == "") {
            alert("date is not mentioned");

        }
        else if (day == "") {
            alert("the day cannot be null");

        }
        else if (lecture == "") {
            alert("the lecture cannot be null");
        }
        else if (section == "") {
            alert("the section cannot be null");
        }

        else if (section == "") {
            alert("section is not null");
        }

        else if (section == "Free") {
            alert("you can not request arrangement for the free lecture")
        }


        else {



            Axios.post('api/getArrangement', {
                day: day,
                lecture: lecture,
                section: section


            }).then(
                (response) => {

                    setTeachers(response.data)


                }
            );



        }
    }

    const handleRequest = (index) => {


        const currentDate = new Date(date);
        const onlyDate = currentDate.getDate();
        const month = currentDate.getMonth() + 1; // returns the month (0-11)
        const year = currentDate.getFullYear(); // returns the year (four digits)


        const reqId = `${onlyDate < 10 ? '0' + onlyDate : onlyDate}${month < 10 ? '0' + month : month}${year}${props.updateUser.currentUser}${section}${lecture}`;

        Axios.post("api/arrangementRequestIntoTable", {
            // here new varaibles have created using old variable + adding e before the old variable
            reqId: reqId,
            empId: props.updateUser.currentUser,
            otherEmpId: teachers[index].empId,
            date: date,
            lecture: lecture,
            section, section,
        }).then((res) => {

            if (res.data.code == "ER_DUP_ENTRY")
                alert("Already requested to the teacher for the same date and lecture ")

            else if (res.data == "successfully inserted ")
                alert("successful insert");
            else
                alert("Something went wrong Please try again")
        });

        const updatedTeachers = [...teachers];
        updatedTeachers[index].current_status = 'requested';


        setTeachers(updatedTeachers);


    }

    const updateDayState = (dayOfWeek) => {

        setDay(dayOfWeek)
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

                            const options = { weekday: 'long', timeZone: 'Asia/Kolkata' };
                            const dayOfWeek = dateObj.toLocaleDateString('en-US', options);
                            updateDayState(dayOfWeek);






                            const dday = day;



                            if (lecture != "") {

                                console.log("dday =" + dday)
                                Axios.post("api/getTheSection", {

                                    empId: props.updateUser.currentUser,
                                    lec: lecture,
                                    day: dday,

                                }).then((response) => {

                                    setSection(Object.values(response.data[0])[0])

                                });
                            }


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


                            Axios.post("api/getTheSection", {

                                empId: props.updateUser.currentUser,
                                lec: event.target.value,
                                day: day,

                            }).then((response) => {
                                // console.log("hello " + JSON.stringify(Object.values(response.data[0])[0]));
                                setSection(Object.values(response.data[0])[0])

                            });


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
                <button className="button" type="submit" onClick={handleAvailabeRequest} >Find Available Teachers</button>
            </form>

            {teachers.length > 0 ? (
                <div className="teacher-card-container">
                    {teachers.map((teacher, index) => (
                        <div>
                            <div className="teacher-card" key={teacher.id}>
                                <h3>{teacher.name}</h3>
                                {/* <p>Subject: {teacher.subject}</p> */}
                                <p>Email: {teacher.Email}</p>
                                <p>Phone: {teacher.ContactNo}</p>
                                <button className='request-button' onClick={() => handleRequest(index)}>{teacher.current_status}</button>

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
