import { Link } from 'react-router-dom';

function NavbarShell() {
  return (
    <header>
      <div className="container nav-content">
        <Link to="/" className="logo">
          <span className="logo-mark" aria-hidden="true">I</span>
          <span>ICE CLIENT</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/download">Download</Link>
          <a href="https://github.com/Matzified/IceClient/releases" target="_blank" rel="noreferrer">Releases</a>
        </nav>
      </div>
    </header>
  );
}

export function Navbar() { return <NavbarShell />; }
