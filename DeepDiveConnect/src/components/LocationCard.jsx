import React from "react";

function LocationCard({programName, address, city, state, zipcode}) {
    return (
        <>
            <p>Program: {programName}</p>
            <p>Address: {address}</p>
            <p>City: {city} {state} {zipcode}</p>
        </>
    )

}

export default LocationCard;