import React, { useEffect } from 'react';
import { 
  Snowflake, 
  Download, 
  Zap, 
  Shield, 
  Monitor, 
  ChevronRight,
  Menu
} from 'lucide-react';
import './index.css';

function Navbar() {
  return (
    <header>
      <div className="container nav-content">
        <div className="logo">
          <Snowflake />
          <span>IceClient</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#performance">Performance</a>
          <a href="#community">Community</a>
        </div>
        <div className="nav-actions">
          <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1 className="hero-title">
          Stay Cool. <br />
          Play <span className="highlight">Faster.</span>
        </h1>
        <p className="hero-subtitle">
          Experience Minecraft like never before. IceClient boosts your FPS, provides sleek cosmetics, and delivers the ultimate PvP advantage with zero bloat.
        </p>
        <div className="hero-actions">
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
      icon: <Zap size={24} />,
      title: "Lightning Fast FPS",
      desc: "Engineered from the ground up to squeeze every frame out of your hardware. Play smoother than ever."
    },
    {
      icon: <Shield size={24} />,
      title: "Built-in Anti-Cheat",
      desc: "Play on our partnered servers with complete peace of mind, knowing the playing field is entirely level."
    },
    {
      icon: <Monitor size={24} />,
      title: "Sleek HUD Overlay",
      desc: "Customizable modules, keystrokes, armor status, and more. A beautiful overlay that stays out of your way."
    }
  ];

  return (
    <section id="features" className="features container">
      <h2 className="section-title">Why choose IceClient?</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card glass-panel">
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  // Simple intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-panel').forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bg-gradient"></div>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <footer style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} IceClient. All rights reserved. Not affiliated with Mojang AB.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
