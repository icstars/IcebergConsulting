import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FootIcons from "./components/DeepDiveFooter.jsx";
import Header from "./components/Header.jsx"

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <App />
    <FootIcons />
  </>
);