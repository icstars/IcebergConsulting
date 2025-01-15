import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"
import EmployeeSearchResult from './EmployeeSearchResult.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <EmployeeSearchResult/>
    <EmployeeSearchResult/>
    <EmployeeSearchResult/>
    <EmployeeSearchResult/>
  </StrictMode>,
)
