import React from 'react';
import { Link } from 'react-router-dom';

export function Licenses() {
  const licenses = [
    {
      name: "React",
      url: "https://reactjs.org/",
      license: "MIT License",
      description: "A JavaScript library for building user interfaces."
    },
    {
      name: "Vite",
      url: "https://vitejs.dev/",
      license: "MIT License",
      description: "Next Generation Frontend Tooling."
    },
    {
      name: "Lucide React",
      url: "https://lucide.dev/",
      license: "ISC License",
      description: "Beautiful & consistent icon toolkit."
    },
    {
      name: "MSAL Browser",
      url: "https://github.com/AzureAD/microsoft-authentication-library-for-js",
      license: "MIT License",
      description: "Microsoft Authentication Library for JavaScript."
    }
  ];

  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh', position: 'relative', zIndex: 2 }}>
      <h1 className="mc-3d-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Third Party Licenses</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>IceClient is made possible thanks to the following open-source software:</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {licenses.map((lib, index) => (
          <div key={index} className="bespoke-feature-card" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{lib.name}</h3>
            <div style={{ display: 'inline-block', background: 'rgba(0, 229, 255, 0.1)', border: '1px solid rgba(0, 229, 255, 0.3)', padding: '0.2rem 0.8rem', borderRadius: '2px', marginBottom: '1rem', color: 'var(--accent-ice)', fontFamily: 'var(--font-pixel)', fontSize: '1rem' }}>
              {lib.license}
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{lib.description}</p>
            <a href={lib.url} target="_blank" rel="noreferrer" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              color: 'var(--accent-blue)', 
              textDecoration: 'none',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              fontSize: '0.9rem',
              letterSpacing: '1px'
            }}
            onMouseOver={(e) => e.target.style.color = 'var(--accent-ice)'}
            onMouseOut={(e) => e.target.style.color = 'var(--accent-blue)'}
            >
              View Project &rarr;
            </a>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '4rem' }}>
        <Link to="/" className="btn btn-outline" style={{ display: 'inline-block' }}>
          <span className="btn-content">Return Home</span>
        </Link>
      </div>
    </div>
  );
}
