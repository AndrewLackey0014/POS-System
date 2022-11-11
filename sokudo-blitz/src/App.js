import React, { Component }  from 'react';

//import NavBar from "./NavBar";
import Pricing from "./pages/Pricing"
import About from "./pages/About"
import Home from "./pages/Home"
import Transaction from "./pages/tranHistory";
import Employees from "./pages/Employees";
import Items from "./pages/Items";
import Reports from "./pages/Reports";
import Inventory from "./pages/Inventory";
import ManagerGUI from "./pages/ManagerGUI"
import CustomerGUI from './pages/CustomerGUI';
import ServerGUI from './pages/ServerGUI';
import NavBarManager2 from './pages/NavBarManager2';
import NavBarAbout from './pages/NavBarAbout';
import NavBarServer2 from './pages/NavBarServer2';
function App() {
  let component
  switch (window.location.pathname) {
    case "/pricing":
      component = <Pricing/>
      break

    case "/ManagerGUI":
      component = <ManagerGUI/>
      break
    case "/ManagerGUI/tranHistory":
      component =  <>
      <NavBarManager2/>
      <Transaction/>
      </>
      break
    case "/ManagerGUI/Employees":
      component =  <>
      <NavBarManager2/>
      <Employees/>
      </>
      break
    case "/ManagerGUI/Inventory":
      component =  <>
      <NavBarManager2/>
      <Inventory/>
      </> 
      break
    case "/ManagerGUI/Items":
      component =  <>
      <NavBarManager2/>
      <Items/>
      </> 
      break
    case "/ManagerGUI/Reports":
      component =  <>
      <NavBarManager2/>
      <Reports/>
      </> 
      break
    case "/CustomerGUI":
      component= <CustomerGUI/>
      break
    case "/CustomerGUI/Item":
      component= <CustomerGUI/>
      break
    case "/ServerGUI":
      component= <ServerGUI/>
      break
    case "/ServerGUI/Items":
      component = <>
      <NavBarServer2/>
      <Items/>
      </>
      break

      case "/ServerGUI/Reports":
        component = <>
        <NavBarServer2/>
        <Reports/>
        </>
        break


   case "/About":
      component = <>
       <NavBarAbout/>
      <About/>
      </>
      break
    default: 
      component = <>
      <Home/>
      
      </>
      break
  }
  return (
    <>

      {component}
    </>
  )

}


export default App;