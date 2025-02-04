import { useEffect, useState } from "react";
import LocationCard from "./LocationCard";

function GetLocations() {

    const [locationList, setLocationList] = useState([]);

    useEffect(() => {
        async function getAllLocations() {
            let response = await fetch('http://localhost:3000/employees');
            let locations = await response.json();

            let newLocationList = locations.map(l =>
                <LocationCard programName={l.program_name}
                    address={l.street_address}
                    city={l.city} state={l.state}
                    zipcode={l.postal_code}

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