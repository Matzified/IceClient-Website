import React from 'react';
import { Link } from 'react-router-dom';

export function Terms() {
  return (
    <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '100vh', position: 'relative', zIndex: 2 }}>
      <img src="/terms.png" alt="Terms and Policy" style={{ maxWidth: '600px', width: '100%', marginBottom: '2rem' }} />
      
      <div style={{ background: 'rgba(7, 11, 21, 0.6)', border: '1px solid rgba(0, 229, 255, 0.2)', padding: '3rem', borderRadius: '4px', backdropFilter: 'blur(10px)' }}>
        <h2 style={{ color: 'var(--accent-ice)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>1. Acceptance of Terms</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
          By accessing and using IceClient, you agree to be bound by these Terms of Service. IceClient is a custom modification for Minecraft and is not affiliated with, endorsed by, or associated with Mojang AB or Microsoft Corporation.
        </p>

        <h2 style={{ color: 'var(--accent-ice)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>2. Fair Play & Server Rules</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
          IceClient is designed to provide performance enhancements and cosmetic modifications. While we strive to ensure our client complies with most server rules, it is your responsibility to verify that using IceClient is permitted on the specific servers you play on. We are not responsible for any bans or mutes resulting from the use of this client.
        </p>

        <h2 style={{ color: 'var(--accent-ice)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>3. Privacy Policy</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
          We respect your privacy. IceClient only collects minimal diagnostic data to improve performance and stability. Authentication with Microsoft/Mojang is handled securely via official MSAL libraries, and your login credentials are never stored or transmitted to our servers.
        </p>

        <h2 style={{ color: 'var(--accent-ice)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>4. Limitation of Liability</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
          IceClient is provided "as is" without warranties of any kind. The developers shall not be liable for any damages arising out of or in connection with the use or inability to use the client.
        </p>
        
        <div style={{ marginTop: '3rem' }}>
          <Link to="/" className="btn btn-outline" style={{ display: 'inline-block' }}>
            <span className="btn-content">Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
