import React, { useEffect, useState } from 'react';
import { Shield, Package, Layers, Rocket, Zap, Settings, UserCircle, Target, ChevronDown } from 'lucide-react';

export function Features() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const features = [
    {
      icon: <Package size={24} className="highlight" />,
      title: "Custom Cosmetics",
      desc: "Express yourself with cloaks, wings, and emotes that seamlessly sync across the entire network.",
      expandedText: "Stand out from the crowd with our expansive library of high-fidelity 3D cosmetics. Whether you prefer glowing wings, physics-enabled cloaks, or custom hats, our optimized rendering engine ensures your gear looks stunning without impacting your FPS. Plus, our cross-server sync guarantees everyone sees your style, no matter where you play."
    },
    {
      icon: <Shield size={24} className="highlight" />,
      title: "Anti-Cheat",
      desc: "Deep integration with server-side checks and internal tamper protection for the ultimate fair play environment.",
      expandedText: "Our proprietary kernel-level anti-cheat ensures a 100% level playing field on all partnered servers. By detecting unauthorized modifications before they even load, we provide a cheat-free environment so you can focus purely on skill. Combined with advanced behavioral heuristics, fairness is guaranteed."
    },
    {
      icon: <UserCircle size={24} className="highlight" />,
      title: "Profiles",
      desc: "Instantly switch between completely custom configurations for different game modes.",
      expandedText: "Don't settle for a one-size-fits-all setup. IceClient allows you to create unlimited, instantly swappable profiles tailored to specific game modes. Switch from your minimal PvP HUD to your feature-rich SMP setup with a single hotkey. Every setting, macro, and cosmetic choice is saved automatically."
    },
    {
      icon: <Layers size={24} className="highlight" />,
      title: "Modules",
      desc: "Fully customize your HUD with keystrokes, armor status, and potion effects. A beautiful overlay that stays out of your way.",
      expandedText: "Take total control of your interface with over 50 deeply customizable modules. From keystrokes and CPS counters to advanced armor status and direction HUDs, every element can be positioned, scaled, and styled with our intuitive drag-and-drop editor. Build the UI that perfectly matches your playstyle."
    },
    {
      icon: <Rocket size={24} className="highlight" />,
      title: "FPS Boost",
      desc: "Engineered from the ground up to squeeze every frame out of your hardware. Play smoother than ever before.",
      expandedText: "Experience Minecraft like never before. IceClient replaces the game's antiquated rendering pipeline with a custom hyper-threaded engine, offloading chunk updates and entity rendering to utilize all your CPU cores. Expect up to 4x higher framerates, zero stuttering, and incredibly smooth chunk loading."
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

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <main className="main-content">
      <section className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Architected for <span className="highlight">Dominance</span></h2>
          <p className="section-subtitle">
            Every feature is hand-crafted to give you the competitive edge, without cluttering your screen.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((f, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div 
                key={i} 
                className={`card feature-card animate-on-scroll ${isExpanded ? 'expanded' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => toggleExpand(i)}
              >
                <div className="feature-card-header">
                  <div className="feature-icon-wrapper">
                    {f.icon}
                  </div>
                  <h3 className="feature-title">{f.title}</h3>
                  <div className={`feature-expand-icon ${isExpanded ? 'rotated' : ''}`}>
                    <ChevronDown size={20} color="var(--text-secondary)" />
                  </div>
                </div>
                <p className="feature-desc">{f.desc}</p>
                
                <div className={`feature-expanded-content ${isExpanded ? 'open' : ''}`}>
                  <div className="feature-expanded-inner">
                    <p>{f.expandedText}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
