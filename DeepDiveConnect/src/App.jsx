import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProfileSettings from './components/ProfileSettings';
import ChatBot from './components/ChatBot';
import styles from './App.module.css';
import ContactCard from './components/ContactCard';

export default function App() {
  const [isLeftOpen, setIsLeftOpen] = useState(true);
  const [isRightOpen, setIsRightOpen] = useState(true);

  return (
    <>

      <div className={styles.appContainer}>
        
        <Sidebar isOpen={isLeftOpen} toggle={() => setIsLeftOpen(!isLeftOpen)} />
        
        <main className={styles.mainContent}>
          <ChatBot />
        </main>

        <ProfileSettings isOpen={isRightOpen} toggle={() => setIsRightOpen(!isRightOpen)} />
      </div>
    </>
  );
}