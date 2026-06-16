import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import { HashRouter } from 'react-router-dom';

// FIXED: Direct side-effect import for global styles
import './App.css'; 

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2026 Portfolio. Built with React & Vite.</p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
