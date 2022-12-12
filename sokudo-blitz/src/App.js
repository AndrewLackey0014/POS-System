import "./App.css"

import React, { Component, useState, useEffect} from 'react';

//import NavBar from "./NavBar";
import Pricing from "./pages/Pricing"
import About from "./pages/About"
import Home from "./pages/Home"
import Transaction from "./pages/tranHistory";
import Employees from "./pages/Employees";
import Items from "./pages/Items";
import Serverorder from "./pages/Serverorder";
import Reports from "./pages/Reports";
import Inventory from "./pages/Inventory";
import ManagerGUI from "./pages/ManagerGUI"
import CustomerGUI from './pages/CustomerGUI';
import ServerGUI from './pages/ServerGUI';
import NavBarManager from './pages/NavBarManager';

import NavBarAbout from './pages/NavBarAbout';
import NavBarServer from './pages/NavBarServer';


import NavBarCustomer from './pages/NavBarCustomer';
import Toppings_Page from './pages/Toppings_Page';

import Gmap from "./gmap.js";

import { gapi } from 'gapi-script';
import LoginButton from "./pages/oauthLogin";
import LogoutButton from "./pages/oauthLogout"
import Login from "./pages/LoginManager";



var url = "";


const urlweb = getCurrentURL()
  var backend_urlweb = "";
  // console.log(url);
  if (urlweb.substring(0,21) == 'http://localhost:3000') {
    backend_urlweb = 'http://localhost:3001/';
  }
  else {
    backend_urlweb = 'https://sokudoblitzbackend.onrender.com/';
  }

/**
 * Grabs environmental variables from backend
 */
export async function getEnvironmentVarsFromExpress() {
  return await fetch(backend_urlweb+'webgetEnvironmentVars').then((res) => {
    url = res.json();
    // console.log(url);

  })
}

/**
 * Decides whether on local host or deploy
 */
function getCurrentURL () {
  return window.location.href
}

// Example

/**
 * Displays Webpage
 */
function App() {
  const clientId = "231326845154-144brcs88gukjjin9alrmbkt8pdno2ti.apps.googleusercontent.com";

  const url = getCurrentURL()
  var backend_url = "";
  // console.log(url);
  if (url.substring(0,21) == 'http://localhost:3000') {
    backend_url = 'http://localhost:3001/';
  }
  else {
    backend_url = 'https://sokudoblitzbackend.onrender.com/';
  }

  const [employees, setEmployees] = useState(false);
  useEffect(() => {
    getEmployees();
    
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  }, []);


  /**
 * Gets Employee data from Employee database
 */
  function getEmployees() {
    fetch(backend_url+'get_employees',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        setEmployees(data);
      });
  }

  /**
 * Create Employee to add to database
 */
  function createEmployee() {
    let employeeid = prompt('Enter employee id');
    let salary = prompt('Enter salary');
    let name = prompt('enter name');
    let managerid = prompt('enter managerid');
    let role = prompt('enter role');
    fetch(backend_url+'employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({employeeid, salary, name, managerid, role}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getEmployees();
      });
  }

  /**
 * Updates Employee salary in Database
 */
  function updateSalary() {
    let employeeid = prompt('Enter employee id');
    let salary = prompt('Enter salary');
    fetch(backend_url+'employee_update', {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({employeeid, salary}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getEmployees();
      });
  }


/**
 * Delete Employee Data from Database
 */
  function deleteEmployee() {
    let id = prompt('Enter employeeid');
    // console.log(id);
    fetch(backend_url+'delete_employee', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getEmployees();
      });
  }
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
      <NavBarManager/>
      <Transaction/>
      </>
      break
    case "/ManagerGUI/Employees":
      component =  <> 
      <NavBarManager/>
      <Employees/>
      <div class = "buttons">
        {/* {employees ? employees : 'There is no employee data available'} */}
        <br />
        <button class = "ebuttons" onClick={createEmployee}>Add employee</button>
        <br />
        <button class = "ebuttons" onClick={deleteEmployee}>Delete employee</button>
        <br />
        <button class = "ebuttons" onClick={updateSalary}>update employee</button>
      </div>
      </>
      break
    case "/ManagerGUI/Inventory":
      component =  <>
      <NavBarManager/>
      <Inventory/>
      </> 
      break
    case "/ManagerGUI/Items":
      component =  <>
      <NavBarManager/>
      <Items/>
      </> 
      break
    case "/ManagerGUI/Reports":
      component =  <>
      <NavBarManager/>
      <Reports/>
      </> 
      break
    case "/CustomerGUI":
      component= <>
      <NavBarCustomer/>
     <CustomerGUI/> 
      </>
      break
    case "/CustomerGUI/Toppings_Page":
      component= <>
      <Toppings_Page/>
      </>
      break
    case "/CustomerGUI/Item":
      component= <CustomerGUI/>
      break
    case "/ServerGUI":
      component= <ServerGUI/>
      break
    case "/ServerGUI/Items":
      component = <>
      <NavBarServer/>
      <Items/>
      </>
      break

      case "/ServerGUI/Serverorder":
        component = <>
        <NavBarServer/>
        <Serverorder/>
        </>
        break
      case "/ServerGUI/Reports":
        component = <>
        <NavBarServer/>
        <Reports/>
        </>
        break


   case "/About":
      component = <>
       <NavBarAbout/>
      {/* <About/> */}
      <Gmap/>
      </>
      break

    default: 
      component = <>
      <Home/>
      {/* <LoginButton/>
      <LogoutButton/> */}
      
      </>
      break
  }

  return (
    <>
      {/* {getEnvironmentVarsFromExpress()} */}
      {/* <div id="google_translate_element"></div> */}
      {component}
    
      
    </>
  )



  
}
export default App;