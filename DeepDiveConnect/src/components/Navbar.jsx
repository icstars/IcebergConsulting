import { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img className="logo" src="./Images/ddlogo.png" alt="Logo Deep Dive" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li className="selection">
          <NavLink to="/contacts">
            <img className="icon" src="./Images/contacts.svg" alt="resources" />
            <br></br>
            <p>Contacts</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/location">
            <img className="icon" src="./Images/location.svg" alt="resources" />
            <br></br>
            <p>Locations</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources">
            <img
              className="iconbook"
              src="./Images/resources.svg"
              alt="resources"
            />
            <br></br>
            <p>Resources</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
