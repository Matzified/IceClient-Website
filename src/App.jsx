import React, { useEffect, useState } from 'react';
import { 
  Snowflake, 
  Download, 
  Zap, 
  Shield, 
  Monitor, 
  ChevronRight,
  X,
  LayoutDashboard,
  LogOut,
  Settings,
  User
} from 'lucide-react';
import './index.css';

const MicrosoftLogo = () => (
  <svg className="ms-logo" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="9" height="9" fill="#f25022"/>
    <rect x="11" y="1" width="9" height="9" fill="#7fba00"/>
    <rect x="1" y="11" width="9" height="9" fill="#00a4ef"/>
    <rect x="11" y="11" width="9" height="9" fill="#ffb900"/>
  </svg>
);

function Navbar({ isLoggedIn, onLogin, onOpenDashboard }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-content">
        <div className="logo animate-on-scroll slide-right">
          <Snowflake />
          <span>IceClient</span>
        </div>
        <div className="nav-links animate-on-scroll fade-down delay-100">
          <a href="#features">Features</a>
          <a href="#performance">Performance</a>
          <a href="#community">Community</a>
        </div>
        <div className="nav-actions animate-on-scroll slide-left delay-200">
          {isLoggedIn ? (
            <button className="btn btn-dashboard" onClick={onOpenDashboard}>
              <LayoutDashboard size={18} />
              Dashboard
            </button>
          ) : (
            <button className="btn btn-ms-login" onClick={onLogin}>
              <MicrosoftLogo />
              Sign in with Microsoft
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1 className="hero-title animate-on-scroll fade-up">
          Stay Cool. <br />
          Play <span className="highlight">Faster.</span>
        </h1>
        <p className="hero-subtitle animate-on-scroll fade-up delay-100">
          Experience Minecraft like never before. IceClient boosts your FPS, provides sleek cosmetics, and delivers the ultimate PvP advantage with zero bloat.
        </p>
        <div className="hero-actions animate-on-scroll fade-up delay-200">
          <button className="btn btn-primary">
            <Download size={20} style={{ marginRight: '8px' }} />
            Download for Windows
          </button>
          <button className="btn btn-secondary">
            View Features <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <Zap size={28} />,
      title: "Lightning Fast FPS",
      desc: "Engineered from the ground up to squeeze every frame out of your hardware. Play smoother than ever."
    },
    {
      icon: <Shield size={28} />,
      title: "Built-in Anti-Cheat",
      desc: "Play on our partnered servers with complete peace of mind, knowing the playing field is entirely level."
    },
    {
      icon: <Monitor size={28} />,
      title: "Sleek HUD Overlay",
      desc: "Customizable modules, keystrokes, armor status, and more. A beautiful overlay that stays out of your way."
    }
  ];

  return (
    <section id="features" className="features container">
      <h2 className="section-title animate-on-scroll fade-up">Why choose IceClient?</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div 
            key={i} 
            className={`feature-card glass-panel animate-on-scroll fade-up delay-${(i + 1) * 100}`}
          >
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DashboardModal({ isOpen, onClose, onLogout }) {
  return (
    <div className={`dashboard-modal-overlay ${isOpen ? 'active' : ''}`}>
      <div className="dashboard-modal">
        <button className="close-modal" onClick={onClose}>
          <X size={24} />
        </button>
        <h2 style={{ marginBottom: '2rem', fontSize: '2rem', color: 'var(--accent-ice)' }}>Dashboard</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-primary)', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={40} color="var(--accent-ice)" />
            </div>
            <h3 style={{ marginBottom: '0.5rem' }}>PlayerName</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Premium User</p>
            <button className="btn btn-secondary" style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}>
              <Settings size={18} style={{ marginRight: '8px' }} /> Settings
            </button>
            <button className="btn btn-secondary" onClick={onLogout} style={{ width: '100%', padding: '0.5rem', color: '#ff4d4d', borderColor: 'rgba(255, 77, 77, 0.3)' }}>
              <LogOut size={18} style={{ marginRight: '8px' }} /> Sign Out
            </button>
          </div>
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>Your Statistics</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Hours Played</p>
                <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--accent-ice)' }}>124.5</p>
              </div>
              <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Cosmetics Owned</p>
                <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--accent-blue)' }}>12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  // Advanced scroll animations observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLogin = () => {
    // Simulate login flow
    setIsLoggedIn(true);
    setIsDashboardOpen(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDashboardOpen(false);
  };

  return (
    <>
      <div className="bg-gradient"></div>
      <div className="snow-overlay"></div>
      
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onLogin={handleLogin} 
        onOpenDashboard={() => setIsDashboardOpen(true)} 
      />
      
      <main>
        <Hero />
        <Features />
      </main>

      <DashboardModal 
        isOpen={isDashboardOpen} 
        onClose={() => setIsDashboardOpen(false)} 
        onLogout={handleLogout}
      />
      
      <footer style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container animate-on-scroll zoom-in">
          <p>&copy; {new Date().getFullYear()} IceClient. All rights reserved. Not affiliated with Mojang AB or Microsoft Corp.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
