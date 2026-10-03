import { Link } from 'react-router-dom';

const quickFacts = [
  ['01', 'Fabric client', 'Built around the Java edition workflow.'],
  ['02', 'Minecraft 1.21.11', 'The planned foundation for the next release line.'],
  ['03', 'Device-code sign-in', 'Microsoft hosts authentication. Your password stays out of Ice Client.'],
];

const surfaces = [
  ['Launcher', 'Accounts, profiles, versions, and launch actions in one place.'],
  ['HUD modules', 'Readable overlays for keystrokes, FPS, coordinates, and other local tools.'],
  ['Profiles', 'Keep settings grouped by installation so changes remain predictable.'],
  ['Release notes', 'See what changed before you update and keep the installed version clear.'],
];

export function Home() {
  return (
    <main className="main-content">
      <section className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">ICE CLIENT / JAVA EDITION</p>
          <h1>Tools that stay out of the way.</h1>
          <p className="hero-lede">A focused Fabric client with readable HUD modules, practical settings, and a launcher that keeps your accounts and versions organized.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="https://github.com/Matzified/IceClient/releases" target="_blank" rel="noreferrer">View releases</a>
            <Link to="/features" className="btn">See features</Link>
          </div>
          <p className="hero-note">No password collection. Supported versions are published after testing.</p>
        </div>
        <div className="console-panel" aria-label="Ice Client interface preview">
          <div className="console-top"><span className="console-brand">ICE / CONTROL</span><span className="console-state"><i /> READY</span></div>
          <div className="console-content">
            <div className="console-rail"><span className="rail-active">HUD</span><span>INPUT</span><span>VISUAL</span><span>UTILITY</span></div>
            <div className="console-main">
              <div className="console-heading"><div><small>PROFILE / DEFAULT</small><strong>Module overview</strong></div><span>1.21.11</span></div>
              <div className="control-row"><div><strong>Keystrokes</strong><small>Movement input overlay</small></div><b>ON</b></div>
              <div className="control-row"><div><strong>FPS display</strong><small>Current frame rate</small></div><b>ON</b></div>
              <div className="control-row control-muted"><div><strong>Custom POV</strong><small>Field of view control</small></div><b>OFF</b></div>
            </div>
          </div>
          <div className="console-bottom"><span>RIGHT SHIFT</span><span>LOCAL SETTINGS</span></div>
        </div>
      </section>
      <section className="container facts" aria-label="Ice Client overview">
        {quickFacts.map(([number, title, description]) => <article key={number}><span className="fact-number">{number}</span><div><h2>{title}</h2><p>{description}</p></div></article>)}
      </section>
      <section className="container surfaces">
        <div className="section-header left"><p className="section-kicker">THE WORKSPACE</p><h2 className="section-title">A small set of useful surfaces.</h2><p className="section-subtitle">The launcher and in-game client share the same focus: make the next action obvious.</p></div>
        <div className="surface-grid">{surfaces.map(([title, description]) => <article className="surface-card" key={title}><h3>{title}</h3><p>{description}</p><Link to={title === 'HUD modules' ? '/features' : '/download'}>{title === 'Release notes' ? 'View releases' : 'Learn more'}</Link></article>)}</div>
      </section>
      <section className="container release-strip">
        <div><p className="section-kicker">START HERE</p><h2>Download the launcher</h2><p>Use the launcher to manage profiles, sign in with Microsoft, and start a supported installation.</p></div>
        <a className="btn btn-primary" href="https://github.com/Matzified/IceClient/releases" target="_blank" rel="noreferrer">Open releases</a>
      </section>
    </main>
  );
}
