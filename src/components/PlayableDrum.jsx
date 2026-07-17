import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { getNotes, playNote, unlockAudio, isUnlocked, playDemoArpeggio } from '../lib/audio-engine'

export default function PlayableDrum({ showControls = true, size = 'hero' }) {
  const notes = getNotes()
  const [ready, setReady] = useState(isUnlocked())
  const [active, setActive] = useState(null)
  const [pulse, setPulse] = useState(false)
  const [floatOn, setFloatOn] = useState(true)
  const ripplesRef = useRef({})
  const lastStrikeRef = useRef({})
  const wrapRef = useRef(null)
  const svgId = useId()

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setFloatOn(!reduced)
  }, [])

  const strike = useCallback(async (noteId, el) => {
    const now = performance.now()
    if (now - (lastStrikeRef.current[noteId] || 0) < 45) return
    lastStrikeRef.current[noteId] = now

    if (!ready) {
      await unlockAudio()
      setReady(true)
    }
    await playNote(noteId)
    setActive(noteId)
    setPulse(true)
    window.setTimeout(() => {
      setActive((curr) => (curr === noteId ? null : curr))
      setPulse(false)
    }, 280)

    const ripple = ripplesRef.current[noteId]
    if (ripple) {
      ripple.classList.remove('animate')
      void ripple.getBBox()
      ripple.classList.add('animate')
    }

    if (el) {
      el.classList.add('struck')
      window.setTimeout(() => el.classList.remove('struck'), 240)
    }

    if (wrapRef.current && floatOn) {
      wrapRef.current.classList.remove('drum-kick')
      void wrapRef.current.offsetWidth
      wrapRef.current.classList.add('drum-kick')
    }
  }, [ready, floatOn])

  const onPointer = useCallback(
    (noteId) => async (event) => {
      event.preventDefault()
      await strike(noteId, event.currentTarget)
    },
    [strike],
  )

  const onKey = useCallback(
    (noteId) => async (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        await strike(noteId, event.currentTarget)
      }
    },
    [strike],
  )

  return (
    <div className={`drum-panel drum-${size}${pulse ? ' is-pulsing' : ''}`}>
      <div
        ref={wrapRef}
        className={`drum-wrap${floatOn ? ' drum-float' : ''}`}
        role="application"
        aria-label="Playable Stillforge melodic drum"
      >
        <div className="drum-aura" aria-hidden="true" />
        <div className="drum-ember" aria-hidden="true" />
        <svg
          className="drum-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id={`${svgId}-shell`} cx="34%" cy="28%" r="72%">
              <stop offset="0%" stopColor="#b8c4bc" />
              <stop offset="18%" stopColor="#7a8a82" />
              <stop offset="45%" stopColor="#3f4d47" />
              <stop offset="72%" stopColor="#1c2622" />
              <stop offset="100%" stopColor="#0a100e" />
            </radialGradient>
            <radialGradient id={`${svgId}-rim`} cx="50%" cy="50%" r="50%">
              <stop offset="78%" stopColor="rgba(0,0,0,0)" />
              <stop offset="88%" stopColor="rgba(196,165,116,0.35)" />
              <stop offset="96%" stopColor="rgba(20,16,10,0.85)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.95)" />
            </radialGradient>
            <radialGradient id={`${svgId}-gloss`} cx="28%" cy="22%" r="48%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.42)" />
              <stop offset="35%" stopColor="rgba(255,255,255,0.08)" />
              <stop offset="70%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <radialGradient id={`${svgId}-ding`} cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#e0c49a" />
              <stop offset="40%" stopColor="#a88754" />
              <stop offset="100%" stopColor="#4a3a22" />
            </radialGradient>
            <filter id={`${svgId}-glow`} x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="1.4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id={`${svgId}-soft`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.45" />
            </filter>
          </defs>

          <circle cx="50" cy="52.5" r="46" fill="rgba(0,0,0,0.35)" filter={`url(#${svgId}-soft)`} />
          <circle cx="50" cy="50" r="48" fill={`url(#${svgId}-shell)`} />
          <circle cx="50" cy="50" r="48" fill={`url(#${svgId}-rim)`} />
          <circle cx="50" cy="50" r="48" fill={`url(#${svgId}-gloss)`} />
          <circle
            cx="50"
            cy="50"
            r="46.2"
            fill="none"
            stroke="rgba(224,196,154,0.45)"
            strokeWidth="0.55"
          />
          <circle
            cx="50"
            cy="50"
            r="41.5"
            fill="none"
            stroke="rgba(90,154,144,0.22)"
            strokeWidth="0.35"
            strokeDasharray="1.2 1.8"
          />

          {/* brushed steel arcs */}
          {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((deg) => (
            <path
              key={deg}
              d="M50 12.5 A37.5 37.5 0 0 1 78 22"
              fill="none"
              stroke="rgba(232,239,233,0.05)"
              strokeWidth="0.35"
              transform={`rotate(${deg} 50 50)`}
              pointerEvents="none"
            />
          ))}

          {notes.map((note) => {
            const isDing = note.id === 'ding'
            const rx = note.r * (isDing ? 1.05 : 1.2)
            const ry = note.r * (isDing ? 1.05 : 0.82)
            return (
              <g key={note.id} className="tone-group">
                <ellipse
                  className={`tone-field${active === note.id ? ' struck' : ''}`}
                  cx={note.x}
                  cy={note.y}
                  rx={rx}
                  ry={ry}
                  fill={isDing ? `url(#${svgId}-ding)` : 'rgba(196,165,116,0.14)'}
                  stroke={isDing ? 'rgba(255,236,196,0.75)' : 'rgba(224,196,154,0.65)'}
                  strokeWidth={isDing ? '0.7' : '0.55'}
                  tabIndex={0}
                  role="button"
                  aria-label={`Play note ${note.label}`}
                  onPointerDown={onPointer(note.id)}
                  onClick={onPointer(note.id)}
                  onKeyDown={onKey(note.id)}
                  filter={active === note.id ? `url(#${svgId}-glow)` : undefined}
                />
                {!isDing && (
                  <ellipse
                    cx={note.x - rx * 0.18}
                    cy={note.y - ry * 0.22}
                    rx={rx * 0.35}
                    ry={ry * 0.28}
                    fill="rgba(255,255,255,0.12)"
                    pointerEvents="none"
                  />
                )}
                <ellipse
                  ref={(node) => {
                    ripplesRef.current[note.id] = node
                  }}
                  className="ripple"
                  cx={note.x}
                  cy={note.y}
                  rx={rx * 1.55}
                  ry={ry * 1.55}
                  style={{ transformOrigin: `${note.x}px ${note.y}px` }}
                />
                <text
                  x={note.x}
                  y={note.y + (isDing ? 1.4 : 1.1)}
                  textAnchor="middle"
                  fill={isDing ? 'rgba(20,16,10,0.88)' : 'rgba(232,239,233,0.82)'}
                  fontSize={isDing ? '3.4' : '2.35'}
                  fontFamily="Outfit, sans-serif"
                  fontWeight="600"
                  pointerEvents="none"
                >
                  {note.label}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      <p className="drum-hint">
        {ready
          ? 'Tap any tone field. D Kurd-inspired layout. Works on phone and desktop.'
          : 'Tap the drum once to unlock sound, then play the tone fields.'}
      </p>

      {showControls && (
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={async () => {
              await unlockAudio()
              setReady(true)
              await playDemoArpeggio()
            }}
          >
            Hear a short phrase
          </button>
        </div>
      )}
    </div>
  )
}
