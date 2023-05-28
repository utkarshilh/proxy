import React, { useState } from 'react';
import './Mainlogin.css';
import Axios from 'axios';

export default function MainLogin(props) {
  const [usernameLog, setUsernameLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});

  const login = () => {
    // Validation checks
    const validationErrors = {};
    if (usernameLog.trim() === '') {
      validationErrors.username = 'Username is required';
    }
    if (passwordLog.trim() === '') {
      validationErrors.password = 'Password is required';
    }
    if (role === '') {
      validationErrors.role = 'Role is required';
    }

    // If there are validation errors, set the errors state and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear the errors state if there are no validation errors
    setErrors({});

    // Rest of your code for login
    Axios.post('/api/login', {
      username: usernameLog,
      password: passwordLog,
      status: role,
    })
      .then((response) => {
        if (response.data.message) {
          alert(response.data.message);
        } else {
          const temp = {
            userName: response.data[0].empId,
            role: response.data[0].role,
          };

          props.updateUser({
            userName: temp.userName,
            role: temp.role,
          });

          props.changeLoginStatus();
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <div className="f">
        <div className="z">
          <div className="l">
            <img
              src="https://drive.google.com/uc?export=view&id=1tCfSnwEUvsTXY_vjWhP-8BgDtvT_5D3A"
              className="user"
              alt="User"
            />
            <h1>Login</h1>
            <label>Username</label>
            <br />
            <input
              type="text"
              placeholder="Username..."
              value={usernameLog}
              onChange={(e) => setUsernameLog(e.target.value)}
            />
            {errors.username && <span  style={{color:'red'}} className="error"><b>{errors.username}</b></span>}
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Password..."
              value={passwordLog}
              onChange={(e) => setPasswordLog(e.target.value)}
            />
            {errors.password && <span  style={{color:'red'}} className="error"><b>{errors.password}</b></span>}
            <br />
            <label>Role</label>
            <br />
            <select
              name="Role"
              id=""
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Admin">Admin</option>
              <option value="Faculty">Faculty</option>
              <option value="Hod">Hod</option>
            </select>
            {errors.role && <span  style={{color:'red'}} className="error"><b>{errors.role}</b></span>}
            <br />
            <br />
            <button style={{marginLeft:'50px'}} onClick={login}>Login</button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
