import { useEffect, useState} from 'react';
import LocationCard from './LocationCard';

export default function ContactSearch() {

    const [locationResults, setLocationResults] = useState([]);

    const [locationCards, setLocationCards] = useState([]);

    useEffect(() => {
        let newLocationCards = locationResults.map(l =>
            <LocationCard programName={l.program_name}
            address={l.street_address}
            city={l.city} state={l.state}
            zipcode={l.postal_code}

        />  
        )
        setLocationCards(newLocationCards);
    }, [locationResults]
    )

    async function searchLocations(searchData) {
        let response = await fetch(`http://localhost:3000/employees/${searchData}`);
        let locations = await response.json();
        return locations;
    }

    async function submitSearch(formData) {
        let searchData = formData.get('searchInput');
        let locationList = await searchLocations(searchData);
        setLocationResults(locationList);
    }

    return (
        <>
            <div className='searchForm'>
                <form action={submitSearch}>
                    <input className='searchbox' type='text' name='searchInput' placeholder='Search...' />
                    <input className='submitBtn' type='submit' />
                </form>
            </div>
            <div className='searchResults'>
                <ul>
                    {locationCards}
                </ul>
            </div>
        </>
    )

};