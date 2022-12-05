
import NavBarCustomer from "./NavBarCustomer";
import "./CustomerGUI.css";
 import { Button } from 'react'

import React, { Component, useState, useEffect} from 'react';
import {ToggleButtonGroup} from 'react';
import Items from "./Items";

import Login from "./LoginCustomer";

//import Transaction from "./tranHistory";
//import Employees from "./Employees";
//import Items from "./Items";
//import Reports from "./Reports";
//import Inventory from "./Inventory";
//import "./navMstyle.css"
import Toppings_Page from "./Toppings_Page"



var order_summary = [];
var temp_array = [];
var obj;
var Display_Order = [];

 function CustomerGUI() {
    let component
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
    
    const [toggle, setToggle] = useState(true)

    console.log(obj);

    obj = JSON.parse(items_data);

    switch (window.location.pathname) {

        case"/Toppings_Page":
            component= <Toppings_Page/>
            break;
        default: 
          component = <Items/>
          //return <Login/>;
          break
      }


      var content=  document.getElementById("content");
      var Price = document.getElementById("price");

      var stringorder= order_summary.toString();
      var stringprice= 0;
      var stringdislayorder = Display_Order.toString();
      var stringpricee= "";
    const handleTaco = (e)=>{
        if (order_summary.length == 0){
          order_summary.push("Taco");
        }else{
          order_summary.push(", Taco");
        }
        if (document.getElementById("Tacoo").style.backgroundColor!= "grey"){
          document.getElementById("Tacoo").style.backgroundColor="grey";
  
        }else {
          document.getElementById("Tacoo").style.backgroundColor="white";

        }


    }
    const handleBurrito = (e)=>{
    //   alert("Taco")
      if (order_summary.length == 0){
        order_summary.push("Burrito")
      }else{
        order_summary.push(", Burrito");
      } 

      if (document.getElementById("Burrito").style.backgroundColor!= "grey"){
        document.getElementById("Burrito").style.backgroundColor="grey";

      }else {
        document.getElementById("Burrito").style.backgroundColor="white";

      }




    }
    const handleSalad = (e)=>{
      if (order_summary.length == 0){
        order_summary.push("Salad");
      }else{
        order_summary.push(", Salad");
      }

  if (document.getElementById("Salad").style.backgroundColor!= "grey"){
          document.getElementById("Salad").style.backgroundColor="grey";
  
        }else {
          document.getElementById("Salad").style.backgroundColor="white";

        }
    }
    const handleBowl = (e)=>{
      if (order_summary.length == 0){
        order_summary.push("Bowl");
      }else{
        order_summary.push(", Bowl");
      }
      if (document.getElementById("Bowl").style.backgroundColor!= "grey"){
        document.getElementById("Bowl").style.backgroundColor="grey";

      }else {
        document.getElementById("Bowl").style.backgroundColor="white";

      }
    }
    const handleDrink= (e)=>{
      if (order_summary.length == 0){
        order_summary.push("Drink");


      }else{
        order_summary.push(", Drink");

      }
        Display_Order.push("Fountain Drink");
        if (document.getElementById("Drink").style.backgroundColor!= "grey"){
          document.getElementById("Drink").style.backgroundColor="grey";
  
        }else {
          document.getElementById("Drink").style.backgroundColor="white";

        }

    }
    const handleChips_and_Salsa= (e)=>{
      if (order_summary.length == 0){
        order_summary.push("Chips&Salsa");
      }else{
        order_summary.push(", Chips&Salsa");



      }
      if (document.getElementById("Chips and Salsa").style.backgroundColor!= "grey"){
        document.getElementById("Chips and Salsa").style.backgroundColor="grey";

      }else {
        document.getElementById("Chips and Salsa").style.backgroundColor="white";

      }
        Display_Order.push("Chips & Salsa");

    }
    const handleChips_and_Queso= (e)=>{
      if (order_summary.length == 0){
        order_summary.push("Chips&Queso");

      }else{
        order_summary.push(", Chips&Queso");
     

      }

      if (document.getElementById("Chips and Queso").style.backgroundColor!= "grey"){
        document.getElementById("Chips and Queso").style.backgroundColor="grey";

      }else {
        document.getElementById("Chips and Queso").style.backgroundColor="white";

      }
        Display_Order.push("Chips & Queso");

    }
    const handleChips_and_Guac= (e)=>{
      if (order_summary.length == 0){
        order_summary.push("Chips&Guac");

      }else{
        order_summary.push(", Chips&Guac");
      }

      if (document.getElementById("Chips and Guac").style.backgroundColor!= "grey"){
        document.getElementById("Chips and Guac").style.backgroundColor="grey";

      }else {
        document.getElementById("Chips and Guac").style.backgroundColor="white";

      }
      
        Display_Order.push("Chips & Guac");
    }




    const FinishOrder = (e)=>{
      for(var i = 0; i < order_summary.length; i++){
        if(order_summary[i] == ", Chips&Guac"){

        }
        if(order_summary[i] == "Chips&Guac"){
          
        }
        if(order_summary[i] == ", Chips&Queso"){
          
        }
        if(order_summary[i] == "Chips&Queso"){
          
        }
        if(order_summary[i] == ", Chips&Salsa"){
          
        }
        if(order_summary[i] == "Chips&Salsa"){
          // functionality for chips and salsa for inventory?
          // EDIT INV
        }
        if(order_summary[i] == ", Burrito"){
          
        }
        if(order_summary[i] == "Burrito"){
          
        }
        if(order_summary[i] == ", Bowl"){
          
        }
        if(order_summary[i] == "Bowl"){
          
        }
        if(order_summary[i] == ", Salad"){
          
        }
        if(order_summary[i] == "Salad"){
          
        }
        if(order_summary[i] == ", Taco"){
          
        }
        if(order_summary[i] == "Taco"){
          
        }
        if(order_summary[i] == "Beef"){
          
        }
        if(order_summary[i] == "Steak"){
          
        }
        if(order_summary[i] == "Medley"){
          
        }
        if(order_summary[i] == "Chicken"){
          
        }
        if(order_summary[i] == "Cheese"){
          
        }
        if(order_summary[i] == "Beans"){
          
        }
        if(order_summary[i] == "Rice"){
          
        }
        if(order_summary[i] == "Salsa"){
          
        }
        if(order_summary[i] == "SourCream"){
          
        }
        if(order_summary[i] == "Guac"){
          
        }
        if(order_summary[i] == "Queso"){
          
        }
        


      }
    }



    const handleOrder = (e)=>{

        stringorder= order_summary.join(" ");
        //stringprice= Display_Order.toString();
        stringdislayorder= Display_Order.join(", ");
        let Contents = stringorder;
        let DisplayOrder = stringdislayorder;
        document.getElementById("Contents").innerHTML = Contents;
        document.getElementById("DisplayOrder").innerHTML = DisplayOrder;
        if(document.getElementById("Tacoo").backgroundColor=="grey"){

        }

        if(document.getElementById("Burrito").backgroundColor=="grey"){

        }


        if(document.getElementById("Burrito").backgroundColor=="grey"){

        }

        if(document.getElementById("Salad").backgroundColor=="grey"){

        }
        if(document.getElementById("Chips and Guac").backgroundColor=="grey"){

        }

        
        stringprice=0;
      for(var i = 0; i < Display_Order.length; i++){
  //calculate for string price?
        stringprice += 5.01; //actually an integer
        
        //TODO query from database with Display_Order[i], these are from the items table in database/
        // also, Display_Order[i] has the exact name given from database, making querying easier
        // it would look something like GET PRICE FROM ITEMS WHERE name= display_order[i].


      }

      stringpricee= "Order Total: $" + parseFloat(stringprice).toFixed(2);

      let Price = stringpricee;

      document.getElementById("Price").innerHTML = Price;


    }
    const DeleteOrder = (e)=>{
        order_summary=[];
        Display_Order=[];

        stringorder= order_summary.toString();
        stringprice = "";  //resetting stringprice
        stringdislayorder= Display_Order.toString();
        
        let Contents = stringorder;
        let Price= stringprice;
        let DisplayOrder= stringdislayorder;
        document.getElementById("Contents").innerHTML = ""; 
        document.getElementById("Price").innerHTML = Price; 
        document.getElementById("DisplayOrder").innerHTML = DisplayOrder; 

      //  alert("Deleted Contents")   

    }

    const handleBeef = (e)=>{
 
      if (document.getElementById("BeefTaco").style.color!= "red"){
        document.getElementById("BeefTaco").style.color="red";

      }else{
        document.getElementById("BeefTaco").style.color="black";

      }
      
      order_summary.push("Beef");

    }
    const handleBeefTaco = (e)=>{
 
      if (document.getElementById("BeefTaco").style.color!= "red"){
        document.getElementById("SteakTaco").style.color="black";
        document.getElementById("MedleyTaco").style.color="black";
        document.getElementById("ChickenTaco").style.color="black";
        document.getElementById("BeefTaco").style.color="red";

      }else{
        document.getElementById("BeefTaco").style.color="black";

      }
      
      order_summary.push("Beef");

    }

    const handleSteakTaco = (e)=>{
 
      if (document.getElementById("SteakTaco").style.color!= "red"){
        document.getElementById("SteakTaco").style.color="red";
        document.getElementById("ChickenTaco").style.color="black";
        document.getElementById("BeefTaco").style.color="black";
        document.getElementById("MedleyTaco").style.color="black";


      }else{
        document.getElementById("SteakTaco").style.color="black";

      }
      
      order_summary.push("Beef");

    }
    const handleMedleyTaco = (e)=>{
 
      if (document.getElementById("MedleyTaco").style.color!= "red"){
        document.getElementById("MedleyTaco").style.color="red";
        document.getElementById("BeefTaco").style.color="black";
        document.getElementById("ChickenTaco").style.color="black";
        document.getElementById("SteakTaco").style.color="black";

      }else{
        document.getElementById("MedleyTaco").style.color="black";

      }
      
      order_summary.push("Beef");

    }
    const handleChickenTaco = (e)=>{
 
      if (document.getElementById("ChickenTaco").style.color!= "red"){
        document.getElementById("ChickenTaco").style.color="red";
        document.getElementById("BeefTaco").style.color="black";
        document.getElementById("MedleyTaco").style.color="black";
        document.getElementById("SteakTaco").style.color="black";
      }else{
        document.getElementById("ChickenTaco").style.color="black";

      }
      
      order_summary.push("Beef");

    }


    const handleBeefBurrito = (e)=>{
 
      if (document.getElementById("BeefBurrito").style.color!= "red"){
        document.getElementById("SteakBurrito").style.color="black";
        document.getElementById("MedleyBurrito").style.color="black";
        document.getElementById("ChickenBurrito").style.color="black";
        document.getElementById("BeefBurrito").style.color="red";

      }else{
        document.getElementById("BeefBurrito").style.color="black";

      }
      
      order_summary.push("Beef");

    }

    const handleSteakBurrito = (e)=>{
 
      if (document.getElementById("SteakBurrito").style.color!= "red"){
        document.getElementById("SteakBurrito").style.color="red";
        document.getElementById("MedleyBurrito").style.color="black";
        document.getElementById("ChickenBurrito").style.color="black";
        document.getElementById("BeefBurrito").style.color="black";

      }else{
        document.getElementById("SteakBurrito").style.color="black";

      }
      
      order_summary.push("Beef");

    }
    const handleMedleyBurrito = (e)=>{
 
      if (document.getElementById("MedleyBurrito").style.color!= "red"){
        document.getElementById("MedleyBurrito").style.color="red";
        document.getElementById("SteakBurrito").style.color="black";
        document.getElementById("ChickenBurrito").style.color="black";
        document.getElementById("BeefBurrito").style.color="black";
      }else{
        document.getElementById("MedleyBurrito").style.color="black";

      }
      
      order_summary.push("Beef");

    }
    const handleChickenBurrito = (e)=>{
 
      if (document.getElementById("ChickenBurrito").style.color!= "red"){
        document.getElementById("ChickenBurrito").style.color="red";
        document.getElementById("SteakBurrito").style.color="black";
        document.getElementById("MedleyBurrito").style.color="black";
        document.getElementById("BeefBurrito").style.color="black";
      }else{
        document.getElementById("ChickenBurrito").style.color="black";

      }
      
      order_summary.push("Beef");

    }









    const handleSteak = (e)=>{
      order_summary.push("Steak");
    }
    const handleMedley = (e)=>{
      order_summary.push("Medley");
    }
    const handleChicken = (e)=>{
      order_summary.push("Chicken");
    }
  
    const handleCheese = (e)=>{
      order_summary.push("Cheese");
    }
    const handleBeans = (e)=>{
      order_summary.push("Beans");
    }
    const handleRice = (e)=>{
      order_summary.push("Rice");
    }
    const handleSalsa = (e)=>{
      order_summary.push("Salsa");
    }
    const handleCream = (e)=>{
      order_summary.push("SourCream");
    }
    const handleGuac = (e)=>{
      order_summary.push("Guac");
    }
    const handleQueso = (e)=>{
      order_summary.push("Queso");
    }


      return (
        /*need to add on click event to show a menu customization options such as meat option and topping
        Should make it to where the other items disappear so you can customize then add then unhide and hide the customizations*/
        // add an add to order button along with a for loop to display the order summary on click
        <>
        <body className="body">
          <div className = "rowCust">
            <div className = "columnCust">
              <div class="dropdown">
              <button id= "Tacoo" onClick = {handleTaco}>
                  <img alt = "tacos" title = "tacos" className = "mainItems" src="https://www.isabeleats.com/wp-content/uploads/2022/09/chicken-tacos-small-5.jpg" />
                  <p>Tacos</p>
              </button>
                <div class="dropdown-content">

                  <button id="BeefTaco" onClick={handleBeefTaco}><p>Beef</p></button>

                  <button id="SteakTaco" onClick={handleSteakTaco}><p>Steak</p></button>
                  <button id="MedleyTaco" onClick={handleMedleyTaco}><p>Veggie Medley</p></button>
                  <button id="ChickenTaco" onClick={handleChickenTaco}><p>Chicken</p></button>
                  <button id="CheeseTaco" onClick={handleCheese}><p>Cheese</p></button>
                  <button id="BeansTaco" onClick={handleBeans}><p>Beans</p></button>
                  <button id="RiceTaco" onClick={handleRice}><p>Rice</p></button>
                  <button id="SalsaTaco" onClick={handleSalsa}><p>Salsa</p></button>
                  <button id="SourCreamTaco" onClick={handleCream}><p>Sour Cream</p></button>
                  <button id="GuacTaco" onClick={handleGuac}><p>Guacamole</p></button>
                  <button id="QuesoTaco" onClick={handleQueso}><p>Queso</p></button>
                </div>
              </div>
              <button id= "Drink" onClick = {handleDrink}>
                  <img alt = "drink" title = "drink" className = "mainItems" src="https://media.istockphoto.com/id/467108213/photo/red-cardboard-cup-with-a-straw.jpg?s=612x612&w=0&k=20&c=tkx8YkdZTYJWaslh571sKof3v78yrl_HapEvTawfGDE=" />
                  <p>Drink</p>
              </button>
            </div>
            <div className = "columnCust">
            <div class="dropdown">
              <button id= "Burrito" onClick = {handleBurrito}>
                  <img alt = "burrito" title = "burrito" className = "mainItems" src="https://media.istockphoto.com/id/1313361282/photo/mexican-rice-and-chorizo-sausage-wrap.jpg?s=612x612&w=0&k=20&c=7BgOT-kuluQIlZ50l-p-DNvajA66EeB_HIUvW6O_GPM=" />
                  <p>Burrito</p>
              </button>
                <div class="dropdown-content">
                  <button id= "BeefBurrito" onClick={handleBeefBurrito}><p>Beef</p></button>
                  <button id="SteakBurrito"onClick={handleSteakBurrito}><p>Steak</p></button>
                  <button id= "MedleyBurrito" onClick={handleMedleyBurrito}><p>Veggie Medley</p></button>
                  <button id= "ChickenBurrito" onClick={handleChickenBurrito}><p>Chicken</p></button>
                  <button onClick={handleCheese}><p>Cheese</p></button>
                  <button onClick={handleBeans}><p>Beans</p></button>
                  <button onClick={handleRice}><p>Rice</p></button>
                  <button onClick={handleSalsa}><p>Salsa</p></button>
                  <button onClick={handleCream}><p>Sour Cream</p></button>
                  <button onClick={handleGuac}><p>Guacamole</p></button>
                  <button onClick={handleQueso}><p>Queso</p></button>
                </div>
                </div>
              <button id= "Chips and Queso" onClick = {handleChips_and_Queso}>
                  <img alt = "chips and queso" title = "chips and queso" className = "mainItems" src="https://www.tacobueno.com/assets/food/nachos/Nachos_chips_queso_990x725.jpg" />
                  <p>Chips and Queso</p>
              </button>
            </div>
            <div className = "columnCust">
              <div class="dropdown">
              <button id= "Bowl" onClick = {handleBowl}>
                  <img alt = "bowl" title = "bowl" className = "mainItems" src="https://www.threelittlechickpeas.com/wp-content/uploads/2020/01/vegan-taco-bowl-with-lime-crema.jpg" />
                  <p>Bowl</p>
              </button>
                <div class="dropdown-content">
                  <button onClick={handleBeef}><p>Beef</p></button>
                  <button onClick={handleSteak}><p>Steak</p></button>
                  <button onClick={handleMedley}><p>Veggie Medley</p></button>
                  <button onClick={handleChicken}><p>Chicken</p></button>
                  <button onClick={handleCheese}><p>Cheese</p></button>
                  <button onClick={handleBeans}><p>Beans</p></button>
                  <button onClick={handleRice}><p>Rice</p></button>
                  <button onClick={handleSalsa}><p>Salsa</p></button>
                  <button onClick={handleCream}><p>Sour Cream</p></button>
                  <button onClick={handleGuac}><p>Guacamole</p></button>
                  <button onClick={handleQueso}><p>Queso</p></button>
                </div>
              </div>
              <button id= "Chips and Salsa" onClick = {handleChips_and_Salsa}>
                  <img alt = "chips and salsa" title = "chips and salsa" className = "mainItems" src="https://media.chefdehome.com/740/0/0/salsa/homemade-salsa.jpg" />
                  <p>Chips and Salsa</p>
              </button>
            </div>
            <div className = "columnCust">
              <div class="dropdown">
                <button id= "Salad" onClick = {handleSalad}>
                  <img alt = "salad" title = "salad" className = "mainItems" src="https://assets.bonappetit.com/photos/624215f8a76f02a99b29518f/3:4/w_1812,h_2416,c_limit/0328-ceasar-salad-lede.jpg" />
                  <p>Salad</p>
              </button>
                <div class="dropdown-content">
                  <button onClick={handleBeef}><p>Beef</p></button>
                  <button onClick={handleSteak}><p>Steak</p></button>
                  <button onClick={handleMedley}><p>Veggie Medley</p></button>
                  <button onClick={handleChicken}><p>Chicken</p></button>
                  <button onClick={handleCheese}><p>Cheese</p></button>
                  <button onClick={handleBeans}><p>Beans</p></button>
                  <button onClick={handleRice}><p>Rice</p></button>
                  <button onClick={handleSalsa}><p>Salsa</p></button>
                  <button onClick={handleCream}><p>Sour Cream</p></button>
                  <button onClick={handleGuac}><p>Guacamole</p></button>
                  <button onClick={handleQueso}><p>Queso</p></button>
                </div>
                </div>
              <button id= "Chips and Guac" onClick = {handleChips_and_Guac}>
                  <img alt = "chips and quac" title = "chips and quacamole" className = "mainItems" src="https://brokebankvegan.com/wp-content/uploads/2021/06/Guacamole-Feature.jpg" />
                  <p>Chips and Guacamole</p>
              </button>
            </div>
          </div>
          <table class="content">

          <p id="Contents">Contents</p>

          

          <p id="DisplayOrder">DisplayOrder</p>

           <p 
          
          id="Price">Price </p>
          </table>

            <div className = "orderButton" onClick = {handleOrder}>
                <p>ADD TO ORDER</p>
                {/* <button onClick = {handleOrder}>
                    
                </button> */
                //displayOrder()
                }
            </div>
            
            <div className = "orderButton" onClick = {FinishOrder}>
                <p>Finish Order</p>
                {/* <button onClick = {handleOrder}>
                    
                </button> */}
            </div>
            <div className = "orderButton" onClick = {DeleteOrder}>
                <p>Delete Contents</p>

                {/* <button onClick = {handleOrder}>
                    
                </button> */}
            </div>

            {/* Contents changes to whatever is in the order_summary string when add to order is pressed */}
        </body>






        </>

        )
            


}   
export default CustomerGUI;