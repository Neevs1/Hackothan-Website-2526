'use client'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { image } from 'motion/react-client';
const goldSponsors = [
   { name: 'Sponsor 1', image: '/Redbull.png' },
  { name: 'Sponsor 2', image: '/algorand_full_logo_white.png' },
  { name: 'Sponsor 3', image: '/sinarmas.png' },
  {name:'Sponsor 4',image:'/vulnuris.webp'}
];

/*const silverSponsors = [
  ,
 /* { name: 'Sponsor 4', image: '/sponser4.jpg' },
  { name: 'Sponsor 5', image: '/sponser5.png' },
]; */

/*const communityPartners = [
 
];*/

const goldHover    = { glow: 'rgba(234,179,8,0.55)',   bg: 'cyan',   border: 'rgba(234,179,8,0.85)'   };
const silverHover  = { glow: 'rgba(148,163,184,0.45)', bg: 'cyan', border: 'rgba(148,163,184,0.75)' };
const partnerHover = { glow: 'rgba(34,211,238,0.4)',   bg: 'rgba(34,211,238,0.06)',  border: 'rgba(34,211,238,0.75)'  };

const css = `
  .sponsors-section * { box-sizing: border-box; }

  .sg-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .sponsor-card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    cursor: pointer;
    overflow: hidden;
    aspect-ratio: 16 / 6;
    width: 100%;
    border: 1px solid rgba(255,255,255,0.07);
    background: rgba(255,255,255,0.03);
    box-shadow: 0 2px 16px rgba(0,0,0,0.5);
    transition:
      border-color 0.4s ease,
      background 0.4s ease,
      box-shadow 0.4s ease,
      opacity 0.65s ease,
      transform 0.65s ease;
  }

  .sponsor-card:hover {
    border-color: rgba(129,140,248,0.55);
    background: radial-gradient(ellipse at 50% 110%, rgba(99,102,241,0.18) 0%, rgba(10,13,28,0.95) 70%);
    box-shadow: 0 0 40px 2px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.07);
  }

  .card-shimmer {
    position: absolute;
    top: 0; left: 20%; right: 20%; height: 1px;
    background: transparent;
    transition: background 0.4s ease;
  }
  .sponsor-card:hover .card-shimmer {
    background: linear-gradient(90deg, transparent, rgba(129,140,248,0.6), transparent);
  }

  .sponsor-card img {
    max-width: 52%;
    max-height: 60%;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
    pointer-events: none;
    filter: brightness(0.8) saturate(0.7);
    transition: filter 0.4s ease, transform 0.4s ease;
  }
  .sponsor-card:hover img {
    filter: brightness(1.15) saturate(1.1) drop-shadow(0 0 10px rgba(255,255,255,0.15));
    transform: scale(1.05);
  }

  .become-btn {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 11px 28px; border-radius: 999px;
    border: 1px solid rgba(99,102,241,0.45);
    background: rgba(99,102,241,0.10);
    color: #c7d2fe; font-weight: 600; font-size: 14px;
    cursor: pointer; letter-spacing: 0.3px;
    transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, color 0.35s ease;
    font-family: 'Trebuchet MS', sans-serif;
  }
  .become-btn:hover {
    background: rgba(99,102,241,0.22);
    border-color: rgba(129,140,248,0.75);
    box-shadow: 0 0 28px rgba(99,102,241,0.35);
    color: #fff;
  }

  @media (max-width: 900px) {
    .sg-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 600px) {
    .sg-grid { grid-template-columns: 1fr; gap: 10px; }
    .sponsor-card { aspect-ratio: 16 / 6; }
  }
`;

function SponsorCard({ sponsor, visible, delay = 0 }: { sponsor: { name: string; image: string }; visible: boolean; delay?: number }) {
  return (
    <div
      className="sponsor-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="card-shimmer" />
      <img src={sponsor.image} alt={sponsor.name} />
    </div>
  );
}

export default function Sponser() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const fade = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <>
      <style>{css}</style>
      <section
        className="sponsors-section"
        ref={ref}
        style={{
          width: '100%',
          padding: 'clamp(40px, 6vw, 80px) clamp(16px, 4vw, 48px)',
          background: 'linear-gradient(160deg, #0b0f1e 0%, #080c18 55%, #060914 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient orbs */}
        <div style={{ position: 'absolute', top: '-120px', right: '-120px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-80px', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          padding: 'clamp(28px, 4vw, 56px) clamp(20px, 4vw, 56px)',
          borderRadius: '20px',
          background: 'linear-gradient(160deg, rgba(255,255,255,0.035) 0%, rgba(99,102,241,0.03) 100%)',
          border: '1px solid rgba(99,102,241,0.16)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 0 120px rgba(99,102,241,0.07), inset 0 1px 0 rgba(255,255,255,0.05)',
          position: 'relative',
        }}>
          {/* Top shimmer */}
          <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), rgba(56,189,248,0.35), transparent)' }} />

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 4vw, 52px)', ...fade(0) }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '5px 18px', borderRadius: '999px',
              background: 'rgba(99,102,241,0.10)', border: '1px solid rgba(99,102,241,0.25)',
              marginBottom: '16px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6366f1', display: 'block', boxShadow: '0 0 8px #6366f1' }} />
              <span style={{ fontSize: '10px', letterSpacing: '3px', color: '#818cf8', fontWeight: 700, fontFamily: "'Trebuchet MS', sans-serif" }}>
                PARTNERSHIPS
              </span>
            </div>

            <h2 style={{
              margin: '0 0 12px',
              fontSize: 'clamp(22px, 3.5vw, 36px)',
              fontWeight: 700,
              fontFamily: "'Trebuchet MS', sans-serif",
              color: '#fff',
              lineHeight: 1.2,
            }}>
              Our Valuable{' '}
              <span style={{
                background: 'linear-gradient(90deg, #818cf8, #a78bfa, #67e8f9)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Sponsors
              </span>
            </h2>

            <p style={{
              margin: 0,
              fontSize: 'clamp(12px, 1.5vw, 14px)',
              color: 'rgba(255,255,255,0.35)',
              fontFamily: "'Trebuchet MS', sans-serif",
            }}>
              Empowering innovation through strategic collaborations.
            </p>
          </div>

          {/* Sponsor Grid */}
          <div className="sg-grid" style={fade(150)}>
            {sponsors.map((s, i) => (
              <SponsorCard key={i} sponsor={s} visible={visible} delay={180 + i * 70} />
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: 'clamp(36px, 5vw, 56px)', ...fade(500) }}>
            <div style={{ width: '48px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)', margin: '0 auto 28px' }} />
            <h3 style={{
              fontSize: 'clamp(16px, 2.2vw, 24px)', fontWeight: 700,
              fontFamily: "'Trebuchet MS', sans-serif", color: '#fff', margin: '0 0 10px',
            }}>
              Want to Contribute to the{' '}
              <span style={{
                background: 'linear-gradient(90deg, #818cf8, #a78bfa)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Hackathon?
              </span>
            </h3>
            <p style={{
              fontSize: 'clamp(11px, 1.4vw, 13px)', color: 'rgba(255,255,255,0.38)',
              fontFamily: "'Trebuchet MS', sans-serif", margin: '0 0 24px',
            }}>
              Partner with us to empower innovation and connect with emerging talent.
            </p>
            <button className="become-btn">✦ Become a Sponsor</button>
          </div>

          {/* Bottom shimmer */}
          <div style={{ position: 'absolute', bottom: 0, left: '25%', right: '25%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.30), transparent)' }} />
        </div>
      </section>
    </>
  );
}