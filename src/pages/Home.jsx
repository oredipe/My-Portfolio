import { useState } from 'react'
import { Link } from 'react-router-dom'
import { caseStudies, gallery } from '../data/caseStudies.js'
import Shot from '../components/Shot.jsx'
import { useTitle } from '../useTitle.js'

const byslug = Object.fromEntries(caseStudies.map((c) => [c.slug, c]))

// The three things people use my work for, each linked to the case study behind it.
const verbs = [
  ['onehealthng', 'get their medicines'],
  ['casha-business', 'pay their staff'],
  ['reelcruit', 'find their next job'],
]

// A different view from the case study covers further down the page.
const previewShot = {
  onehealthng: 'onehealth/hero',
  'casha-business': 'casha/payroll',
  reelcruit: 'reelcruit/matches',
}

export default function Home() {
  useTitle()
  const [active, setActive] = useState('onehealthng')
  const featured = caseStudies.filter((c) => c.featured)
  const more = caseStudies.filter((c) => !c.featured)
  const preview = byslug[active]

  return (
    <>
      <section className="hero wrap">
        <div className="hero-text">
          <h1 className="hero-statement">
            I design the apps people in Nigeria use to{' '}
            {verbs.map(([slug, words], i) => (
              <span key={slug}>
                <Link
                  to={`/projects/${slug}`}
                  className={`hero-verb ${active === slug ? 'is-on' : ''}`}
                  onMouseEnter={() => setActive(slug)}
                  onFocus={() => setActive(slug)}
                >
                  {words}
                </Link>
                {i === 0 ? ', ' : i === 1 ? ' and ' : '.'}
              </span>
            ))}
          </h1>
          <p className="hero-sub">
            I'm Olanrewaju Oredipe, a senior product designer in Lagos with five years of work across healthtech, fintech,
            e-commerce and AI. I lead design at OneHealthNG.
          </p>
          <div className="actions">
            <Link className="btn" to="/projects">See the work</Link>
            <Link className="btn btn-quiet" to="/resume">Read my resume</Link>
          </div>
        </div>
        <Link to={`/projects/${preview.slug}`} className="hero-preview" aria-label={`${preview.name} case study`}>
          <Shot k={previewShot[preview.slug]} alt={`${preview.name}: ${preview.title}`} eager />
          <span className="hero-preview-cap">
            {preview.name}. {preview.proof}
          </span>
        </Link>
      </section>

      <section className="wrap section">
        <h2 className="section-title">Selected case studies</h2>
        <ol className="feature-list">
          {featured.map((c) => (
            <li key={c.slug}>
              <Link to={`/projects/${c.slug}`} className="feature">
                <div className="feature-text">
                  <h3 className="feature-name">{c.name}</h3>
                  <p className="feature-title">{c.title}</p>
                  <p className="feature-card">{c.card}</p>
                  <dl className="feature-meta">
                    <div><dt>Result</dt><dd>{c.proof}</dd></div>
                    <div><dt>Made for</dt><dd>{c.platforms.join(', ')}</dd></div>
                    <div><dt>When</dt><dd>{c.years}</dd></div>
                  </dl>
                </div>
                <div className="feature-img">
                  <Shot k={c.cover} alt="" />
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap section">
        <h2 className="section-title">More case studies</h2>
        <ul className="row-list">
          {more.map((c) => (
            <li key={c.slug}>
              <Link to={`/projects/${c.slug}`} className="row">
                <span className="row-name">{c.name}</span>
                <span className="row-title">{c.title}</span>
                <span className="row-meta">{c.industry}, {c.years}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="aside">
          Plus {gallery.length} shorter projects, from a shipping web app to a plant care app, in{' '}
          <Link to="/projects#more-work">more work</Link>.
        </p>
      </section>
    </>
  )
}
