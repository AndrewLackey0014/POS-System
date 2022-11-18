//import React, { Component }  from 'react';
import "./home.css"

export default function Home() {
    return (
        <body>
            <img alt = "Cabo Grill logo" title = "logo" className = "logo" src="https://api.dineoncampus.com/files/images/fb0f93d4-8920-4567-b1e6-70b3ee72690c.png" />
            <h1 className = "center">WELCOME TO CABO GRILL</h1>
            <br></br>

            <button className = "list"><a href="CustomerGUI">CUSTOMER GUI</a></button>
            <br></br>
            <button className = "list"><a href="ManagerGUI">MANAGER GUI</a></button>
            <br></br>
            <button className = "list"><a href="ServerGUI">SERVER GUI</a></button>
            <br></br>
            <button className = "list"><a href="About">ABOUT US</a></button>
        </body>
    );
}