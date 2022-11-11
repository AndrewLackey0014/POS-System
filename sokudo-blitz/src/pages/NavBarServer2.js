import "./navMstyle.css"

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Home Page</a>
            <ul>


                <li><a href="Items">Items</a></li>

                <li><a href="Reports">Reports</a></li>
            </ul>
        </nav>
    );
}