//import React, { Component }  from 'react';

import React, { Component, useState, useEffect} from 'react';


const temp_data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male"},
  ]
// const employee_data = [];


export default function Employees() {
    const [employee_data, setEmployees] = useState(false);
    useEffect(() => {
        getEmployees();
    }, []);
    function getEmployees() {
        fetch('http://localhost:3001')
          .then(response => {
            return response.text();
          })
          .then(data => {
            // employee_data = data;
            setEmployees(data);
          });
    }

    // console.log(typeof employee_data);
    // console.log(typeof temp_data);
    const obj = JSON.parse(employee_data);
    // console.log(typeof obj);
    // console.log(obj);
    // data =
    // employee_data = 


    return(
        <>
            {/* <button onClick={getEmployees}>See Employees</button> */}
            <br />
            <div class="column">
                <table>
                    <tr>
                        <th>Employee ID</th>
                        <th>Salary</th>
                        <th>Name</th>
                        <th>Manager ID</th>
                        <th>Role</th>

                    </tr>
                    {temp_data.map((val, key) => {
                    return (
                        <tr key={key}>
                        <td>{val.name}</td>
                        <td>{val.age}</td>
                        <td>{val.gender}</td>
                        </tr>
                    )
                    })}
                    {/* {obj.map((val, key) => {
                    return (
                        <tr key={key}>
                        <td>{val.employeeid}</td>
                        <td>{val.salary}</td>
                        <td>{val.name}</td>
                        <td>{val.managerid}</td>
                        <td>{val.role}</td>


                        </tr>
                    )
                    })} */}
                </table>
            </div>
        </>
        );
}