import "./navMstyle.css"

export default function NavBarManager() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Home Page</a>
            <ul>    
                <li><a href="ManagerGUI/tranHistory">Transaction History</a></li>

                <li><a href="ManagerGUI/Employees">Employees</a></li>

                <li><a href="ManagerGUI/Inventory">Inventory</a></li>

                <li><a href="ManagerGUI/Items">Items</a></li>

                <li><a href="ManagerGUI/Reports">Reports</a></li>
            </ul>
        </nav>
    );
}