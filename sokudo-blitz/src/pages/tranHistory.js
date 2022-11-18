//import React, { Component }  from 'react';

// import React, { Component, useState, useEffect} from 'react';

const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male"},
  ]

export default function tranHistory() {
//     const [employee_data, setEmployees] = useState(false);
//     useEffect(() => {
//         getEmployees();
//     }, []);
//     function getEmployees() {
//         fetch('http://localhost:3001')
//             .then(response => {
//             return response.text();
//             })
//             .then(data => {
//             // employee_data = data;
//             setEmployees(data);
//             });
// }

// console.log(typeof employee_data);
// console.log(typeof temp_data);
// const obj = JSON.parse(employee_data);
// console.log(typeof obj);
// console.log(obj);

return(
        <>
    
    <div class="column left">
        <form>Begin Date: <input type="text"></input></form>
        <form>End Date: <input type="text"></input></form>
        <button>Load Selected Data</button>
    </div>
    
    <div class="column right">
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
            {data.map((val, key) => {
            return (
                <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
                </tr>
            )
            })}
        </table>
    </div>
    </>
        );
 }