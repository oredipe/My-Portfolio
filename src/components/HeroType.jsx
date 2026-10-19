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

/* Concept C: type only. The name is the hero. */
export function HeroTypeC() {
  return (
    <section className="type-hero th-c" aria-label="Introduction">
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
