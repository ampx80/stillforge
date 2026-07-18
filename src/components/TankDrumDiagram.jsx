import { useInView } from '../hooks/useInView'

const PARTS = [
  { id: 'ding', label: 'The ding', note: 'Deep center note', hue: 'brass' },
  { id: 'fields', label: 'Tone fields', note: 'Hand-cut tongues, tuned by ear', hue: 'ember' },
  { id: 'shell', label: 'Tank shell', note: 'Reclaimed propane steel', hue: 'steel' },
  { id: 'port', label: 'Sound port', note: 'Where the resonance breathes', hue: 'water' },
]

/**
 * Animated top-down anatomy of a melodic tank drum.
 * Tongues draw in, labels connect, ding pulses.
 */
export default function TankDrumDiagram() {
  const { ref, inView } = useInView({ threshold: 0.25 })

  const fields = [
    { x: 100, y: 46 },
    { x: 138, y: 62 },
    { x: 150, y: 100 },
    { x: 138, y: 138 },
    { x: 100, y: 154 },
    { x: 62, y: 138 },
    { x: 50, y: 100 },
    { x: 62, y: 62 },
  ]

  return (
    <div ref={ref} className={`anatomy${inView ? ' is-drawn' : ''}`}>
      <svg className="anatomy-svg" viewBox="0 0 430 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="anatomy-shell" cx="38%" cy="32%" r="70%">
            <stop offset="0%" stopColor="#b8c4bc" />
            <stop offset="35%" stopColor="#5f6f68" />
            <stop offset="70%" stopColor="#26332e" />
            <stop offset="100%" stopColor="#0c1412" />
          </radialGradient>
          <radialGradient id="anatomy-ding" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#e0c49a" />
            <stop offset="45%" stopColor="#a88754" />
            <stop offset="100%" stopColor="#4a3a22" />
          </radialGradient>
        </defs>

        <g transform="translate(0 0)">
          <circle className="anatomy-body" cx="100" cy="100" r="62" fill="url(#anatomy-shell)" />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="rgba(224,196,154,0.5)"
            strokeWidth="1"
          />

          {fields.map((f, i) => (
            <ellipse
              key={i}
              className="anatomy-field"
              cx={f.x}
              cy={f.y}
              rx="15"
              ry="10"
              transform={`rotate(${Math.atan2(f.y - 100, f.x - 100) * (180 / Math.PI) + 90} ${f.x} ${f.y})`}
              fill="rgba(196,165,116,0.12)"
              stroke="rgba(224,196,154,0.6)"
              strokeWidth="0.8"
              style={{ '--i': i }}
            />
          ))}

          <circle className="anatomy-ding" cx="100" cy="100" r="16" fill="url(#anatomy-ding)" />
          <circle className="anatomy-ding-ring" cx="100" cy="100" r="16" fill="none" stroke="rgba(255,236,196,0.7)" strokeWidth="1" />
        </g>

        {/* leader lines + labels */}
        <g className="anatomy-labels">
          <line className="anatomy-lead" x1="100" y1="100" x2="250" y2="42" />
          <line className="anatomy-lead" x1="150" y1="100" x2="250" y2="86" />
          <line className="anatomy-lead" x1="100" y1="162" x2="250" y2="130" />
          <line className="anatomy-lead" x1="70" y1="70" x2="250" y2="174" />

          <text className="anatomy-label" x="256" y="40">Ding &mdash; deep center note</text>
          <text className="anatomy-label" x="256" y="84">Tone fields &mdash; tuned by ear</text>
          <text className="anatomy-label" x="256" y="128">Reclaimed tank shell</text>
          <text className="anatomy-label" x="256" y="172">Sound port beneath</text>
        </g>
      </svg>

      <ul className="anatomy-legend">
        {PARTS.map((p, i) => (
          <li key={p.id} className={`hue-${p.hue}`} style={{ '--i': i }}>
            <strong>{p.label}</strong>
            <span>{p.note}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
