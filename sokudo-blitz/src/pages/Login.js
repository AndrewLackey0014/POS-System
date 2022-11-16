import "./loginCstyle.css"
import React, { useState } from "react"

export default function Login() {
    const [fname, setFname] = useState("");

    const handleChange = e => {
        setFname(e.target.value)
    }

    return (

            <div class="nav1">
                <p>Welcome to Cabo Grill</p>
                <form>Input Employee ID: <input type="text" value={fname} onChange={handleChange}></input></form>
                <p>Input: {fname}</p>
            </div>
    );
}