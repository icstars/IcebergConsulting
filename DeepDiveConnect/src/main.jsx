import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FootIcons from "./components/DeepDiveFooter.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <FootIcons />
  </>
);