import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Settings } from './pages/Settings';
import { PlayerProfile } from './pages/PlayerProfile';
import { Features } from './pages/Features';
import { Performance } from './pages/Performance';
import './index.css';
import './App.css'; // Just in case there are styles

function App() {
  const [mcProfile, setMcProfile] = useState(null);

  return (
    <>
      <div className="bg-gradient"></div>
      <div className="snow-overlay"></div>
      
      <Navbar mcProfile={mcProfile} setMcProfile={setMcProfile} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/dashboard" element={<Dashboard mcProfile={mcProfile} setMcProfile={setMcProfile} />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/player/:username" element={<PlayerProfile />} />
      </Routes>
      
      <footer style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-light)', marginTop: 'auto' }}>
        <div className="container animate-on-scroll zoom-in">
          <p>&copy; {new Date().getFullYear()} IceClient. All rights reserved. Not affiliated with Mojang AB or Microsoft Corp.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
