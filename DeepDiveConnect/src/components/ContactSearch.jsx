import { useEffect, useState} from 'react';
import ContactCard from './ContactCard';

export default function ContactSearch() {

    const [contactResults, setContactResults] = useState([]);

    const [contactCards, setContactCards] = useState([]);

    useEffect(() => {
        let newContactCards = contactResults.map(c =>
            <ContactCard displayName={c.display_name}
                jobTitle={c.job_title}
                programName={c.program_name}
                email={c.email}
                businessPhone={c.business_phone}

            />
        )
        setContactCards(newContactCards);
    }, [contactResults]
    )

    async function searchContacts(searchData) {
        let response = await fetch(`http://localhost:3000/employees/${searchData}`);
        let contacts = await response.json();
        return contacts;
    }

    async function submitSearch(formData) {
        let searchData = formData.get('searchInput');
        let contactList = await searchContacts(searchData);
        setContactResults(contactList);
    }

    return (
        <>
            <div className='searchForm'>
                <form action={submitSearch}>
                    <input id='searchbox' type='text' name='searchInput' placeholder='Search...' />
                    <input id='submitBtn' type='submit' />
                </form>
            </div>
            <div className='searchResults'>
                <ul>
                    {contactCards}
                </ul>
            </div>
        </>
    )

};