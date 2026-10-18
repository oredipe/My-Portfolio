import { Link } from 'react-router-dom'
import { resume } from '../data/profile.js'
import { useTitle } from '../useTitle.js'
import { ArtCluster } from '../components/Art.jsx'

const principles = [
  ['Start from the constraint', 'Most of my users have little time, patchy data or a good reason to be suspicious. I design for that person first: plain words, fewer steps, and nothing that sounds too good to be true.'],
  ['Make fast work consistent', 'Product teams move quickly. A shared design system means every quick fix fits the whole product instead of adding another one-off screen, and engineers get handoffs they can build straight from.'],
  ['Write the words too', 'Buttons should say what happens, confirmations should say exactly what will happen before money moves, and empty screens should say what to do next. I write or shape the copy on everything I design.'],
  ['Be straight about results', "My case studies only claim numbers I can back up, call team results team results, and say when a product never launched."],
]

const quotes = [
  ['You did good on the design, here is our report after analysis… we do not take you for granted, ever.', 'Ralph François, founder, Reelcruit'],
  ["You clearly understood the problem almost like you read my mind, you've put into account cases I hadn't even considered.", 'Tolu Araba, Product Manager'],
  ['We are really very happy with your work… Thank you again for your great work.', 'Thibaut Segeral, founder, Sociall.ai'],
]

export default function About() {
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
            I'm Olanrewaju Oredipe, Larry to most people. I'm a senior product designer in Lagos, and for five years I've designed
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

      <section className="section">
        <h2 className="section-title">What people I've worked with say</h2>
        <div className="quotes">
          {quotes.map(([q, by]) => (
            <blockquote key={by} className="quote">
              <p>“{q}”</p>
              <footer>{by}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  )
}
