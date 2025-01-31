import React from "react";

function ContactCard({displayName, jobTitle, programName, email, businessPhone}) {
    return (
        <div className="contact-card">
            <p>Name: {displayName}</p>
            <p>Role: {jobTitle}</p>
            <p>Program: {programName}</p>
            <p>Email: {email}</p>
            <p>Phone: {businessPhone}</p>
        </div>
    )

}

export default ContactCard;