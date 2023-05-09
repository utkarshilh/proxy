import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Registration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration(props) {
    const [empId, setempId] = useState("");
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState("");
  const [Email, setEmail] = useState("");
  const [Department, setDepartment] = useState("");
  const [Gender, setGender] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [file, setFile] = useState("");

  const register = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", file);
    formData.append("name", name);
    formData.append("role", role);
    formData.append("password", password);
    formData.append("Email", Email);
    formData.append("Deparment", Department);
    formData.append("Gender", Gender);
    formData.append("empId", empId);
    formData.append(" ContactNo", ContactNo);
    const config = {
      header: {
        "Content-Type": "multipart/form-data",
      },
    };
   
    const res = await Axios.post("/api/setUser", formData, config)
      .then(() => {
        alert("successfull insert");
      })
      .catch((error) => console.error(error));
  };

  {
    /* const navigate = useNavigate()

    const register = (e) => {
        e.preventDefault();

        Axios.post("http://localhost:3001/api/setUser", {
            name: name,
            username: usernameReg,
            role: roleReg,
            password: passwordReg

        }).then(() => {
            alert("successfull insert");

        })

    }*/
  }

  return (
    <div className="containerRegister">
      <form className="formRegister">
        <label className="label">
          <h1>
            <strong>Register</strong>
          </h1>
        </label>
        
        <div class="card-bodyRegister">
        <table>
          <tr>
            <td>
              {/*For Emp Id   */}
              <label>EmpId</label>
              <br />
              <input
                type="text"
                placeholder="Emp Id..."
                onChange={(e) => {
                  setempId(e.target.value);
                  console.log(empId);
                }}
              />
            </td>
            <td>
              {/*For UserName   */}
              <label>Username</label>
              <br />
              <input
                type="text"
                placeholder="Name..."
                onChange={(e) => {
                  setname(e.target.value);
                  console.log(name);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              {/* For Email */}
              <label>Email</label>
              <br />
              <input
                type="text"
                placeholder="Email..."
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(Email);
                }}
              />
            </td>
            <td>
              {/*For Password   */}
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Password..."
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log(password);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              {/*For Contact No  */}
              <label>ContactNo</label>
              <br />
              <input
                type="number"
                placeholder="ContactNo..."
                onChange={(e) => {
                  setContactNo(e.target.value);
                  console.log(ContactNo);
                }}
              />
            </td>
            <td>
              {/*For  Gender  */}
              <label>Gender</label>
              <br />

              <select
                name="Gender"
                id=""
                onChange={(e) => {
                  setGender(e.target.value);
                  console.log(Gender);
                }}
              >
                <option selected value="Select">
                  Select
                </option>
                <option value="Admin">Male</option>
                <option value="Faculty">Femal</option>
               
              </select>
            </td>
          </tr>
          <tr>
            <td>
              {/* For Depatment */}
              <label>Department</label>
              <br />
              <input
                type="text"
                placeholder="Department..."
                onChange={(e) => {
                  setDepartment(e.target.value);
                  console.log(Department);
                }}
              />
            </td>
            <td>
              {/*For  Role  */}
              <label>Role</label>
              <br />

              <select
                name="Role"
                id=""
                onChange={(e) => {
                  setrole(e.target.value);
                  console.log(role);
                }}
              >
                <option selected value="Select">
                  Select
                </option>
                <option value="Admin">Admin</option>
                <option value="Faculty">Faculty</option>
                <option value="Hod">Hod</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              {/*For Images  */}
              <label>Choose Image</label>
              <br />
              <input
                type="file"
                name="photo"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  //console.log(file)
                }}
              />
              <br />

              <br />
              <button onClick={register}>Register</button>
            </td>
          </tr>
         
        </table>
        </div>
      </form>
    </div>
  );
}
export default Registration;
