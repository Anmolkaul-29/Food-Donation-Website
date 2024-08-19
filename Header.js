import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  const buttonStyle = {
    padding: '0px 0px',
    backgroundColor: isDarkMode ? '#333' : '#ddd',
    color: isDarkMode ? '#fff' : '#333',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    position: 'fixed',
    bottom: '-100px', // Position the button 20px from the bottom
    left: '50%', // Center the button horizontally
    transform: 'translateX(-50%)', // Center the button horizontally
  };

  const hoverStyle = {
    backgroundColor: isDarkMode ? '#666' : '#ccc',
    color: isDarkMode ? '#fff' : '#333',
  };

  return (
    <header>
      <h1> </h1>
      <button
        style={buttonStyle}
        onClick={onDarkModeClick}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = hoverStyle.backgroundColor;
          e.target.style.color = hoverStyle.color;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = buttonStyle.backgroundColor;
          e.target.style.color = buttonStyle.color;
        }}
      >
        {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
}

export default Header;
