import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";


function LocationCard({programName, address, city, state, zipcode}) {
    return (
        <div className='searchCard'>
            <p><i class="bi bi-people-fill"></i>  {programName}</p>
            <p><i class="bi bi-geo-alt-fill"></i>  {address}</p>
            <p>{city} {state} {zipcode}</p>
        </div>
    )

}

export default LocationCard;