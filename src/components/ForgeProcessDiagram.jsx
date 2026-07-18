import { useInView } from '../hooks/useInView'

const STAGES = [
  { id: 'cut', label: 'Cut', sub: 'Tank to blank', hue: 'steel' },
  { id: 'heat', label: 'Heat', sub: 'Forge fire', hue: 'ember' },
  { id: 'hammer', label: 'Form', sub: 'Tone fields', hue: 'brass' },
  { id: 'tune', label: 'Tune', sub: 'Pitch lock', hue: 'brass' },
  { id: 'still', label: 'Still', sub: 'Ready voice', hue: 'water' },
]

/**
 * Animated forge process — SVG path draw + stage markers.
 */
export default function ForgeProcessDiagram() {
  const { ref, inView } = useInView({ threshold: 0.25, rootMargin: '0px 0px -5% 0px' })

  return (
    <div
      ref={ref}
      className={`forge-diagram${inView ? ' is-drawn' : ''}`}
      role="img"
      aria-label="Forge process: cut steel, heat, form tone fields, tune, then stillness"
    >
      <svg className="forge-diagram-svg" viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="forge-path-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6b7c78" />
            <stop offset="28%" stopColor="#d4784a" />
            <stop offset="55%" stopColor="#c4a574" />
            <stop offset="78%" stopColor="#e0c49a" />
            <stop offset="100%" stopColor="#5a9a90" />
          </linearGradient>
          <filter id="forge-glow" x="-20%" y="-40%" width="140%" height="180%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Track underlay */}
        <path
          className="forge-track"
          d="M48 110 C 140 40, 220 180, 300 110 S 460 40, 540 110 S 640 160, 672 110"
          fill="none"
          stroke="rgba(196,165,116,0.18)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Animated draw path */}
        <path
          className="forge-draw"
          d="M48 110 C 140 40, 220 180, 300 110 S 460 40, 540 110 S 640 160, 672 110"
          fill="none"
          stroke="url(#forge-path-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#forge-glow)"
        />

        {/* Stage icons */}
        <g className="forge-stage stage-cut" transform="translate(48 110)">
          <circle className="forge-node" r="18" />
          <path className="forge-icon" d="M-8 -4 L8 -4 M-6 2 L6 2 M-4 8 L4 8" strokeWidth="1.6" />
        </g>
        <g className="forge-stage stage-heat" transform="translate(210 78)">
          <circle className="forge-node" r="18" />
          <path
            className="forge-icon"
            d="M0 8 C-6 2 -4 -6 0 -10 C4 -6 6 2 0 8 Z"
            fill="currentColor"
            stroke="none"
          />
        </g>
        <g className="forge-stage stage-hammer" transform="translate(360 128)">
          <circle className="forge-node" r="18" />
          <path className="forge-icon" d="M-7 -6 L7 -6 L4 2 L-4 2 Z M-1 2 L-1 10 M1 2 L1 10" strokeWidth="1.5" />
        </g>
        <g className="forge-stage stage-tune" transform="translate(510 78)">
          <circle className="forge-node" r="18" />
          <circle className="forge-icon" r="6" fill="none" strokeWidth="1.5" />
          <circle className="forge-icon" r="2.2" fill="currentColor" stroke="none" />
        </g>
        <g className="forge-stage stage-still" transform="translate(672 110)">
          <circle className="forge-node" r="18" />
          <circle className="forge-icon ring-still" r="7" fill="none" strokeWidth="1.2" />
          <circle className="forge-icon ring-still" r="11" fill="none" strokeWidth="0.8" opacity="0.55" />
        </g>
      </svg>

      <ol className="forge-legend">
        {STAGES.map((stage, i) => (
          <li key={stage.id} className={`forge-legend-item hue-${stage.hue}`} style={{ '--i': i }}>
            <strong>{stage.label}</strong>
            <span>{stage.sub}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
