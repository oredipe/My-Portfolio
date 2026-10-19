import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { caseStudies, gallery } from '../data/caseStudies.js'
import Shot from '../components/Shot.jsx'
import { Arrow, ArtCluster } from '../components/Art.jsx'
import { HeroTypeC, HeroTypeCTop, HeroTypeD, HeroTypeE } from '../components/HeroType.jsx'
import { useTitle } from '../useTitle.js'

// Which hero the live site uses. The preview build shows a switcher so the two options
// can be compared; once one is picked, set it here.
const DEFAULT_HERO = 'c'
const SHOW_SWITCHER = Boolean(import.meta.env.VITE_HASH_ROUTER)

const byslug = Object.fromEntries(caseStudies.map((c) => [c.slug, c]))

// Add a logo file to public/images/logos/ and its name here, and the row shows the logo instead of the name.
const clients = [
  { name: 'OneHealthNG', logo: null },
  { name: 'Reelcruit', logo: null },
  { name: 'iWello', logo: null },
  { name: 'Casha Microfinance Bank', logo: null },
  { name: 'QShelter', logo: null },
  { name: 'Fixiconn', logo: null },
]

// One tile per industry, so the first screen shows range rather than one sector.
const mosaic = [
  { slug: 'onehealthng', shot: 'onehealth/app', label: 'Healthtech' },
  { slug: 'casha-business', shot: 'casha/hero', label: 'Fintech' },
  { slug: 'reelcruit', shot: 'reelcruit/audiences', label: 'Recruitment and AI' },
  { slug: 'qshelter', shot: 'qshelter/property', label: 'Property' },
  { slug: 'zygomed', shot: 'zygomed/landing', label: 'E-commerce' },
]

const sectors = [
  { name: 'Healthtech', projects: ['onehealthng', 'iwello'], shot: 'onehealth/app' },
  { name: 'Fintech', projects: ['casha-business', 'naijafxrates'], shot: 'casha/hero' },
  { name: 'Recruitment and AI', projects: ['reelcruit'], shot: 'reelcruit/audiences' },
  { name: 'Property', projects: ['qshelter'], shot: 'qshelter/property' },
  { name: 'E-commerce', projects: ['zygomed'], shot: 'zygomed/landing' },
]

// Headline options to compare in the preview. The live site uses the first one until another is picked.
const headlines = [
  "I design for the moments people can't afford to get wrong.",
  'I design products that make complicated things simple.',
  'Clear products for complicated industries.',
  'Five years of turning messy problems into products people use.',
  'Product design for health, money, work and home.',
]

function HeroText({ h = 0 }) {
  return (
    <div className="hero-text">
      <div className="hello-row">
        <img className="avatar" src={`${import.meta.env.BASE_URL}images/olanrewaju-avatar.webp`} alt="Olanrewaju Oredipe" width="400" height="400" />
        <p className="hello">Hi, I'm Olanrewaju.</p>
      </div>
      <h1 className="hero-statement">{headlines[h]}</h1>
      <p className="hero-sub">
        Senior product designer in Lagos. For five years I've designed websites, web apps and mobile apps for healthcare,
        banking, hiring, property and retail, for teams in Nigeria and Canada. I lead design at OneHealthNG.
      </p>
      <div className="actions">
        <Link className="btn" to="/projects">See the work</Link>
        <Link className="btn btn-quiet" to="/resume">Read my resume</Link>
      </div>
    </div>
  )
}

function Clients() {
  return (
    <div className="wrap">
      <div className="clients">
        <p className="clients-label">Teams I've designed for</p>
        <ul className="clients-list">
          {clients.map((c) => (
            <li key={c.name}>
              {c.logo
                ? <img className="client-logo" src={`${import.meta.env.BASE_URL}images/logos/${c.logo}`} alt={c.name} />
                : c.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* Hero A: a mosaic with one project from each industry. */
function HeroA() {
  return (
    <>
      <section className="hero hero-a wrap">
        <HeroText />
        <div className="mosaic-wrap">
          <ArtCluster className="art-hero" variant="a" />
          <ul className="mosaic" aria-label="A project from each industry">
            {mosaic.map((m, i) => (
              <li key={m.slug} className={`tile tile-${i}`}>
                <Link to={`/projects/${m.slug}`} aria-label={`${byslug[m.slug].name}, ${m.label}`}>
                  <Shot k={m.shot} alt="" eager />
                  <span className="tile-tag">
                    <span className="tile-label">{m.label}</span>
                    <span className="tile-name">{byslug[m.slug].name}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Clients />
    </>
  )
}

/* Hero B: an index of the industries I've worked in, with the projects behind each. */
function HeroB({ h }) {
  const [on, setOn] = useState(0)
  return (
    <>
      <section className="hero hero-b wrap">
        <HeroText h={h} />
        <div className="index-card">
          <ArtCluster className="art-index" variant="b" />
          <div className="index-shot">
            <Shot k={sectors[on].shot} alt="" eager />
          </div>
          <ul className="index-list">
            {sectors.map((s, i) => (
              <li key={s.name}>
                <Link
                  to={`/projects/${s.projects[0]}`}
                  className={`index-row ${on === i ? 'is-on' : ''}`}
                  onMouseEnter={() => setOn(i)}
                  onFocus={() => setOn(i)}
                >
                  <span className="index-name">{s.name}</span>
                  <span className="index-projects">{s.projects.map((p) => byslug[p].name).join(', ')}</span>
                  <Arrow size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Clients />
    </>
  )
}

function Meta({ c }) {
  return (
    <dl className="feature-meta">
      <div><dt>Result</dt><dd>{c.proof}</dd></div>
      <div><dt>Made for</dt><dd>{c.platforms.join(', ')}</dd></div>
      <div><dt>When</dt><dd>{c.years}</dd></div>
    </dl>
  )
}

/* List A: split rows, each with a visible "Read the case study" button. */
function ListA({ items }) {
  return (
    <ol className="list-a">
      {items.map((c) => (
        <li key={c.slug}>
          <Link to={`/projects/${c.slug}`} className="la-item">
            <div className="la-text">
              <h3 className="la-name">{c.name}</h3>
              <p className="la-title">{c.title}</p>
              <p className="la-card">{c.card}</p>
              <Meta c={c} />
              <span className="pill-btn">Read the case study <Arrow /></span>
            </div>
            <div className="la-img"><Shot k={c.cover} alt="" /></div>
          </Link>
        </li>
      ))}
    </ol>
  )
}

function Switcher({ hero, set }) {
  const opt = (key, value, current, label) => (
    <button key={value} aria-pressed={current === value} onClick={() => set(key, value)}>{label}</button>
  )
  return (
    <div className="switcher" role="group" aria-label="Compare layout options">
      <p className="switcher-title">Preview options</p>
      <div className="switcher-row">
        <span>Hero</span>
        {opt('hero', 'b', hero, 'Now')}{opt('hero', 'c', hero, 'C low')}{opt('hero', 'c2', hero, 'C top')}{opt('hero', 'd', hero, 'D')}{opt('hero', 'e', hero, 'E')}
      </div>
    </div>
  )
}

export default function Home() {
  useTitle()
  const [params, setParams] = useSearchParams()
  const hero = SHOW_SWITCHER && ['b', 'c', 'c2', 'd', 'e'].includes(params.get('hero')) ? params.get('hero') : SHOW_SWITCHER ? 'c2' : DEFAULT_HERO
  const set = (k, v) => {
    const next = new URLSearchParams(params)
    next.set(k, v)
    setParams(next, { replace: true })
  }

  const featured = caseStudies.filter((c) => c.featured)
  const more = caseStudies.filter((c) => !c.featured)
  const Hero = { a: HeroA, b: HeroB, c: HeroTypeC, c2: HeroTypeCTop, d: HeroTypeD, e: HeroTypeE }[hero]

  return (
    <>
      <Hero h={0} />
      {['c', 'c2', 'd', 'e'].includes(hero) && <Clients />}

      <section className="wrap section" id="work">
        <h2 className="section-title">Selected case studies</h2>
        <ListA items={featured} />
      </section>

      <section className="wrap section more-cs">
        <ArtCluster className="art-more" variant="c" />
        <h2 className="section-title">More case studies</h2>
        <ul className="row-list">
          {more.map((c) => (
            <li key={c.slug}>
              <Link to={`/projects/${c.slug}`} className="row">
                <span className="row-name">{c.name}</span>
                <span className="row-title">{c.title}</span>
                <span className="row-meta">{c.industry}, {c.years}</span>
                <span className="row-go" aria-hidden="true"><Arrow /></span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="aside">
          Plus {gallery.length} shorter projects, from a shipping web app to a plant care app, in{' '}
          <Link to="/projects#more-work">more work</Link>.
        </p>
      </section>

      {SHOW_SWITCHER && <Switcher hero={hero} set={set} />}
    </>
  )
}
