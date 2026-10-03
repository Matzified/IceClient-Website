import { Link } from 'react-router-dom';

const licenses = [
  ['React', 'MIT', 'https://react.dev/'],
  ['Vite', 'MIT', 'https://vitejs.dev/'],
  ['React Router', 'MIT', 'https://reactrouter.com/'],
];

export function Licenses() {
  return (
    <main className="main-content">
      <section className="container">
        <h1>Third-party licenses</h1>
        <ul className="plain-list">
          {licenses.map(([name, license, url]) => (
            <li className="plain-list-item" key={name}>
              <h2>{name}</h2>
              <p>{license} license</p>
              <a href={url} target="_blank" rel="noreferrer">Project website</a>
            </li>
          ))}
        </ul>
        <Link to="/">Return to home</Link>
      </section>
    </main>
  );
}
