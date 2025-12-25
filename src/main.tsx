import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/app/App.tsx'
import About from "./pages/about/About.tsx";
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/abt" element={<About/>}/>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
