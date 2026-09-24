import React, { useEffect, useRef, useState } from 'react';
import { Download, ChevronRight, Search } from 'lucide-react';
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
          <img src="/logo.png" alt="Ice Client Logo" className="animate-on-scroll slide-right" style={{ maxWidth: '400px', marginBottom: '20px' }} />
          <h1 className="hero-title animate-on-scroll slide-right">
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
            <button onClick={() => navigate('/features')} className="btn btn-outline diamond-cut">
              <span className="btn-content">
                Explore Tech <ChevronRight size={20} />
              </span>
            </button>
          </div>
        </div>

        <div className="hero-interactive">
          <div className="hero-showcase animate-on-scroll slide-left delay-300" style={{ width: '100%', height: '400px', background: 'rgba(10, 17, 32, 0.6)', borderRadius: '12px', border: '1px solid rgba(0, 229, 255, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Ready to Dominate?</h3>
            <button onClick={() => navigate('/performance')} className="btn btn-primary diamond-cut">
              Check Hardware Potential
            </button>
          </div>
        </div>
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
    </main>
  );
}
