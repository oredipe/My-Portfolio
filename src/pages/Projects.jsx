import { useEffect } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { caseStudies, gallery, typeOf } from '../data/caseStudies.js'
import Shot from '../components/Shot.jsx'
import { useTitle } from '../useTitle.js'

const filters = ['All', 'Mobile apps', 'Websites', 'Web apps']

export default function Projects() {
  useTitle('Work')
  const [params, setParams] = useSearchParams()
  const type = filters.includes(params.get('type')) ? params.get('type') : 'All'
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  const keep = (platforms) => type === 'All' || typeOf(platforms).includes(type)
  const studies = caseStudies.filter((c) => keep(c.platforms))
  const extras = gallery.filter((g) => type === 'All' || g.type === type || keep(g.platforms))

  return (
    <div className="wrap">
      <header className="page-head">
        <h1 className="page-title">Work</h1>
        <p className="page-lede">
          Eight case studies and five shorter projects, from 2021 to now. Most were shipped; the ones that weren't say so.
        </p>
      </header>

      <div className="filters" role="group" aria-label="Filter projects by type">
        {filters.map((f) => (
          <button
            key={f}
            className="filter"
            aria-pressed={type === f}
            onClick={() => setParams(f === 'All' ? {} : { type: f }, { replace: true })}
          >
            {f}
          </button>
        ))}
      </div>

      <section className="section-tight" aria-labelledby="cs-title">
        <h2 id="cs-title" className="section-title">Case studies</h2>
        {studies.length ? (
          <ul className="card-grid">
            {studies.map((c) => (
              <li key={c.slug}>
                <Link to={`/projects/${c.slug}`} className="card">
                  <div className="card-img"><Shot k={c.cover} alt="" /></div>
                  <h3 className="card-name">{c.name}</h3>
                  <p className="card-title">{c.title}</p>
                  <p className="card-meta">{c.platforms.join(', ')}. {c.industry}, {c.years}.</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="aside">No case studies of this type yet.</p>
        )}
      </section>

      <section id="more-work" className="section" aria-labelledby="mw-title">
        <h2 id="mw-title" className="section-title">More work</h2>
        <p className="section-lede">Shorter projects: one view of each, and what was interesting about it.</p>
        {extras.length ? (
          <ul className="gallery">
            {extras.map((g) => (
              <li key={g.slug} className="gallery-item">
                <div className="gallery-text">
                  <h3 className="gallery-name">{g.name}</h3>
                  <p className="gallery-meta">{g.platforms.join(', ')}. {g.role}, {g.year}.</p>
                  <p className="gallery-body">{g.text}</p>
                  {g.link && <a href={g.link} target="_blank" rel="noreferrer">Visit the live site</a>}
                </div>
                <div className="gallery-imgs">
                  {g.images.map((im) => <Shot key={im.key} k={im.key} alt={im.alt} />)}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="aside">No shorter projects of this type yet.</p>
        )}
      </section>
    </div>
  )
}
