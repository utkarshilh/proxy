import React from 'react'
import { useState, useEffect } from 'react'
import MainLogin from './ Component/MainLogin';






import Axios from 'axios'


import Severalpage from './ Component/Severalpage';
//import Login from './ Component/Login';
/*import Navbar from './ Component/Navbar';
  import './Component/App.css'*/
 






function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [currentRole, setCurrentRole] = useState("");




  const updateUser = (props) => {
    console.log(" ta ta ta ")
    console.log(JSON.stringify(props));
    setCurrentUser(props.userName);
    setCurrentRole(props.role);
    console.log("current userName:" + JSON.stringify(currentUser));
    console.log("current role : " + JSON.stringify(currentRole));



  }




 /* const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const changeLoginStatus = () => {
    setIsAuthenticated(true);
  }

  const LogoutButton = () => {
    setIsAuthenticated(false);
  }

  useEffect(() => {
    Axios.get('/x')
      .then(res => {
        if (res.data.Status === "Success") {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsAuthenticated(false);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }*/

/*
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

const changeLoginStatus = () => {
  localStorage.setItem('isAuthenticated', 'true');
  setIsAuthenticated(true);
}

const LogoutButton = () => {
  localStorage.setItem('isAuthenticated', 'false');
  setIsAuthenticated(false);
}

Axios.defaults.withCredentials = true;
useEffect(() => {
  Axios.get('/x')
    .then(res => {
      if (res.data.Status === "Success") {
        localStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true);
      } else {
        localStorage.setItem('isAuthenticated', 'false');
        setIsAuthenticated(false);
      }
    })
    .catch(err => console.log(err));
}, []);*/

  
  const changeLoginStatus = () => {
    

    // Send an HTTP request to your server with 'empId' included as a query parameter
    Axios.get('/your-server-route', { empId: currentUser }, function(data) {
     console.log('Server response:', data);
     //alert("I am here"+data)
    });
  
    setIsAuthenticated(true);
  }
  // This is for the button when the logout button that is present in the navbar is clicked
  /* 
   const getUserData = async () => {
    const res = await axios.get(`/getdata/${empId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.data.status == 201) {
      console.log("data get");
      setData(res.data.data);
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    getUserData();
}, []);
  */
  const LogoutButton = () => {
    setIsAuthenticated(false);
  }
Axios.defaults.withCredentials=true;


const getUserData = async () => {
  const res = await Axios.get("/getdata", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.data.status == 201) {
    alert(JSON.stringify(res.data));
   // alert("I am inside the function ");
   
  } else {
    console.log("error");
  }
};
const [data, setdata] = useState("");

  useEffect(()=>{
   
      Axios.get('/x')
      .then(res=>{
        if(res.data.Status=="Success"){
         
          
            setIsAuthenticated(true)
           // alert(JSON.stringify(res.data.name));
          // alert(JSON.stringify(res.data.role));
            setCurrentUser(res.data.name);
            setCurrentRole(res.data.name2);
             //getUserData();

            //setCurrentUser(res.data.name);
           // setCurrentRole(props.role);
          
           
         // alert(JSON.stringify("hellloo"));

         // props.changeLoginStatus();
           



        }
        else{
          setIsAuthenticated(false)   
        }     
      }).catch(err=>console.log(err));
  }, []) 
  
  return (
    <div>
      {
        isAuthenticated ?
          <Severalpage currentRole={currentRole} currentUser={currentUser} LogoutButton={LogoutButton} /> :
          <MainLogin changeLoginStatus={changeLoginStatus} updateUser={updateUser}/>
       
       
      }


    </div>


  )
}
export default App