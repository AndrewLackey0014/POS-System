import "./navMstyle.css"

export default function NavBarManager() {
    return (
        <nav className="nav">
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