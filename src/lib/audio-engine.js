/**
 * Stillforge handpan audio engine
 * Low-latency Web Audio with pre-rendered note buffers (sampled synthesis).
 * D Kurd-style layout: ding + 8 tone fields.
 */

const NOTE_DEFS = [
  { id: 'ding', label: 'D3', freq: 146.83, x: 50, y: 50, r: 11 },
  { id: 'a3', label: 'A3', freq: 220.0, x: 50, y: 22, r: 7.5 },
  { id: 'bb3', label: 'Bb3', freq: 233.08, x: 72, y: 30, r: 7.5 },
  { id: 'c4', label: 'C4', freq: 261.63, x: 80, y: 50, r: 7.5 },
  { id: 'd4', label: 'D4', freq: 293.66, x: 72, y: 70, r: 7.5 },
  { id: 'e4', label: 'E4', freq: 329.63, x: 50, y: 78, r: 7.5 },
  { id: 'f4', label: 'F4', freq: 349.23, x: 28, y: 70, r: 7.5 },
  { id: 'g4', label: 'G4', freq: 392.0, x: 20, y: 50, r: 7.5 },
  { id: 'a4', label: 'A4', freq: 440.0, x: 28, y: 30, r: 7.5 },
]

let ctx = null
let master = null
let convolver = null
let buffers = new Map()
let unlocked = false
let loading = null

function getCtx() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext
    ctx = new AC({ latencyHint: 'interactive' })
    master = ctx.createGain()
    master.gain.value = 0.85
    convolver = ctx.createConvolver()
    convolver.buffer = makeImpulse(ctx, 2.2, 2.8)
    const wet = ctx.createGain()
    wet.gain.value = 0.28
    const dry = ctx.createGain()
    dry.gain.value = 0.9
    master.connect(dry)
    master.connect(convolver)
    convolver.connect(wet)
    dry.connect(ctx.destination)
    wet.connect(ctx.destination)
  }
  return ctx
}

function makeImpulse(audioCtx, seconds, decay) {
  const rate = audioCtx.sampleRate
  const length = rate * seconds
  const impulse = audioCtx.createBuffer(2, length, rate)
  for (let channel = 0; channel < 2; channel += 1) {
    const data = impulse.getChannelData(channel)
    for (let i = 0; i < length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / length) ** decay
    }
  }
  return impulse
}

function renderNoteBuffer(audioCtx, freq) {
  const duration = 4.5
  const sampleRate = audioCtx.sampleRate
  const length = Math.floor(sampleRate * duration)
  const buffer = audioCtx.createBuffer(1, length, sampleRate)
  const data = buffer.getChannelData(0)

  // Handpan-like partials: fundamental, octave, fifth, soft metallic shimmer
  const partials = [
    { ratio: 1, amp: 1 },
    { ratio: 2, amp: 0.55 },
    { ratio: 3, amp: 0.18 },
    { ratio: 4.05, amp: 0.08 },
    { ratio: 5.1, amp: 0.04 },
  ]

  for (let i = 0; i < length; i += 1) {
    const t = i / sampleRate
    const attack = Math.min(1, t / 0.008)
    const body = Math.exp(-t * 1.35)
    const shimmer = Math.exp(-t * 4.2)
    let sample = 0
    for (const p of partials) {
      const amp = p.amp * (p.ratio < 2.5 ? body : shimmer)
      sample += Math.sin(2 * Math.PI * freq * p.ratio * t) * amp
    }
    // Soft strike noise burst
    const noise = (Math.random() * 2 - 1) * Math.exp(-t * 60) * 0.12
    data[i] = (sample * 0.35 + noise) * attack * 0.9
  }
  return buffer
}

export function getNotes() {
  return NOTE_DEFS
}

export async function unlockAudio() {
  const audioCtx = getCtx()
  if (audioCtx.state === 'suspended') {
    await audioCtx.resume()
  }
  unlocked = true
  await ensureBuffers()
  return audioCtx
}

export function isUnlocked() {
  return unlocked
}

async function ensureBuffers() {
  if (buffers.size === NOTE_DEFS.length) return
  if (loading) return loading
  loading = (async () => {
    const audioCtx = getCtx()
    for (const note of NOTE_DEFS) {
      if (!buffers.has(note.id)) {
        buffers.set(note.id, renderNoteBuffer(audioCtx, note.freq))
      }
    }
  })()
  await loading
  loading = null
}

export async function playNote(noteId, velocity = 0.85, pan = 0) {
  const audioCtx = getCtx()
  if (audioCtx.state === 'suspended') {
    await audioCtx.resume()
    unlocked = true
  }
  await ensureBuffers()
  const buffer = buffers.get(noteId)
  if (!buffer) return

  const src = audioCtx.createBufferSource()
  src.buffer = buffer
  // subtle humanization so repeated strikes never sound robotic
  src.playbackRate.value = 1 + (Math.random() * 2 - 1) * 0.006
  const gain = audioCtx.createGain()
  const v = Math.max(0.12, Math.min(1, velocity))
  gain.gain.value = v
  src.connect(gain)

  if (typeof audioCtx.createStereoPanner === 'function' && pan) {
    const panner = audioCtx.createStereoPanner()
    panner.pan.value = Math.max(-1, Math.min(1, pan))
    gain.connect(panner)
    panner.connect(master)
  } else {
    gain.connect(master)
  }
  src.start()
}

/** Pan value (-1..1) derived from a note's x position (0..100). */
export function panForX(x) {
  return Math.max(-1, Math.min(1, (x - 50) / 60))
}

export async function playDemoArpeggio() {
  await unlockAudio()
  const order = ['ding', 'a3', 'c4', 'd4', 'f4', 'a4', 'g4', 'e4', 'ding']
  order.forEach((id, i) => {
    setTimeout(() => {
      const note = NOTE_DEFS.find((n) => n.id === id)
      playNote(id, 0.7, note ? panForX(note.x) : 0)
    }, i * 280)
  })
}

/**
 * Short playable melodies mapped to the D Kurd layout.
 * Each step: [noteId, beats]. Used by the guided "play a song" mode.
 */
export const SONGS = [
  {
    id: 'still-water',
    name: 'Still Water',
    tempo: 132,
    steps: [
      ['ding', 1], ['a3', 1], ['c4', 1], ['d4', 1],
      ['e4', 1], ['d4', 1], ['c4', 1], ['a3', 2],
      ['ding', 1], ['f4', 1], ['e4', 1], ['d4', 1],
      ['c4', 2], ['ding', 2],
    ],
  },
  {
    id: 'ember-rise',
    name: 'Ember Rise',
    tempo: 150,
    steps: [
      ['a3', 1], ['c4', 1], ['e4', 1], ['a4', 1],
      ['g4', 1], ['e4', 1], ['c4', 1], ['a3', 1],
      ['d4', 1], ['f4', 1], ['a4', 2],
      ['ding', 2],
    ],
  },
  {
    id: 'forge-song',
    name: 'Forge Lullaby',
    tempo: 108,
    steps: [
      ['ding', 2], ['d4', 1], ['c4', 1],
      ['a3', 2], ['c4', 1], ['d4', 1],
      ['e4', 2], ['f4', 1], ['e4', 1],
      ['d4', 2], ['ding', 2],
    ],
  },
]
