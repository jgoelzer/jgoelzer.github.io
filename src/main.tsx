import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router";
import './index.css';
import Home from './Pages/Home.tsx';
import Header from './Pages/Header.tsx';
import Footer from './Pages/Footer.tsx';
import ProjectLayout from './Pages/ProjectLayout.tsx';

import Remede from './Pages/Projects/Remede.tsx';
import Viva from './Pages/Projects/Viva.tsx';
import ReellHinge from './Pages/Projects/ReellHinge.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectLayout />}>
          <Route path="remede" element={<Remede />} />
          <Route path="viva" element={<Viva />} />
          <Route path="reell" element={<ReellHinge />} />
        </Route>
      </Routes>
      <Footer />
    </HashRouter>
  </StrictMode>,
)
