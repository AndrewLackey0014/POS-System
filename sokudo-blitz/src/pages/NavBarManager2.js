import "./navMstyle.css"

export default function NavBarManager() {
    return (
        <nav className="nav">
            <img alt = "Cabo Grill logo" title = "logo" className = "logo" src="https://api.dineoncampus.com/files/images/fb0f93d4-8920-4567-b1e6-70b3ee72690c.png" />
            <a href="/" className="site-title">Home Page</a>
            <ul>    
                <li><a href="tranHistory">Transaction History</a></li>

                <li><a href="Employees">Employees</a></li>

                <li><a href="Inventory">Inventory</a></li>

                <li><a href="Items">Items</a></li>

                <li><a href="Reports">Reports</a></li>
            </ul>
        </nav>
    );
}