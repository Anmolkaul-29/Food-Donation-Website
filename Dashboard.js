import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './index.css';


function Dashboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [donations, setDonations] = useState([]);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a GET request to /api/get-donations with the email
    try {
      const response = await axios.get(`/api/get-donations?email=${email}`);
      setDonations(response.data);
    } catch (error) {
      console.error('Error retrieving donation data:', error);
      alert("Failed to retrieve donation data. Please try again later.");
    }
  };

  return (
    <div className="form-container">
      
      <h1>User Information</h1>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      {donations.length > 0 && ( // Check if there are donations before rendering the table
        <div>
          <h2>Donation History</h2>
          <table>
            <thead>
              <tr>
                <th>Food Name</th>
                <th>Meal Type</th>
                <th>Category</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => (
                <tr key={donation._id}>
                  <td>{donation.foodName}</td>
                  <td>{donation.mealType}</td>
                  <td>{donation.category}</td>
                  <td>{donation.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
