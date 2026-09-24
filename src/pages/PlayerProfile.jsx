import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Swords, Trophy, Activity, Target } from 'lucide-react';

export function PlayerProfile() {
  const { username } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [username]);

  // Mock data based on username length to look somewhat consistent
  const seed = username.length;
  const stats = {
    hoursPlayed: Math.floor(Math.abs(Math.sin(seed) * 500)) + 50,
    killstreak: Math.floor(Math.abs(Math.cos(seed) * 15)) + 3,
    kdRatio: (Math.abs(Math.sin(seed + 1)) * 2 + 0.5).toFixed(2),
    wins: Math.floor(Math.abs(Math.cos(seed + 1)) * 1200) + 100,
  };

  return (
    <div className="player-profile-page" style={{ paddingTop: '120px', paddingBottom: '60px', minHeight: '100vh' }}>
      <div className="container">
        <Link to="/" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', transition: 'color 0.2s', fontWeight: '500' }}>
          <ArrowLeft size={20} style={{ marginRight: '8px' }} />
          Back to Home
        </Link>
        
        {loading ? (
          <div className="loading-state" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
            <div className="spinner" style={{ width: '40px', height: '40px', border: '3px solid rgba(0, 229, 255, 0.2)', borderTopColor: 'var(--accent-ice)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          </div>
        ) : (
          <div className="profile-dashboard glass-panel animate-on-scroll fade-up is-visible" style={{ padding: '3rem', borderRadius: '24px' }}>
            <div className="profile-header" style={{ display: 'flex', alignItems: 'center', gap: '2rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '2.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              <img 
                src={`https://minotar.net/helm/${username}/120.png`} 
                alt={`${username}'s skin`}
                className="player-avatar"
                style={{ borderRadius: '16px', border: '2px solid rgba(0, 229, 255, 0.5)', boxShadow: '0 0 30px rgba(0, 229, 255, 0.2)' }}
                onError={(e) => {
                  e.target.src = 'https://minotar.net/helm/Steve/120.png';
                }}
              />
              <div>
                <h1 style={{ fontSize: '3.5rem', margin: '0 0 0.5rem 0', textShadow: '0 0 20px rgba(255,255,255,0.1)', lineHeight: '1.2' }}>{username}</h1>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <span style={{ background: 'rgba(0, 229, 255, 0.1)', border: '1px solid rgba(0, 229, 255, 0.3)', color: 'var(--accent-ice)', padding: '6px 16px', borderRadius: '99px', fontSize: '0.95rem', fontWeight: '600', boxShadow: '0 0 10px rgba(0,229,255,0.1)' }}>IceClient User</span>
                  <span style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '6px 16px', borderRadius: '99px', fontSize: '0.95rem' }}>Level {Math.floor(Math.abs(Math.sin(seed + 2)) * 50) + 10}</span>
                </div>
              </div>
            </div>

            <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Activity size={28} color="var(--accent-ice)"/>
              Overall Statistics
            </h2>

            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              <div className="stat-card" style={{ background: 'rgba(10,17,32,0.6)', padding: '2rem', borderRadius: '20px', border: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '1.1rem' }}><Clock size={20}/> Hours Played</div>
                <div style={{ fontSize: '3rem', fontWeight: '800', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{stats.hoursPlayed}<span style={{fontSize: '1.5rem', color: 'var(--text-secondary)', fontWeight: 'normal'}}>h</span></div>
              </div>
              
              <div className="stat-card" style={{ background: 'rgba(10,17,32,0.6)', padding: '2rem', borderRadius: '20px', border: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '1.1rem' }}><Swords size={20}/> Highest Killstreak</div>
                <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-ice)', textShadow: '0 0 15px rgba(0,229,255,0.3)' }}>{stats.killstreak}</div>
              </div>

              <div className="stat-card" style={{ background: 'rgba(10,17,32,0.6)', padding: '2rem', borderRadius: '20px', border: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '1.1rem' }}><Target size={20}/> K/D Ratio</div>
                <div style={{ fontSize: '3rem', fontWeight: '800', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{stats.kdRatio}</div>
              </div>

              <div className="stat-card" style={{ background: 'rgba(10,17,32,0.6)', padding: '2rem', borderRadius: '20px', border: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '1.1rem' }}><Trophy size={20}/> Total Wins</div>
                <div style={{ fontSize: '3rem', fontWeight: '800', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{stats.wins}</div>
              </div>
            </div>
            
            <style>
              {`
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                .back-link:hover { color: #fff !important; }
                .stat-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
                .stat-card:hover { transform: translateY(-8px); border-color: rgba(0, 229, 255, 0.4) !important; box-shadow: 0 15px 30px rgba(0,0,0,0.3), 0 0 15px rgba(0, 229, 255, 0.1); }
              `}
            </style>
          </div>
        )}
      </div>
    </div>
  );
}
