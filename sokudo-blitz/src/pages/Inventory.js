import "./Inventory.css"
import React, { Component, useState, useEffect, useRef} from 'react';


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

function getCurrentURL () {
    return window.location.href
}



export default function Inventory() {



    const url = getCurrentURL()
    var backend_url = "";
    // console.log(url);
    if (url.substring(0,21) == 'http://localhost:3000') {
      backend_url = 'http://localhost:3001/';
    }
    else {
      backend_url = 'https://sokudoblitzbackend.onrender.com/';
    }

    const [inventory_data, setInventory] = useState(false);
    const [orderCount, setOrderCount] = useState('');

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


    // const handleClick = (e)=>{
    //     e.preventDefault();
    //     document.getElementById("myDropdown").classList.toggle("show");

    // }

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

    function handleOrderInventory() {
            let order_amount = inputRef1.current.value;
            var select = document.getElementById('items');
            var item_id = select.options[select.selectedIndex].value;
            // console.log(value); // en


            fetch(backend_url+'inventory_update', {
              method: 'POST',
              headers: {  
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({order_amount, item_id}),
            })
              .then(response => {
                return response.text();
              })
              .then(data => {
                alert(data);
                getInventory();
              });
    }


    const handleOrderCount = event => {
        setOrderCount(event.target.value);
      };

    const inputRef1 = useRef(null);





    let component;
    switch (obj) {
        case false:
          component = <>
            <div class="column left">
                <div class="dropdown row">
                    <button class="dropbtn">Select Item</button>
                    <div id ="myDropdown" class="dropdown-content">
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 1</a>
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 2</a>
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 3</a>
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 4</a>
                    </div>
                </div>
                

                <form>Order Amount: <input type="text" ref={inputRef1} onChange={handleOrderCount} value={orderCount}></input></form>

                <button class="order_inv" onClick={handleOrderInventory}>Order Inventory</button>

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
                <div class="dropdown row">
                    {/* <button class="dropbtn">SELECT ITEM</button> */}

                 
                    {/* <div id ="myDropdown" class="dropdown-content"> */}
                    <select  name="items" id="items">
                    
                        {obj.map((val, key) => {
                        return (
                            <option>{val.item_id}</option>            
                            
                        )
                        })}

                    </select>

                    
                    {/* </div> */}
                </div>
                

                <div class="brick"> <input placeholder="ORDER AMOUNT" type="text" ref={inputRef1} onChange={handleOrderCount} value={orderCount}></input></div>

                <button class="order_inv" onClick={handleOrderInventory}>Order Inventory</button>

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