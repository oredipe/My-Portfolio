import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { DEFAULT_DESCRIPTION, SITE_URL, pages } from './seo.js'

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
    const [, k, v] = selector.match(/\[(\w+)="([^"]+)"\]/)
    el.setAttribute(k, v)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

// Keeps the tab title, description and share tags right as people move between pages.
export function useTitle(title, description) {
  const { pathname } = useLocation()
  useEffect(() => {
    const page = pages[pathname]
    const t = page ? page.title : title ? `${title} | Olanrewaju Oredipe` : pages['/'].title
    const d = description || (page && page.description) || DEFAULT_DESCRIPTION
    document.title = t
    setMeta('meta[name="description"]', 'content', d)
    setMeta('meta[property="og:title"]', 'content', t)
    setMeta('meta[property="og:description"]', 'content', d)
    setMeta('link[rel="canonical"]', 'href', SITE_URL + (pathname === '/' ? '/' : pathname))
  }, [title, description, pathname])
}
