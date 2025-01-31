import { FiMenu } from "react-icons/fi";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from "prop-types";
import styles from "./Sidebar.module.css";
import useState from "react";
// import App from "../App";


export default function Sidebar({ isOpen, toggle }) {

  // const [activeBodyContent, setActiveBodyContent] = useState(0);

  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <button onClick={toggle} className={styles.toggleButton}>
        <FiMenu size={24} />
      </button>

      <div className="nav-buttons">
        <p><button onClick={() => (window.location.href = "/contacts")}>Contacts</button></p>
        <p><button onClick={() => (window.location.href = "/locations")}>Locations</button></p>
        <p><button onClick={() => (window.location.href = "/resources")}>Resources</button></p>

      </div>
    </div>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
