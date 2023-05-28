import React, { useState } from "react";
import Axios from "axios";
import "./Registration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration(props) {
  const navigate = useNavigate();
  const [empId, setempId] = useState("");
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [role, setrole] = useState("");
  const [Email, setEmail] = useState("");
  const [Department, setDepartment] = useState("");
  const [Gender, setGender] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [file, setFile] = useState("");
  const [dateOfJoining, setdateOfJoining] = useState("");
  const [errors, setErrors] = useState({});

  const register = async (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = {};

    if (!empId) {
      validationErrors.empId = "....Emp Id is required.";
    }

    if (!name) {
      validationErrors.name = "....Name is required.";
    }
    if (isNaN(ContactNo)) {
      validationErrors.ContactNo = "...Only numeric value is allowed in ContactNo";
    }

    if (!password) {
      validationErrors.password = "...Password is required.";
    } else if (password.length < 6) {
      validationErrors.password =
        "...Password should be at least 6 characters long.";
    }

    if (!Email) {
      validationErrors.Email = "..Email is required.";
    }

    if (!Department) {
      validationErrors.Department = "..Department is required.";
    }

    if (!Gender) {
      validationErrors.Gender = "...Gender is required.";
    }

    if (!ContactNo) {
      validationErrors.ContactNo = "...Contact No is required.";
    }

    if (!file) {
      validationErrors.file = "...Image is required.";
    }

    if (!dateOfJoining) {
      validationErrors.dateOfJoining = "...Date of Joining is required.";
    }

    // Update the errors state
    setErrors(validationErrors);

    // If there are no validation errors, perform form submission
    if (Object.keys(validationErrors).length === 0) {
      const formData = new FormData();
      formData.append("photo", file);
      formData.append("name", name);
      formData.append("role", role);
      formData.append("password", password);
      formData.append("Email", Email);
      formData.append("Department", Department);
      formData.append("Gender", Gender);
      formData.append("empId", empId);
      formData.append("ContactNo", ContactNo);
      formData.append("dateOfJoining", dateOfJoining);

      const config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };

      try {
        await Axios.post("/api/setUser", formData, config);
        alert("Successfully inserted.");
        document.getElementById("registerForm").reset();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="">
      <form id="registerForm" className="formRegister">
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
                  id="registerinput"
                  type="text"
                  placeholder="Emp Id..."
                  value={empId}
                  onChange={(e) => setempId(e.target.value)}
                />
                {errors.empId && (
                  <span  style={{color:'red'}} className="error">{errors.empId}</span>
                )}
              </td>
              <td>
                {/*For UserName   */}
                <label>Username</label>
                <br />
                <input
                  id="registerinput"
                  type="text"
                  placeholder="Name..."
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
                {errors.name && (
                  <span  style={{color:'red'}} className="error">{errors.name}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>
                {/* For Email */}
                <label>Email</label>
                <br />
                <input
                  id="registerinput"
                  type="email"
                  placeholder="Email..."
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.Email && (
                  <span style={{color:'red'}} className="error">{errors.Email}</span>
                )}
              </td>

              <td>
                <label>Password</label>
                <input
                  id="registerinput"
                  type="password"
                  placeholder="password.."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <span  style={{color:'red'}} className="error">{errors.password}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>
                {/*For Contact No  */}
                <label>ContactNo</label>
                <br />
                <input
                  type="number"
                  id="registerinput"
                  placeholder="ContactNo..."
                  value={ContactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                />
                {errors.ContactNo && (
                  <span  style={{color:'red'}} className="error">{errors.ContactNo}</span>
                )}
              </td>
              <td>
                {/*For  Gender  */}
                <label>Gender</label>
                <br />

                <select
                  name="Gender"
                  id=""
                  value={Gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.Gender && (
                  <span  style={{color:'red'}} className="error">{errors.Gender}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>
                {/* For Department */}
                <label>Department</label>
                <br />
                <select
                  name=""
                  id=""
                  value={Department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="CSE">CS</option>
                  <option value="IT">IT</option>
                  <option value="EE">EE</option>
                  <option value="EC">EC</option>
                  <option value="ME">ME</option>
                  <option value="CE">ME</option>
                </select>
                {errors.Department && (
                  <span  style={{color:'red'}} className="error">{errors.Department}</span>
                )}
              </td>
              <td>
                {/*For  Role  */}
                <label>Role</label>
                <br />

                <select
                  name="Role"
                  id=""
                  value={role}
                  onChange={(e) => setrole(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Admin">Admin</option>
                  <option value="Faculty">Faculty</option>
                  <option value="Hod">Hod</option>
                </select>
                {errors.role && (
                  <span  style={{color:'red'}} className="error">{errors.role}</span>
                )}
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
                  onChange={(e) => setFile(e.target.files[0])}
                />
                {errors.file && (
                  <span  style={{color:'red'}} className="error">{errors.file}</span>
                )}
                <br></br>
              </td>
              <td>
                {/*For UserName   */}
                <label>Date of Joining</label>
                <br />
                <input
                  id="registerinput"
                  type="date"
                  name="fromDate"
                  placeholder="DOJ..."
                  value={dateOfJoining}
                  onChange={(e) => setdateOfJoining(e.target.value)}
                />
                {errors.dateOfJoining && (
                  <span  style={{color:'red'}} className="error">{errors.dateOfJoining}</span>
                )}
              </td>
            </tr>
          </table>
        </div>
        <button id="Registerbtm" onClick={register}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
