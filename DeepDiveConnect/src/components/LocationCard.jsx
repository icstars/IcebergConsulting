import React from "react";

function LocationCard({location, address}) {
    return (
        <div className="location-card">
            <p>Location: {location}</p>
            <p>Address: {address}</p>
            <p></p>
        </div>
    )
}

export default LocationCard;