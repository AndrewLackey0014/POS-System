import "./navMstyle.css"
import { useEffect } from "react";


var duplicate_google_translate_counter = 0;//this stops google adding button multiple times
export default function NavBarManager() {

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
        <nav>
            
            <ul class="navbar">  
                <img alt = "Cabo Grill logo" title = "logo" className = "logonav" src="https://api.dineoncampus.com/files/images/fb0f93d4-8920-4567-b1e6-70b3ee72690c.png" />

                <a href="/" class="nav_title">Home Page</a>

                <a href="/ManagerGUI/tranHistory" class="nav_title">Transaction History</a>

                <a href="/ManagerGUI/Employees" class="nav_title">Employees</a>

                <a href="/ManagerGUI/Inventory" class="nav_title">Inventory</a>

                <a href="/ManagerGUI/Items" class="nav_title">Items</a>

                <a href="/ManagerGUI/Reports" class="nav_title">Reports</a>

                <a><div id="google_translate_element"></div></a>
            </ul>
        </nav>
    );
}