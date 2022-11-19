import "./navMstyle.css"

export default function NavBarManager() {
    return (
        <nav>
            
            <ul class="navbar">  
                <img alt = "Cabo Grill logo" title = "logo" className = "logo" src="https://api.dineoncampus.com/files/images/fb0f93d4-8920-4567-b1e6-70b3ee72690c.png" />

                <a href="/" class="nav_title">Home Page</a>

                <a href="/ManagerGUI/tranHistory" class="nav_title">Transaction History</a>

                <a href="/ManagerGUI/Employees" class="nav_title">Employees</a>

                <a href="/ManagerGUI/Inventory" class="nav_title">Inventory</a>

                <a href="/ManagerGUI/Items" class="nav_title">Items</a>

                <a href="/ManagerGUI/Reports" class="nav_title">Reports</a>
            </ul>
        </nav>
    );
}