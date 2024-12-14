import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App.tsx';
import Testpage from './Testpage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Testpage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
