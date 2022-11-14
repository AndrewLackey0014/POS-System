//import React, { Component }  from 'react';
import "./home.css"

export default function Home() {
    return (
        <body>
            <img alt = "Cabo Grill logo" title = "logo" className = "logo" src="https://api.dineoncampus.com/files/images/fb0f93d4-8920-4567-b1e6-70b3ee72690c.png" />
            <p className = "center">Welcome to Cabo Grill!</p>
            <br></br>

            <li className = "center"><a href="CustomerGUI">Customer GUI</a></li>
            <br></br>
            <li className = "center"><a href="ManagerGUI">Manager GUI</a></li>
            <br></br>
            <li className = "center"><a href="ServerGUI">Server GUI</a></li>
            <br></br>
            <li className = "center"><a href="About">About us</a></li>
        </body>
    );
}