import React, { useEffect, useState } from 'react';
import { Download, ChevronRight, Search } from 'lucide-react';
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
    <section className="container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', width: '100%' }}>
        
        {/* Left Side: Typography & Actions */}
        <div className="hero-content">
          <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '99px', fontSize: '0.875rem', fontWeight: 500, marginBottom: '1.5rem', border: '1px solid var(--border-color)' }}>
            ICECLIENT V3 IS LIVE
          </div>
          
          <img src="/logo.png" alt="Ice Client Logo" className="animate-on-scroll" style={{ maxWidth: '300px', marginBottom: '2rem' }} />
          
          <h1 className="section-title animate-on-scroll delay-100" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '4rem', lineHeight: 1.1 }}>
            Shatter <br /> The <span className="highlight">Limits.</span>
          </h1>
          
          <p className="animate-on-scroll delay-200" style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '2.5rem', maxWidth: '480px' }}>
            Hand-forged for the competitive elite. Zero bloat. Pure performance wrapped in an uncompromisingly clean interface.
          </p>

          <form onSubmit={handleSearch} className="animate-on-scroll delay-300" style={{ marginBottom: '2.5rem', display: 'flex', gap: '0.5rem', maxWidth: '400px' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input 
                type="text" 
                placeholder="Analyze a Player..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', paddingLeft: '2.5rem' }}
              />
            </div>
            <button type="submit" className="btn btn-outline" style={{ padding: '0.75rem 1rem' }}>
              Search
            </button>
          </form>

          <div className="animate-on-scroll delay-300" style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-primary" style={{ padding: '0.875rem 1.5rem' }}>
              <Download size={20} />
              Download for Windows
            </button>
            <button onClick={() => navigate('/features')} className="btn btn-outline" style={{ padding: '0.875rem 1.5rem' }}>
              Features <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Side: Showcase */}
        <div className="hero-interactive animate-on-scroll delay-200" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="card" style={{ width: '100%', aspectRatio: '1/1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Ready to Dominate?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Check how much FPS you can get.</p>
            <button onClick={() => navigate('/performance')} className="btn btn-outline">
              Hardware Speculator
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
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="main-content">
      <Hero />
    </main>
  );
}
