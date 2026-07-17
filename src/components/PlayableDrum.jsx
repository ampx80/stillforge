import { useCallback, useId, useRef, useState } from 'react'
import { getNotes, playNote, unlockAudio, isUnlocked, playDemoArpeggio } from '../lib/audio-engine'

export default function PlayableDrum({ showControls = true, size = 'hero' }) {
  const notes = getNotes()
  const [ready, setReady] = useState(isUnlocked())
  const [active, setActive] = useState(null)
  const ripplesRef = useRef({})
  const svgId = useId()

  const strike = useCallback(async (noteId, clientX, clientY, el) => {
    if (!ready) {
      await unlockAudio()
      setReady(true)
    }
    await playNote(noteId)
    setActive(noteId)
    window.setTimeout(() => {
      setActive((curr) => (curr === noteId ? null : curr))
    }, 180)

    const ripple = ripplesRef.current[noteId]
    if (ripple) {
      ripple.classList.remove('animate')
      // force reflow
      void ripple.getBBox()
      ripple.classList.add('animate')
    }

    if (el && clientX != null) {
      el.classList.add('struck')
      window.setTimeout(() => el.classList.remove('struck'), 200)
    }
  }, [ready])

  const onPointer = useCallback(
    (noteId) => async (event) => {
      event.preventDefault()
      await strike(noteId, event.clientX, event.clientY, event.currentTarget)
    },
    [strike],
  )

  const onKey = useCallback(
    (noteId) => async (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        await strike(noteId)
      }
    },
    [strike],
  )

  return (
    <div className={`drum-panel drum-${size}`}>
      <div className="drum-wrap" role="application" aria-label="Playable Stillforge melodic drum">
        <svg
          className="drum-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={false}
        >
          <defs>
            <radialGradient id={`${svgId}-shell`} cx="38%" cy="32%" r="68%">
              <stop offset="0%" stopColor="#8a9690" />
              <stop offset="42%" stopColor="#4d5a55" />
              <stop offset="78%" stopColor="#2a3330" />
              <stop offset="100%" stopColor="#151b19" />
            </radialGradient>
            <radialGradient id={`${svgId}-gloss`} cx="30%" cy="25%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
              <stop offset="55%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <filter id={`${svgId}-soft`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.6" />
            </filter>
          </defs>

          <circle cx="50" cy="50" r="48" fill={`url(#${svgId}-shell)`} />
          <circle cx="50" cy="50" r="48" fill={`url(#${svgId}-gloss)`} />
          <circle
            cx="50"
            cy="50"
            r="46.5"
            fill="none"
            stroke="rgba(196,165,116,0.35)"
            strokeWidth="0.6"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(90,154,144,0.18)"
            strokeWidth="0.4"
          />

          {notes.map((note) => (
            <g key={note.id}>
              <ellipse
                className={`tone-field${active === note.id ? ' struck' : ''}`}
                cx={note.x}
                cy={note.y}
                rx={note.r * (note.id === 'ding' ? 1 : 1.15)}
                ry={note.r * (note.id === 'ding' ? 1 : 0.78)}
                fill="rgba(196,165,116,0.12)"
                stroke="rgba(224,196,154,0.55)"
                strokeWidth="0.55"
                tabIndex={0}
                role="button"
                aria-label={`Play note ${note.label}`}
                onPointerDown={onPointer(note.id)}
                onKeyDown={onKey(note.id)}
              />
              <ellipse
                ref={(node) => {
                  ripplesRef.current[note.id] = node
                }}
                className="ripple"
                cx={note.x}
                cy={note.y}
                rx={note.r * 1.4}
                ry={note.r * (note.id === 'ding' ? 1.4 : 1)}
                style={{ transformOrigin: `${note.x}px ${note.y}px` }}
              />
              <text
                x={note.x}
                y={note.y + 1.2}
                textAnchor="middle"
                fill="rgba(232,239,233,0.72)"
                fontSize={note.id === 'ding' ? '3.2' : '2.4'}
                fontFamily="Outfit, sans-serif"
                pointerEvents="none"
              >
                {note.label}
              </text>
            </g>
          ))}
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
