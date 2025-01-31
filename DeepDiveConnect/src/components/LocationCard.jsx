import React from "react";

function LocationCard({programName, address}) {
    return (
        <div className="location-card">
            <p>Program: {programName}</p>
            <p>Address: {address}</p>
        </div>
    )

}

export default LocationCard;