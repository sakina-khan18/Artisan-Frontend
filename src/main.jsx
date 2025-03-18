import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App1 from './App'
import App2 from '../Admin-Frontend/src/App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App1 />} />
      <Route path="/app2/*" element={<App2 />} />
    </Routes>
  </BrowserRouter>
)
