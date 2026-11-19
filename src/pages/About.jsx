import { Link, useSearchParams } from 'react-router-dom'
import { resume } from '../data/profile.js'
import { quotes } from '../data/testimonials.js'
import { useTitle } from '../useTitle.js'
import { ArtCluster } from '../components/Art.jsx'

// Which About photo the live site uses: 'bw' or 'colour'. The preview build shows a switch to compare.
const PHOTO = 'colour'
const SHOW_SWITCHER = Boolean(import.meta.env.VITE_HASH_ROUTER)

const principles = [
  ['Start from the constraint', 'Most of my users have little time, patchy data or a good reason to be suspicious. I design for that person first: plain words, fewer steps, and nothing that sounds too good to be true.'],
  ['Make fast work consistent', 'Product teams move quickly. A shared design system means every quick fix fits the whole product instead of adding another one-off screen, and engineers get handoffs they can build straight from.'],
  ['Write the words too', 'Buttons should say what happens, confirmations should say exactly what will happen before money moves, and empty screens should say what to do next. I write or shape the copy on everything I design.'],
  ['Be straight about results', "My case studies only claim numbers I can back up, call team results team results, and say when a product never launched."],
]

// The work, year by year: a short timeline under "How I work". Mockups live in public/images/years/.
const years = [
  { year: '2021', name: 'iWello', line: 'Telemedicine, subscriptions and a booking tool.', img: 'iwello', w: 640, h: 453, to: '/projects/iwello' },
  { year: '2022', name: 'Reelcruit, Sociall.ai', line: 'Hiring dashboards, and AI photo picks for profiles.', img: 'sociall', w: 640, h: 409, to: '/projects/reelcruit' },
  { year: '2023', name: 'QShelter, NaijaFXRates, Zygomed', line: 'Home finance, live FX rates and a medical store.', img: 'zygomed', w: 640, h: 409, to: '/projects/qshelter' },
  { year: '2024', name: 'OneHealthNG', line: 'Pillfinda, OneWellness and the pharmacy operations dashboard.', img: 'onehealth24', w: 640, h: 453, to: '/projects/onehealthng' },
  { year: '2025', name: 'OneHealthNG', line: 'The pharmacy website, redesigned for faster refills.', img: 'onehealth25', w: 640, h: 453, to: '/projects/onehealthng' },
  { year: '2026', name: 'Casha Business, OneHealth app', line: 'Small-business payroll, and the OneHealth mobile app.', img: 'y2026', w: 640, h: 618, to: '/projects/casha-business' },
]

export default function About() {
  const [params, setParams] = useSearchParams()
  const photo = SHOW_SWITCHER && ['bw', 'colour'].includes(params.get('photo')) ? params.get('photo') : PHOTO
  useTitle('About')
  return (
    <div className="wrap">
      <header className="page-head has-art">
        <ArtCluster className="art-head" variant="a" />
        <h1 className="page-title">About</h1>
      </header>

      <div className="about-grid">
        <div className="about-bio prose">
          <p className="lede">
            I'm Olanrewaju Oredipe, a senior product designer in Lagos, and for five years I've designed
            websites, web apps and mobile apps for products people rely on for their health, their money and their work.
          </p>
          <p>
            That has meant an online pharmacy and its refill programme, a telemedicine platform for people who can't afford a
            clinic, an AI hiring marketplace in Canada, a business banking app with payroll built in, and a mortgage platform
            for first-time buyers. Most of these serve people in Nigeria, so they have to work on cheap phones, slow connections
            and for people who have been let down by products before.
          </p>
          <p>
            I studied computer engineering at the University of Lagos, which is why I like working close to engineers and can
            build in Webflow and HTML/CSS when a project needs it. Since January 2026 I've led design at OneHealthNG, where I
            run the design system and mentor a junior designer.
          </p>
          <div className="actions">
            <Link className="btn" to="/projects">See the work</Link>
            <Link className="btn btn-quiet" to="/contact">Get in touch</Link>
          </div>
        </div>

        <aside className="about-side" aria-label="Experience">
          <figure className="about-photo">
            <img src={`${import.meta.env.BASE_URL}images/olanrewaju-about-${photo}.webp`} alt="Olanrewaju Oredipe" width="960" height="1200" />
          </figure>
          <h2 className="side-title">Experience</h2>
          <ol className="timeline">
            {resume.experience.map((e) => (
              <li key={e.role + e.company}>
                <span className="tl-dates">{e.dates}</span>
                <span className="tl-role">{e.role}</span>
                <span className="tl-co">{e.company}</span>
              </li>
            ))}
          </ol>
          <Link to="/resume">Full resume</Link>
        </aside>
      </div>

      <section className="section">
        <h2 className="section-title">How I work</h2>
        <div className="principles">
          {principles.map(([t, d]) => (
            <div key={t} className="principle">
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section yby" aria-labelledby="yby-title">
        <h2 className="section-title" id="yby-title">The work, year by year</h2>
        <p className="yby-intro">Five years, thirteen products. From telemedicine in 2021 to payroll and pharmacy apps today.</p>
        <ol className="yby-list">
          {years.map((y) => (
            <li key={y.year} className="yy">
              <span className="yy-dot" aria-hidden="true" />
              <p className="yy-year">{y.year}</p>
              <div className="yy-img">
                <img src={`${import.meta.env.BASE_URL}images/years/${y.img}.webp`} alt="" width={y.w} height={y.h} loading="lazy" />
              </div>
              <div className="yy-text">
                <p className="yy-name"><Link to={y.to}>{y.name}</Link></p>
                <p className="yy-line">{y.line}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2 className="section-title">What people I've worked with say</h2>
        <div className="quotes">
          {quotes.map(({ q, by }) => (
            <blockquote key={by} className="quote">
              <p>“{q}”</p>
              <footer>{by}</footer>
            </blockquote>
          ))}
        </div>
      </section>
      {SHOW_SWITCHER && (
        <div className="switcher" role="group" aria-label="Compare photo options">
          <p className="switcher-title">Preview options</p>
          <div className="switcher-row">
            <span>Photo</span>
            {[['bw', 'B&W'], ['colour', 'Colour']].map(([v, l]) => (
              <button key={v} aria-pressed={photo === v} onClick={() => setParams({ photo: v }, { replace: true })}>{l}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
