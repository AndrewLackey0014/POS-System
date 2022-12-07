import "./Items.css"
import React, { Component, useState, useEffect, useRef} from 'react';


const temp_data = [];
var obj;


function getCurrentURL () {
    return window.location.href
}


export default function Items() {
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');
    const [id, setId] = useState('');



    const url = getCurrentURL()
    var backend_url = "";
    // console.log(url);
    if (url.substring(0,21) == 'http://localhost:3000') {
      backend_url = 'http://localhost:3001/';
    }
    else {
      backend_url = 'https://sokudoblitzbackend.onrender.com/';
    }


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
    function handleItemCreate() {
        let price_amount = inputRef1.current.value;
        let name= inputRef2.current.value;
        let id = inputRef3.current.value;


        fetch(backend_url+'create_item', {
          method: 'POST',
          headers: {  
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({price_amount, name, id}),
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
            getItems();
          });
    }
    function handleUpdateItem() {
        let price_amount = inputRef1.current.value;
        var select = document.getElementById('items');
        var item_id = select.options[select.selectedIndex].value;
        // console.log(value); // en


        fetch(backend_url+'item_update', {
        method: 'POST',
        headers: {  
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({price_amount, item_id}),
        })
        .then(response => {
            return response.text();
        })
        .then(data => {
            alert(data);
            getItems();
        });
    }





    obj = JSON.parse(items_data);
    // console.log(obj);


    const handlePrice = event => {
        setPrice(event.target.value);
      };
    const handleName = event => {
        setName(event.target.value);
    };
    const handleID = event => {
        setId(event.target.value);
      };
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);


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

                <form>Price: <input type="text"></input></form>

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
                <div class="dropdown row">
                    {/* <button class="dropbtn">Select Item</button> */}

                 
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

                {/* <form class="row"> */}
                <div class = "text">
                    <input placeholder="TEST" type="text"></input>
                    <input placeholder="CREATE ITEM" type="text"></input>
                {/* </form> */}

                {/* <form> */}
                    <input placeholder="ORDER AMOUNT"type="text"></input>
                    {/* </form> */}
                </div>
                <button class="order_inv">Order Inventory</button>
                {/* <form class="row">
                    Update Name: <input type="text"></input>
                </form> */}
                <form class="row">
                    New Item Name: <input type="text" ref={inputRef2} onChange={handleName} value={name}></input>
                    New Item ID: <input type="text" ref={inputRef3} onChange={handleID} value={id}></input>

                </form>
                
                <form>Price: <input type="text" ref={inputRef1} onChange={handlePrice} value={price}></input></form>


                <div>
                    <button class="order_inv"  onClick={handleUpdateItem}>Update Item</button>
                    <button class="order_inv"  onClick={handleItemCreate}>Create New Item</button>
                </div>


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
    {component}
    </>
        );
}