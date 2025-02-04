import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function ContactCard({displayName, jobTitle, programName, email, businessPhone}) {
    return (
        <div className='card'>
            <p><i class="bi bi-person-fill"></i>  {displayName}</p>
            <p><i class="bi bi-briefcase-fill"></i>  {jobTitle}</p>
            <p><i class="bi bi-geo-alt-fill"></i>  {programName}</p>
            <p><i class="bi bi-envelope-fill"></i>  {email}</p>
            <p><i class="bi bi-telephone-fill"></i>  {businessPhone}</p>
        </div>
    )

}

export default ContactCard;