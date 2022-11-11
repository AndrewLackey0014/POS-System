import NavBarCustomer2 from "./NavBarCustomer2";


import Items from "./Items";

//import Transaction from "./tranHistory";
//import Employees from "./Employees";
//import Items from "./Items";
//import Reports from "./Reports";
//import Inventory from "./Inventory";
//import "./navMstyle.css"
 function CustomerGUI() {
    let component
    switch (window.location.pathname) {


        default: 
        
          component = <Items/>
          break
      }
      return (
        <>
         <NavBarCustomer2/>
          {component}
          This is the customer gui, add functionality
        </>
      )
    

}   
export default CustomerGUI;