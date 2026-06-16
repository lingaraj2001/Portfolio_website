import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Code, FolderOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/experience', label: 'Experience', icon: Briefcase },
    { path: '/skills', label: 'Skills', icon: Code },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
  ];

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="brand-text">Portfolio</span>
      </div>

      <button
        className="mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path}>
              <Link
                to={item.path}
                className={isActive ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
