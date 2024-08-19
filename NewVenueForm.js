// NewVenueForm.js

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './index.css';

function NewVenueForm() {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Send a POST request to the server with login data
            await axios.post('http://localhost:5000/api/login-submit', { username, password });
            
            // Clear form data after successful submission
            setUsername("");
            setPassword("");

            alert("Login data submitted successfully!");
            // Redirect to the next page after successful submission
            history.push(`/deliver-details?username=${username}&password=${password}`);
        } catch (error) {
            console.error('Error submitting login data:', error);
            alert("Failed to submit login data. Please try again later.");
        }
    };

    return (
        <div className="form-container">
           <h4 class="login-heading">Login</h4>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewVenueForm;
