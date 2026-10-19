import { OwlMark } from '../brand/Owl.jsx'

// Orelan logo: the owl stands on its own beside the full name.
export default function Logo({ size = 34 }) {
  return (
    <span className="logo-lockup">
      <OwlMark size={size} className="logo-owl" />
      <span className="logo-word">Orelan</span>
    </span>
  )
}
