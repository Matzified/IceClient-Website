import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { Home } from './pages/Home.jsx';
import { Features } from './pages/Features.jsx';
import { Terms } from './pages/Terms.jsx';
import { Licenses } from './pages/Licenses.jsx';
import { Footer } from './components/Footer.jsx';
import './index.css';
import './App.css'; // Just in case there are styles


function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/licenses" element={<Licenses />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
