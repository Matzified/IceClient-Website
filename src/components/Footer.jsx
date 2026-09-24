import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer style={{ 
      padding: '3rem 0', 
      color: 'var(--text-secondary)', 
      borderTop: '1px solid rgba(255,255,255,0.05)', 
      marginTop: 'auto', 
      background: 'rgba(2, 4, 10, 0.8)',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <p style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>IceClient</p>
            <p>&copy; {new Date().getFullYear()} IceClient. All rights reserved.</p>
            <p style={{ fontSize: '0.8rem', marginTop: '0.3rem', opacity: 0.7 }}>Not affiliated with Mojang AB or Microsoft Corp.</p>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link 
              to="/terms" 
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseOver={(e) => e.target.style.color = 'var(--accent-ice)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              Terms & Policy
            </Link>
            <Link 
              to="/licenses" 
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseOver={(e) => e.target.style.color = 'var(--accent-ice)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              Third Party Licenses
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
