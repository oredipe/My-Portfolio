import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { ArtCluster } from './Art.jsx'
import Logo from './Logo.jsx'

const nav = [
  ['/projects', 'Work'],
  ['/about', 'About'],
  ['/resume', 'Resume'],
  ['/contact', 'Contact'],
]

export default function Layout() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [pathname])

  return (
    <div className="site">
      <a className="skip" href="#main">Skip to content</a>
      <header className="masthead">
        <div className="wrap masthead-row">
          <Link to="/" className="wordmark" aria-label="Olanrewaju Oredipe, home">
            <Logo />
            <span>Olanrewaju Oredipe</span>
          </Link>
          <button className="menu-btn" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Menu'}
          </button>
          <nav id="site-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
            {nav.map(([to, label]) => (
              <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" key={pathname} className="page">
        <Outlet />
      </main>

      <footer className="footer">
        <ArtCluster className="art-footer" variant="a" />
        <div className="wrap footer-row">
          <p className="footer-lead">
            Hiring a product designer, or have a product that needs one?{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <ul className="footer-links">
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <p className="footer-small">Designed and built by Olanrewaju Oredipe in Lagos, {new Date().getFullYear()}.</p>
        </div>
      </footer>
    </div>
  )
}
