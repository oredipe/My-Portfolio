// Orelan logo: the ring-and-dot mark doubles as the "O" of the name.
export default function Logo({ size = 26 }) {
  return (
    <span className="logo-lockup">
      <svg className="logo-mark" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="25" fill="none" className="logo-ring" strokeWidth="10" />
        <circle cx="32" cy="32" r="8" className="logo-dot" />
      </svg>
      <span className="logo-word">relan</span>
    </span>
  )
}
