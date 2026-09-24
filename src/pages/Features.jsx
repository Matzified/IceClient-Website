import React, { useEffect } from 'react';
import { Shield, Package, Layers, Rocket, Zap } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Rocket size={24} className="highlight" />,
      title: "Hyper-Threaded Engine",
      desc: "Engineered from the ground up to squeeze every frame out of your hardware. Play smoother than ever before.",
    },
    {
      icon: <Package size={24} className="highlight" />,
      title: "Bespoke Cosmetics",
      desc: "Express yourself with cloaks, wings, and emotes that seamlessly sync across the entire network.",
    },
    {
      icon: <Layers size={24} className="highlight" />,
      title: "Modular Overlay",
      desc: "Fully customize your HUD with keystrokes, armor status, and potion effects. A beautiful overlay that stays out of your way.",
    },
    {
      icon: <Shield size={24} className="highlight" />,
      title: "Kernel-Level Auth",
      desc: "Play on our partnered servers with complete peace of mind, knowing the playing field is entirely level.",
    },
    {
      icon: <Zap size={24} className="highlight" />,
      title: "Anti-Cheat Integration",
      desc: "Deep integration with server-side checks and internal tamper protection for the ultimate fair play environment.",
    }
  ];

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
      <section className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Architected for <span className="highlight">Dominance</span></h2>
          <p className="section-subtitle">
            Every feature is hand-crafted to give you the competitive edge, without cluttering your screen.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {features.map((f, i) => (
            <div 
              key={i} 
              className="card animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div style={{ marginBottom: '1.5rem', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
