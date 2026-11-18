// components/Navbar.tsx
'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Sincronizar el estado inicial con la clase del HTML
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
    <header className="nav">
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
      
      <nav aria-label="Principal">
        <a href="/servicios">Servicios</a>
        <a href="#metodo">Cómo trabajamos</a>
        <a href="/historias">Historias</a>
        
        <button 
          onClick={toggleTheme}
          className="theme-btn"
          aria-label="Cambiar modo oscuro"
        >
          {isDark ? (
            /* Icono de Sol (cuando está en oscuro) */
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
            /* Icono de Luna (cuando está en claro) */
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          )}
        </button>

        <a href="#contacto" className="btn btn-small">
          Hablemos
        </a>
      </nav>
    </header>
  );
}