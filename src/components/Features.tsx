import React, { useState } from 'react';

const Icons = {
  Flame: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />
    </svg>
  ),
  Leaf: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>
  ),
  Wine: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 22h8M7 10h10M12 15v7" />
      <path d="M17 2H7l1 8a4 4 0 008 0l1-8z" />
    </svg>
  ),
  Moon: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 009 9 9 9 0 11-9-9z" />
    </svg>
  ),
  Chef: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 13.87A4 4 0 017.41 6a5.11 5.11 0 011.05-1.54 5 5 0 017.08 0A5.11 5.11 0 0116.59 6 4 4 0 0118 13.87V21H6z" />
      <path d="M6 17h12" />
    </svg>
  ),
  Heart: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
};

export default function Features() {
  const [hoveredId, setHoveredId] = useState(null);

  const features = [
    {
      id: 'f1',
      icon: Icons.Flame,
      title: 'Cooked Over Live Flame',
      description: 'Everything passes through fire — from charred leeks to dry-aged rib. Our custom oak hearth is the heart of the room.',
      featured: true,
    },
    {
      id: 'f2',
      icon: Icons.Leaf,
      title: 'Farm-to-Fire Produce',
      description: 'We rewrite the menu with the seasons, cooking whatever our growers pull from the ground that morning.',
    },
    {
      id: 'f3',
      icon: Icons.Wine,
      title: 'A Living Cellar',
      description: 'Low-intervention wines and small-batch pours, chosen to match smoke and char. Ask our sommelier for the odd bottle.',
    },
    {
      id: 'f4',
      icon: Icons.Chef,
      title: "Chef's Counter",
      description: 'Eight seats facing the flame. Watch every plate leave the pass and trade stories with the kitchen team.',
    },
    {
      id: 'f5',
      icon: Icons.Moon,
      title: 'Late-Night Table',
      description: 'The bar keeps its fire lit until midnight — small plates, amaro, and vinyl for those who linger.',
    },
    {
      id: 'f6',
      icon: Icons.Heart,
      title: 'Rooms for Occasions',
      description: 'Our loft and courtyard host anything from a birthday to a rehearsal dinner, with menus built for the moment.',
    },
  ];

  return (
    <section style={{ padding: '110px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ fontSize: '12px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>
            Why Ember & Oak
          </div>
          <h2 style={{ fontSize: '46px', color: 'var(--fg)', margin: '0 0 16px', lineHeight: 1.1 }}>
            A room built around the fire
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>
            No trend-chasing, no shortcuts. Just honest cooking, generous hospitality,
            and a bottle worth opening on a weeknight.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '22px',
          }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            const active = hoveredId === feature.id;
            return (
              <div
                key={feature.id}
                onMouseEnter={() => setHoveredId(feature.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  gridColumn: feature.featured ? 'span 1' : 'span 1',
                  padding: '38px 34px',
                  background: active ? 'var(--accent-soft)' : 'var(--card)',
                  border: '1px solid',
                  borderColor: active ? 'var(--accent-border)' : 'var(--border)',
                  borderRadius: 'var(--radius)',
                  transform: active ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: active ? '0 24px 48px rgba(0,0,0,0.4)' : 'none',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '12px',
                    background: 'var(--surface)',
                    border: '1px solid var(--accent-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    marginBottom: '24px',
                  }}
                >
                  <Icon />
                </div>
                <h3 style={{ fontSize: '24px', color: 'var(--fg)', margin: '0 0 12px' }}>{feature.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}