import React, { useState } from 'react';

export default function Testimonials() {
  const [hoveredId, setHoveredId] = useState(null);

  const quotes = [
    {
      id: 't1',
      quote: 'The smoked short rib alone is worth the trip across town. We booked the chef’s counter for our anniversary and it turned into the best meal of our year.',
      name: 'Marisol Vance',
      role: 'Regular guest since 2016',
    },
    {
      id: 't2',
      quote: 'Every plate tastes of place. You can feel the fire, the farm, and the care. Ember & Oak is the rare restaurant that still surprises me on the tenth visit.',
      name: 'Daniel Osei',
      role: 'Food critic, The City Table',
    },
    {
      id: 't3',
      quote: 'We hosted our rehearsal dinner in the loft and the team handled everything. Guests are still talking about the wine pairings months later.',
      name: 'Priya & Tom Whitfield',
      role: 'Private event, Autumn 2023',
    },
  ];

  return (
    <section style={{ padding: '110px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ fontSize: '12px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>
            Words from the Table
          </div>
          <h2 style={{ fontSize: '46px', color: 'var(--fg)', margin: 0, lineHeight: 1.1 }}>
            Loved by our regulars
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '22px',
          }}
        >
          {quotes.map((q) => {
            const active = hoveredId === q.id;
            return (
              <figure
                key={q.id}
                onMouseEnter={() => setHoveredId(q.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  margin: 0,
                  padding: '38px 34px',
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
                    fontSize: '56px',
                    color: 'var(--accent)',
                    lineHeight: 0.5,
                    height: '30px',
                  }}
                >
                  “
                </div>
                <blockquote
                  style={{
                    margin: '0 0 26px',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '21px',
                    lineHeight: 1.5,
                    color: 'var(--fg)',
                    fontStyle: 'italic',
                  }}
                >
                  {q.quote}
                </blockquote>
                <figcaption>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--fg)' }}>{q.name}</div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '2px' }}>{q.role}</div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}