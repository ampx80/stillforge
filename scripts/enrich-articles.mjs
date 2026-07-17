/** Expand article sections to 5+ sections, 3 paragraphs each, ~900+ words. ASCII hyphens only. */

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length
}

function hashSlug(slug) {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  return h
}

function humanTopic(article) {
  return (article.h1 || article.title || article.slug.replace(/-/g, ' ')).trim()
}

function sentencePool(article, h2, paraIndex, seq) {
  const topic = humanTopic(article)
  const slugWords = article.slug.replace(/-/g, ' ')
  const cat = (article.category || 'guides').toLowerCase()
  const pools = {
    gifts: [
      `Gift decisions around ${slugWords} land best when you match the object to an existing habit, not to a fantasy version of the recipient.`,
      `Stillforge melodic steel drums are forged from decommissioned propane tanks and hand-tuned in fixed scales so first-time players hear consonant intervals quickly.`,
      `Before wrapping anything, listen to scale demos on the Stillforge player so tone matches how they already unwind after work or on weekends.`,
      `Include a soft bag, spare mallets, and a one-page care note so the gift is playable the same day without a shopping trip for accessories.`,
      `Commission timelines are honest: forging and tuning take weeks. A printed story plus demo audio can carry the celebration while the drum finishes.`,
      `Avoid promising medical cures. Frame melodic steel as a creative calm tool and shared ritual object, which keeps expectations grounded and kind.`,
      `Place the instrument where daily life happens. Kitchen corners, porch steps, and studio desks beat closet storage for long-term satisfaction.`,
      `Follow up a month later with a simple question about their favorite note or time of day to play. That conversation turns an object into a lasting ritual.`,
    ],
    beginners: [
      `Beginners exploring ${topic} succeed when sessions stay short, repeatable, and free of performance pressure at the start.`,
      `Fixed-scale melodic drums remove the fear of wrong notes, which protects confidence while ears and hands learn together.`,
      `Stillforge layouts emphasize clear field separation and stable tuning so random exploration still sounds musical in the first week.`,
      `Parents and partners should play alongside rather than supervise. Shared imperfection models that music is for humans, not only for experts.`,
      `Outdoor sessions need shade, dry wipe-down, and a padded bag. Steel is durable but still deserves respect from humidity and salt air.`,
      `When volume matters in apartments, use softer strikes, lap damping, and felt-tipped mallets where appropriate for tongue-style layouts.`,
      `Progress shows up as better listening before faster fingers. Record short clips so beginners hear growth without comparing to social media performers.`,
      `Add structure only after curiosity repeats on its own. Teachers help most when the student already wants to recreate a sound they discovered alone.`,
    ],
    compare: [
      `Comparison shopping for ${slugWords} fails when photos look alike but tuning quality differs by an order of magnitude.`,
      `Use tier tables as guardrails, then confirm with audio of the exact build or a documented commission process from the maker.`,
      `Stillforge sits in the mid artisan band: tank-forged shells, hand-shaped fields, and scales chosen for calm play rather than novelty finishes.`,
      `Budget for the full ownership cost: case, cleaning supplies, possible retune after shipping, and realistic shipping weight on steel.`,
      `Avoid bargain listings that hide tuning clips or reuse stock photos from unrelated instruments. Mis-tuned steel frustrates beginners fast.`,
      `Define your primary room and volume needs before choosing note count. More notes add range but also coupling complexity and weight.`,
      `If you are gifting on a deadline, ready inventory beats rushed commissions. Milestone years justify waiting for a custom scale consult.`,
      `Try the interactive Stillforge player to feel layout spacing, then compare related guides in the library before you pay.`,
    ],
    education: [
      `Understanding ${topic} helps you buy once and care for steel intelligently instead of guessing from forum myths.`,
      `Handpan-family instruments combine shell stiffness, field geometry, and overtone control. Small changes at the bench become large changes at the ear.`,
      `Stillforge documents prep steps on propane tanks because material honesty affects pitch stability and long-term rust behavior.`,
      `Listen for clean fundamentals, balanced overtones, and stable decay on every note before you assume a scale is right for you.`,
      `Practice habits matter as much as specs: ten focused minutes daily beats rare marathon sessions that burn out curiosity.`,
      `Transport and storage protect tuning investments. Rigid cases, gentle handling, and climate acclimation prevent costly surprises after travel.`,
      `Recording at home teaches you what listeners hear. Simple mics in quiet rooms reveal technique issues that feel fine while playing.`,
      `Link this topic to daily play: choose scales and note counts that fit your real rooms, not only your aspirational performance dreams.`,
    ],
    story: [
      `Stillforge story pages describe real forge workflow, not invented pedigree. ${h2} is part of how propane tanks become melodic instruments.`,
      `The brand grew from metalwork discipline first and musical curiosity second. That order still shapes how commissions are scheduled and tuned.`,
      `Slow craft means refusing fake urgency. Each shell gets the tuning time it needs, even when inboxes ask for impossible ship dates.`,
      `Customers hear the results on the site player and in tuning samples because sound should lead the conversation, not lifestyle staging alone.`,
      `Material prep, coating removal, and seam inspection are non-negotiable gates before fine field work begins on tank steel.`,
      `Commissions stay conversational: scale choice, playing context, and finish preferences are discussed before metal is committed to a layout.`,
      `Streamside and outdoor listening inform how we balance sustain and overtone brightness for real air, not only for treated studio rooms.`,
      `If you visit or consult remotely, expect plain language about limits, care, and lead times. Honesty keeps instruments trusted for years.`,
    ],
  }
  const list = pools[cat] || pools.education
  const idx = (hashSlug(article.slug) + paraIndex * 7 + seq * 13 + h2.length) % list.length
  return list[idx]
}

export function expandParagraph(text, article, h2, paraIndex) {
  let out = (text || '').trim()
  if (!out) {
    out = `${humanTopic(article)} connects directly to ${h2.toLowerCase()}. Stillforge builds melodic steel drums with that practical lens.`
  }
  let seq = 0
  while (wordCount(out) < 85 && seq < 12) {
    const add = sentencePool(article, h2, paraIndex, seq)
    if (!out.includes(add)) out += ` ${add}`
    seq += 1
  }
  return out
}

function defaultExtraSection(article, index) {
  const titles = [
    'Questions worth asking before you commit',
    'How Stillforge approaches this topic',
    'Practical next steps after reading',
  ]
  const h2 = titles[((index % titles.length) + titles.length) % titles.length]
  return {
    h2,
    paragraphs: [0, 1, 2].map((pi) => expandParagraph('', article, h2, pi)),
  }
}

export function enrichArticle(article) {
  const sections = (article.sections || []).map((section) => {
    const existing = section.paragraphs || []
    const paragraphs = [0, 1, 2].map((pi) =>
      expandParagraph(existing[pi] || existing[existing.length - 1] || '', article, section.h2, pi),
    )
    return { ...section, paragraphs }
  })

  while (sections.length < 5) {
    sections.push(defaultExtraSection(article, sections.length))
  }

  let total = sections.flatMap((s) => s.paragraphs).reduce((n, p) => n + wordCount(p), 0)
  let extraIdx = 0
  while (total < 920 && extraIdx < 24) {
    const si = extraIdx % sections.length
    const pi = extraIdx % 3
    sections[si].paragraphs[pi] = expandParagraph(
      sections[si].paragraphs[pi],
      article,
      sections[si].h2,
      pi + extraIdx + 3,
    )
    total = sections.flatMap((s) => s.paragraphs).reduce((n, p) => n + wordCount(p), 0)
    extraIdx += 1
  }

  const readingMinutes = Math.max(article.readingMinutes || 9, Math.ceil(total / 200))

  return { ...article, sections, readingMinutes }
}

export function articleStats(article) {
  const sections = article.sections || []
  const words = sections.flatMap((s) => s.paragraphs || []).reduce((n, p) => n + wordCount(p), 0)
  const minParas = sections.length ? Math.min(...sections.map((s) => (s.paragraphs || []).length)) : 0
  return { sections: sections.length, minParas, words }
}
