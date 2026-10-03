
const features = [
  ['HUD modules', 'Enable and configure the modules included with the client.'],
  ['Keystrokes display', 'Show movement input on the in-game HUD.'],
  ['FPS display', 'Keep a compact frame-rate readout available while playing.'],
  ['Custom POV', 'Adjust the field of view within the module limits.'],
  ['Quality of life', 'Use local presentation controls such as Fullbright and hurt-camera settings.'],
  ['Saved configuration', 'Keep module settings in the client configuration between sessions.'],
];

export function Features() {
  return (
    <main className="main-content">
      <section className="container">
        <header className="section-header">
          <h1 className="section-title">Features</h1>
          <p className="section-subtitle">A small set of practical controls, with more added only when they are tested and useful.</p>
        </header>
        <ul className="plain-list feature-grid">
          {features.map(([title, description]) => (
            <li key={title} className="plain-list-item">
              <h2>{title}</h2>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
