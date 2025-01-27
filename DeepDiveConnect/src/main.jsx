import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FootIcons from "./components/DeepDiveFooter.jsx";
import Header from "./components/Header.jsx"
import SearchBar from "./components/SearchBar.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <SearchBar />
    <App />
    <FootIcons />
  </>
);