import React,  { useEffect,useState }  from 'react';
import Axios from 'axios';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register(props) {
    const [name, setName] = useState("")
    const [usernameReg, setUsernameReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const [roleReg, setRoleReg] = useState("")

    const navigate = useNavigate()

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

    }
  
    return (
        <div className="container">
            
            <form className="form" >
                <label className="label"><h1><strong>Register..</strong></h1></label>
                <hr/>

              
                   

                    <label >Name</label>
                    <br />
                    <input type="text" placeholder='Name...'
                        onChange={(e) => {
                            setName(e.target.value)
                            console.log(name)


                        }} />
                    <br />

                    <label >Username</label>
                    <br />
                    <input type="text" placeholder='Username...'
                        onChange={(e) => {
                            setUsernameReg(e.target.value);
                            console.log(usernameReg)


                        }} />
                    <br />
                    <label>Password</label>
                    <br />
                    <input type="password" placeholder='Password...'
                        onChange={(e) => {
                            setPasswordReg(e.target.value);
                            console.log(passwordReg);

                        }}
                    />
                    <br />

                    <label>Role</label>
                    <br />

                    <select name="Role" id=""
                        onChange={(e) => {
                            setRoleReg(e.target.value);
                            console.log(roleReg)
                        }}
                    >
                        <option selected value="Select">Select</option>
                        <option value="Admin">Admin</option>
                        <option value="Faculty">Faculty</option>
                        <option value="Hod">Hod</option>
                    </select>
                    <br />
                    <br />
                    <button onClick={register} >Register</button>
                
                
                
</form>
     </div>
        

           
            
              
        
        
    );
}
export default Register;
