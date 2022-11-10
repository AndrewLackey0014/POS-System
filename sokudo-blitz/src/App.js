import React, { Component }  from 'react';

import NavBar from "./NavBar";
import Pricing from "./pages/Pricing"
import About from "./pages/About"
import Home from "./pages/Home"
import Transaction from "./pages/tranHistory";
import Employees from "./pages/Employees";
import Items from "./pages/Items";
import Reports from "./pages/Reports";
import Inventory from "./pages/Inventory";


function App() {
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
    case "/inventory":
      component = <Inventory/>
      break;
    default: 
      component = <Home/>
      break
  }
  return (
    <>
      <NavBar/>
      {component}
    </>
  )

}


export default App;