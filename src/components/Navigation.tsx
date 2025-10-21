import React from 'react';
import { useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { state } = useApp();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav>
      <div className="container">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <a 
                href={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
