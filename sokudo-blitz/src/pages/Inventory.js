
import React, { Component, useState, useEffect} from 'react';


const temp_data = [];
var obj;

function getCurrentURL () {
    return window.location.href
  }

const url = getCurrentURL()
  var backend_url = "";
  // console.log(url);
  if (url.substring(0,21) == 'http://localhost:3000') {
    backend_url = 'http://localhost:3001/';
  }
  else {
    backend_url = 'https://sokudoblitzbackend.onrender.com/';
  }

export default function Inventory() {

    const [inventory_data, setInventory] = useState(false);
    useEffect(() => {
        getInventory();
    }, []);
    function getInventory() {
        fetch(backend_url + 'inventory')
          .then(response => {
            return response.text();
          })
          .then(data => {
            setInventory(data);
          });
    }
    obj = JSON.parse(inventory_data);


    const handleClick = (e)=>{
        e.preventDefault();
        document.getElementById("myDropdown").classList.toggle("show");

    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
    } 




    let component;
    switch (obj) {
        case false:
          component = <>
            <div class="column left">
                <div class="dropdown row" onClick={handleClick}>
                    <button class="dropbtn">Select Item</button>
                    <div id ="myDropdown" class="dropdown-content">
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 1</a>
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 2</a>
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 3</a>
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 4</a>
                    </div>
                </div>
                

                <form>Order Amount: <input type="text"></input></form>

                <button class="order_inv">Order Inventory</button>

            </div>
            
            <div class="column right">
                <table>
                    <tr>
                        <th>Item ID</th>
                        <th>Item</th>
                        <th>Current Inventory</th>
                        <th>Minimum Inventory</th>
                        <th>Maximum Inventory</th>
                        <th>Unit</th>
                    </tr>
                    {temp_data.map((val, key) => {
                    return (
                        <tr key={key}>
                        <td>{val.item_id}</td>
                        <td>{val.item}</td>
                        <td>{val.curr_inv}</td>
                        <td>{val.min_inv}</td>
                        <td>{val.max_inv}</td>
                        <td>{val.unit}</td>

                        
                        </tr>
                    )
                    })}
                </table>
            </div>
          
          </>
          break
        
        default: 
          component = <>
          <div class="column left">
                <div class="dropdown row" onClick={handleClick}>
                    <button class="dropbtn">Select Item</button>
                    <div id ="myDropdown" class="dropdown-content">
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 1</a>
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 2</a>
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 3</a>
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 4</a>
                    </div>
                </div>
                

                <form>Order Amount: <input type="text"></input></form>

                <button class="order_inv">Order Inventory</button>

            </div>
            
            <div class="column right">
                <table>
                    <tr>
                        <th>Item ID</th>
                        <th>Item</th>
                        <th>Current Inventory</th>
                        <th>Minimum Inventory</th>
                        <th>Maximum Inventory</th>
                        <th>Unit</th>
                    </tr>
                    {obj.map((val, key) => {
                    return (
                        <tr key={key}>
                        <td>{val.item_id}</td>
                        <td>{val.item}</td>
                        <td>{val.curr_inv}</td>
                        <td>{val.min_inv}</td>
                        <td>{val.max_inv}</td>
                        <td>{val.unit}</td>

                        
                        </tr>
                    )
                    })}
                </table>
            </div>
          
            
          </>
          break
      }




   

    const data = [
        { name: "Anom", age: 19, gender: "Male" },
        { name: "Megha", age: 19, gender: "Female" },
        { name: "Subham", age: 25, gender: "Male"},
      ]

    return (
    <>
    
    {/* <div class="column left">
        <div class="dropdown row" onClick={handleClick}>
            <button class="dropbtn">Select Item</button>
            <div id ="myDropdown" class="dropdown-content">
                <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 1</a>
                <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 2</a>
                <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 3</a>
                <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 4</a>
            </div>
        </div>
        

        <form>Order Amount: <input type="text"></input></form>

        <button class="order_inv">Order Inventory</button>

    </div>
    
    <div class="column right">
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
            {data.map((val, key) => {
            return (
                <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
                </tr>
            )
            })}
        </table>
    </div> */}
    {component}
    </>
);
}