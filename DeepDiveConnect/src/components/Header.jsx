import { useState } from "react";
import styles from "/src/App.module.css";
import ddclogo from "/src/assets/Images/ddclogo.png"
import ProfileSettings from "./ProfileSettings";
import Sidebar from "./Sidebar";

function Header() {
  const [isLeftOpen, setIsLeftOpen] = useState(true);
  const [isRightOpen, setIsRightOpen] = useState(true);
  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.appContainer}>
          <Sidebar
            isOpen={isLeftOpen}
            toggle={() => setIsLeftOpen(!isLeftOpen)}
          />
          <img className="logo" src={ddclogo} alt="fireSpot" height={100}/>
          <ProfileSettings
            isOpen={isRightOpen}
            toggle={() => setIsRightOpen(!isRightOpen)}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
