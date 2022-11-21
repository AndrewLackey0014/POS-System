
import NavBarCustomer from "./NavBarCustomer";
import "./CustomerGUI.css";
// import { Button } from 'react-native'

import Items from "./Items";

//import Transaction from "./tranHistory";
//import Employees from "./Employees";
//import Items from "./Items";
//import Reports from "./Reports";
//import Inventory from "./Inventory";
//import "./navMstyle.css"
import Toppings_Page from "./Toppings_Page"



var order_summary = ["asd","aggg","Boosakc"];
 function CustomerGUI() {
    let component
    
    switch (window.location.pathname) {

        case"/Toppings_Page":
            component= <Toppings_Page/>
            break;
        default: 
        
          component = <Items/>
          break
      }


      var content=  document.getElementById("content");
    
      order_summary[0] = "Test";
      var stringorder= order_summary.toString();

      const handleClick = (e)=>{
  //      alert("Test")
    }
    const handleTaco = (e)=>{
        <li><a href="/CustomerGUI/Toppings_Page" className="naventries">Toppings</a></li>
     //   alert("Taco")
        order_summary.push("Taco");

    }
    const handleDrink= (e)=>{
        alert("Drink")
        order_summary.push("Drink");
    }
    const handleChips_and_Salsa= (e)=>{
        //alert("Taco")
        order_summary.push("Chips&Salsa");
    }
    const handleChips_and_Queso= (e)=>{
       // alert("Taco")
        order_summary.push("Chips&Queso");
    }
    const handleChips_and_Guac= (e)=>{
       // alert("Taco")
        order_summary.push("Chips&Guac");
    }


    const FinishOrder = (e)=>{
     //   <li><a href="/CustomerGUI/Toppings_Page" className="naventries">Toppings</a></li>
      //  alert("Taco")
        alert("Finished Order")
    }



    const handleOrder = (e)=>{

        stringorder= order_summary.toString();
        let Contents = stringorder;
        document.getElementById("Contents").innerHTML = Contents;



    //    displayOrder();
        alert("Added to order")


    }
    const DeleteOrder = (e)=>{
        order_summary=[];
        stringorder= order_summary.toString();
        let Contents = stringorder;
        document.getElementById("Contents").innerHTML = Contents;
    //    displayOrder();
        alert("Deleted Contents")   


    }
      return (
        /*need to add on click event to show a menu customization options such as meat option and topping
        Should make it to where the other items disappear so you can customize then add then unhide and hide the customizations*/
        // add an add to order button along with a for loop to display the order summary on click
        <>
        <body className="body">
            <div className = "rowItems">
            <button onClick = {handleTaco}>
                <img alt = "tacos" title = "tacos" className = "mainItems" src="https://www.isabeleats.com/wp-content/uploads/2022/09/chicken-tacos-small-5.jpg" />
                <p>Tacos</p>
               
            </button>
            <button onClick = {handleClick}>
                <img alt = "bowl" title = "bowl" className = "mainItems" src="https://www.threelittlechickpeas.com/wp-content/uploads/2020/01/vegan-taco-bowl-with-lime-crema.jpg" />
                <p>Bowl</p>
            </button>
            </div>
            <div className = "columnItems">
            <button onClick = {handleClick}>
                <img alt = "burrito" title = "burrito" className = "mainItems" src="https://media.istockphoto.com/id/1313361282/photo/mexican-rice-and-chorizo-sausage-wrap.jpg?s=612x612&w=0&k=20&c=7BgOT-kuluQIlZ50l-p-DNvajA66EeB_HIUvW6O_GPM=" />
                <p>Burrito</p>
            </button>
            <button onClick = {handleClick}>
                <img alt = "salad" title = "salad" className = "mainItems" src="https://assets.bonappetit.com/photos/624215f8a76f02a99b29518f/3:4/w_1812,h_2416,c_limit/0328-ceasar-salad-lede.jpg" />
                <p>Salad</p>
            </button>
            </div>
            <div className = "columnItems">
            <button onClick = {handleDrink}>
                <img alt = "drink" title = "drink" className = "mainItems" src="https://media.istockphoto.com/id/467108213/photo/red-cardboard-cup-with-a-straw.jpg?s=612x612&w=0&k=20&c=tkx8YkdZTYJWaslh571sKof3v78yrl_HapEvTawfGDE=" />
                <p>Drink</p>
            </button>
            <button onClick = {handleChips_and_Salsa}>
                <img alt = "chips and salsa" title = "chips and salsa" className = "mainItems" src="https://media.chefdehome.com/740/0/0/salsa/homemade-salsa.jpg" />
                <p>Chips and Salsa</p>
            </button>
            </div>
            <div>
            <button onClick = {handleChips_and_Queso}>
                <img alt = "chips and queso" title = "chips and queso" className = "mainItems" src="https://www.tacobueno.com/assets/food/nachos/Nachos_chips_queso_990x725.jpg" />
                <p>Chips and Queso</p>
            </button>
            <button onClick = {handleChips_and_Guac}>
                <img alt = "chips and quac" title = "chips and quacamole" className = "mainItems" src="https://brokebankvegan.com/wp-content/uploads/2021/06/Guacamole-Feature.jpg" />
                <p>Chips and Guacamole</p>
            </button>
            </div>


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
            <p id="Contents">Contents</p>
   
           <img alt = "Cabo Grill logo" title = "logo" className = "logo" src="https://api.dineoncampus.com/files/images/fb0f93d4-8920-4567-b1e6-70b3ee72690c.png" />
        </body>
                order_summary

        //need to add total and order summary window







        </>

        )
            


}   
export default CustomerGUI;