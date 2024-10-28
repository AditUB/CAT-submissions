// Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; 
import { GiPumpkinLantern } from "react-icons/gi";

// Function:- When the button is clicked changes the isOpen to the opposite of the previous value
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

//Navbar Component
    return (
        <nav className="navbar">
            <div className="logo">Halloween</div>
            <div className="toggle" onClick={toggleNavbar}>
                <GiPumpkinLantern />
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;