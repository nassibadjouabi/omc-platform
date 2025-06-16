{/* omc-platform/src/components/navbar.jsx */}
import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="nav-container">
            {/* Logo */}
            <div className="nav-logo">
                <img 
                    src="/path-to-your-logo.png" 
                    alt="Logo" 
                    className="logo-image"
                />
            </div>

            {/* Navigation Links */}
            <div className="nav-links">
                <button className="nav-link">Challenges</button>
                <button className="nav-link">Scoreboard</button>
                <button className="nav-link">Resources</button>
                <button className="nav-link">Activities</button>
            </div>
        </div>
    );
}

export default Navbar;