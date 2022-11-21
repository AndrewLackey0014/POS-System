//import React, { Component }  from 'react';

import React, { Component, useState, useEffect} from 'react';


const temp_data = [];
var obj;

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
            setEmployees(data);
          });
    }
    obj = JSON.parse(employee_data);

    let component;
    switch (obj) {
        case false:
          component = <>
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
                </table>
            </div>
          
          </>
          break
        
        default: 
          component = <>
            <div class="column">
                <table>
                    <tr>
                        <th>Employee ID</th>
                        <th>Salary</th>
                        <th>Name</th>
                        <th>Manager ID</th>
                        <th>Role</th>

                    </tr>
                     
                    {obj.map((val, key) => {
                    return (
                        <tr key={key}>
                        <td>{val.employeeid}</td>
                        <td>{val.salary}</td>
                        <td>{val.name}</td>
                        <td>{val.managerid}</td>
                        <td>{val.role}</td>
                        </tr>
                    )
                    })}
                </table>
            </div>  
          </>
          break
      }

    return(
        <>
            {component}
        </>
        );
}