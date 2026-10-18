import { Link, useParams } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies.js'
import RichText from '../components/RichText.jsx'
import Shot from '../components/Shot.jsx'
import NotFound from './NotFound.jsx'
import { useTitle } from '../useTitle.js'

function Figure({ b }) {
  return (
    <figure className="figure">
      <Shot k={b.key} alt={b.alt} />
      {b.caption && <figcaption>{b.caption}</figcaption>}
    </figure>
  )
}

function Block({ b }) {
  switch (b.type) {
    case 'p':
      return <p><RichText text={b.text} /></p>
    case 'h':
      return (
        <div className="decision">
          <h3>{b.title}</h3>
          <p><RichText text={b.text} /></p>
        </div>
      )
    case 'img':
      return <Figure b={b} />
    case 'imgs':
      return (
        <figure className="figure figure-pair">
          <div className="pair">
            {b.items.map((it) => <Shot key={it.key} k={it.key} alt={it.alt} />)}
          </div>
          {b.caption && <figcaption>{b.caption}</figcaption>}
        </figure>
      )
    case 'list':
      return (
        <ul className="prose-list">
          {b.items.map((t, i) => <li key={i}><RichText text={t} /></li>)}
        </ul>
      )
    case 'quote':
      return (
        <blockquote className="quote">
          <p>“{b.text}”</p>
          <footer>{b.by}</footer>
        </blockquote>
      )
    case 'table':
      return (
        <div className="table-wrap">
          <table>
            <thead><tr>{b.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i}>{r.map((c, j) => <td key={j}><RichText text={c} /></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

export default function CaseStudy() {
  const { slug } = useParams()
  const i = caseStudies.findIndex((c) => c.slug === slug)
  const c = caseStudies[i]
  useTitle(c ? c.name : 'Not found')
  if (!c) return <NotFound />
  const next = caseStudies[(i + 1) % caseStudies.length]

  // Number the key decisions in order, since they read as a sequence of choices.
  let n = 0

  return (
    <article className="cs">
      <header className="cs-head wrap">
        <p className="crumb"><Link to="/projects">Work</Link> / {c.name}</p>
        <h1 className="cs-title">{c.name}: {c.title.charAt(0).toLowerCase() + c.title.slice(1)}</h1>
        <div className="cs-intro-grid">
          <p className="cs-intro">{c.intro}</p>
          <dl className="facts">
            {c.facts.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd><RichText text={v} /></dd></div>
            ))}
          </dl>
        </div>
      </header>

      <div className="cs-body wrap">
        {c.sections.map((s) => (
          <section key={s.heading} className="cs-section">
            <h2>{s.heading}</h2>
            {s.blocks.map((b, j) => {
              if (b.type === 'h') {
                n += 1
                return <Block key={j} b={{ ...b, title: `${n}. ${b.title}` }} />
              }
              return <Block key={j} b={b} />
            })}
          </section>
        ))}
      </div>

      <nav className="next wrap" aria-label="Next case study">
        <Link to={`/projects/${next.slug}`} className="next-link">
          <span className="next-label">Next case study</span>
          <span className="next-name">{next.name}</span>
          <span className="next-title">{next.title}</span>
        </Link>
        <div className="next-img"><Shot k={next.cover} alt="" /></div>
      </nav>
    </article>
  )
}
