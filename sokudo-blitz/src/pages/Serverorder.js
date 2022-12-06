import React, { Component, useState, useEffect} from 'react';


const temp_data = [];
var obj;




export default function Serverorder() {

    const [items_data, setItems] = useState(false);
    useEffect(() => {
        getItems();
    }, []);
    function getItems() {
        fetch('http://localhost:3001/items')
          .then(response => {
            return response.text();
          })
          .then(data => {
            setItems(data);
          });
    }
    obj = JSON.parse(items_data);
    console.log(obj);


    const handleClick = (e)=>{
        e.preventDefault();
        document.getElementById("myDropdown").classList.toggle("show");

    }

    // // Close the dropdown menu if the user clicks outside of it
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
                    <div id ="myDropdown"  class="dropdown-content">
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 1</a>
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 2</a>
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 3</a>
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 4</a>
                    </div>
                </div>

                <form class="row">
                    Test: <input type="text"></input>
                    Create Item: <input type="text"></input>
                </form>

                <form>Order Amount: <input type="text"></input></form>

                <button class="order_inv">Order Inventory</button>

            </div>
            
            <div class="column right">
                <table>
                    <tr>
                        <th>Item ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {temp_data.map((val, key) => {
                    return (
                        <tr key={key}>
                        <td>{val.item_id}</td>
                        <td>{val.name}</td>
                        <td>{val.price}</td>
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
                    <div id ="myDropdown"  class="dropdown-content">
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 1</a>
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 2</a>
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 3</a>
                        <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 4</a>
                    </div>
                </div>

                <form class="row">
                    Test: <input type="text"></input>
                    Create Item: <input type="text"></input>
                </form>

                <form>Order Amount: <input type="text"></input></form>

                <button class="order_inv">Order Inventory</button>

            </div>
            
            <div class="column right">
                <table>
                <tr>
                        <th>Item ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {obj.map((val, key) => {
                    return (
                        <tr key={key}>
                        <td>{val.item_id}</td>
                        <td>{val.name}</td>
                        <td>{val.price}</td>
                        </tr>
                    )
                    })}
                </table>
            </div>
          
            
          </>
          break
      }

    return(
        <>
    ASDASDSADSADSADSA
    ASDASDSADSADSADSA
    ASDASDSADSADSADSA
    ASDASDSADSADSADSA
    ASDASDSADSADSADSA

    {/* <div class="column left">
        <div class="dropdown row" onClick={handleClick}>
        <button class="dropbtn">Select Item</button>
            <div id ="myDropdown"  class="dropdown-content">
                <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 1</a>
                <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 2</a>
                <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 3</a>
                <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 4</a>
            </div>
        </div>

        <form class="row">
            Test: <input type="text"></input>
            Create Item: <input type="text"></input>
        </form>

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
    
    </>
        );
}