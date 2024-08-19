import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './index.css';

function Search({ onSearch }) {
    const [currentSearch, setCurrentSearch] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(currentSearch);
    }

    const buttonStyle = {
      
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        marginRight: '10px', // Add margin to separate buttons
    };

    const hoverStyle = {
        backgroundColor: '#0056b3',
    };

    const donateButtonStyle = {
        position: 'absolute',
        top: '150px',
        left: '45%',
        transform: 'translateX(-50%)',
        textDecoration: 'none',
        border: 'none',
        padding: '12px 40px',
        fontSize: '20px',
        backgroundColor: 'green',
        color: '#fff',
        borderRadius: '5px',
        boxShadow: '7px 6px 28px 1px rgba(0, 0, 0, 0.24)',
        cursor: 'pointer',
        outline: 'none',
        transition: '2.0s all',
        zIndex: '1', // Ensure donate button appears above other elements
    };

    const donateButtonActiveStyle = {
        transform: 'scale(0.98)',
        boxShadow: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)',
    };

    return (
        <div>
            <form className="searchbar" onSubmit={handleSubmit}>
                {/* Add your search input field and submit button here */}
            </form>
            <NavLink 
                to="/Donate" 
                style={{ ...donateButtonStyle, ...donateButtonActiveStyle }} 
                activeStyle={{ ...donateButtonStyle, ...donateButtonActiveStyle }}
               
            >
                Donate Food
            </NavLink>
            <div className="banner">
                <img src="image.jpg" alt="Image" className="banner-image" style={{ maxWidth: '90%', height: 'auto' }} />
                <div className="door-pickup-text">Door Pickup</div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div style={{ fontWeight: 'bold', color: 'black', fontSize: '30px', marginLeft: '10px' }}>Your Food will be immediately collected and sent to needy people</div>
<span style={{ fontWeight: 'bold', color: 'green', fontSize: '30px', marginLeft: '10px' }}>Join us in making a difference!</span>

                <br></br>
                <img src="gifdel.gif" alt="GIF" className="gif-image" />
            </div>
        </div>
    );
}

export default Search;
