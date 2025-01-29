import ChatBot from "./components/ChatBot";
import styles from './App.module.css';
import Header from "./components/Header";
// import styles from "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <main className={styles.mainContent}>
        <ChatBot />
      </main>
    </>
  );
}
