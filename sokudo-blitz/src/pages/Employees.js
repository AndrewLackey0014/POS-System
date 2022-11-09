<<<<<<< HEAD
const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male"},
  ]
=======
import React, { Component }  from 'react';
>>>>>>> e10eb8b80bf1ad5a34644313d26f31adb517768b

export default function Employees() {
    return(
        <>
            <div class="column">
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