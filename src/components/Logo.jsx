// OO monogram: two interlocked rings for Olanrewaju Oredipe, with the site's marigold dot.
export default function Logo({ size = 34 }) {
  return (
    <svg className="logo" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="16" className="logo-tile" />
      <g fill="none" className="logo-rings" strokeWidth="4.5">
        <circle cx="25" cy="32" r="13" />
        <circle cx="39" cy="32" r="13" />
      </g>
      <circle cx="49" cy="15" r="4" className="logo-dot" />
    </svg>
  )
}
