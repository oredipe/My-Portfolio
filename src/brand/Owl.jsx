import { useId } from 'react'

// The Orelan owl: two ring-and-dot eyes under one brow that rises into ear tufts, and an amber beak.
// Drawn on a 64x64 grid. Colours come from CSS (.owl-line, .owl-eye) so it adapts to light and dark.
export function OwlMark({ size = 32, className = '', title }) {
  return (
    <svg className={`owl ${className}`} width={size} height={size} viewBox="0 0 64 64" role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <path className="owl-line" d="M6 12 L20 22 Q32 28 44 22 L58 12" fill="none" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle className="owl-line" cx="20" cy="36" r="10.5" fill="none" strokeWidth="5.5" />
      <circle className="owl-line" cx="44" cy="36" r="10.5" fill="none" strokeWidth="5.5" />
      <circle className="owl-eye" cx="20" cy="36" r="4" />
      <circle className="owl-eye" cx="44" cy="36" r="4" />
      <path className="owl-eye" d="M28.5 47 L35.5 47 L32 55 Z" />
    </svg>
  )
}

export const SEAL_TEXT = 'OLANREWAJU OREDIPE · PRODUCT DESIGNER ·'

// The seal: the same owl inside a coin border with the name and title around it.
export function Seal({ size = 96, className = '', title = 'Olanrewaju Oredipe, Product Designer' }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg className={`seal ${className}`} width={size} height={size} viewBox="0 0 120 120" role="img" aria-label={title}>
      <defs><path id={`arc${id}`} d="M60 60 m-41 0 a41 41 0 1 1 82 0 a41 41 0 1 1 -82 0" /></defs>
      <circle className="seal-line" cx="60" cy="60" r="57" fill="none" strokeWidth="3.5" />
      <circle className="seal-line" cx="60" cy="60" r="33" fill="none" strokeWidth="1.2" strokeDasharray="1.4 3" />
      <text className="seal-text" fontSize="9.2" fontWeight="650">
        <textPath href={`#arc${id}`} textLength="254" lengthAdjust="spacing">{SEAL_TEXT}</textPath>
      </text>
      <g transform="translate(38 37) scale(0.69)">
        <path className="owl-line" d="M6 12 L20 22 Q32 28 44 22 L58 12" fill="none" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle className="owl-line" cx="20" cy="36" r="10.5" fill="none" strokeWidth="5.5" />
        <circle className="owl-line" cx="44" cy="36" r="10.5" fill="none" strokeWidth="5.5" />
        <circle className="owl-eye" cx="20" cy="36" r="4" />
        <circle className="owl-eye" cx="44" cy="36" r="4" />
        <path className="owl-eye" d="M28.5 47 L35.5 47 L32 55 Z" />
      </g>
    </svg>
  )
}
