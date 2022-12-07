//import React, { Component }  from 'react';
import "./home.css"


import { useEffect } from "react";


var duplicate_google_translate_counter = 0;//this stops google adding button multiple times

export default function Home() {

    const googleTranslateElementInit = () => {
        if (duplicate_google_translate_counter == 0) {
          
            new window.google.translate.TranslateElement(
              {
                pageLanguage: "en",
                autoDisplay: false
              },
              "google_translate_element"
            );
            duplicate_google_translate_counter++;
    
        }
    };
      
      useEffect(() => {
        
        var addScript = document.createElement("script");
        addScript.setAttribute(
          "src",
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
      }, []);
    return (
        <body>
            <img alt = "Cabo Grill logo" title = "logo" class = "logo" src="https://api.dineoncampus.com/files/images/fb0f93d4-8920-4567-b1e6-70b3ee72690c.png" />
            <h1 className = "center">WELCOME TO CABO GRILL</h1>
            <button className = "list"><a href="CustomerGUI">CUSTOMER GUI</a></button>
            <br></br>
            <button className = "list"><a href="ManagerGUI">MANAGER GUI</a></button>
            <br></br>
            <button className = "list"><a href="ServerGUI">SERVER GUI</a></button>
            <br></br>
            <button className = "list"><a href="About">ABOUT US</a></button>
            <div id="google_translate_element"></div>
        </body>
    );
}