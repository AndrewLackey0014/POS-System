//import NavBarCustomer2 from "./NavBarCustomer2";


import Items from "./Items";
import NavBarServer from "./NavBarServer";
//import Transaction from "./tranHistory";
//import Employees from "./Employees";
//import Items from "./Items";
import Reports from "./Reports";
//import Inventory from "./Inventory";
//import "./navMstyle.css"
 function ServerGUI() {
    let component
    switch (window.location.pathname) {
      case "/Items":
        component = <Items/>
        break
      case "/Reports":
        component = <Reports/>
        break

        default: 
          component = <Items/>
          break
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