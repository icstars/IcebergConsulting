import { FiUser } from "react-icons/fi";
import PropTypes from "prop-types";
import styles from "./ProfileSettings.module.css";

export default function ProfileSettings({ isOpen, toggle }) {
  return (
    <>
      <div
        className={`${styles.settings} ${isOpen ? styles.open : styles.closed}`}
      >
        <button onClick={toggle} className={styles.toggleButton}>
          <FiUser size={24} />
        </button>
        {/* Add profile settings content here */}
      </div>
    </>
  );
}

ProfileSettings.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
