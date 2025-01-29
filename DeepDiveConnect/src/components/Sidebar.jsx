import { FiMenu } from "react-icons/fi";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from "prop-types";
import styles from "./Sidebar.module.css";
// import App from "../App";
// import Contacts from "../pages/contacts";
// import Location from "../pages/location";
// import Resources from "../pages/resources";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <button onClick={toggle} className={styles.toggleButton}>
        <FiMenu size={24} />
      </button>
      <h1>hi</h1>
    </div>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
