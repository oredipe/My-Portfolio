import Shot from './Shot.jsx'

// Each case study shown on the device it was designed for. Screens are cropped from the case study images.
const devices = {
  onehealthng: { tone: 'green', laptop: 'mock/onehealth-ops', phones: ['mock/onehealth-refills'] },
  'casha-business': { tone: 'lime', phones: ['mock/casha-0', 'mock/casha-1', 'mock/casha-2'] },
  iwello: { tone: 'lilac', laptop: 'mock/iwello-web' },
  reelcruit: { tone: 'navy', laptop: 'mock/reelcruit-web' },
  qshelter: { tone: 'blue', laptop: 'mock/qshelter-web' },
  naijafxrates: { tone: 'amber', phones: ['mock/naijafx-0', 'mock/naijafx-1'] },
  zygomed: { tone: 'sky', laptop: 'mock/zygomed-web', phones: ['mock/zygomed-phone'] },
  'sociall-ai': { tone: 'plum', laptop: 'mock/sociall-web', phones: ['mock/sociall-1'] },
}

export default function Devices({ slug, fallback }) {
  const d = devices[slug]
  if (!d) return <Shot k={fallback} alt="" />
  const kind = d.laptop && d.phones ? 'combo' : d.laptop ? 'laptop-only' : 'phones-only'
  return (
    <div className={`stage stage-${d.tone} stage-${kind} stage-n${d.phones ? d.phones.length : 0}`}>
      {d.laptop && (
        <div className="dev-laptop">
          <div className="dev-screen"><Shot k={d.laptop} alt="" /></div>
          <div className="dev-base" />
        </div>
      )}
      {d.phones && d.phones.map((k, i) => (
        <div key={k} className={`dev-phone dev-phone-${i}`}><Shot k={k} alt="" /></div>
      ))}
    </div>
  )
}
