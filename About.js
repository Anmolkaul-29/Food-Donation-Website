import React from "react";

function About() {
    return (
        <div style={aboutStyle}>
            <h1 style={welcomeStyle}>"Welcome to Food Donate"</h1>
            <br />
            <div style={contentContainerStyle}>
                <h2 style={headerStyle}>About Us</h2>
                <p style={paragraphStyle}>
                    We are a team of passionate individuals committed to addressing the issue of food waste in India. Our goal is to create a system that connects food donors with charities and NGOs, while also reducing the environmental impact of food waste.
                </p>
            </div>
        </div>
    )
}

// Define styles
const aboutStyle = {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#f8f9fa', // Set the background color
};

const welcomeStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    fontFamily: 'Montserrat, sans-serif',
};

const contentContainerStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
};

const headerStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#007bff', // Change the header color to blue
    marginBottom: '30px',
    fontFamily: 'Montserrat, sans-serif',
};

const paragraphStyle = {
    fontSize: '20px',
    lineHeight: '1.6',
    color: '#555',
    fontFamily: 'Roboto, sans-serif',
    marginBottom: '20px',
};

export default About;
