import "./navMstyle.css"

export default function NavBarManager() {
    return (
        <nav className="nav">
            <img alt = "Cabo Grill logo" title = "logo" className = "logo" src="https://api.dineoncampus.com/files/images/fb0f93d4-8920-4567-b1e6-70b3ee72690c.png" />
            <a href="/" className="site-title">Home Page</a>
            <ul className="nav">    
                <li><a href="/ManagerGUI/tranHistory" className="naventries">Transaction History</a></li>

                <li><a href="/ManagerGUI/Employees">Employees</a></li>

                <li><a href="/ManagerGUI/Inventory">Inventory</a></li>

                <li><a href="/ManagerGUI/Items">Items</a></li>

                <li><a href="/ManagerGUI/Reports">Reports</a></li>
            </ul>
        </nav>
    );
}