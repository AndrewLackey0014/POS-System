
import NavBarCustomer from "./NavBarCustomer";
import "./CustomerGUI.css";
// import { Button } from 'react-native'

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
 function CustomerGUI() {
    let component
    
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
    
      var stringorder= order_summary.toString();


    const handleTaco = (e)=>{
        if (order_summary.length == 0){
          order_summary.push("Taco");
        }else{
          order_summary.push(", Taco");
        }
    }
    const handleBurrito = (e)=>{
    //   alert("Taco")
      if (order_summary.length == 0){
        order_summary.push("Burrito")
      }else{
        order_summary.push(", Burrito");
      } 

    }
    const handleSalad = (e)=>{
      if (order_summary.length == 0){
        order_summary.push("Salad");
      }else{
        order_summary.push(", Salad");
      }

    }
    const handleBowl = (e)=>{
      if (order_summary.length == 0){
        order_summary.push("Bowl");
      }else{
        order_summary.push(", Bowl");
      }
    }
    const handleDrink= (e)=>{
      if (order_summary.length == 0){
        order_summary.push("Drink");
      }else{
        order_summary.push(", Drink");
      }
    }
    const handleChips_and_Salsa= (e)=>{
      if (order_summary.length == 0){
        order_summary.push("Chips&Salsa");
      }else{
        order_summary.push(", Chips&Salsa");
      }
    }
    const handleChips_and_Queso= (e)=>{
      if (order_summary.length == 0){
        order_summary.push("Chips&Queso");
      }else{
        order_summary.push(", Chips&Queso");
      }
    }
    const handleChips_and_Guac= (e)=>{
      if (order_summary.length == 0){
        order_summary.push("Chips&Guac");
      }else{
        order_summary.push(", Chips&Guac");
      }
    }


    const FinishOrder = (e)=>{
       <li><a href="/CustomerGUI/Toppings_Page" className="naventries">Toppings</a></li>
      //  alert("Taco")
        alert("Finished Order")
    }



    const handleOrder = (e)=>{

        stringorder= order_summary.join(" ");
        let Contents = stringorder;
        document.getElementById("Contents").innerHTML = Contents;


    }
    const DeleteOrder = (e)=>{
        order_summary=[];
        stringorder= order_summary.toString();
        let Contents = stringorder;
        document.getElementById("Contents").innerHTML = Contents; 


    }

    const handleBeef = (e)=>{
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
              <button onClick = {handleTaco}>
                  <img alt = "tacos" title = "tacos" className = "mainItems" src="https://www.isabeleats.com/wp-content/uploads/2022/09/chicken-tacos-small-5.jpg" />
                  <p>Tacos</p>
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
              <button onClick = {handleDrink}>
                  <img alt = "drink" title = "drink" className = "mainItems" src="https://media.istockphoto.com/id/467108213/photo/red-cardboard-cup-with-a-straw.jpg?s=612x612&w=0&k=20&c=tkx8YkdZTYJWaslh571sKof3v78yrl_HapEvTawfGDE=" />
                  <p>Drink</p>
              </button>
            </div>
            <div className = "columnCust">
            <div class="dropdown">
              <button onClick = {handleBurrito}>
                  <img alt = "burrito" title = "burrito" className = "mainItems" src="https://media.istockphoto.com/id/1313361282/photo/mexican-rice-and-chorizo-sausage-wrap.jpg?s=612x612&w=0&k=20&c=7BgOT-kuluQIlZ50l-p-DNvajA66EeB_HIUvW6O_GPM=" />
                  <p>Burrito</p>
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
              <button onClick = {handleChips_and_Queso}>
                  <img alt = "chips and queso" title = "chips and queso" className = "mainItems" src="https://www.tacobueno.com/assets/food/nachos/Nachos_chips_queso_990x725.jpg" />
                  <p>Chips and Queso</p>
              </button>
            </div>
            <div className = "columnCust">
              <div class="dropdown">
              <button onClick = {handleBowl}>
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
              <button onClick = {handleChips_and_Salsa}>
                  <img alt = "chips and salsa" title = "chips and salsa" className = "mainItems" src="https://media.chefdehome.com/740/0/0/salsa/homemade-salsa.jpg" />
                  <p>Chips and Salsa</p>
              </button>
            </div>
            <div className = "columnCust">
              <div class="dropdown">
                <button onClick = {handleSalad}>
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
              <button onClick = {handleChips_and_Guac}>
                  <img alt = "chips and quac" title = "chips and quacamole" className = "mainItems" src="https://brokebankvegan.com/wp-content/uploads/2021/06/Guacamole-Feature.jpg" />
                  <p>Chips and Guacamole</p>
              </button>
            </div>
          </div>
          <table class="content">

          <p id="Contents">Contents</p>
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