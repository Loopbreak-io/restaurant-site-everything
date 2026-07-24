import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Menu', 'Our Story', 'Reservations', 'Private Events'];

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(12, 10, 8, 0.85)' : 'rgba(12, 10, 8, 0.35)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.35s ease',
        padding: '18px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              border: '1px solid var(--accent-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent)',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '20px',
              fontWeight: 700,
            }}
          >
            E
          </div>
          <div style={{ lineHeight: 1.1 }}>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '22px',
                fontWeight: 700,
                color: 'var(--fg)',
                letterSpacing: '0.04em',
              }}
            >
              Ember & Oak
            </div>
            <div style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.28em', textTransform: 'uppercase' }}>
              Wood-Fired Kitchen
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '34px' }} className="nav-links">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontSize: '14px',
                letterSpacing: '0.04em',
                color: hoveredLink === link ? 'var(--accent)' : 'var(--muted)',
                transition: 'color 0.2s ease',
                fontWeight: 400,
              }}
            >
              {link}
            </a>
          ))}
        </div>

        <button
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => setCtaHover(false)}
          style={{
            padding: '11px 24px',
            fontSize: '13px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontWeight: 500,
            color: ctaHover ? '#1a1409' : 'var(--accent)',
            background: ctaHover ? 'var(--accent)' : 'transparent',
            border: '1px solid var(--accent-border)',
            borderRadius: '100px',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            fontFamily: "'Jost', sans-serif",
          }}
        >
          Book a Table
        </button>
      </div>
    </nav>
  );
}