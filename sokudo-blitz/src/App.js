import React, { Component, useState, useEffect} from 'react';

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
import NavBarManager from './pages/NavBarManager';
import NavBarManager2 from './pages/Login';
import NavBarAbout from './pages/NavBarAbout';
import NavBarServer2 from './pages/NavBarServer2';



var url = "";
export async function getEnvironmentVarsFromExpress() {
  return await fetch('http://localhost:3001/getEnvironmentVars').then((res) => {
    url = res.json();
    // console.log(url);

  })
}

function getCurrentURL () {
  return window.location.href
}

// Example


function App() {
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
  }, []);
  function getEmployees() {
    fetch(backend_url)
      .then(response => {
        return response.text();
      })
      .then(data => {
        setEmployees(data);
      });
  }
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
      <div>
        {employees ? employees : 'There is no employee data available'}
        <br />
        <button onClick={createEmployee}>Add employee</button>
        <br />
        <button onClick={deleteEmployee}>Delete employee</button>
        <br />
        <button onClick={updateSalary}>update employee</button>
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
      {/* {getEnvironmentVarsFromExpress()} */}
      {component}
      {/* <div>
        {employees ? employees : 'There is no employee data available'}
        <br />
        <button onClick={createEmployee}>Add employee</button>
        <br />
        <button onClick={deleteEmployee}>Delete employee</button>
        <br />
        <button onClick={updateSalary}>update employee</button>
      </div> */}
    </>
  )



  
  // return (
  //   <div>
  //     {employees ? employees : 'There is no employee data available'}
  //     <br />
  //     <button onClick={createEmployee}>Add employee</button>
  //     <br />
  //     <button onClick={deleteEmployee}>Delete employee</button>
  //     <br />
  //     <button onClick={updateSalary}>update employee</button>
  //   </div>
  // );
}
export default App;