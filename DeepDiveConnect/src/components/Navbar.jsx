import { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img className="logo"
        src="./public/Images/ddclogosvg.svg"
        alt ="Logo Deep Dive"
        />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/location">Locations</NavLink>
        </li>
        <li>
          <NavLink to="/resources">Resources</NavLink>
        </li>
      </ul>
    </nav>
  );
};