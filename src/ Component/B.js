import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import Model from "./Model";
import "./B.css";
import Image from "./Image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "./Card";
import SeeAllUsers from "./EditUser/SeeAllUsers";

export default function B(props) {
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
/*
const [show, setShow]=useState(false);

if(!show){
  return null;
}*/
console.log(props.updateUser.currentUser);
  const empId = props.updateUser.currentUser;
  const [data, setData] = useState([]);

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

  
const product=data.map(item=>(
   {id:0,value:"Appple"},
   {id:1,value:"Mango"},
   {id:3,value:"Appple"},
   {id:4,value:"Mango"},
   {id:5,value:"Appple"},
   {id:6,value:"Mango"}
));
function d(){
  {product.map((data,i)=>
    <h1>{data}</h1>
    )}
}




const [selectedOption, setSelectedOption] = useState("A");
const options = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "C", label: "C" },
  {
    value: "D",
    label: "D"
  },
  {
    value: "E",
    label: "E"
  }
];
const handleTypeSelect = e => {
  setSelectedOption(e.value);
};

  return (
  
    <div style={{width:'1550px', marginLeft:'210px', marginTop:'300px'}}>







<div class="table-container">
  <table>
    <thead>
      <tr>
        <td>Column 1</td>
        <td>Column 2</td>
        <td>Column 3</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
     
    </tbody>
  </table>
</div>

      {/*<select
        options={options}
        onChange={handleTypeSelect}
        value={options.filter(function(option) {
          return option.value === selectedOption;
        })}
        label="Single select"
      >
       <option value="" selected>
                        Select
                      </option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                      <option value="F">F</option>
      </select>





      <h2>kjkdlhfklh</h2>
      <Link className="nav-link" to="/allUsers">
         show All Users
    </Link>
     
    <Carousel  responsive={responsive}>
     <div>hi</div>
     <div>hi</div>
     <div>hi</div>
     <div>hi</div>
     <div>hi</div>
     <div>hi</div>

     <SeeAllUsers  updateUser={props}/>
  
  

 
  </Carousel>



   <Link className="nav-link" to="/setarrangement">
Setarrangement
</Link>

<Link className="nav-link" to="/showArrangementRequest">
showarrangement request
</Link>

<Link className="nav-link" to="/allArrangementRequest">
allArrangementRequest
</Link>

<Link className="nav-link" to="/allrequestforhod">
allrequest for hod
</Link>

<Link className="nav-link" to="/allleaverequest">
all leaverequest
</Link>

<Link className="nav-link" to="/requestleave">
request leave
</Link>

<Link className="nav-link" to="/request">
request
      </Link>*/}
  
      
    </div>
    
  );
}
