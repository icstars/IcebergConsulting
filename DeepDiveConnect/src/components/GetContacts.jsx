import { useEffect, useState } from "react";
import ContactCard from "./ContactCard";

function GetContacts() {

    const [contactList, setContactList] = useState([]);

    useEffect(() => {
        async function getAllContacts() {
            let response = await fetch('http://localhost:3000/employees');
            let contacts = await response.json();

            let newContactList = contacts.map(c =>
                <ContactCard displayName={c.display_name}
                    jobTitle={c.job_title}
                    programName={c.program_name}
                    email={c.email}
                    businessPhone={c.business_phone}

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