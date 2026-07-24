import React, { useState } from 'react';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const columns = {
    Dine: ['Dinner Menu', 'Weekend Brunch', 'Wine List', 'Chef’s Counter'],
    Visit: ['Reservations', 'Hours & Location', 'Private Events', 'Gift Cards'],
    About: ['Our Story', 'The Team', 'Press', 'Careers'],
  };

  const social = ['Instagram', 'Facebook', 'TripAdvisor'];

  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '72px 24px 36px' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr repeat(3, 1fr)',
            gap: '48px',
            marginBottom: '56px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
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
            </div>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '300px', margin: '0 0 20px' }}>
              A wood-fired kitchen in the old quarter. Live flame, local produce, and a
              cellar for slow evenings. Open Tuesday through Sunday.
            </p>
            <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8 }}>
              42 Kiln Street, Old Quarter<br />
              +1 (415) 555-0119
            </div>
          </div>

          {Object.entries(columns).map(([title, links]) => (
            <div key={title}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--fg)',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  marginBottom: '18px',
                }}
              >
                {title}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link} style={{ marginBottom: '12px' }}>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredLink(link)}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{
                        fontSize: '14px',
                        color: hoveredLink === link ? 'var(--accent)' : 'var(--muted)',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '28px',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div style={{ fontSize: '13px', color: 'var(--muted)' }}>
            © {new Date().getFullYear()} Ember & Oak Wood-Fired Kitchen. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            {social.map((s) => (
              <a
                key={s}
                href="#"
                onMouseEnter={() => setHoveredLink(s)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  fontSize: '13px',
                  color: hoveredLink === s ? 'var(--accent)' : 'var(--muted)',
                  transition: 'color 0.2s ease',
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}