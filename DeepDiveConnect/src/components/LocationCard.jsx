import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";


function LocationCard({programName, address, city, state, zipcode}) {
    return (
        <>
            <p><i class="bi bi-people-fill"></i>  {programName}</p>
            <p><i class="bi bi-geo-alt-fill"></i>  {address}</p>
            <p>{city} {state} {zipcode}</p>
        </>
    )

}

export default LocationCard;