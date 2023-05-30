import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./UpdateUsers.css";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  Email: "",
  ContactNo: "",
  Department: "",
  role: ""
};

function UpdateUsers(props) {
  console.log(props.updateUser.currentUser);

  const [state, setState] = useState(initialState);
  const { name, Email, ContactNo, Department, role } = state;

  const { empId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/get/${empId}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [empId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !Email || !ContactNo) {
      toast.error("Please provide a value for each input field");
    } else {
      if (!empId) {
        axios.post("/api/post", {
          name,
          Email,
          ContactNo,
          Department,
          role
        })
          .then(() => {
            setState(initialState);
            toast.success("Contact added successfully!");
          })
          .catch((err) => toast.error(err.response.data));
      } else {
        axios.put(`/api/update/${empId}`, {
          name,
          Email,
          ContactNo,
          Department,
          role
        })
          .then(() => {
            setState(initialState);
            window.alert("Contact updated successfully!"); // Show alert message
          })
          .catch((err) => toast.error(err.response.data));
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
          marginLeft:'400px'
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name"><strong>Name</strong></label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name..."
          value={name}
          onChange={handleInputChange}
        />

        <label htmlFor="email"><strong>Email</strong></label>
        <input
          type="email"
          id="email"
          name="Email"
          placeholder="Your Email..."
          value={Email}
          onChange={handleInputChange}
        />

        <label htmlFor="contact"><strong>ContactNo</strong></label>
        <input
          type="number"
          id="contact"
          name="ContactNo"
          placeholder="Your Contact No..."
          value={ContactNo}
          onChange={handleInputChange}
        />

        <label htmlFor="department"><strong>Department</strong></label>
        <input
          type="text"
          id="department"
          name="Department"
          placeholder="Your Department..."
          value={Department}
          onChange={handleInputChange}
        />

        <label htmlFor="role"><strong>Role</strong></label>
        <input
          type="text"
          id="role"
          name="role"
          placeholder="Your Role..."
          value={role}
          onChange={handleInputChange}
        />

        <input type="submit" value={empId ? "Update" : "Save"} />
        <Link to="/editusers">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
}p

export default UpdateUsers;
