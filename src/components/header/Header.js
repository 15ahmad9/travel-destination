import React from "react";
import './Header.css'
import Navbar from '../Navbar/Navbar';

function Header() {
    return (
        <header className="header">
            {/* <h1>Travel Destination</h1> */}
            <Navbar />
        </header>
    );
}

export default Header;