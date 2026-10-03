import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div>
          <strong>Ice Client</strong>
          <p>© {new Date().getFullYear()} Ice Client. Not affiliated with Mojang or Microsoft.</p>
        </div>
        <nav aria-label="Legal information">
          <Link to="/terms">Terms and privacy</Link>
          <Link to="/licenses">Third-party licenses</Link>
        </nav>
      </div>
    </footer>
  );
}
