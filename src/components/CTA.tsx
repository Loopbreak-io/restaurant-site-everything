import React, { useState } from 'react';

export default function CTA() {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 24px',
        background: 'linear-gradient(135deg, #1c1813 0%, #241d13 60%, #17130e 100%)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '620px',
          height: '620px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(212, 162, 78, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: '12px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '18px' }}>
          Your Table Awaits
        </div>
        <h2 style={{ fontSize: '52px', color: 'var(--fg)', margin: '0 0 20px', lineHeight: 1.1 }}>
          Come sit by the fire
        </h2>
        <p style={{ fontSize: '18px', color: 'var(--muted)', margin: '0 0 40px', lineHeight: 1.7 }}>
          Weekend tables go quickly. Reserve your evening at Ember & Oak and let us
          take care of the rest — from first pour to last bite.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
            style={{
              padding: '17px 40px',
              fontSize: '14px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 500,
              color: '#1a1409',
              background: 'var(--accent)',
              border: 'none',
              borderRadius: '100px',
              cursor: 'pointer',
              transform: primaryHover ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: primaryHover
                ? '0 18px 40px rgba(212, 162, 78, 0.4)'
                : '0 8px 24px rgba(212, 162, 78, 0.22)',
              transition: 'all 0.3s ease',
              fontFamily: "'Jost', sans-serif",
            }}
          >
            Book a Table
          </button>
          <button
            onMouseEnter={() => setSecondaryHover(true)}
            onMouseLeave={() => setSecondaryHover(false)}
            style={{
              padding: '17px 40px',
              fontSize: '14px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 500,
              color: 'var(--fg)',
              background: secondaryHover ? 'rgba(246,239,228,0.07)' : 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '100px',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              fontFamily: "'Jost', sans-serif",
            }}
          >
            Call +1 (415) 555-0119
          </button>
        </div>
      </div>
    </section>
  );
}