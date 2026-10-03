const steps = [
  ['01', 'Download the installer', 'Choose the latest release for your operating system from GitHub.'],
  ['02', 'Sign in with Microsoft', 'The launcher opens Microsoft device-code sign-in. Your password is entered only on Microsoft’s page.'],
  ['03', 'Choose a profile', 'Select a supported Minecraft version and launch when the account is ready.'],
];

export function Download() {
  return (
    <main className="main-content">
      <section className="container page-intro">
        <p className="eyebrow">INSTALLATION</p>
        <h1>Get Ice Client running.</h1>
        <p>Download the launcher from the project releases page. The launcher manages the local installation and uses Microsoft’s hosted sign-in flow.</p>
        <a className="btn btn-primary" href="https://github.com/Matzified/IceClient/releases" target="_blank" rel="noreferrer">Open GitHub releases</a>
      </section>
      <section className="container steps" aria-label="Installation steps">
        {steps.map(([number, title, description]) => <article key={number}><span className="fact-number">{number}</span><div><h2>{title}</h2><p>{description}</p></div></article>)}
      </section>
      <section className="container notice">
        <div><p className="section-kicker">ACCOUNT SECURITY</p><h2>Microsoft handles your password</h2><p>Ice Client does not provide a password form and does not display or log access tokens. Close the browser if the address is not a Microsoft domain.</p></div>
      </section>
    </main>
  );
}
