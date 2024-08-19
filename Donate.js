import React, { useState } from "react";
import axios from 'axios';

function Donate() {
    const [formData, setFormData] = useState({
        foodName: "",
        mealType: "",
        category: "",
        quantity: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Make a POST request to your server with form data
            await axios.post('http://localhost:5000/api/form-submit', formData);
            
            // Clear form data after successful submission
            setFormData({
                foodName: "",
                mealType: "",
                category: "",
                quantity: "",
                email: "",
                phone: "",
                address: "",
            });

            alert("Form data submitted successfully!");
        } catch (error) {
            console.error('Error submitting form data:', error);
            alert("Failed to submit form data. Please try again later.");
        }
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", maxWidth: "500px", margin: "0 auto" }}>
            <h2 style={{ marginBottom: "20px" }}>Donate Food</h2>
            <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="foodName">Food Name:</label>
                    <input
                        type="text"
                        id="foodName"
                        name="foodName"
                        value={formData.foodName}
                        onChange={handleChange}
                        style={{ marginLeft: "10px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label>Meal Type:</label>
                    <div>
                        <label style={{ marginRight: "10px" }}>
                            <input
                                type="radio"
                                name="mealType"
                                value="veg"
                                checked={formData.mealType === "veg"}
                                onChange={handleChange}
                            />Veg
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="mealType"
                                value="nonVeg"
                                checked={formData.mealType === "nonVeg"}
                                onChange={handleChange}
                            />
                            Non-Veg
                        </label>
                    </div>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label>Category:</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        style={{ marginLeft: "10px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                    >
                        <option value="">Select Category</option>
                        <option value="rawFood">Raw Food</option>
                        <option value="cookedFood">Cooked Food</option>
                        <option value="packedFood">Packed Food</option>
                    </select>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label>Quantity:</label>
                    <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        style={{ marginLeft: "10px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                    /> kgs
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ marginLeft: "10px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{ marginLeft: "10px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        style={{ marginLeft: "10px", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
                </div>


                <button type="submit" style={{ backgroundColor: "green", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer", transition: "background-color 0.3s ease" }}>Submit</button>
            </form>
        </div>
    );
}

export default Donate;
