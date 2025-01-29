import { FiMenu } from 'react-icons/fi';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';

export default function Sidebar({ isOpen, toggle }) {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <button onClick={toggle} className={styles.toggleButton}>
        <FiMenu size={24} />
      </button>
      {<ul>
        <li>Contacts</li>
        <li>Locations</li>
        <li>Clinical Resources</li>
        <li>Policy</li>
      </ul>
      }
    </div>
  );
}

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
  };