//import NavBarCustomer2 from "./NavBarCustomer2";


import Items from "./Items";
import NavBarServer from "./NavBarServer";
//import Transaction from "./tranHistory";
//import Employees from "./Employees";
//import Items from "./Items";
import Reports from "./Reports";
import Login from "./LoginServer";
import Serverorder from "./Serverorder";

//import Inventory from "./Inventory";
//import "./navMstyle.css"
/**
 * Displays Server GUI Page based on which page is selected
 */
 function ServerGUI() {
    let component
    switch (window.location.pathname) {
      case "/Items":
        component = <Items/>
        break
      case "/Reports":
        component = <Reports/>
        break
      
      case "/Serverorder":
          component = <Serverorder/>
          break

        default: 
          component = <Login/>
          return <Login/>
      }
      return (
        <>
          <NavBarServer/>
          {component}
          This is the server gui, add functionality in ServerGui.js possibly.
        </>
      )
    

}   
export default ServerGUI;