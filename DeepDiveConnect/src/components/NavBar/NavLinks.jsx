import "./NavBar.css";

const NavLinks = () => {
  return (
    <nav className="NavLinks">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#services">Services</a>
        </li>
        <li>
          <a href="/#about">About Us</a>
        </li>
        <li>
          <a href="/#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
