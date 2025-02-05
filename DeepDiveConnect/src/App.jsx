import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.module.css";
import { Navbar } from "./components/Navbar";
import ChatBot from "./pages/home";
import Contacts from "./pages/contacts";
import Location from "./pages/location";
import Resources from "./pages/resources";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ChatBot />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/location" element={<Location />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/dashboard" className="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;