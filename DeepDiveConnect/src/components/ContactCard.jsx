import React from "react";

function ContactCard({firstName, lastName, department}) {
    return (
        <div className="contact-card">
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Department: {department}</p>
        </div>
    )

}

export default ContactCard;