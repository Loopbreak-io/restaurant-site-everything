import React, { useState } from 'react';

export default function Stats() {
  const [hoveredId, setHoveredId] = useState(null);

  const stats = [
    { id: 's1', value: '32', label: 'Seasonal dishes on the live-fire menu' },
    { id: 's2', value: '9', label: 'Local farms & fishers we source from weekly' },
    { id: 's3', value: '180+', label: 'Bottles in our natural-wine cellar' },
    { id: 's4', value: '11yrs', label: 'Serving the old quarter with open flame' },
  ];

  return (
    <section
      style={{
        padding: '72px 24px',
        background: 'var(--bg-elev)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '12px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '10px' }}>
            The Kitchen in Numbers
          </div>
          <h2 style={{ fontSize: '38px', color: 'var(--fg)', margin: 0 }}>
            Rooted in place, cooked with intention
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              onMouseEnter={() => setHoveredId(stat.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                textAlign: 'center',
                padding: '38px 24px',
                background: hoveredId === stat.id ? 'var(--accent-soft)' : 'var(--card)',
                border: '1px solid',
                borderColor: hoveredId === stat.id ? 'var(--accent-border)' : 'var(--border)',
                borderRadius: 'var(--radius)',
                transform: hoveredId === stat.id ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '54px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '14px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.5 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}