import { myFunction } from "../functions";

export default function Inventory() {
        /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    // document.getElementById("myDropdown").setAttribute.onclick('onclick', alert("test"));
    //alert("test");
   
    // function myFunction() {
    //     alert("Test");
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

    return (
    <>
    <h1>Inventory</h1>
    <div>
        
        <div class="dropdown">
        <button class="dropbtn">Select Item</button>
            <div id ="myDropdown" onclick={myFunction} class="dropdown-content">
                <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 1</a>
                <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 2</a>
                <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 3</a>
                <a href="https://www.w3schools.com/howto/howto_js_dropdown.asp">Link 4</a>
            </div>
        </div>
        

        <form>Order Amount: <input type="text"></input></form>

        <button class="order_inv">Order Inventory</button>
    </div>
    </>
);
}