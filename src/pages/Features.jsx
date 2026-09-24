import React, { useEffect } from 'react';
import { Shield, Package, Layers, Rocket, Zap, Settings2 } from 'lucide-react';

export function Features() {
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
    },
    {
      icon: <Zap size={32} />,
      title: "Anti-Cheat",
      desc: "Deep integration with server-side checks and internal tamper protection for the ultimate fair play environment.",
      animation: "fade-up"
    }
  ];

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
      <section id="features" className="bespoke-features container" style={{ marginTop: '100px' }}>
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
    </main>
  );
}
