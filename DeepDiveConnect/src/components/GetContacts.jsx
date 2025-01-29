import { useEffect, useState } from "react";
import ContactCard from "./ContactCard";

function GetContacts() {

    const [contactList, setContactList] = useState([]);

    useEffect(() => {
        async function getAllContacts() {
            let response = await fetch('http://localhost:3000/contacts');
            let contacts = await response.json();

            let newContactList = contacts.map(e =>
                <ContactCard firstName={e.first_name}
                    lastName={e.last_name}
                    department={e.department}
                />
            )
            setContactList(newContactList);
        }
        getAllContacts();


        
    }, []
    )

    return (
        <>
            <div>
                <ul>
                    {contactList}
                </ul>
            </div>
        </>
    )
}

export default GetContacts;