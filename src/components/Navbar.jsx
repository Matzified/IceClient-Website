import React, { useState, useEffect } from 'react';
import { Snowflake, LayoutDashboard, Settings } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';
import { loginRequest, authenticateMinecraft } from '../auth';

const MicrosoftLogo = () => (
  <svg className="ms-logo" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="9" height="9" fill="#f25022"/>
    <rect x="11" y="1" width="9" height="9" fill="#7fba00"/>
    <rect x="1" y="11" width="9" height="9" fill="#00a4ef"/>
    <rect x="11" y="11" width="9" height="9" fill="#ffb900"/>
  </svg>
);

export function Navbar({ mcProfile, setMcProfile }) {
  const [scrolled, setScrolled] = useState(false);
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();

  const isLoggedIn = accounts.length > 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = async () => {
    try {
      const loginResponse = await instance.loginPopup(loginRequest);
      if (loginResponse && loginResponse.accessToken) {
        // Authenticate with Minecraft using the MS token
        // In a real scenario, this flow might have CORS issues if called from browser directly,
        // but this demonstrates the logic as requested.
        try {
          const profile = await authenticateMinecraft(loginResponse.accessToken);
          setMcProfile(profile);
          navigate('/dashboard');
        } catch (mcError) {
          console.error("Failed to authenticate with Minecraft", mcError);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-content">
        <Link to="/" className="logo animate-on-scroll slide-right" style={{ textDecoration: 'none' }}>
          <Snowflake />
          <span>IceClient</span>
        </Link>
        <div className="nav-links animate-on-scroll fade-down delay-100">
          <Link to="/">Home</Link>
          <a href="/#features">Features</a>
        </div>
        <div className="nav-actions animate-on-scroll slide-left delay-200">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="btn btn-dashboard">
                <LayoutDashboard size={18} />
                Dashboard
              </Link>
              <Link to="/settings" className="btn btn-secondary" style={{ marginLeft: '10px' }}>
                <Settings size={18} />
              </Link>
            </>
          ) : (
            <button className="btn btn-ms-login" onClick={handleLogin}>
              <MicrosoftLogo />
              Sign in with Microsoft
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
