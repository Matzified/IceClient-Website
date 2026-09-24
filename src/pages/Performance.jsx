import React, { useEffect, useRef, useState } from 'react';
import { Crosshair, Zap } from 'lucide-react';

export function Performance() {
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
  }, [currentFps]);

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
    <main className="main-content" style={{ display: 'flex', alignItems: 'center', minHeight: 'calc(100vh - 200px)' }}>
      <div className="container" style={{ width: '100%' }}>
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Unleash Your <span className="highlight">Hardware</span></h2>
          <p className="section-subtitle">
            Calculate your projected FPS with IceClient's custom rendering engine.
          </p>
        </div>
        
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div className="card animate-on-scroll delay-100" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
              <Crosshair size={24} style={{ color: 'var(--accent-primary)' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Hardware Speculator</h3>
            </div>
            
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 500 }}>
                <label style={{ color: 'var(--text-secondary)' }}>Current Vanilla FPS</label>
                <span style={{ color: 'var(--text-primary)' }}>{currentFps}</span>
              </div>
              
              <input 
                type="range" 
                min="15" 
                max="360" 
                value={currentFps} 
                onChange={(e) => setCurrentFps(parseInt(e.target.value))}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <span>Low</span>
                <span>Avg</span>
                <span>High</span>
              </div>
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center', position: 'relative' }}>
              <span style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Projected FPS</span>
              <div style={{ fontSize: '4.5rem', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em', background: 'linear-gradient(to bottom right, #fff, #999)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {displayFps}
              </div>
              
              <div style={{ position: 'absolute', bottom: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
                <div style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)', padding: '0.25rem 1rem', borderRadius: '99px', fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                  <Zap size={14} />
                  <span>+{Math.floor((displayFps - currentFps) / currentFps * 100)}% BOOST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
