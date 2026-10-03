import { Link } from 'react-router-dom';

export function Terms() {
  return (
    <main className="main-content">
      <article className="container legal-content">
        <h1>Terms and privacy</h1>
        <h2>Use of the client</h2>
        <p>Ice Client is provided without warranties. Check the rules of each Minecraft server before using client modifications. The developers are not responsible for server actions taken against your account.</p>
        <h2>Privacy</h2>
        <p>This website does not sign in to Microsoft or store account tokens. Microsoft sign-in is handled in the Ice Client launcher. The client is not affiliated with Microsoft or Mojang.</p>
        <h2>Liability</h2>
        <p>Ice Client is provided &quot;as is&quot;, without warranties of any kind. To the extent permitted by law, the developers are not liable for damages arising from use of the client.</p>
        <Link to="/">Return to home</Link>
      </article>
    </main>
  );
}
