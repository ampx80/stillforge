import { useCallback, useEffect, useRef, useState } from 'react'
import { performances } from '../data/gallery'
import { unlockAudio, playNote, getNotes, panForX } from '../lib/audio-engine'

const SLIDE_MS = 5200

/**
 * A cinematic "performance reel" built from the maker's real playing frames.
 * Crossfades his recorded scales with Ken Burns motion and a live audio bloom,
 * so the page feels like watching (and hearing) the drums played.
 */
export default function PerformanceReel() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [reduced, setReduced] = useState(false)
  const timerRef = useRef(null)
  const audioTimerRef = useRef(null)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  const bloom = useCallback(() => {
    const notes = getNotes()
    const order = ['ding', 'a3', 'c4', 'e4', 'g4', 'a4', 'f4', 'd4']
    order.forEach((id, i) => {
      window.setTimeout(() => {
        const n = notes.find((x) => x.id === id)
        playNote(id, 0.32 + Math.random() * 0.12, n ? panForX(n.x) : 0)
      }, i * 230)
    })
  }, [])

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % performances.length)
  }, [])

  useEffect(() => {
    if (!playing) return undefined
    timerRef.current = window.setInterval(advance, SLIDE_MS)
    return () => window.clearInterval(timerRef.current)
  }, [playing, advance])

  useEffect(() => {
    if (!playing) return undefined
    bloom()
    audioTimerRef.current = window.setInterval(bloom, SLIDE_MS)
    return () => window.clearInterval(audioTimerRef.current)
  }, [playing, bloom, index])

  const toggle = useCallback(async () => {
    if (!playing) {
      await unlockAudio()
      setPlaying(true)
    } else {
      setPlaying(false)
    }
  }, [playing])

  const active = performances[index]

  return (
    <div className={`reel${playing ? ' is-playing' : ''}`}>
      <div className="reel-stage">
        {performances.map((p, i) => (
          <figure
            key={p.id}
            className={`reel-slide${i === index ? ' is-active' : ''}`}
            aria-hidden={i === index ? undefined : 'true'}
          >
            <img src={p.src} alt={`${p.title} - ${p.scale} tank drum`} loading="lazy" />
          </figure>
        ))}

        <div className="reel-grain" aria-hidden="true" />
        <div className="reel-vignette" aria-hidden="true" />

        <div className="reel-eq" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} style={{ '--i': i }} />
          ))}
        </div>

        <div className="reel-meta">
          <p className="reel-kicker">Recorded performance</p>
          <h3 className="reel-title">{active.title}</h3>
          <p className="reel-scale">
            <span>{active.scale}</span>
            <span className="reel-dot" aria-hidden="true">
              &bull;
            </span>
            <span>{active.notes}</span>
          </p>
        </div>

        <button
          type="button"
          className="reel-play"
          onClick={toggle}
          aria-label={playing ? 'Pause performance reel' : 'Play performance reel'}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

      <div className="reel-track" role="tablist" aria-label="Choose a recorded scale">
        {performances.map((p, i) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={`reel-chip${i === index ? ' is-active' : ''}`}
            onClick={() => setIndex(i)}
          >
            <span className="reel-chip-name">{p.title}</span>
            <span className="reel-chip-scale">{p.scale}</span>
            {i === index && playing && !reduced && (
              <span className="reel-chip-bar" aria-hidden="true" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
