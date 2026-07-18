import { useCallback, useEffect, useId, useRef, useState } from 'react'
import {
  getNotes,
  playNote,
  unlockAudio,
  isUnlocked,
  playDemoArpeggio,
  panForX,
  SONGS,
} from '../lib/audio-engine'

// Keyboard: number row maps to notes in layout order (ding = 1).
const KEY_ORDER = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

function hueForIndex(i, total) {
  // brass -> ember -> water sweep
  return 28 + (i / Math.max(1, total - 1)) * 150
}

export default function PlayableDrum({ showControls = true, size = 'hero' }) {
  const notes = getNotes()
  const [ready, setReady] = useState(isUnlocked())
  const [hasInteracted, setHasInteracted] = useState(false)
  const [active, setActive] = useState(null)
  const [pulse, setPulse] = useState(false)
  const [floatOn, setFloatOn] = useState(true)
  const [songId, setSongId] = useState(null)
  const ripplesRef = useRef({})
  const lastStrikeRef = useRef({})
  const wrapRef = useRef(null)
  const sparksRef = useRef(null)
  const popRef = useRef(null)
  const draggingRef = useRef(false)
  const songTimersRef = useRef([])
  const svgId = useId()

  const keyMap = useRef({})
  useEffect(() => {
    const map = {}
    notes.forEach((n, i) => {
      if (KEY_ORDER[i]) map[KEY_ORDER[i]] = n.id
    })
    keyMap.current = map
  }, [notes])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setFloatOn(!reduced)
  }, [])

  const spawnSparks = useCallback((note) => {
    const container = sparksRef.current
    if (!container) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const hue = hueForIndex(notes.findIndex((n) => n.id === note.id), notes.length)
    for (let i = 0; i < 7; i += 1) {
      const spark = document.createElement('span')
      spark.className = 'strike-spark'
      const angle = (Math.PI * 2 * i) / 7 + Math.random() * 0.5
      const dist = 16 + Math.random() * 30
      spark.style.left = `${note.x}%`
      spark.style.top = `${note.y}%`
      spark.style.background = `hsl(${hue} 70% 68%)`
      spark.style.setProperty('--dx', `${Math.cos(angle) * dist}px`)
      spark.style.setProperty('--dy', `${Math.sin(angle) * dist}px`)
      container.appendChild(spark)
      window.setTimeout(() => spark.remove(), 620)
    }
  }, [notes])

  const spawnPopup = useCallback((note) => {
    const container = popRef.current
    if (!container) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const pop = document.createElement('span')
    pop.className = 'note-pop'
    pop.textContent = note.label
    pop.style.left = `${note.x}%`
    pop.style.top = `${note.y}%`
    container.appendChild(pop)
    window.setTimeout(() => pop.remove(), 700)
  }, [])

  const strike = useCallback(
    async (noteId, el, velocity = 0.85) => {
      const note = notes.find((n) => n.id === noteId)
      if (!note) return
      setHasInteracted(true)
      const now = performance.now()
      if (now - (lastStrikeRef.current[noteId] || 0) < 45) return
      lastStrikeRef.current[noteId] = now

      if (!ready) {
        await unlockAudio()
        setReady(true)
      }
      await playNote(noteId, velocity, panForX(note.x))
      setActive(noteId)
      setPulse(true)
      window.setTimeout(() => {
        setActive((curr) => (curr === noteId ? null : curr))
        setPulse(false)
      }, 280)

      const ripple = ripplesRef.current[noteId]
      if (ripple) {
        const hue = hueForIndex(notes.indexOf(note), notes.length)
        ripple.style.stroke = `hsl(${hue} 65% 62%)`
        ripple.classList.remove('animate')
        void ripple.getBBox()
        ripple.classList.add('animate')
      }

      if (el && el.classList) {
        el.classList.add('struck')
        window.setTimeout(() => el.classList.remove('struck'), 240)
      }

      if (wrapRef.current && floatOn) {
        wrapRef.current.classList.remove('drum-kick')
        void wrapRef.current.offsetWidth
        wrapRef.current.classList.add('drum-kick')
      }

      spawnSparks(note)
      spawnPopup(note)
    },
    [ready, floatOn, notes, spawnSparks, spawnPopup],
  )

  const onPointerDown = useCallback(
    (noteId) => async (event) => {
      event.preventDefault()
      draggingRef.current = true
      await strike(noteId, event.currentTarget)
    },
    [strike],
  )

  const onPointerEnter = useCallback(
    (noteId) => (event) => {
      if (!draggingRef.current) return
      strike(noteId, event.currentTarget, 0.6)
    },
    [strike],
  )

  useEffect(() => {
    const end = () => {
      draggingRef.current = false
    }
    window.addEventListener('pointerup', end)
    window.addEventListener('pointercancel', end)
    return () => {
      window.removeEventListener('pointerup', end)
      window.removeEventListener('pointercancel', end)
    }
  }, [])

  const onKey = useCallback(
    (noteId) => async (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        await strike(noteId, event.currentTarget)
      }
    },
    [strike],
  )

  // Global number-key play when the drum is on screen.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.repeat) return
      const tag = document.activeElement?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      const id = keyMap.current[e.key]
      if (id) {
        e.preventDefault()
        strike(id, null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [strike])

  const clearSong = useCallback(() => {
    songTimersRef.current.forEach((t) => window.clearTimeout(t))
    songTimersRef.current = []
    setSongId(null)
  }, [])

  const playSong = useCallback(
    async (song) => {
      clearSong()
      await unlockAudio()
      setReady(true)
      setSongId(song.id)
      const beat = 60000 / song.tempo
      let t = 0
      song.steps.forEach(([id, beats]) => {
        const timer = window.setTimeout(() => strike(id, null, 0.7), t)
        songTimersRef.current.push(timer)
        t += beats * beat
      })
      const endTimer = window.setTimeout(() => setSongId(null), t + 400)
      songTimersRef.current.push(endTimer)
    },
    [clearSong, strike],
  )

  useEffect(() => () => songTimersRef.current.forEach((t) => window.clearTimeout(t)), [])

  return (
    <div className={`drum-panel drum-${size}${pulse ? ' is-pulsing' : ''}`}>
      <div
        ref={wrapRef}
        className={`drum-wrap${floatOn ? ' drum-float' : ''}${hasInteracted ? '' : ' is-idle'}`}
        role="application"
        aria-label="Playable Stillforge melodic drum. Tap tone fields, drag to glissando, or press number keys 1 to 9."
      >
        <div className="drum-aura" aria-hidden="true" />
        <div className="drum-ember" aria-hidden="true" />
        <div ref={sparksRef} className="strike-sparks" aria-hidden="true" />
        <div ref={popRef} className="note-pops" aria-hidden="true" />
        {!hasInteracted && (
          <div className="drum-prompt" aria-hidden="true">
            <span className="drum-prompt-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              Tap to play
            </span>
          </div>
        )}
        <svg className="drum-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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

          {notes.map((note, i) => {
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
                  aria-label={`Play note ${note.label}${KEY_ORDER[i] ? `, key ${KEY_ORDER[i]}` : ''}`}
                  onPointerDown={onPointerDown(note.id)}
                  onPointerEnter={onPointerEnter(note.id)}
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
          ? 'Tap, drag across the fields to glissando, or press keys 1-9. Play it like a real drum.'
          : 'Tap the drum once to wake it up - then tap, drag, or use number keys 1-9.'}
      </p>

      {showControls && (
        <div className="drum-controls">
          <div className="drum-songs">
            <span className="drum-songs-label">Play a song</span>
            <div className="drum-songs-row">
              {SONGS.map((song) => (
                <button
                  key={song.id}
                  type="button"
                  className={`chip-btn${songId === song.id ? ' is-on' : ''}`}
                  onClick={() => (songId === song.id ? clearSong() : playSong(song))}
                >
                  {songId === song.id ? 'Stop' : song.name}
                </button>
              ))}
            </div>
          </div>
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
