import React, { useState } from 'react';

export default function Hero() {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  const proof = [
    { value: '4.9★', label: 'From 2,300+ reviews' },
    { value: 'Est. 2012', label: 'A neighborhood classic' },
    { value: 'Michelin', label: 'Guide Recommended' },
  ];

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '140px 24px 110px',
        background:
          'linear-gradient(180deg, #0c0a08 0%, #130f0a 55%, #0c0a08 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '38%',
          left: '50%',
          width: '760px',
          height: '760px',
          background: 'radial-gradient(circle, rgba(212, 162, 78, 0.16) 0%, transparent 68%)',
          animation: 'floatGlow 9s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(246,239,228,0.04) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
          maskImage: 'radial-gradient(circle at 50% 40%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black, transparent 75%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          animation: 'slideUp 0.8s ease both',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 18px',
            background: 'var(--accent-soft)',
            border: '1px solid var(--accent-border)',
            borderRadius: '100px',
            marginBottom: '34px',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 2s infinite' }} />
          <span style={{ fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)' }}>
            Now taking Spring reservations
          </span>
        </div>

        <h1
          style={{
            fontSize: '76px',
            lineHeight: 1.05,
            margin: '0 0 26px',
            color: 'var(--fg)',
            fontWeight: 600,
          }}
        >
          Fire, smoke, and<br />
          <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>seasons on a plate.</span>
        </h1>

        <p
          style={{
            fontSize: '19px',
            color: 'var(--muted)',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto 44px',
          }}
        >
          Ember & Oak is a wood-fired kitchen in the heart of the old quarter. We cook
          over live flame with produce from local growers, paired with a cellar built
          for slow evenings. Come hungry, stay for the last pour.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
            style={{
              padding: '16px 36px',
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
                ? '0 18px 40px rgba(212, 162, 78, 0.35)'
                : '0 8px 24px rgba(212, 162, 78, 0.2)',
              transition: 'all 0.3s ease',
              fontFamily: "'Jost', sans-serif",
            }}
          >
            Reserve a Table
          </button>
          <button
            onMouseEnter={() => setSecondaryHover(true)}
            onMouseLeave={() => setSecondaryHover(false)}
            style={{
              padding: '16px 36px',
              fontSize: '14px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 500,
              color: 'var(--fg)',
              background: secondaryHover ? 'rgba(246,239,228,0.06)' : 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '100px',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              fontFamily: "'Jost', sans-serif",
            }}
          >
            View the Menu
          </button>
        </div>

        <div
          style={{
            marginTop: '68px',
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
            flexWrap: 'wrap',
          }}
        >
          {proof.map((p) => (
            <div key={p.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', color: 'var(--fg)', fontWeight: 700 }}>
                {p.value}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.05em' }}>{p.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}