import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FootIcons from "./components/DeepDiveFooter.jsx";
import NavBar from './components/NavBar/NavBar.jsx';

createRoot(document.getElementById("root")).render(
  <>
    <NavBar />
    <br>
    </br>
    <App />
    <FootIcons />
  </>
);