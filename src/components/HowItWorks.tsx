import React, { useState } from 'react';

export default function HowItWorks() {
  const [hoveredId, setHoveredId] = useState(null);

  const steps = [
    {
      id: 'step1',
      number: '01',
      title: 'Reserve Your Evening',
      description: 'Book online in seconds or ring us for the chef’s counter. Tell us about allergies, celebrations, or wine you love — we plan around you.',
    },
    {
      id: 'step2',
      number: '02',
      title: 'Settle In by the Fire',
      description: 'Arrive to warm light and the smell of oak smoke. Start with a cocktail or an aperitivo while the kitchen fires your first course.',
    },
    {
      id: 'step3',
      number: '03',
      title: 'Eat, Linger, Return',
      description: 'Let the seasonal menu unfold, glass by glass. When you leave, you’ll already be thinking about the next visit — most guests do.',
    },
  ];

  return (
    <section style={{ padding: '110px 24px', background: 'var(--bg-elev)' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '68px' }}>
          <div style={{ fontSize: '12px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>
            The Experience
          </div>
          <h2 style={{ fontSize: '46px', color: 'var(--fg)', margin: 0, lineHeight: 1.1 }}>
            An evening at Ember & Oak
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {steps.map((step, index) => {
            const active = hoveredId === step.id;
            return (
              <div
                key={step.id}
                onMouseEnter={() => setHoveredId(step.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  position: 'relative',
                  padding: '40px 34px',
                  background: active ? 'var(--accent-soft)' : 'var(--card)',
                  border: '1px solid',
                  borderColor: active ? 'var(--accent-border)' : 'var(--border)',
                  borderRadius: 'var(--radius)',
                  transform: active ? 'translateY(-5px)' : 'translateY(0)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '58px',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    opacity: active ? 0.9 : 0.45,
                    lineHeight: 1,
                    marginBottom: '20px',
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  {step.number}
                </div>
                <h3 style={{ fontSize: '24px', color: 'var(--fg)', margin: '0 0 12px' }}>{step.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>
                  {step.description}
                </p>
                {index < steps.length - 1 ? (
                  <div
                    style={{
                      position: 'absolute',
                      top: '54px',
                      right: '-14px',
                      color: 'var(--accent)',
                      opacity: 0.5,
                      display: 'none',
                    }}
                  >
                    →
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}