import React, { Component }  from 'react';

/**
 * Creates Navigation bar for home page
 */
export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Site Name</a>
            <ul>
                <li><a href="/tranHistory">Transaction History</a></li>

                <li><a href="/employees">Employees</a></li>

                <li><a href="/inventory">Inventory</a></li>

                <li><a href="/items">Items</a></li>

                <li><a href="/reports">Reports</a></li>
            </ul>
        </nav>
    )
}