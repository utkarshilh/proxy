import React, {useState, useEffect} from 'react'

function Card(props) {
    console.log(props.updateUser.currentUser);
  const empId = props.updateUser.currentUser;
  const [data, setData] = useState([]);
  const [record,setRecords]=useState(data)
  const loadData = async () => {
    const response = await axios.get("/api/get");
    setData(response.data);
    setRecords(response.data)
  };

  useEffect(() => {
    loadData();
  }, []);
 
 
    return (
      <div
      style={{width:'200px', height:'200px', backgroundColor:''}}
      >
      
  <table>

      {record.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>

                  <td>{item.empId}</td>
                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>{item.email}</td>
                  <td>{item.Gender}</td>
                  <td>{item.Department}</td>
                  <td>{item.ContactNo}</td>
                </tr>
              );
            })}

</table>
      </div>
    )
  
}

export default Card;
