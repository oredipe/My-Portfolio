import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Shot from './Shot.jsx'

// Live Lagos time for the hero's footer line.
function LagosTime() {
  const fmt = () =>
    new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Lagos' }).format(new Date())
  const [t, setT] = useState(fmt)
  useEffect(() => {
    const id = setInterval(() => setT(fmt()), 15000)
    return () => clearInterval(id)
  }, [])
  return <span className="tabular">{t}</span>
}

// A word that rises out of a mask on load. `d` is the delay step.
function Rise({ children, d = 0, className = '' }) {
  return (
    <span className={`rise ${className}`} style={{ '--d': d }}>
      <span className="rise-in">{children}</span>
    </span>
  )
}

function Statement() {
  return (
    <div className="th-statement fade-up" style={{ '--d': 3 }}>
      <p>
        Senior product designer in Lagos. I design for the moments people can't afford to get wrong: their health, their
        money, their work and their home.
      </p>
      <div className="th-links">
        <Link to="/projects">See the work</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </div>
  )
}

function Footline() {
  return (
    <div className="th-foot fade-up" style={{ '--d': 5 }}>
      <p>
        Lagos, Nigeria
        <br />
        (WAT) <LagosTime />
      </p>
      <p>
        Open to senior roles
        <br />
        and freelance projects
      </p>
      <a className="th-scroll" href="#work" onClick={(e) => {
        e.preventDefault()
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
      }}>
        Scroll
      </a>
    </div>
  )
}

// Eases --mx/--my (-0.5..0.5) on the section toward the pointer. Off for touch and reduced motion.
function usePointer() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer: fine)').matches
    if (still || !fine) return
    let raf = 0
    let tx = 0, ty = 0, x = 0, y = 0
    const move = (e) => {
      const r = el.getBoundingClientRect()
      tx = (e.clientX - r.left) / r.width - 0.5
      ty = (e.clientY - r.top) / r.height - 0.5
    }
    const leave = () => { tx = 0; ty = 0 }
    const tick = () => {
      x += (tx - x) * 0.08
      y += (ty - y) * 0.08
      el.style.setProperty('--mx', x.toFixed(4))
      el.style.setProperty('--my', y.toFixed(4))
      raf = requestAnimationFrame(tick)
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    }
  }, [])
  return ref
}

/* Concept C: type only. The name is the hero. */
export function HeroTypeC() {
  const ref = usePointer()
  return (
    <section ref={ref} className="type-hero th-c" aria-label="Introduction">
      <img className="te-portrait" src={`${import.meta.env.BASE_URL}images/olanrewaju-hero.webp`} alt="" width="600" height="943" />
      <div className="wrap th-grid">
        <h1 className="th-name" aria-label="Olanrewaju Oredipe">
          <Rise d={0}>Olanrewaju</Rise>
          <Rise d={1}>Oredipe</Rise>
        </h1>
        <Statement />
        <Footline />
      </div>
    </section>
  )
}

const floaters = [
  { slug: 'onehealthng', shot: 'onehealth/app', label: 'Healthtech', name: 'OneHealthNG', depth: 26 },
  { slug: 'casha-business', shot: 'casha/hero', label: 'Fintech', name: 'Casha Business', depth: -18 },
  { slug: 'reelcruit', shot: 'reelcruit/audiences', label: 'Recruitment and AI', name: 'Reelcruit', depth: 34 },
  { slug: 'qshelter', shot: 'qshelter/property', label: 'Property', name: 'QShelter', depth: -28 },
  { slug: 'zygomed', shot: 'zygomed/landing', label: 'E-commerce', name: 'Zygomed', depth: 20 },
]

/* Concept D: the same type, with the five industries drifting on the right and leaning toward the pointer. */
export function HeroTypeD() {
  const ref = usePointer()
  return (
    <section ref={ref} className="type-hero th-d" aria-label="Introduction">
      <div className="wrap th-grid">
        <h1 className="th-name" aria-label="Olanrewaju Oredipe">
          <Rise d={0}>Olanrewaju</Rise>
          <Rise d={1}>Oredipe</Rise>
        </h1>
        <Statement />
        <ul className="float-field" aria-label="A project from each industry">
          {floaters.map((f, i) => (
            <li key={f.slug} className={`floater fl-${i}`} style={{ '--depth': f.depth, '--i': i }}>
              <Link to={`/projects/${f.slug}`} className="floater-card" aria-label={`${f.name}, ${f.label}`}>
                <Shot k={f.shot} alt="" eager />
                <span className="floater-tag">
                  <span className="floater-label">{f.label}</span>
                  <span className="floater-name">{f.name}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Footline />
      </div>
    </section>
  )
}

const scrollToWork = (e) => {
  e.preventDefault()
  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
}

/* Concept E: a toned portrait behind a three-line statement, with two fact cards set into the type. */
export function HeroTypeE() {
  const ref = usePointer()
  const base = import.meta.env.BASE_URL
  return (
    <section ref={ref} className="type-hero th-e" aria-label="Introduction">
      <img className="te-portrait" src={`${base}images/olanrewaju-hero.webp`} alt="" width="600" height="943" />
      <div className="wrap te-grid">
        <div className="te-stack">
        <h1 className="te-lines" aria-label="Olanrewaju Oredipe: web and mobile products people trust">
          <span className="te-line te-l1">
            <Rise d={0}>Web &amp; mobile</Rise>
            <Link to="/about" className="te-card fade-up" style={{ '--d': 4 }}>
              <span>5 years designing products</span>
            </Link>
          </span>
          <span className="te-line te-l2">
            <Rise d={1}>products</Rise>
          </span>
          <span className="te-line te-l3">
            <Rise d={2}>people trust</Rise>
            <Link to="/projects" className="te-card te-card-img fade-up" style={{ '--d': 5 }}>
              <span>8 case studies</span>
              <Shot k="onehealth/app" alt="" eager />
            </Link>
            <a href="#work" className="te-arrow fade-up" style={{ '--d': 6 }} onClick={scrollToWork} aria-label="Scroll to the work">
              <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 6v34M10 27l14 14 14-14" fill="none" stroke="currentColor" strokeWidth="6" /></svg>
            </a>
          </span>
        </h1>
        <p className="te-intro fade-up" style={{ '--d': 3 }}>
          Hi, I'm Olanrewaju, a senior product designer in Lagos. I design for the moments people can't afford to get wrong.
        </p>
        </div>
        <div className="te-foot fade-up" style={{ '--d': 6 }}>
          <p>Lagos, Nigeria · (WAT) <LagosTime /></p>
          <nav className="te-pill" aria-label="Quick links">
            <Link to="/projects">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact" className="te-talk">
              <img src={`${base}images/olanrewaju-avatar.webp`} alt="" width="28" height="28" />
              Let's talk
            </Link>
          </nav>
          <a className="te-scroll" href="#work" onClick={scrollToWork}>Scroll</a>
        </div>
      </div>
    </section>
  )
}
