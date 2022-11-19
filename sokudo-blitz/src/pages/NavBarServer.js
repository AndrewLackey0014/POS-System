import "./navMstyle.css"

export default function Navbar() {
    return (
        <nav>

            <ul class='navbar'>
                <img alt = "Cabo Grill logo" title = "logo" className = "logonav" src="https://api.dineoncampus.com/files/images/fb0f93d4-8920-4567-b1e6-70b3ee72690c.png" />

                <a href="/" class="nav_title">Home Page</a>

                <a href="/ServerGUI/Items" class="nav_title">Items</a>

                <a href="/ServerGUI/Reports" class="nav_title">Reports</a>
            </ul>
        </nav>
    )
}