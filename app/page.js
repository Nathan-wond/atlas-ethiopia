'use client'

import { useState, useEffect, useRef } from 'react'

const C = {
  bg:      '#0F0B08',
  surface: '#181210',
  card:    '#1E1713',
  border:  '#2E2218',
  text:    '#F2EAD8',
  muted:   '#8A7560',
  gold:    '#C9973A',
  goldDim: '#7A5A20',
}

function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true) },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, vis]
}

function Fade({ children, delay = 0, y = 24, style = {} }) {
  const [ref, vis] = useReveal()
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? 'none' : `translateY(${y}px)`,
      transition: `opacity 0.9s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.9s cubic-bezier(.16,1,.3,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  )
}

function Eye({ children }) {
  return (
    <p style={{
      fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      color: C.gold, marginBottom: 20,
    }}>{children}</p>
  )
}

function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['Services', 'Process', 'Work', 'FAQ']

  return (
    <>
      <nav aria-label="Main navigation" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        padding: '0 2.5rem',
        background: solid ? 'rgba(15,11,8,0.96)' : 'transparent',
        backdropFilter: solid ? 'blur(16px)' : 'none',
        borderBottom: solid ? `1px solid ${C.border}` : '1px solid transparent',
        transition: 'all 0.5s ease',
      }}>
        <div style={{
          maxWidth: 1120, margin: '0 auto', height: 88,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <img
              src="/logo.png"
              alt="Atlas Ethiopia Digital Studio — Web Design and Development in Addis Ababa"
              width={48}
              height={72}
              style={{ height: 72, width: 'auto', objectFit: 'contain', display: 'block' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: "'Fraunces', serif", fontWeight: 900,
                fontSize: 19, color: C.text, letterSpacing: '-0.02em',
              }}>Atlas Ethiopia</span>
              <span style={{
                fontFamily: "'Syne', sans-serif", fontSize: 9, fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase', color: C.gold, marginTop: 3,
              }}>Digital Studio</span>
            </div>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="ae-desklinks">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{
                fontFamily: "'Lora', serif", fontSize: 14, fontStyle: 'italic',
                color: C.muted, textDecoration: 'none', transition: 'color 0.25s',
              }}
              onMouseEnter={e => e.target.style.color = C.text}
              onMouseLeave={e => e.target.style.color = C.muted}
              >{l}</a>
            ))}
            <a href="#contact" style={{
              fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: C.bg, background: C.gold,
              padding: '9px 22px', borderRadius: 4,
              textDecoration: 'none', transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >Let&apos;s talk</a>
          </div>

          <button onClick={() => setOpen(!open)} className="ae-ham"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'none' }}
            aria-label="Menu">
            <svg width="22" height="16" fill="none" stroke={C.text} strokeWidth="1.5">
              {open
                ? <><line x1="2" y1="2" x2="20" y2="14"/><line x1="20" y1="2" x2="2" y2="14"/></>
                : <><line x1="0" y1="3" x2="22" y2="3"/><line x1="0" y1="13" x2="22" y2="13"/></>}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div style={{
          position: 'fixed', top: 70, left: 0, right: 0, zIndex: 199,
          background: C.surface, borderBottom: `1px solid ${C.border}`,
          padding: '2rem 2.5rem', display: 'flex', flexDirection: 'column', gap: 28,
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{
              fontFamily: "'Lora', serif", fontSize: 18, fontStyle: 'italic',
              color: C.text, textDecoration: 'none',
            }}>{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{
            fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: C.bg, background: C.gold,
            padding: '12px 24px', borderRadius: 4,
            textDecoration: 'none', textAlign: 'center',
          }}>Let&apos;s talk</a>
        </div>
      )}

      <style>{`
        @media(max-width:720px){
          .ae-desklinks{display:none!important;}
          .ae-ham{display:block!important;}
        }
      `}</style>
    </>
  )
}

function Hero() {
  const [in_, setIn] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setIn(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      aria-label="Atlas Ethiopia — Premium Web Design and Development Studio in Addis Ababa, Ethiopia"
      style={{
        minHeight: '100vh', background: C.bg, position: 'relative',
        display: 'flex', alignItems: 'center',
        padding: '120px 2.5rem 80px', overflow: 'hidden',
      }}>
      <img
        src="/logo.png"
        aria-hidden="true"
        alt=""
        loading="eager"
        width={600}
        height={900}
        style={{
          position: 'absolute', right: '-6%', bottom: 0,
          height: '90%', width: 'auto', objectFit: 'contain',
          opacity: 0.13,
          userSelect: 'none', pointerEvents: 'none',
          mixBlendMode: 'luminosity',
        }}
      />

      <div style={{ maxWidth: 1120, margin: '0 auto', width: '100%', position: 'relative' }}>
        <div style={{
          opacity: in_ ? 1 : 0, transform: in_ ? 'none' : 'translateY(36px)',
          transition: 'all 1.1s cubic-bezier(.16,1,.3,1) 0.1s',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            border: `1px solid ${C.border}`, borderRadius: 100,
            padding: '6px 16px 6px 10px', marginBottom: 48,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.gold }} />
            <span style={{
              fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700,
              letterSpacing: '0.15em', textTransform: 'uppercase', color: C.muted,
            }}>Addis Ababa, Ethiopia</span>
          </div>

          <h1 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(3rem, 8.5vw, 7rem)',
            fontWeight: 900, color: C.text,
            lineHeight: 1.0, letterSpacing: '-0.04em',
            margin: '0 0 0', maxWidth: '14ch',
          }}>
            Your business<br />
            <em style={{ fontStyle: 'italic', color: C.gold }}>deserves</em><br />
            to be found.
            <span style={{
              position: 'absolute', width: 1, height: 1,
              padding: 0, margin: -1, overflow: 'hidden',
              clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0,
            }}>
              — Web Design & Development Studio in Addis Ababa, Ethiopia
            </span>
          </h1>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 40, marginTop: 56, maxWidth: 700,
          }} className="ae-herogrid">
            <p style={{
              fontFamily: "'Lora', serif", fontSize: '1.05rem',
              color: C.muted, lineHeight: 1.85, margin: 0,
            }}>
              Atlas Ethiopia is a web design and development studio based in Addis Ababa.
              We help businesses across Ethiopia build a professional online presence
              that is honest, crafted, and built to last — not just a website, but a reputation.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'flex-end' }}>
              <a href="#contact" style={{
                fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: C.bg, background: C.gold,
                padding: '14px 28px', borderRadius: 4,
                textDecoration: 'none', textAlign: 'center',
                transition: 'opacity 0.2s', display: 'block',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >Start a conversation</a>
              <a href="#work" style={{
                fontFamily: "'Lora', serif", fontSize: 14, fontStyle: 'italic',
                color: C.muted, textDecoration: 'none', textAlign: 'center',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = C.text}
              onMouseLeave={e => e.target.style.color = C.muted}
              >See our work →</a>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:640px){.ae-herogrid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}

function Mission() {
  return (
    <section id="mission" aria-label="About Atlas Ethiopia Digital Studio" style={{ background: C.surface, padding: '120px 2.5rem', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="ae-2col">
          <Fade>
            <Eye>Why Atlas Ethiopia exists</Eye>
            <h2 style={{
              fontFamily: "'Fraunces', serif", fontWeight: 900,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              color: C.text, lineHeight: 1.08, letterSpacing: '-0.035em', margin: 0,
            }}>
              Ethiopia is full of<br />
              <em style={{ color: C.gold, fontStyle: 'italic' }}>remarkable</em><br />
              businesses<br />no one can find.
            </h2>
          </Fade>
          <Fade delay={0.15}>
            <div style={{ paddingTop: 48 }}>
              <p style={{
                fontFamily: "'Lora', serif", fontSize: '1.1rem',
                color: C.muted, lineHeight: 1.9, marginBottom: 28,
              }}>
                Talented craftspeople. Trusted restaurants. Growing companies with
                loyal customers and real stories — but no way for the world beyond
                their neighborhood to discover them.
              </p>
              <p style={{
                fontFamily: "'Lora', serif", fontSize: '1.1rem',
                color: C.muted, lineHeight: 1.9, marginBottom: 52,
              }}>
                We exist to change that. Not by selling websites, but by building
                the kind of digital presence that earns trust before a single word
                is read.
              </p>
              <div style={{ display: 'flex', gap: 52, borderTop: `1px solid ${C.border}`, paddingTop: 40 }}>
                {[
                  ['Every client', 'gets our full personal attention — not a template.'],
                  ['Every project', 'starts with listening, not pitching.'],
                ].map(([bold, rest]) => (
                  <div key={bold}>
                    <div style={{
                      fontFamily: "'Fraunces', serif", fontWeight: 900,
                      fontSize: '1.05rem', color: C.text, marginBottom: 8,
                      letterSpacing: '-0.02em',
                    }}>{bold}</div>
                    <div style={{
                      fontFamily: "'Lora', serif", fontSize: '0.88rem',
                      color: C.muted, lineHeight: 1.7,
                    }}>{rest}</div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <style>{`@media(max-width:768px){.ae-2col{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
    </section>
  )
}

const SERVICES = [
  { n: '01', title: 'Website Design\n& Development', body: 'Custom website design and development for Ethiopian businesses. Fast, beautiful, mobile-first, and built to turn visitors into customers — on every screen.', keyword: 'Web Design & Development Ethiopia' },
  { n: '02', title: 'Brand Identity\nDesign', body: 'Logo design, color systems, typography, and the complete visual language that makes your Ethiopian business instantly recognizable and worth remembering.', keyword: 'Brand Identity Design Ethiopia' },
  { n: '03', title: 'Digital Strategy', body: 'Clarity on what your website should achieve, who it\'s for, and how it fits your business goals — before we design a single pixel.', keyword: 'Digital Strategy Addis Ababa' },
  { n: '04', title: 'Ongoing Care\n& Maintenance', body: 'Your website is a living thing. We keep it fast, secure, updated, and performing long after launch — so you never have to worry about it.', keyword: 'Website Maintenance Ethiopia' },
]

function Services() {
  return (
    <section id="services" aria-label="Web Design and Development Services in Ethiopia" style={{ background: C.bg, padding: '120px 2.5rem', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <Fade>
          <Eye>Web Design & Development Services — Ethiopia</Eye>
          <h2 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: C.text, lineHeight: 1.1, letterSpacing: '-0.035em',
            maxWidth: '22ch', marginBottom: 72,
          }}>
            Everything an Ethiopian business needs<br />
            to exist online, <em style={{ color: C.gold, fontStyle: 'italic' }}>beautifully.</em>
          </h2>
        </Fade>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1,
          border: `1px solid ${C.border}`, borderRadius: 8, overflow: 'hidden',
        }} className="ae-svcgrid">
          {SERVICES.map((s, i) => (
            <Fade key={s.n} delay={i * 0.07} style={{ display: 'flex' }}>
              <div style={{
                background: C.card, padding: '44px 40px',
                borderRight: i % 2 === 0 ? `1px solid ${C.border}` : 'none',
                borderBottom: i < 2 ? `1px solid ${C.border}` : 'none',
                transition: 'background 0.35s', cursor: 'default',
                width: '100%', display: 'flex', flexDirection: 'column',
              }}
              onMouseEnter={e => e.currentTarget.style.background = C.surface}
              onMouseLeave={e => e.currentTarget.style.background = C.card}
              >
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontSize: 10, fontWeight: 800,
                  letterSpacing: '0.2em', color: C.goldDim, marginBottom: 24,
                }}>{s.n}</div>
                <h3 style={{
                  fontFamily: "'Fraunces', serif", fontWeight: 700,
                  fontSize: '1.45rem', color: C.text,
                  letterSpacing: '-0.025em', lineHeight: 1.2,
                  marginBottom: 16, whiteSpace: 'pre-line',
                }}>
                  {s.title}
                  <span style={{
                    position: 'absolute', width: 1, height: 1, padding: 0,
                    margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)',
                    whiteSpace: 'nowrap', border: 0,
                  }}> — {s.keyword}</span>
                </h3>
                <p style={{
                  fontFamily: "'Lora', serif", fontSize: '0.95rem',
                  color: C.muted, lineHeight: 1.8, margin: 0,
                  marginTop: 'auto',
                }}>{s.body}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){.ae-svcgrid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}

const STEPS = [
  { word: 'Listen',     body: 'Before anything is designed, we talk. We want to understand your business, your people, and what success looks like for you.' },
  { word: 'Discover',   body: 'We research your industry, your competitors, and your audience so every decision we make is grounded in reality.' },
  { word: 'Design',     body: 'We create a visual direction that feels like your business — not a template. Every detail is deliberate.' },
  { word: 'Build',      body: 'Clean, fast code. Works on every device. Finds people on Google. Built to last.' },
  { word: 'Launch & Stay', body: 'We go live carefully, together. Then we stay — because a launch is the beginning, not the end.' },
]

function Process() {
  return (
    <section id="process" aria-label="Our Web Design Process in Ethiopia" style={{ background: C.surface, padding: '120px 2.5rem', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <Fade>
          <Eye>Our Web Design Process</Eye>
          <h2 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: C.text, lineHeight: 1.1, letterSpacing: '-0.035em',
            maxWidth: '22ch', marginBottom: 80,
          }}>
            How we build websites<br />
            <em style={{ color: C.gold, fontStyle: 'italic' }}>in Ethiopia.</em>
          </h2>
        </Fade>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {STEPS.map((s, i) => (
            <Fade key={s.word} delay={i * 0.08}>
              <div style={{
                display: 'grid', gridTemplateColumns: '200px 1fr',
                gap: 48, padding: '36px 0',
                borderTop: `1px solid ${C.border}`,
                alignItems: 'start', cursor: 'default',
              }}
              className="ae-steprow"
              onMouseEnter={e => { const w = e.currentTarget.querySelector('.ae-stepword'); if (w) w.style.borderBottomColor = C.gold }}
              onMouseLeave={e => { const w = e.currentTarget.querySelector('.ae-stepword'); if (w) w.style.borderBottomColor = 'transparent' }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                  <span style={{
                    fontFamily: "'Syne', sans-serif", fontSize: 10, fontWeight: 800,
                    letterSpacing: '0.2em', color: C.goldDim,
                  }}>0{i + 1}</span>
                  <span className="ae-stepword" style={{
                    fontFamily: "'Fraunces', serif", fontWeight: 800,
                    fontSize: '1.35rem', color: C.text, letterSpacing: '-0.03em',
                    borderBottom: '1px solid transparent', transition: 'border-color 0.25s', paddingBottom: 1,
                  }}>{s.word}</span>
                </div>
                <p style={{
                  fontFamily: "'Lora', serif", fontSize: '1rem',
                  color: C.muted, lineHeight: 1.85, margin: 0, paddingTop: 4,
                }}>{s.body}</p>
              </div>
            </Fade>
          ))}
          <div style={{ borderTop: `1px solid ${C.border}` }} />
        </div>
      </div>
      <style>{`@media(max-width:640px){.ae-steprow{grid-template-columns:1fr!important;gap:12px!important;}}`}</style>
    </section>
  )
}

const WORK = [
  { name: 'Desta Bakery',     type: 'Brand Identity + Website', desc: 'Twenty years of family tradition, finally visible to the world. A warm site built around the smell of fresh bread and the trust of a neighborhood institution.', glyph: 'ደ' },
  { name: 'Selam Logistics',  type: 'Website + Strategy',       desc: 'A professional, confident presence for a freight company expanding into regional trade. Built for the B2B clients who need to trust before they sign.',             glyph: 'ሰ' },
  { name: 'Haile Coffee',     type: 'E-commerce + Brand',       desc: "Ethiopia's coffee heritage, sold to the world. An elegant online store that knows where the beans come from and makes sure the buyer does too.",                        glyph: 'ሃ' },
]

function Work() {
  return (
    <section id="work" aria-label="Web Design Portfolio — Ethiopian Business Websites" style={{ background: C.bg, padding: '120px 2.5rem', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <Fade>
          <Eye>Web Design Portfolio — Ethiopia</Eye>
          <h2 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: C.text, lineHeight: 1.1, letterSpacing: '-0.035em',
            maxWidth: '26ch', marginBottom: 72,
          }}>
            Ethiopian businesses we&apos;ve helped<br />
            <em style={{ color: C.gold, fontStyle: 'italic' }}>find their voice</em> online.
          </h2>
        </Fade>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="ae-workgrid">
          {WORK.map((w, i) => (
            <Fade key={w.name} delay={i * 0.1}>
              <div style={{
                background: C.card, border: `1px solid ${C.border}`,
                borderRadius: 8, overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s', cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = 'none' }}
              >
                <div style={{
                  height: 160, background: C.surface,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden',
                  borderBottom: `1px solid ${C.border}`,
                }}>
                  <span aria-hidden="true" style={{
                    fontFamily: 'serif', fontSize: 120, color: C.gold,
                    opacity: 0.08, lineHeight: 1, position: 'absolute', bottom: -10, right: 16,
                  }}>{w.glyph}</span>
                  <span style={{
                    fontFamily: "'Fraunces', serif", fontWeight: 900,
                    fontSize: '2.6rem', color: C.gold, letterSpacing: '-0.04em', zIndex: 1,
                  }}>{w.name[0]}</span>
                </div>
                <div style={{ padding: '28px 28px 32px' }}>
                  <div style={{
                    fontFamily: "'Syne', sans-serif", fontSize: 10, fontWeight: 700,
                    letterSpacing: '0.16em', textTransform: 'uppercase',
                    color: C.goldDim, marginBottom: 10,
                  }}>{w.type}</div>
                  <h3 style={{
                    fontFamily: "'Fraunces', serif", fontWeight: 800,
                    fontSize: '1.3rem', color: C.text,
                    letterSpacing: '-0.025em', marginBottom: 12,
                  }}>{w.name}</h3>
                  <p style={{
                    fontFamily: "'Lora', serif", fontSize: '0.9rem',
                    color: C.muted, lineHeight: 1.8, margin: 0,
                  }}>{w.desc}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:720px){.ae-workgrid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}

function Philosophy() {
  return (
    <section style={{
      background: C.surface, padding: '120px 2.5rem',
      borderTop: `1px solid ${C.border}`, overflow: 'hidden', position: 'relative',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%,-50%)',
        fontFamily: 'serif', fontSize: 'clamp(200px, 30vw, 360px)',
        color: C.gold, opacity: 0.03, lineHeight: 1,
        userSelect: 'none', pointerEvents: 'none', fontWeight: 900,
      }}>ፍ</div>
      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <Fade>
          <div style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
            fontWeight: 900, fontStyle: 'italic',
            color: C.text, lineHeight: 1.18, letterSpacing: '-0.035em',
          }}>
            &ldquo;Nothing we design exists without purpose.<br />
            If it cannot answer <span style={{ color: C.gold }}>why</span>,<br />
            it does not belong.&rdquo;
          </div>
          <div style={{
            fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: C.muted, marginTop: 36,
          }}>— The Atlas Ethiopia Principle</div>
        </Fade>
      </div>
    </section>
  )
}

const FAQS = [
  { q: 'How much does a website cost in Ethiopia?',           a: "Every business is different, so every website price is different. At Atlas Ethiopia, we prefer to understand your specific needs before quoting a number. Reach out and we'll give you an honest, tailored price." },
  { q: 'How long does web design take in Addis Ababa?',       a: 'Most website projects at Atlas Ethiopia take 4 to 8 weeks from first conversation to launch. Brand identity work can add 2 to 3 weeks. We give every client a clear timeline before we begin.' },
  { q: 'Do I need a logo before getting a website?',          a: 'Not at all. Many of our best projects begin with a blank page. Atlas Ethiopia offers both brand identity design and website development, so we can build your complete digital presence from scratch.' },
  { q: 'Will my website work on mobile phones in Ethiopia?',  a: 'Always. In Ethiopia, where most people browse on mobile phones, we design mobile-first — meaning your website is built for phones before anything else.' },
  { q: 'Can Atlas Ethiopia help me get found on Google?',     a: 'Yes. Every website we build is optimized for search engines from the ground up — fast loading, mobile-friendly, and structured to help Ethiopian businesses get found on Google.' },
]

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" aria-label="Frequently Asked Questions — Web Design Ethiopia" style={{ background: C.bg, padding: '120px 2.5rem', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Fade>
          <Eye>FAQ — Web Design & Development Ethiopia</Eye>
          <h2 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: C.text, lineHeight: 1.1, letterSpacing: '-0.035em', marginBottom: 64,
          }}>Common questions about web design in Ethiopia.</h2>
        </Fade>
        {FAQS.map((f, i) => (
          <Fade key={f.q} delay={i * 0.05}>
            <div style={{ borderTop: `1px solid ${C.border}` }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: '100%', background: 'none', border: 'none',
                cursor: 'pointer', padding: '26px 0',
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', gap: 20, textAlign: 'left',
              }}>
                <span style={{
                  fontFamily: "'Fraunces', serif", fontSize: '1.1rem', fontWeight: 700,
                  color: open === i ? C.text : '#C4B49A', letterSpacing: '-0.02em',
                  transition: 'color 0.2s',
                }}>{f.q}</span>
                <div style={{
                  width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                  border: `1px solid ${open === i ? C.gold : C.border}`,
                  background: open === i ? C.gold : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.25s',
                }}>
                  <svg width="10" height="10" fill="none"
                    stroke={open === i ? C.bg : C.muted} strokeWidth="2"
                    style={{ transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s' }}>
                    <line x1="5" y1="0" x2="5" y2="10"/><line x1="0" y1="5" x2="10" y2="5"/>
                  </svg>
                </div>
              </button>
              <div style={{
                maxHeight: open === i ? 240 : 0, overflow: 'hidden',
                transition: 'max-height 0.45s cubic-bezier(.16,1,.3,1)',
              }}>
                <p style={{
                  fontFamily: "'Lora', serif", fontSize: '1rem',
                  color: C.muted, lineHeight: 1.85, paddingBottom: 28, margin: 0,
                }}>{f.a}</p>
              </div>
            </div>
          </Fade>
        ))}
        <div style={{ borderTop: `1px solid ${C.border}` }} />
      </div>
    </section>
  )
}

const GOALS = [
  { id: 'customers', label: 'Attract more customers' },
  { id: 'trust',     label: 'Build trust & credibility' },
  { id: 'sales',     label: 'Sell products online' },
  { id: 'visible',   label: 'Be found on Google' },
  { id: 'brand',     label: 'Look more professional' },
  { id: 'social',    label: 'Move beyond social media' },
  { id: 'bookings',  label: 'Take bookings or enquiries' },
  { id: 'other',     label: 'Something else' },
]

function GoalChips({ selected, onChange }) {
  const active = selected ? selected.split(',') : []
  const toggle = id => {
    const next = active.includes(id) ? active.filter(x => x !== id) : [...active, id]
    onChange(next.join(','))
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 4 }}>
      {GOALS.map(g => {
        const on = active.includes(g.id)
        return (
          <button key={g.id} type="button" onClick={() => toggle(g.id)} style={{
            fontFamily: "'Lora', serif", fontSize: '0.88rem',
            fontStyle: on ? 'normal' : 'italic',
            color: on ? C.bg : C.muted,
            background: on ? C.gold : 'transparent',
            border: `1px solid ${on ? C.gold : C.border}`,
            borderRadius: 4, padding: '9px 16px',
            cursor: 'pointer',
            transition: 'all 0.2s cubic-bezier(.16,1,.3,1)',
            fontWeight: on ? 600 : 400,
          }}
          onMouseEnter={e => { if (!on) { e.currentTarget.style.borderColor = C.goldDim; e.currentTarget.style.color = C.text } }}
          onMouseLeave={e => { if (!on) { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.muted } }}
          >{g.label}</button>
        )
      })}
    </div>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', business: '', phone: '', about: '', goal: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async () => {
    if (!form.name || !form.business || !form.phone) {
      setError('Please fill in your name, business name, and phone number.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setSent(true)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    fontFamily: "'Lora', serif", fontSize: '0.95rem',
    color: C.text, background: C.card,
    border: `1px solid ${C.border}`, borderRadius: 4,
    padding: '12px 16px', width: '100%', outline: 'none',
    boxSizing: 'border-box', transition: 'border-color 0.2s',
  }

  const labelStyle = {
    fontFamily: "'Syne', sans-serif", fontSize: 10, fontWeight: 700,
    letterSpacing: '0.16em', textTransform: 'uppercase',
    color: C.muted, display: 'block', marginBottom: 8,
  }

  return (
    <section id="contact" aria-label="Contact Atlas Ethiopia — Get a Website for Your Business" style={{ background: C.surface, padding: '120px 2.5rem', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <Fade>
          <Eye>Get in touch</Eye>
          <h2 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: C.text, lineHeight: 1.1, letterSpacing: '-0.035em', marginBottom: 16,
          }}>
            Let&apos;s talk about<br />
            <em style={{ color: C.gold, fontStyle: 'italic' }}>your business.</em>
          </h2>
          <p style={{
            fontFamily: "'Lora', serif", fontSize: '1.05rem',
            color: C.muted, lineHeight: 1.85, marginBottom: 52,
          }}>
            I&apos;d like to hear your story — your business, your customers, and what
            you hope a digital presence will do for you. No pressure, no pitch.
            Just a real conversation.
          </p>
        </Fade>

        {sent ? (
          <Fade>
            <div style={{
              background: C.card, border: `1px solid ${C.border}`,
              borderRadius: 8, padding: '60px 40px', textAlign: 'center',
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: '50%', margin: '0 auto 28px',
                border: `1px solid ${C.gold}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="20" height="20" fill="none" stroke={C.gold} strokeWidth="2">
                  <polyline points="4 10 8 14 16 6"/>
                </svg>
              </div>
              <h3 style={{
                fontFamily: "'Fraunces', serif", fontWeight: 900,
                fontSize: '1.8rem', color: C.text, letterSpacing: '-0.03em', marginBottom: 14,
              }}>Message received.</h3>
              <p style={{
                fontFamily: "'Lora', serif", fontSize: '1rem', color: C.muted, lineHeight: 1.8,
              }}>
                Thank you, {form.name.split(' ')[0]}. I&apos;ll be in touch within 24 hours.
              </p>
            </div>
          </Fade>
        ) : (
          <Fade delay={0.1}>
            <div style={{
              background: C.card, border: `1px solid ${C.border}`,
              borderRadius: 8, padding: '44px 40px 40px',
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="ae-formrow">
                <div>
                  <label style={labelStyle}>Your name *</label>
                  <input value={form.name} onChange={set('name')} placeholder="Abebe Girma" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = C.gold}
                    onBlur={e => e.target.style.borderColor = C.border}/>
                </div>
                <div>
                  <label style={labelStyle}>Business name *</label>
                  <input value={form.business} onChange={set('business')} placeholder="Your business" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = C.gold}
                    onBlur={e => e.target.style.borderColor = C.border}/>
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Phone number *</label>
                <input value={form.phone} onChange={set('phone')} placeholder="+251 9XX XXX XXX" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = C.gold}
                  onBlur={e => e.target.style.borderColor = C.border}/>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Tell me about your business</label>
                <textarea value={form.about} onChange={set('about')} rows={4}
                  placeholder="What do you do? Who are your customers? What makes you different?"
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = C.gold}
                  onBlur={e => e.target.style.borderColor = C.border}/>
              </div>

              <div style={{ marginBottom: 32 }}>
                <label style={labelStyle}>
                  What do you hope your website achieves?{' '}
                  <span style={{ color: C.goldDim }}>(pick all that apply)</span>
                </label>
                <GoalChips selected={form.goal} onChange={v => setForm(f => ({ ...f, goal: v }))} />
              </div>

              {error && (
                <p style={{
                  fontFamily: "'Lora', serif", fontSize: '0.88rem', fontStyle: 'italic',
                  color: '#E57373', marginBottom: 16, lineHeight: 1.6,
                }}>{error}</p>
              )}

              <button
                onClick={submit}
                disabled={loading}
                style={{
                  width: '100%', padding: '15px',
                  background: loading ? C.goldDim : C.gold,
                  color: C.bg,
                  fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  border: 'none', borderRadius: 4,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = '0.85' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
              >
                {loading ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                      style={{ animation: 'spin 0.8s linear infinite' }}>
                      <circle cx="7" cy="7" r="5.5" stroke={C.bg} strokeWidth="1.5" strokeOpacity="0.3"/>
                      <path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke={C.bg} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Sending...
                  </>
                ) : 'Request a conversation'}
              </button>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

              <p style={{
                fontFamily: "'Lora', serif", fontSize: '0.8rem', fontStyle: 'italic',
                color: C.muted, textAlign: 'center', marginTop: 18, lineHeight: 1.7,
              }}>
                Your information is used only to respond to your request.<br />
                It is never shared or used for marketing.
              </p>
            </div>
          </Fade>
        )}
      </div>
      <style>{`@media(max-width:500px){.ae-formrow{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}

function Footer() {
  return (
    <footer role="contentinfo" aria-label="Atlas Ethiopia Digital Studio — Footer" style={{
      background: C.bg, borderTop: `1px solid ${C.border}`,
      padding: '44px 2.5rem', position: 'relative', overflow: 'hidden',
    }}>
      <img
        src="/logo.png"
        aria-hidden="true"
        alt=""
        loading="lazy"
        width={73}
        height={110}
        style={{
          position: 'absolute', right: 0, bottom: 0,
          height: 110, width: 'auto', opacity: 0.07,
          userSelect: 'none', pointerEvents: 'none',
          mixBlendMode: 'luminosity',
        }}
      />
      <div style={{
        maxWidth: 1120, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 24,
        position: 'relative',
      }}>
        <div>
          <span style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: 17, color: C.text, letterSpacing: '-0.02em',
          }}>Atlas Ethiopia</span>
          <span style={{
            fontFamily: "'Lora', serif", fontSize: 13,
            color: C.muted, marginLeft: 12, fontStyle: 'italic',
          }}>— Web Design & Development Studio, Addis Ababa, Ethiopia.</span>
        </div>
        <p style={{
          fontFamily: "'Syne', sans-serif", fontSize: 10, fontWeight: 700,
          letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, margin: 0,
        }}>© {new Date().getFullYear()} Atlas Ethiopia</p>
      </div>
    </footer>
  )
}

/* ─── LOADING SCREEN ─────────────────────────────────────── */
function LoadingScreen({ done }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 999,
      background: C.bg,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      opacity: done ? 0 : 1,
      pointerEvents: done ? 'none' : 'all',
      transition: 'opacity 0.8s cubic-bezier(.16,1,.3,1)',
    }}>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28,
        opacity: done ? 0 : 1,
        transform: done ? 'translateY(-12px)' : 'none',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}>
        <img
          src="/logo.png"
          alt="Atlas Ethiopia"
          style={{
            height: 120, width: 'auto',
            animation: 'loaderPulse 1.8s ease-in-out infinite',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <span style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: 22, color: C.text, letterSpacing: '-0.03em',
          }}>Atlas Ethiopia</span>
          <span style={{
            fontFamily: "'Syne', sans-serif", fontSize: 10, fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase', color: C.gold,
          }}>Digital Studio</span>
        </div>
        <div style={{
          width: 40, height: 1, background: C.border,
          position: 'relative', overflow: 'hidden', borderRadius: 1,
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: C.gold,
            animation: 'loaderBar 1.4s ease-in-out infinite',
          }} />
        </div>
      </div>
      <style>{`
        @keyframes loaderPulse {
          0%, 100% { opacity: 0.7; transform: translateY(0); }
          50%       { opacity: 1;   transform: translateY(-6px); }
        }
        @keyframes loaderBar {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}

/* ─── ERROR BOUNDARY ─────────────────────────────────────── */
import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, message: '' }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message || 'Unknown error' }
  }

  componentDidCatch(error, info) {
    console.error('Atlas Ethiopia — Error caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh', background: C.bg,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '2rem', textAlign: 'center',
        }}>
          <img src="/logo.png" alt="Atlas Ethiopia" style={{ height: 80, marginBottom: 32, opacity: 0.6 }} />
          <p style={{
            fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: C.gold, marginBottom: 16,
          }}>Something went wrong</p>
          <h1 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: C.text, letterSpacing: '-0.03em',
            marginBottom: 20, lineHeight: 1.1,
          }}>We hit an unexpected error.</h1>
          <p style={{
            fontFamily: "'Lora', serif", fontSize: '1rem',
            color: C.muted, lineHeight: 1.8, maxWidth: 420, marginBottom: 40,
          }}>
            This is on us, not you. Try refreshing the page — if it keeps
            happening, reach out directly and we&apos;ll sort it.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: C.bg, background: C.gold,
              padding: '13px 28px', borderRadius: 4,
              border: 'none', cursor: 'pointer',
              marginBottom: 16,
            }}
          >Refresh the page</button>
          <p style={{
            fontFamily: "'Lora', serif", fontSize: '0.8rem', fontStyle: 'italic',
            color: C.muted,
          }}>Error: {this.state.message}</p>
        </div>
      )
    }
    return this.props.children
  }
}

/* ─── PAGE ───────────────────────────────────────────────── */
export default function Page() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ErrorBoundary>
      <LoadingScreen done={loaded} />
      <div style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.6s ease 0.2s',
      }}>
        <Nav />
        <main>
          <Hero />
          <Mission />
          <Services />
          <Process />
          <Work />
          <Philosophy />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}