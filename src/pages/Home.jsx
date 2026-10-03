import { Link } from 'react-router-dom';

export function Home() {
  return (
    <main className="main-content">
      <section className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">FABRIC CLIENT / MINECRAFT JAVA</p>
          <h1>A focused client for a clearer game.</h1>
          <p className="hero-lede">Ice Client brings configurable HUD tools, practical quality-of-life controls, and a maintained launcher into one compact workspace.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="https://github.com/Matzified/IceClient/releases" target="_blank" rel="noreferrer">View releases</a>
            <Link to="/features" className="btn">Explore features</Link>
          </div>
          <p className="hero-note">Current foundation: Minecraft 1.21.11. Version support is published only after testing.</p>
        </div>
        <div className="showcase" aria-label="Ice Client interface preview">
          <div className="showcase-bar"><span>ICE CLIENT</span><span className="status-dot">READY</span></div>
          <div className="showcase-body">
            <aside><span className="active-line">HUD</span><span>PVP</span><span>VISUAL</span><span>UTILITY</span></aside>
            <div className="module-stack">
              <div className="module-card"><div><strong>Keystrokes</strong><small>Shows movement input</small></div><b>ON</b></div>
              <div className="module-card"><div><strong>FPS Display</strong><small>Shows current frame rate</small></div><b>ON</b></div>
              <div className="module-card muted-card"><div><strong>Custom POV</strong><small>Adjust field of view</small></div><b>OFF</b></div>
            </div>
          </div>
          <div className="showcase-footer"><span>RIGHT SHIFT</span><span>MODULES</span></div>
        </div>
      </section>
      <section className="container proof-grid" aria-label="Client overview">
        <article><span className="section-kicker">01</span><h2>Readable controls</h2><p>Settings, keybinds, and module states stay visible while you configure the client.</p></article>
        <article><span className="section-kicker">02</span><h2>Local by design</h2><p>Microsoft sign-in uses the hosted device-code flow. Ice Client never asks for your password.</p></article>
        <article><span className="section-kicker">03</span><h2>Measured updates</h2><p>Supported versions and performance changes are published with the release they belong to.</p></article>
      </section>
    </main>
  );
}
