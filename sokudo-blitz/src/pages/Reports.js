import React, { Component, useState, useEffect} from 'react';


const temp_data = [];
var obj;


export default function Reports(props) {

    const [reports_data, setReports] = useState(false);
    useEffect(() => {
        getReports();
    }, []);
    function getReports() {
        fetch('http://localhost:3001/inventory')
          .then(response => {
            return response.text();
          })
          .then(data => {
            setReports(data);
          });
    }
    obj = JSON.parse(reports_data);

    return(
        <>
        <div class="column left">
            <form class="row">
                Begin Time: <input type="text"></input>
                End Time: <input type="text"></input>
                <button>Sales Report</button>   
            </form>    
            

            <form class="row">
                Previous Date: <input type="text"></input>
                <button>Excess Report</button>
            </form>

            <form class="row">
                <button>Restock Report</button>
            </form>

            <form class="row">
                Begin Time: <input type="text"></input>
                End Time: <input type="text"></input>
                <button>Combo Report</button>
            </form>

    </div>
    
    <div class="column right">
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
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
        );
}