/**
 * Subtle forge atmosphere — ember motes + water rings.
 * Decorative only; hidden from assistive tech.
 */
export default function AmbientField({ intensity = 'soft' }) {
  return (
    <div className={`ambient-field ambient-${intensity}`} aria-hidden="true">
      <svg className="ambient-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="ambient-ember" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(212,120,74,0.55)" />
            <stop offset="100%" stopColor="rgba(212,120,74,0)" />
          </radialGradient>
          <radialGradient id="ambient-water" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(90,154,144,0.35)" />
            <stop offset="100%" stopColor="rgba(61,107,106,0)" />
          </radialGradient>
        </defs>

        <g className="ambient-embers">
          {[
            [180, 520, 3.2, '0s'],
            [260, 610, 2.4, '1.2s'],
            [340, 480, 2.8, '2.4s'],
            [420, 640, 2.1, '0.6s'],
            [520, 560, 3.5, '1.8s'],
            [640, 680, 2.2, '3s'],
            [760, 540, 2.6, '0.9s'],
            [880, 620, 3, '2.1s'],
            [980, 500, 2.3, '1.5s'],
            [1080, 590, 2.7, '2.7s'],
          ].map(([cx, cy, r, delay], i) => (
            <circle
              key={i}
              className="ember-mote"
              cx={cx}
              cy={cy}
              r={r}
              fill="url(#ambient-ember)"
              style={{ animationDelay: delay }}
            />
          ))}
        </g>

        <g className="ambient-rings" transform="translate(920 180)">
          <circle className="water-ring ring-a" cx="0" cy="0" r="40" fill="none" stroke="url(#ambient-water)" strokeWidth="1.2" />
          <circle className="water-ring ring-b" cx="0" cy="0" r="70" fill="none" stroke="url(#ambient-water)" strokeWidth="0.9" />
          <circle className="water-ring ring-c" cx="0" cy="0" r="110" fill="none" stroke="url(#ambient-water)" strokeWidth="0.6" />
        </g>

        <g className="ambient-rings ambient-rings-left" transform="translate(160 140)">
          <circle className="water-ring ring-a" cx="0" cy="0" r="28" fill="none" stroke="url(#ambient-water)" strokeWidth="1" />
          <circle className="water-ring ring-b" cx="0" cy="0" r="52" fill="none" stroke="url(#ambient-water)" strokeWidth="0.7" />
        </g>
      </svg>
    </div>
  )
}
