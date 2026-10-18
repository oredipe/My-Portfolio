// Line motifs drawn from adire, the Yoruba resist-dyed cloth: concentric circles,
// dotted grids, parallel waves and combs. Kept faint so they read as texture.

export function Arrow({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function BackArrow({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  )
}

function Rings({ x, y, r = 34, rings = 4, dot = true }) {
  return (
    <g>
      {Array.from({ length: rings }, (_, i) => (
        <circle key={i} cx={x} cy={y} r={r - i * (r / rings)} />
      ))}
      {dot && <circle cx={x} cy={y} r={r / rings / 2.2} className="art-fill" />}
    </g>
  )
}

function Dots({ x, y, cols = 6, rows = 5, gap = 14 }) {
  const out = []
  for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) out.push(<circle key={`${i}-${j}`} cx={x + i * gap} cy={y + j * gap} r="1.8" className="art-fill" />)
  return <g>{out}</g>
}

function Waves({ x, y, w = 150, lines = 4, gap = 11, amp = 6 }) {
  const seg = 25
  return (
    <g>
      {Array.from({ length: lines }, (_, i) => {
        let d = `M${x} ${y + i * gap}`
        for (let s = 0; s < w / seg; s++) d += ` q ${seg / 2} ${s % 2 ? amp : -amp} ${seg} 0`
        return <path key={i} d={d} />
      })}
    </g>
  )
}

function Comb({ x, y, teeth = 9, h = 26, gap = 8 }) {
  return (
    <g>
      <path d={`M${x} ${y} h${(teeth - 1) * gap}`} />
      {Array.from({ length: teeth }, (_, i) => <path key={i} d={`M${x + i * gap} ${y} v${h}`} />)}
    </g>
  )
}

// A loose cluster of motifs for a corner of the page.
export function ArtCluster({ className = '', variant = 'a' }) {
  return (
    <svg className={`art ${className}`} viewBox="0 0 320 260" aria-hidden="true" focusable="false">
      {variant === 'a' && (
        <>
          <Rings x={226} y={74} r={52} rings={5} />
          <Dots x={40} y={30} cols={7} rows={5} />
          <Waves x={60} y={172} w={200} lines={4} />
          <circle cx={282} cy={196} r="9" className="art-sun" />
        </>
      )}
      {variant === 'b' && (
        <>
          <Comb x={30} y={40} teeth={11} h={30} />
          <Rings x={90} y={170} r={44} rings={4} />
          <Dots x={180} y={150} cols={8} rows={5} />
          <circle cx={250} cy={60} r="10" className="art-sun" />
        </>
      )}
      {variant === 'c' && (
        <>
          <Waves x={20} y={40} w={280} lines={3} gap={12} amp={7} />
          <Rings x={250} y={170} r={40} rings={4} />
          <Comb x={40} y={150} teeth={8} h={34} gap={9} />
        </>
      )}
    </svg>
  )
}
