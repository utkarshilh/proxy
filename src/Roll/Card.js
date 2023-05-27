import React from "react";
export default function Card() {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table
          style={{
            width: "80%",
            align: "center",
            textAlign: "center",
            cellpadding: "24px",
            border:'1px solid black'
          }}
        >
          <tr style={{border:'1px solid gray'}}>
            <th colSpan={5} style={{border:'1px solid'}}>Yogita Shukla</th>
            <th colSpan={2} style={{border:'1px solid '}}>CSE</th>
            <th colSpan={3} style={{border:'1px solid'}}>DOJ : 18-05-1999</th>
          </tr>

          <tr style={{border:'1px solid black'}}>
            <th style={{border:'1px solid black'}}>Reason for Leave </th>
            <th style={{border:'1px solid black'}}>Nature of the leave</th>
            <th style={{border:'1px solid black'}}>Date of Leave</th>
            <th style={{border:'1px solid black'}}>Duration of leave</th>
            <th style={{border:'1px solid black'}} colSpan={2}>Leave already taken in the Current Month </th>
            <th style={{border:'1px solid black'}} colSpan={2}>Till Previous Month Leave Taken </th>
            <th style={{border:'1px solid black'}}>Balance Leave Excluding this Leave </th>
          </tr>

          <tr>
            <td style={{border:'1px solid black'}} rowSpan={2}>hello </td>
            <td style={{border:'1px solid black'}} rowSpan={2}>hello </td>
            <td style={{border:'1px solid black'}} rowSpan={2}> CL</td>
            <td style={{border:'1px solid black'}} rowSpan={2}>55 </td>
            <th style={{border:'1px solid black'}}> CL</th>
            <th style={{border:'1px solid black'}}>LWP </th>
            <th style={{border:'1px solid black'}}> CL</th>
            <th style={{border:'1px solid black'}}>LWP </th>
            <th style={{border:'1px solid black'}}>CL</th>
          </tr>

          <tr style={{border:'1px solid black'}}>
            <td style={{border:'1px solid black'}}>hello </td>

            <td style={{border:'1px solid black'}}>55 </td>
            <td style={{border:'1px solid black'}}> 77</td>
            <td style={{border:'1px solid black'}}>66 </td>
            <td style={{border:'1px solid black'}}> 86</td>
          </tr>

          <tr style={{border:'1px solid black'}}>
            <th style={{border:'1px solid black'}} colSpan={9}>Arrangement of Duties during absence</th>
          </tr>

          <tr style={{border:'1px solid black'}}>
            <th style={{border:'1px solid black'}} colSpan={2}>Date</th>
            <th style={{border:'1px solid black'}}>Subject/Lab/Others</th>
            <th style={{border:'1px solid black'}}>sem & sec</th>
            <th style={{border:'1px solid black'}}>Time</th>
            <th style={{border:'1px solid black'}} colSpan={4}>Name of Sign. of Person Agreed</th>
          </tr>

          <tr style={{border:'1px solid black'}}>
            <td style={{border:'1px solid black'}} colSpan={2}>18-05-199</td>
            <td style={{border:'1px solid black'}}>C programming</td>
            <td style={{border:'1px solid black'}}>8A</td>
            <td style={{border:'1px solid black'}}>nine</td>
            <td style={{border:'1px solid black'}} colSpan={4}> Utkarsh Tripathi</td>
          </tr>

          <tr style={{border:'1px solid black'}}>
            <td style={{border:'1px solid black'}} colSpan={2}>18-05-199</td>
            <td style={{border:'1px solid black'}}>C programming</td>
            <td style={{border:'1px solid black'}}>8A</td>
            <td style={{border:'1px solid black'}}>nine</td>
            <td style={{border:'1px solid black'}} colSpan={4}> Utkarsh Tripathi</td>
          </tr>

          <tr style={{border:'1px solid black'}}>
            <td style={{border:'1px solid black'}} colSpan={2}>18-05-199</td>
            <td style={{border:'1px solid black'}}>C programming</td>
            <td style={{border:'1px solid black'}}>8A</td>
            <td style={{border:'1px solid black'}}>nine</td>
            <td style={{border:'1px solid black'}} colSpan={4}> Utkarsh Tripathi</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
