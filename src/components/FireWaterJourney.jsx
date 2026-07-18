import { useInView } from '../hooks/useInView'

/**
 * Story page diagram: ember → brass drum → water stillness.
 */
export default function FireWaterJourney() {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <div
      ref={ref}
      className={`journey-diagram${inView ? ' is-drawn' : ''}`}
      role="img"
      aria-label="Journey from forge fire through the drum to water stillness"
    >
      <svg className="journey-svg" viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="journey-ember" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#e0a070" />
            <stop offset="55%" stopColor="#d4784a" />
            <stop offset="100%" stopColor="rgba(212,120,74,0)" />
          </radialGradient>
          <radialGradient id="journey-drum" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#e0c49a" />
            <stop offset="40%" stopColor="#c4a574" />
            <stop offset="100%" stopColor="#3a3224" />
          </radialGradient>
          <linearGradient id="journey-bridge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4784a" />
            <stop offset="50%" stopColor="#c4a574" />
            <stop offset="100%" stopColor="#5a9a90" />
          </linearGradient>
        </defs>

        <path
          className="journey-bridge"
          d="M120 100 H250 M390 100 H520"
          fill="none"
          stroke="url(#journey-bridge)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />

        {/* Fire */}
        <g className="journey-fire" transform="translate(90 100)">
          <circle r="36" fill="url(#journey-ember)" className="journey-ember-glow" />
          <path
            className="journey-flame"
            d="M0 18 C-14 4 -10 -16 0 -28 C10 -16 14 4 0 18 Z"
            fill="#d4784a"
          />
          <path
            className="journey-flame flame-inner"
            d="M0 12 C-7 2 -5 -10 0 -18 C5 -10 7 2 0 12 Z"
            fill="#e0c49a"
          />
          <text y="58" textAnchor="middle" className="journey-label">
            Fire
          </text>
        </g>

        {/* Drum */}
        <g className="journey-drum" transform="translate(320 100)">
          <circle r="42" fill="rgba(0,0,0,0.25)" transform="translate(0 4)" />
          <circle r="40" fill="url(#journey-drum)" className="journey-shell" />
          <circle r="40" fill="none" stroke="rgba(224,196,154,0.55)" strokeWidth="1.2" />
          <circle r="14" fill="#a88754" stroke="rgba(255,236,196,0.7)" strokeWidth="1" />
          <ellipse cx="-8" cy="-14" rx="14" ry="8" fill="rgba(255,255,255,0.12)" />
          <text y="68" textAnchor="middle" className="journey-label">
            Steel
          </text>
        </g>

        {/* Water */}
        <g className="journey-water" transform="translate(550 100)">
          <circle className="journey-ring" r="18" fill="none" stroke="#5a9a90" strokeWidth="1.4" />
          <circle className="journey-ring ring-2" r="30" fill="none" stroke="#3d6b6a" strokeWidth="1" />
          <circle className="journey-ring ring-3" r="42" fill="none" stroke="rgba(90,154,144,0.45)" strokeWidth="0.7" />
          <circle r="5" fill="#5a9a90" />
          <text y="68" textAnchor="middle" className="journey-label">
            Stillness
          </text>
        </g>
      </svg>
    </div>
  )
}
