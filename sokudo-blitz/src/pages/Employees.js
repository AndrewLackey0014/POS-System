//import React, { Component }  from 'react';
import "./Employees.css"
import React, { Component, useState, useEffect} from 'react';


const temp_data = [];
var obj;

/**
 * Gets Current window's URL
 */
function getCurrentURL () {
    return window.location.href
  }

  /**
 * Displays Employee Database Information
 */
export default function Employees() {

    const url = getCurrentURL()
    var backend_url = "";
    // console.log(url);
    if (url.substring(0,21) == 'http://localhost:3000') {
      backend_url = 'http://localhost:3001/';
    }
    else {
      backend_url = 'https://sokudoblitzbackend.onrender.com/';
    }

    const [employee_data, setEmployees] = useState(false);
    useEffect(() => {
        getEmployees();
    }, []);
    /**
 * Gets Employee Data from Database
 */
    function getEmployees() {
        fetch(backend_url+'get_employees')
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
            <div class="edata">
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