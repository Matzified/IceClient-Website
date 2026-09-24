import React, { useEffect, useRef, useState } from 'react';
import { Download, ChevronRight, Zap, Shield, Search, Package, Layers, Rocket, Crosshair } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const particleCount = 200;
    
    let mouse = { x: null, y: null };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', handleResize);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 0.5,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: Math.random() * 2 + 0.5,
        baseX: 0,
        baseY: 0,
        color: `rgba(${Math.floor(Math.random()*100 + 155)}, 255, 255, ${Math.random() * 0.7 + 0.3})`
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;

        // Interaction with mouse cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distance = Math.sqrt(dx*dx + dy*dy);
          
          if (distance < 120) {
            const force = (120 - distance) / 120;
            p.x += dx * force * 0.08;
            p.y += dy * force * 0.08;
          }
        }

        if (p.y > height) {
          p.y = 0;
          p.x = Math.random() * width;
        }
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00e5ff';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="interactive-canvas-bg" />;
}

function FpsCalculator() {
  const [currentFps, setCurrentFps] = useState(60);
  const [displayFps, setDisplayFps] = useState(192);
  const requestRef = useRef();
  
  useEffect(() => {
    const targetFps = Math.floor(currentFps * 3.2);
    let startTimestamp = null;
    const duration = 1200;
    const startValue = displayFps;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 4); // Quartic ease out
      const newDisplay = Math.floor(startValue + (targetFps - startValue) * easeProgress);
      
      setDisplayFps(newDisplay);
      
      if (progress < 1) {
        requestRef.current = window.requestAnimationFrame(step);
      }
    };
    
    requestRef.current = window.requestAnimationFrame(step);
    return () => cancelAnimationFrame(requestRef.current);
  }, [currentFps]); // startValue handled internally in closure per effect run

  return (
    <div className="fps-calculator-widget animate-on-scroll fade-up delay-300">
      <div className="fps-calc-header">
        <Crosshair className="accent-icon" size={24} />
        <h3>Hardware Speculator</h3>
      </div>
      
      <div className="fps-slider-wrapper">
        <div className="fps-slider-labels">
          <label>Current FPS</label>
          <span className="fps-badge">{currentFps}</span>
        </div>
        <input 
          type="range" 
          min="15" 
          max="360" 
          value={currentFps} 
          onChange={(e) => setCurrentFps(parseInt(e.target.value))}
          className="custom-range-slider"
        />
        <div className="slider-ticks">
          <span>Low</span>
          <span>Avg</span>
          <span>High</span>
        </div>
      </div>

      <div className="fps-result-wrapper">
        <div className="fps-result-content">
          <span className="result-label">Projected IceClient FPS</span>
          <div className="projected-fps-container">
            <span className="projected-fps-glow">{displayFps}</span>
            <span className="projected-fps">{displayFps}</span>
          </div>
        </div>
        <div className="fps-boost-pill-container">
          <div className="fps-boost-pill">
            <Zap size={16} />
            <span>+{Math.floor((displayFps - currentFps) / currentFps * 100)}% BOOST</span>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <section className="bespoke-hero">
      <div className="geometric-decor top-left">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 L100 0 L0 100 Z" fill="url(#grad1)" opacity="0.3"/>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#00e5ff', stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:'#0077ff', stopOpacity:0}} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="geometric-decor bottom-right">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="rgba(0, 229, 255, 0.2)" strokeWidth="2" strokeDasharray="5,5"/>
          <circle cx="100" cy="100" r="60" stroke="rgba(0, 119, 255, 0.2)" strokeWidth="1" />
        </svg>
      </div>

      <div className="bespoke-hero-grid container">
        <div className="hero-typography">
          <div className="badge-glow animate-on-scroll fade-down delay-100">
            <span>ICECLIENT V3</span>
          </div>
          <h1 className="hero-title mc-3d-text animate-on-scroll slide-right">
            Shatter <br />
            The <span className="highlight-glitch" data-text="Limits.">Limits.</span>
          </h1>
          <p className="hero-subtitle animate-on-scroll slide-right delay-100">
            Hand-forged for the competitive elite. Zero bloat. Pure, unadulterated performance wrapped in an uncompromisingly beautiful interface.
          </p>

          <form onSubmit={handleSearch} className="search-bar-container animate-on-scroll slide-right delay-200">
            <div className="search-input-wrapper custom-border">
              <Search className="search-icon" size={24} />
              <input 
                type="text" 
                placeholder="Analyze a Player..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="player-search-input"
              />
              <button type="submit" className="search-submit-btn diamond-cut">Search</button>
            </div>
          </form>

          <div className="hero-actions animate-on-scroll slide-right delay-300">
            <button className="btn btn-primary diamond-cut">
              <span className="btn-content">
                <Download size={20} />
                Download Client
              </span>
            </button>
            <a href="#features" className="btn btn-outline diamond-cut">
              <span className="btn-content">
                Explore Tech <ChevronRight size={20} />
              </span>
            </a>
          </div>
        </div>

        <div className="hero-interactive">
          <FpsCalculator />
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <Rocket size={32} />,
      title: "Hyper-Threaded",
      desc: "Engineered from the ground up to squeeze every frame out of your hardware. Play smoother than ever before.",
      animation: "fade-up"
    },
    {
      icon: <Package size={32} />,
      title: "Bespoke Cosmetics",
      desc: "Express yourself with cloaks, wings, and emotes that seamlessly sync across the entire IceClient network.",
      animation: "fade-up"
    },
    {
      icon: <Layers size={32} />,
      title: "Modular Overlay",
      desc: "Fully customize your HUD with keystrokes, armor status, potion effects, and more. A beautiful overlay that stays out of your way.",
      animation: "fade-up"
    },
    {
      icon: <Shield size={32} />,
      title: "Kernel-Level Auth",
      desc: "Play on our partnered servers with complete peace of mind, knowing the playing field is entirely level.",
      animation: "fade-up"
    }
  ];

  return (
    <section id="features" className="bespoke-features container">
      <div className="section-header">
        <h2 className="section-title animate-on-scroll fade-up">Architected for <span className="highlight-neon">Dominance</span></h2>
        <div className="section-line animate-on-scroll slide-right"></div>
      </div>
      
      <div className="bespoke-features-grid">
        {features.map((f, i) => (
          <div 
            key={i} 
            className={`bespoke-feature-card animate-on-scroll ${f.animation} delay-${(i + 1) * 100}`}
          >
            <div className="feature-hex-icon">
              <svg viewBox="0 0 100 100" className="hex-bg">
                <polygon points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" fill="rgba(10,17,32,0.8)" stroke="rgba(0,229,255,0.4)" strokeWidth="2"/>
              </svg>
              <div className="icon-inner">{f.icon}</div>
            </div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
            <div className="card-glint"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Home() {
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
    <main className="bespoke-main">
      <ParticleBackground />
      <Hero />
      <Features />
    </main>
  );
}
