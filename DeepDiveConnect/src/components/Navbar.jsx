import { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img className="logo" src="./src/assets/Images/ddlogo.png" alt="Logo Deep Dive" />
      </Link>
      <SearchBar />
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/contacts">
            <img className="icon" src="./src/assets/Images/contacts.svg" alt="resources" />
            <br></br>
            <p>Contacts</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/location">
            <img className="icon" src="./src/assets/Images/location.svg" alt="resources" />
            <br></br>
            <p>Locations</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources">
            <img
              className="icon"
              src="./src/assets/Images/resources.svg"
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
