import React, { useEffect, useState } from 'react';
import { Download, ChevronRight, Zap, Shield, Monitor, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/player/${searchQuery.trim()}`);
    }
  };

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

        <form onSubmit={handleSearch} className="search-bar-container animate-on-scroll fade-up delay-150">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={24} />
            <input 
              type="text" 
              placeholder="Search for a Minecraft Player..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="player-search-input"
            />
            <button type="submit" className="search-submit-btn">Search</button>
          </div>
        </form>

        <div className="hero-actions animate-on-scroll fade-up delay-200">
          <button className="btn btn-primary">
            <Download size={20} style={{ marginRight: '8px' }} />
            Download for Windows
          </button>
          <a href="#features" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
            View Features <ChevronRight size={20} />
          </a>
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

export function Home() {
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

  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
}
