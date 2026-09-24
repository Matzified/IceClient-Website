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
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bespoke-main" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '60px' }}>
      <div className="container" style={{ width: '100%' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title animate-on-scroll fade-up">Unleash Your <span className="highlight-neon">Hardware</span></h2>
          <p className="hero-subtitle animate-on-scroll fade-up delay-100" style={{ maxWidth: '600px', margin: '1rem auto' }}>
            Calculate your projected FPS with IceClient's hyper-threaded rendering engine.
          </p>
        </div>
        
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
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
        </div>
      </div>
    </main>
  );
}
