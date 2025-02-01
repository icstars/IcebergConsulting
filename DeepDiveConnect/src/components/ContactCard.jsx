import React from "react";

function ContactCard({displayName, jobTitle, programName, email, businessPhone}) {
    return (
        <>
            <p>{displayName}</p>
            <p>Role: {jobTitle}</p>
            <p>Program: {programName}</p>
            <p>Email: {email}</p>
            <p>Phone: {businessPhone}</p>
        </>
    )

}

export default ContactCard;