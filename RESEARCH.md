# Stillforge Research Brief

Brand decision: **Stillforge** (working name Resonance retired). More distinctive than generic "Resonance," ties forge fire to streamside stillness. Tagline: "Forged from fire. Tuned for stillness."

## Album reference (artist media)

Shared Google Photos album "sculptures" shows:
- Large industrial dragon sculpture built from cylindrical tanks / pipe sections
- Artist in workshop with face shield, gloves, hooded workwear
- Outdoor metal pieces in grassy / wooded settings
- Authentic garage-forge atmosphere (tools, shelving, garage door)

These establish craft credibility. Drum / process / streamside play media are placeholder slots until his real drum photos and video land.

## Market

| Tier | Price (USD) | Notes |
|------|-------------|-------|
| Tongue drum | $100-$500 | Laser-cut, beginner gateway |
| Entry handpan | $600-$1,300 | Factory-assisted, 9-10 notes |
| Mid artisan | $1,400-$2,500 | Serious players' sweet spot |
| Premium custom | $2,500-$5,000+ | Extended range, exotic steel |

Stillforge positioning: propane-tank forged, tongue-drum / handpan-adjacent melodic steel drums. Artisan custom / commission first. Honest about tank-forged craft vs factory Hang replicas. Price band target: mid-artisan custom once inventory exists; inquiry-first commerce at launch.

## Competitor UX to beat

- Mudra Virtual Player, Yishama Virtual Pantam, BorgerDrum, NovaPans virtual handpan
- Gap: most virtual players are tools. Few wrap playable drums inside a cinematic brand story + commerce + SEO library.
- Stillforge differentiator: photoreal interactive drum as hero + forge/streamside film language + deep content engine.

## Gift-intent keywords

- unique gifts for birthdays / Christmas / someone who has everything
- meaningful gifts for musicians / meditation lovers / yoga teachers
- gifts for dad / husband / boyfriend who has everything
- unique anniversary gifts for men

## Parent / beginner keywords

- how to get my son into music
- best first instrument for kids / teenagers
- calming instruments for anxiety / meditation
- instruments with no wrong notes
- steel tongue drum for beginners

## Ranking / comparison keywords

- best handpan drums 2026 / handpan tier list
- handpan vs tongue drum
- how much does a handpan cost
- hang drum vs handpan
- propane tank drum / tank drum instrument

## Educational keywords

- what is a handpan
- how handpans are made / tuned
- handpan scales (D Kurd, Celtic Minor, Hijaz)
- handpan care / rust prevention
- history of the hang and handpan

## SEO + LLM citation tactics

1. Answer-first paragraphs under every H2 (featured snippet bait).
2. Comparison tables, price tiers, HowTo steps, FAQ blocks with FAQPage JSON-LD.
3. Internal linking hub: every gift/guide page CTAs to /shop, /commission, /play.
4. Distinct URLs per intent (not thin doorway pages) - 800-1500 words of real substance.
5. Product + Article + HowTo + FAQ schemas where relevant.
6. Author entity: Stillforge maker story for E-E-A-T.
7. sitemap.xml + robots.txt + clean canonicals.

## Stack decisions

- React 19 + Vite 8, React Router 7
- Web Audio API (sampled + synthesized handpan tones, low latency)
- Vercel serverless /api/health, /api/inquire, /api/subscribe
- Lead capture via API (file/memory fallback if Supabase unset)
- Content as structured JSON modules rendered by ArticlePage
