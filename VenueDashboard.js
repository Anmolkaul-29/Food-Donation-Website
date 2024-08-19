import React from "react";

function VenueDashboard({ location }) {
    // Extract the query parameters from the location object
    const params = new URLSearchParams(location.search);
    const foodType = params.get("foodType");
    const quantity = params.get("quantity");
    const address = params.get("address");

    return (
        <div>
            <h2>Venue Dashboard</h2>
            <div>
                <p>Food Type: {foodType}</p>
                <p>Quantity: {quantity}</p>
                <p>Address: {address}</p>
            </div>
        </div>
    );
}

export default VenueDashboard;
