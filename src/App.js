import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Headers from './common/Header';
import About from './components/About';
import Home from './components/Home';

import './style.css';

export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
