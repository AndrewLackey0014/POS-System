
import Pricing from "./Pricing"
import About from "./About"
import Transaction from "./tranHistory";
import Employees from "./Employees";
import Items from "./Items";
import Reports from "./Reports";
import Inventory from "./Inventory";

import NavBarManager from "./NavBarManager";
//import Transaction from "./tranHistory";
//import Employees from "./Employees";
//import Items from "./Items";
//import Reports from "./Reports";
//import Inventory from "./Inventory";
//import "./navMstyle.css"
 function ManagerGUI() {
    let component
    switch (window.location.pathname) {
        case "/pricing":
          component = <Pricing/>
          break
        case "/about":
          component = <About/>
          break
        case "/tranHistory":
          component = <Transaction/>
          break;
        case "/employees":
          component = <Employees/>
          break;
        case "/items":
          component = <Items/>
          break;
        case "/reports":
          component = <Reports/>
          break;
        case "/ManagerGUI/Inventory":
          component = <Inventory/>
          break;
          case "/ManagerGUI/tranHistory":
            component = <Transaction/>
            break;


        default: 
          component = <Transaction/>
          break
      }
      return (
        <>
          <NavBarManager/>
          {component}
        </>
      )
    

}   
export default ManagerGUI;