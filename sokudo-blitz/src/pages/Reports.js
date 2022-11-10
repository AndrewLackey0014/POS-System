import React, { Component }  from 'react';


const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male"},
  ]

export default function Reports(props) {
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