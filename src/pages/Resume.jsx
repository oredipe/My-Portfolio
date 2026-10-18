import { profile, resume } from '../data/profile.js'
import { useTitle } from '../useTitle.js'

export const PDF = `${import.meta.env.BASE_URL}Olanrewaju-Oredipe-Resume.pdf`

export default function Resume() {
  useTitle('Resume')
  return (
    <div className="wrap">
      <div className="resume-bar no-print">
        <h1 className="page-title">Resume</h1>
        <div className="actions">
          <a className="btn" href={PDF} download>Download PDF</a>
          <button className="btn btn-quiet" onClick={() => window.print()}>Print</button>
        </div>
      </div>

      <article className="resume" aria-label="Resume">
        <header className="r-head">
          <div>
            <h2 className="r-name">{profile.name}</h2>
            <p className="r-role">{profile.role}</p>
          </div>
          <ul className="r-contact">
            <li>{profile.location}</li>
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li>{profile.phone}, {profile.phone2}</li>
            <li><a href={profile.site}>orelan.xyz</a></li>
            <li><a href={profile.linkedin}>linkedin.com/in/olanrewaju-oredipe</a></li>
          </ul>
        </header>

        <section className="r-sec">
          <h3 className="r-h">Summary</h3>
          <p className="r-summary">{resume.summary}</p>
        </section>

        <section className="r-sec">
          <h3 className="r-h">Experience</h3>
          {resume.experience.map((e) => (
            <div className="r-job" key={e.role + e.company}>
              <div className="r-job-head">
                <p><strong>{e.role}</strong>, {e.company}</p>
                <p className="r-dates">{e.dates}</p>
              </div>
              <p className="r-place">{e.place}</p>
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}
        </section>

        <section className="r-sec">
          <h3 className="r-h">Selected freelance work</h3>
          <ul className="r-pairs">
            {resume.freelance.map(([n, d]) => <li key={n}><strong>{n}:</strong> {d}</li>)}
          </ul>
        </section>

        <div className="r-cols">
          <section className="r-sec">
            <h3 className="r-h">Skills</h3>
            <ul className="r-pairs">
              {resume.skills.map(([n, d]) => <li key={n}><strong>{n}:</strong> {d}</li>)}
            </ul>
          </section>
          <section className="r-sec">
            <h3 className="r-h">Education</h3>
            <p><strong>{resume.education[0]}</strong><br />{resume.education[1]}, {resume.education[2]}</p>
            <h3 className="r-h r-h-gap">Certifications</h3>
            <ul className="r-pairs">
              {resume.certifications.map(([n, by, d]) => <li key={n}><strong>{n}</strong>, {by}, {d}</li>)}
            </ul>
          </section>
        </div>
      </article>
    </div>
  )
}
