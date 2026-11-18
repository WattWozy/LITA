'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dark = document.documentElement.classList.contains('dark');
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    const dark = document.documentElement.classList.contains('dark');
    setIsDark(dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  return (
    <header className={`nav ${isOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        <a href="/" className="brand" aria-label="Inicio">
          <Image
            src="/favicon.png"
            alt="LITA Desarrollo y Sistemas"
            width={40}
            height={40}
            priority
            className="brand-logo"
          />
          <span className="brand-name">LiTAR</span>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="nav-toggle"
          aria-label="Abrir menú de navegación"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      
      <nav aria-label="Principal" className={`nav-links ${isOpen ? 'is-open' : ''}`}>
        <a href="/servicios" onClick={() => setIsOpen(false)}>Servicios</a>
        <a href="#metodo" onClick={() => setIsOpen(false)}>Cómo trabajamos</a>
        <a href="/historias" onClick={() => setIsOpen(false)}>Historias</a>
        
        <div className="nav-actions">
          <button 
            onClick={toggleTheme}
            className="theme-btn"
            aria-label="Cambiar modo oscuro"
          >
            {isDark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            )}
          </button>

          <a href="#contacto" className="btn btn-small" onClick={() => setIsOpen(false)}>
            Hablemos
          </a>
        </div>
      </nav>
    </header>
  );
}