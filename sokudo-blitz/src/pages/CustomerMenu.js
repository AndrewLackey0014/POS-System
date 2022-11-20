import "./CustomerGUI.css";
import Toppings_Page from "./Toppings_Page";




function CustomerMenu(){
const handleClick = (e)=>{
    alert("Test")
}
const handleTaco = (e)=>{
    <li><a href="/CustomerGUI/Toppings_Page" className="naventries">Transaction History</a></li>
  //  alert("Taco")

}
const order_summary = [];
order_summary[0] = "Test";

const handleOrder = (e)=>{
    
}
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
        <button onClick = {handleClick}>
            <img alt = "drink" title = "drink" className = "mainItems" src="https://media.istockphoto.com/id/467108213/photo/red-cardboard-cup-with-a-straw.jpg?s=612x612&w=0&k=20&c=tkx8YkdZTYJWaslh571sKof3v78yrl_HapEvTawfGDE=" />
            <p>Drink</p>
        </button>
        <button onClick = {handleClick}>
            <img alt = "chips and salsa" title = "chips and salsa" className = "mainItems" src="https://media.chefdehome.com/740/0/0/salsa/homemade-salsa.jpg" />
            <p>Chips and Salsa</p>
        </button>
        </div>
        <div>
        <button onClick = {handleClick}>
            <img alt = "chips and queso" title = "chips and queso" className = "mainItems" src="https://www.tacobueno.com/assets/food/nachos/Nachos_chips_queso_990x725.jpg" />
            <p>Chips and Queso</p>
        </button>
        <button onClick = {handleClick}>
            <img alt = "chips and quac" title = "chips and quacamole" className = "mainItems" src="https://brokebankvegan.com/wp-content/uploads/2021/06/Guacamole-Feature.jpg" />
            <p>Chips and Guacamole</p>
        </button>
        </div>
        <div className = "orderButton" onClick = {handleOrder}>
            <p>ADD TO ORDER</p>
            {/* <button onClick = {handleOrder}>
                
            </button> */}
        </div>
        <img alt = "Cabo Grill logo" title = "logo" className = "logo" src="https://api.dineoncampus.com/files/images/fb0f93d4-8920-4567-b1e6-70b3ee72690c.png" />
    </body>
    //need to add total and order summary window

    </>
}

    export default CustomerMenu;