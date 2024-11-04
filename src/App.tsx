import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageDetail from './pages/PageDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page/:id" element={<PageDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;