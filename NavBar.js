import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const navContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#000080',
        borderBottom: '2px solid #111',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
    };

    const logoStyle = {
        maxWidth: '150px',
    };

    const linkStyle = {
        textDecoration: 'none',
        padding: '10px',
        margin: '0 10px',
        color: '#fff',
        fontSize: '1.2rem',
        fontFamily: 'Arial, sans-serif',
        transition: 'color 0.3s ease',
    };

    const hoverStyle = {
        color: '#6fffd4',
    };




    

    return (
        <div>
            <div className="navbar" style={navContainerStyle}>
                <div>
                    <img src="logo.png" alt="Logo" style={logoStyle} />
                </div>
                <div>
                    {/* Links to different pages */}
                    <NavLink exact to="/" style={linkStyle} activeStyle={hoverStyle}>
                        Home
                    </NavLink>
                    <NavLink to="/new" style={linkStyle} activeStyle={hoverStyle}>
                        Admin
                    </NavLink>
                    <NavLink to="/about" style={linkStyle} activeStyle={hoverStyle}>
                        About
                    </NavLink>
                    <NavLink to="/dashboard" style={linkStyle} activeStyle={hoverStyle}>
                        Contact Us
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
