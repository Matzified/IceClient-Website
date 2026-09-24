import React from 'react';
import { useMsal } from '@azure/msal-react';

export function Settings() {
  const { accounts } = useMsal();

  if (accounts.length === 0) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
        <h2>Please log in to view your settings.</h2>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '150px', paddingBottom: '50px' }}>
      <h2 style={{ marginBottom: '2rem', fontSize: '2rem', color: 'var(--accent-ice)' }}>Settings</h2>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Account Preferences</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
            <input type="text" value={accounts[0].username} disabled style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-light)', background: 'var(--bg-primary)', color: 'white' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Theme</label>
            <select style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-light)', background: 'var(--bg-primary)', color: 'white' }}>
              <option>Dark Mode (Default)</option>
              <option>Light Mode</option>
            </select>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <button className="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
