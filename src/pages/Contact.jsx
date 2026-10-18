import { useState } from 'react'
import { profile } from '../data/profile.js'
import { useTitle } from '../useTitle.js'
import { PDF } from './Resume.jsx'

export default function Contact() {
  useTitle('Contact')
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <div className="wrap">
      <header className="page-head">
        <h1 className="page-title">Contact</h1>
        <p className="page-lede">
          I'm open to senior product design roles and to freelance projects. Email is the quickest way to reach me.
        </p>
      </header>

      <div className="contact">
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="actions">
          <a className="btn" href={`mailto:${profile.email}`}>Write an email</a>
          <button className="btn btn-quiet" onClick={copy} aria-live="polite">
            {copied ? 'Email address copied' : 'Copy email address'}
          </button>
        </div>

        <dl className="contact-list">
          <div><dt>LinkedIn</dt><dd><a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/olanrewaju-oredipe</a></dd></div>
          <div><dt>Based in</dt><dd>{profile.location}, working remotely with teams anywhere</dd></div>
          <div><dt>Resume</dt><dd><a href={PDF} download>Download the PDF</a></dd></div>
        </dl>

        <div className="contact-help">
          <h2 className="side-title">What helps in a first message</h2>
          <p>What the product is and who it's for, what you need designed, and when you need it. If it's a role, a link to the job description is plenty.</p>
        </div>
      </div>
    </div>
  )
}
