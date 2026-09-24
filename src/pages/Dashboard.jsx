import React from 'react';
import { User, LogOut, Settings } from 'lucide-react';
import { useMsal } from '@azure/msal-react';
import { useNavigate, Link } from 'react-router-dom';

export function Dashboard({ mcProfile, setMcProfile }) {
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();

  const handleLogout = () => {
    instance.logoutPopup().then(() => {
      setMcProfile(null);
      navigate('/');
    });
  };

  if (accounts.length === 0) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
        <h2>Please log in to view your dashboard.</h2>
      </div>
    );
  }

  // Fallback if no mcProfile is set yet
  const playerName = mcProfile?.name || accounts[0].name || "PlayerName";
  const avatarUrl = mcProfile?.id 
    ? `https://crafatar.com/avatars/${mcProfile.id}?overlay=true&size=100` 
    : null;

  return (
    <div className="container" style={{ paddingTop: '150px', paddingBottom: '50px' }}>
      <h2 style={{ marginBottom: '2rem', fontSize: '2rem', color: 'var(--accent-ice)' }}>Dashboard</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '8px', background: 'var(--bg-primary)', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {avatarUrl ? (
              <img src={avatarUrl} alt="Player Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <User size={40} color="var(--accent-ice)" />
            )}
          </div>
          <h3 style={{ marginBottom: '0.5rem' }}>{playerName}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Premium User</p>
          
          <Link to="/settings" className="btn btn-secondary" style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem', textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
            <Settings size={18} style={{ marginRight: '8px' }} /> Settings
          </Link>
          
          <button className="btn btn-secondary" onClick={handleLogout} style={{ width: '100%', padding: '0.5rem', color: '#ff4d4d', borderColor: 'rgba(255, 77, 77, 0.3)' }}>
            <LogOut size={18} style={{ marginRight: '8px' }} /> Sign Out
          </button>
        </div>
        
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>Your Statistics</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Hours Played</p>
              <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--accent-ice)' }}>124.5</p>
            </div>
            <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Cosmetics Owned</p>
              <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--accent-blue)' }}>12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
