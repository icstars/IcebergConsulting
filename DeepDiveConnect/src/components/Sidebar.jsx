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
        <li>hola</li>
        <li>que mas</li>
        <li>como</li>
        <li>te ha ido</li>
      </ul>
      }
    </div>
  );
}

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
  };