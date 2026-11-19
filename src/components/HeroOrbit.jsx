import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies.js'

// Black home hero: portrait inside an orbit, the statement over the portrait's fade,
// and every case study named down the edges as a link (desktop only).
const PDF = `${import.meta.env.BASE_URL}Olanrewaju-Oredipe-Resume.pdf`
const bySlug = Object.fromEntries(caseStudies.map((c) => [c.slug, c]))
const left = ['onehealthng', 'casha-business', 'qshelter', 'zygomed']
const right = ['naijafxrates', 'reelcruit', 'sociall-ai', 'iwello']
const yearsLabel = (y) => y.replace(/\s*–\s*present/i, '–now').replace(/\s*–\s*/, '–')

function Edge({ slugs, side, label }) {
  return (
    <div className={`oh-edge oh-edge-${side}`}>
      <p className="oh-edge-label" aria-hidden={label ? undefined : true}>{label || ' '}</p>
      <ul>
        {slugs.map((s) => bySlug[s] && (
          <li key={s}>
            <Link to={`/projects/${s}`}>
              {bySlug[s].name} <span>{yearsLabel(bySlug[s].years)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function HeroOrbit() {
  return (
    <section className="orbit-hero" aria-label="Introduction">
      <div className="oh-stage" aria-hidden="true">
        <div className="oh-glow" />
        <svg className="oh-orbit" viewBox="0 0 1000 420" focusable="false">
          <g transform="rotate(-10 500 210)">
            <ellipse cx="500" cy="210" rx="420" ry="130" fill="none" stroke="rgba(244,244,240,0.5)" strokeWidth="1.2" strokeDasharray="560 300" strokeDashoffset="-120" />
            <path className="oh-star" d="M0,-9 C2,-2 2,-2 9,0 C2,2 2,2 0,9 C-2,2 -2,2 -9,0 C-2,-2 -2,-2 0,-9Z" fill="#f4f4f0">
              <animateMotion dur="12s" repeatCount="indefinite" path="M80,210 a420,130 0 1,0 840,0 a420,130 0 1,0 -840,0" />
            </path>
          </g>
        </svg>
        <img className="oh-portrait" src={`${import.meta.env.BASE_URL}images/olanrewaju-dark.webp`} alt="" width="600" height="943" fetchpriority="high" />
        <div className="oh-fade" />
      </div>

      <Edge slugs={left} side="left" label="Selected work" />
      <Edge slugs={right} side="right" />

      <div className="oh-text">
        <h1 className="oh-title">I design for the moments people can’t afford to get wrong.</h1>
        <p className="oh-sub">
          <span>Olanrewaju Oredipe, Senior Product Designer in Lagos</span>
          <span aria-hidden="true"> · </span>
          <span>5 years</span>
          <span aria-hidden="true"> · </span>
          <span>13 products across health, money and hiring</span>
        </p>
        <div className="oh-actions">
          <Link className="oh-btn oh-btn-solid" to="/projects">See the work</Link>
          <a className="oh-btn" href={PDF} download>Download CV</a>
        </div>
      </div>

      <p className="oh-foot oh-foot-left" aria-hidden="true">2021 → now</p>
      <p className="oh-foot oh-foot-right">Open to senior roles, remote</p>
    </section>
  )
}
