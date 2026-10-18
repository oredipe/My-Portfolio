import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { caseStudies, gallery } from '../data/caseStudies.js'
import Shot from '../components/Shot.jsx'
import { Arrow, ArtCluster, PortraitFrame } from '../components/Art.jsx'
import { useTitle } from '../useTitle.js'

// Which hero and case-study layout the live site uses. The preview build shows a switcher
// so the options can be compared; once one is picked, set it here.
const DEFAULT_HERO = 'a'
const DEFAULT_LIST = 'a'
const SHOW_SWITCHER = Boolean(import.meta.env.VITE_HASH_ROUTER)

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

const clients = ['OneHealthNG', 'Reelcruit', 'iWello', 'Casha Microfinance Bank', 'QShelter', 'Fixiconn']

function Statement({ active, setActive, small = false }) {
  return (
    <h1 className={`hero-statement ${small ? 'is-small' : ''}`}>
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
  )
}

function Actions() {
  return (
    <div className="actions">
      <Link className="btn" to="/projects">See the work</Link>
      <Link className="btn btn-quiet" to="/resume">Read my resume</Link>
    </div>
  )
}

/* Hero A: the statement, with a live preview of whichever project the reader points at. */
function HeroA() {
  const [active, setActive] = useState('onehealthng')
  const preview = byslug[active]
  return (
    <section className="hero hero-a wrap">
      <div className="hero-text">
        <Statement active={active} setActive={setActive} />
        <p className="hero-sub">
          I'm Olanrewaju Oredipe, a senior product designer in Lagos with five years of work across healthtech, fintech,
          e-commerce and AI. I lead design at OneHealthNG.
        </p>
        <Actions />
      </div>
      <div className="hero-visual">
        <ArtCluster className="art-hero" variant="a" />
        <Link to={`/projects/${preview.slug}`} className="hero-preview" aria-label={`${preview.name} case study`}>
          <Shot k={previewShot[preview.slug]} alt={`${preview.name}: ${preview.title}`} eager />
          <span className="hero-preview-cap">
            <span><strong>{preview.name}</strong>. {preview.proof}</span>
            <span className="circle-btn" aria-hidden="true"><Arrow /></span>
          </span>
        </Link>
      </div>
    </section>
  )
}

/* Hero B: a fanned stack of three projects; pointing at a phrase brings its card forward. */
function HeroB() {
  const [active, setActive] = useState('onehealthng')
  return (
    <section className="hero hero-b wrap">
      <div className="hero-text">
        <p className="hello">Hi, I'm Larry.</p>
        <Statement active={active} setActive={setActive} />
        <p className="hero-sub">
          Senior product designer in Lagos. Five years across healthtech, fintech, e-commerce and AI, currently leading
          design at OneHealthNG.
        </p>
        <Actions />
      </div>
      <div className="fan" aria-label="Featured projects">
        <ArtCluster className="art-fan" variant="b" />
        {verbs.map(([slug], i) => (
          <Link
            key={slug}
            to={`/projects/${slug}`}
            className={`fan-card fan-${i} ${active === slug ? 'is-on' : ''}`}
            onMouseEnter={() => setActive(slug)}
            onFocus={() => setActive(slug)}
          >
            <Shot k={previewShot[slug]} alt="" eager />
            <span className="fan-label">{byslug[slug].name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

/* Hero C: a personal introduction with a portrait, and the teams I've designed for. */
function HeroC() {
  const [active, setActive] = useState(null)
  return (
    <section className="hero hero-c wrap">
      <div className="hero-c-top">
        <PortraitFrame>
          {/* Replace with <img src="/images/larry.webp" alt="Olanrewaju Oredipe" /> once there's a photo. */}
          <span className="monogram" aria-hidden="true">LO</span>
        </PortraitFrame>
        <div>
          <p className="hello">Olanrewaju Oredipe, Larry to most people</p>
          <p className="hello-role">Senior Product Designer, Lagos</p>
        </div>
      </div>
      <Statement active={active} setActive={setActive} small />
      <Actions />
      <div className="clients">
        <p className="clients-label">Teams I've designed for</p>
        <ul className="clients-list">
          {clients.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>
      <ArtCluster className="art-c" variant="c" />
    </section>
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

/* List B: raised cards in a grid, with an arrow button on every card. */
function ListB({ items }) {
  return (
    <ul className="list-b">
      {items.map((c) => (
        <li key={c.slug}>
          <Link to={`/projects/${c.slug}`} className="lb-card">
            <div className="lb-img"><Shot k={c.cover} alt="" /></div>
            <div className="lb-body">
              <p className="lb-kicker">{c.industry}, {c.years}</p>
              <h3 className="lb-name">{c.name}</h3>
              <p className="lb-title">{c.title}</p>
              <p className="lb-proof">{c.proof}</p>
            </div>
            <div className="lb-foot">
              <span>View case study</span>
              <span className="circle-btn" aria-hidden="true"><Arrow /></span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

/* List C: big image tiles with the project name sitting on the image. */
function ListC({ items }) {
  return (
    <ul className="list-c">
      {items.map((c, i) => (
        <li key={c.slug} className={i === 0 || (i === items.length - 1 && items.length % 2 === 0) ? 'lc-wide' : ''}>
          <Link to={`/projects/${c.slug}`} className="lc-tile">
            <div className="lc-img"><Shot k={c.cover} alt="" /></div>
            <span className="lc-tag">
              <span className="lc-name">{c.name}</span>
              <span className="circle-btn" aria-hidden="true"><Arrow /></span>
            </span>
          </Link>
          <p className="lc-title">{c.title}</p>
          <p className="lc-meta">{c.proof}</p>
        </li>
      ))}
    </ul>
  )
}

function Switcher({ hero, list, set }) {
  const opt = (key, value, current, label) => (
    <button key={value} aria-pressed={current === value} onClick={() => set(key, value)}>{label}</button>
  )
  return (
    <div className="switcher" role="group" aria-label="Compare layout options">
      <p className="switcher-title">Preview options</p>
      <div className="switcher-row">
        <span>Hero</span>
        {opt('hero', 'a', hero, 'A')}{opt('hero', 'b', hero, 'B')}{opt('hero', 'c', hero, 'C')}
      </div>
      <div className="switcher-row">
        <span>Case studies</span>
        {opt('list', 'a', list, 'A')}{opt('list', 'b', list, 'B')}{opt('list', 'c', list, 'C')}
      </div>
    </div>
  )
}

export default function Home() {
  useTitle()
  const [params, setParams] = useSearchParams()
  const hero = SHOW_SWITCHER && ['a', 'b', 'c'].includes(params.get('hero')) ? params.get('hero') : DEFAULT_HERO
  const list = SHOW_SWITCHER && ['a', 'b', 'c'].includes(params.get('list')) ? params.get('list') : DEFAULT_LIST
  const set = (k, v) => {
    const next = new URLSearchParams(params)
    next.set(k, v)
    setParams(next, { replace: true })
  }

  const featured = caseStudies.filter((c) => c.featured)
  const more = caseStudies.filter((c) => !c.featured)
  const Hero = { a: HeroA, b: HeroB, c: HeroC }[hero]
  const List = { a: ListA, b: ListB, c: ListC }[list]

  return (
    <>
      <Hero />

      <section className="wrap section">
        <h2 className="section-title">Selected case studies</h2>
        <List items={featured} />
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

      {SHOW_SWITCHER && <Switcher hero={hero} list={list} set={set} />}
    </>
  )
}
