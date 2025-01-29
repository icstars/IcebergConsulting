import { useEffect, useState } from "react";
import LocationCard from "./LocationCard";

function GetLocations() {

    const [locationList, setLocationList] = useState([]);

    useEffect(() => {
        async function getAllLocations() {
            let response = await fetch('http://localhost:3000/contacts');
            let locations = await response.json();

            let newLocationList = locations.map(l =>
                <LocationCard location={l.location}
                    address={l.address}
                />
            )
            setLocationList(newLocationList);
        }
        getAllLocations();


        
    }, []
    )

    return (
        <>
            <div>
                <ul>
                    {locationList}
                </ul>
            </div>
        </>
    )
}

export default GetLocations;