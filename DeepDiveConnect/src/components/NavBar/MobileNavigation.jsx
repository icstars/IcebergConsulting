import NavLinks from "./NavLinks";
import "./NavBar.css";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

const MobileNavigation = () => {
  const [click, setclick] = useState(false);

  const Hamburger = (
    <MdOutlineMenu
      className="HamburgerMenu"
      size="30px"
      color="black"
      onClick={() => setclick(!click)}
    />
  );

  return (
    <nav className="MobileNavigation">
      <h2 className="logo">Logo</h2>
      {Hamburger}
      {click && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
