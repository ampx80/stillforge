import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dir = join(root, 'src/content/articles')
mkdirSync(dir, { recursive: true })

function article(partial) {
  const slug = partial.slug
  const title = partial.title
  const topic = partial.topic
  const category = partial.category
  const extras = partial.extras || {}
  return {
    slug,
    category,
    title,
    description: partial.description,
    h1: partial.h1 || title,
    publishedAt: '2026-07-01',
    updatedAt: '2026-07-17',
    readingMinutes: partial.readingMinutes || 9,
    keywords: partial.keywords || [topic, 'stillforge', 'melodic drum', 'handpan'],
    relatedSlugs: partial.relatedSlugs || [],
    schemaType: partial.schemaType || 'Article',
    faqs: partial.faqs || [
      { q: `What is this guide about?`, a: `A practical Stillforge guide to ${topic}, written for real buying and learning decisions.` },
      { q: 'Is a Stillforge drum a handpan?', a: 'Stillforge builds propane-tank forged melodic steel drums in the handpan and tongue-drum family. Each build is tuned for clear notes and long sustain.' },
      { q: 'Can beginners start here?', a: 'Yes. These instruments are friendly to first-time players because many scales have no wrong notes inside the layout.' },
      { q: 'How do I take the next step?', a: 'Play the interactive drum on Stillforge, then send a commission inquiry with your preferred scale and setting.' },
    ],
    sections: partial.sections || [
      {
        h2: `A clear answer on ${topic}`,
        paragraphs: [
          `${title} matters because people want instruments that feel meaningful, not gadgets that gather dust. Stillforge approaches this from the forge floor: propane tanks become shells, tone fields are shaped by hand, and tuning turns industrial steel into a calm musical voice.`,
          `If you landed here while researching ${topic}, start with what you need the instrument to do. Meditation, outdoor play, a gift for someone hard to shop for, or a first instrument for a curious kid each point to different note counts, scales, and budgets.`,
        ],
      },
      {
        h2: 'What to look for before you buy',
        paragraphs: [
          'Prioritize tuning stability, sustain, and honest materials over marketing language. A playable melodic steel drum should ring cleanly, settle into pitch, and invite the hands without a steep theory wall.',
          'Ask makers for a tuning video of the exact instrument or a clear commission process. Stillforge commissions include scale consults and progress updates so you are not guessing.',
        ],
        list: [
          'Match the scale to the mood you want (minor for introspective, brighter modes for open air)',
          'Decide note count based on portability versus range',
          'Budget for a case, cleaning, and careful transport',
          'Prefer makers who show process, not only lifestyle photos',
        ],
      },
      {
        h2: 'How Stillforge fits',
        paragraphs: [
          'Stillforge is an artisan path: tank-forged shells, hand-tuned fields, and a brand story rooted in real metalwork. The interactive drum on the site lets you feel a D Kurd-inspired layout before you commission.',
          'Inventory is made to order on purpose. That keeps quality high and avoids fake scarcity. If you need a holiday gift timeline, write early.',
        ],
      },
      {
        h2: 'Practical next steps',
        paragraphs: [
          `Use this page as a decision frame for ${topic}, then move from reading to hearing. Play the browser drum, compare scales in the guide library, and send a commission note with where you will play and who it is for.`,
        ],
      },
      ...(extras.sections || []),
    ],
    cta: partial.cta || {
      headline: 'Ready to hear steel in your hands?',
      body: 'Commission a Stillforge melodic drum or play the interactive instrument now.',
      primaryTo: '/commission',
      primaryLabel: 'Start a commission',
    },
  }
}

const gifts = [
  ['unique-gifts-for-birthdays', 'Unique Gifts for Birthdays', 'unique birthday gifts', 'Looking for unique birthday gifts that feel personal? Explore melodic steel drums and Stillforge commission ideas that outlast typical gadgets.'],
  ['unique-gifts-for-christmas', 'Unique Gifts for Christmas', 'unique Christmas gifts', 'Unique Christmas gifts for people who already own everything - including artisan melodic drums forged for quiet winter evenings.'],
  ['meaningful-gifts-for-musicians', 'Meaningful Gifts for Musicians', 'gifts for musicians', 'Meaningful gifts for musicians beyond another cable: melodic steel drums, scales to explore, and instruments that invite daily play.'],
  ['gifts-for-someone-who-has-everything', 'Gifts for Someone Who Has Everything', 'gifts for someone who has everything', 'When they have everything, give a new voice. Stillforge melodic drums turn propane tanks into instruments worth keeping forever.'],
  ['unique-gifts-for-dad', 'Unique Gifts for Dad', 'unique gifts for dad', 'Unique gifts for dad that are not ties or tools. A melodic steel drum gives him a calm practice he can take outdoors.'],
  ['unique-anniversary-gifts-for-men', 'Unique Anniversary Gifts for Men', 'anniversary gifts for men', 'Unique anniversary gifts for men: artisan instruments with presence, sound, and a story from forge to finished drum.'],
  ['meditation-gifts-that-actually-get-used', 'Meditation Gifts That Actually Get Used', 'meditation gifts', 'Meditation gifts that leave the shelf: melodic drums with no wrong notes, built for breath, focus, and short daily sessions.'],
  ['yoga-teacher-gift-ideas', 'Yoga Teacher Gift Ideas', 'yoga teacher gifts', 'Yoga teacher gift ideas that support class atmosphere and personal practice - including Stillforge melodic steel drums.'],
  ['gifts-for-husband-who-has-everything', 'Gifts for a Husband Who Has Everything', 'gifts for husband', 'Gifts for a husband who has everything: commission a tank-forged melodic drum tuned to the mood he actually wants.'],
  ['unique-gifts-for-boyfriend', 'Unique Gifts for Boyfriend', 'unique gifts for boyfriend', 'Unique gifts for your boyfriend that feel bold and personal - sound, craft, and a playable Stillforge instrument path.'],
  ['sound-healing-gift-guide', 'Sound Healing Gift Guide', 'sound healing gifts', 'A sound healing gift guide covering melodic steel drums, listening practices, and how to choose scales for calm rooms.'],
  ['outdoor-musician-gift-ideas', 'Outdoor Musician Gift Ideas', 'outdoor musician gifts', 'Outdoor musician gift ideas for streamside players, camp musicians, and anyone who practices under open sky.'],
  ['handmade-gifts-worth-the-money', 'Handmade Gifts Worth the Money', 'handmade gifts', 'Handmade gifts worth the money share three traits: honest materials, visible skill, and daily use. Melodic drums qualify.'],
  ['experience-gifts-vs-objects', 'Experience Gifts vs Objects', 'experience gifts vs objects', 'Experience gifts vs objects is a false choice when the object is an instrument that creates experiences every week.'],
  ['stocking-stuffers-for-musicians', 'Stocking Stuffers for Musicians', 'stocking stuffers musicians', 'Stocking stuffers for musicians plus the bigger Stillforge commission path when you want the gift to be unforgettable.'],
  ['wedding-gifts-for-creative-couples', 'Wedding Gifts for Creative Couples', 'wedding gifts creative couples', 'Wedding gifts for creative couples: a shared instrument that becomes ritual, not decor that disappears into a closet.'],
].map(([slug, title, topic, description], i, arr) => article({
  slug, title, topic, description, category: 'gifts',
  relatedSlugs: arr.filter((_, j) => j !== i).slice(0, 3).map((x) => x[0]).concat(['handpan-vs-tongue-drum', 'commissioning-a-custom-drum']).slice(0, 5),
  sections: undefined,
  extras: {
    sections: [{
      h2: 'Gift timing and presentation',
      paragraphs: [
        'For holidays and birthdays, commission early. Artisan drums are not overnight shipping products. Pair the eventual instrument with a printed note describing the scale and a link to the Stillforge playable drum so they can practice the layout while the forge works.',
      ],
    }],
  },
}))

const beginners = [
  ['how-to-get-my-son-into-music', 'How to Get My Son Into Music', 'getting kids into music', 'Practical ways to get your son into music without forcing lessons - including melodic steel drums that reward the first touch.'],
  ['best-first-instrument-for-kids', 'Best First Instrument for Kids', 'best first instrument for kids', 'Best first instruments for kids balance fun, durability, and quick wins. Melodic steel drums belong on that short list.'],
  ['best-first-instrument-for-teenagers', 'Best First Instrument for Teenagers', 'first instrument for teenagers', 'Teenagers need instruments that feel cool and personal. A melodic drum offers identity, calm, and real musical feedback.'],
  ['calming-instruments-for-anxiety', 'Calming Instruments for Anxiety', 'calming instruments for anxiety', 'Calming instruments for anxiety support breath and attention. Learn why handpan-style steel drums help many people settle.'],
  ['instruments-for-meditation-beginners', 'Instruments for Meditation Beginners', 'meditation instruments', 'Instruments for meditation beginners should be simple to start and rich enough to stay. Melodic drums fit both needs.'],
  ['instruments-with-no-wrong-notes', 'Instruments With No Wrong Notes', 'instruments with no wrong notes', 'Instruments with no wrong notes remove fear from early practice. Diatonic melodic drums keep every strike inside the scale.'],
  ['steel-tongue-drum-for-beginners', 'Steel Tongue Drum for Beginners', 'steel tongue drum beginners', 'A beginner guide to steel tongue drums: what they are, how they differ from handpans, and when to commission a Stillforge build.'],
  ['can-adults-learn-handpan', 'Can Adults Learn Handpan?', 'adults learning handpan', 'Yes - adults can learn handpan-style instruments quickly. Here is a realistic path from first touch to daily practice.'],
  ['music-for-adhd-focus', 'Music for ADHD Focus', 'music for ADHD focus', 'How rhythmic and melodic play can support ADHD focus, plus why short drum sessions beat perfectionist practice plans.'],
  ['family-music-night-ideas', 'Family Music Night Ideas', 'family music night', 'Family music night ideas that do not require sheet music - pass-around melodic drums, listening games, and outdoor sessions.'],
  ['outdoor-music-practice-tips', 'Outdoor Music Practice Tips', 'outdoor music practice', 'Outdoor music practice tips for parks, streams, and backyards - including care tips for steel instruments in weather.'],
  ['how-to-choose-a-scale-for-beginners', 'How to Choose a Scale for Beginners', 'choose handpan scale', 'How beginners should choose a handpan or melodic drum scale without drowning in theory.'],
  ['handpan-lessons-vs-self-taught', 'Handpan Lessons vs Self Taught', 'handpan lessons', 'Handpan lessons vs self-taught practice: when coaching helps and how to learn well with videos and daily listening.'],
  ['instruments-for-people-who-hate-practice', 'Instruments for People Who Hate Practice', 'instruments without practice grind', 'If you hate traditional practice, choose instruments that feel like play. Melodic steel drums are built for that personality.'],
].map(([slug, title, topic, description], i, arr) => article({
  slug, title, topic, description, category: 'beginners',
  relatedSlugs: arr.filter((_, j) => j !== i).slice(0, 4).map((x) => x[0]),
  cta: { headline: 'Try before you commit', body: 'Play the Stillforge interactive drum, then decide if a commission is right for your household.', primaryTo: '/play', primaryLabel: 'Play the drum' },
}))

const compareSpecs = [
  ['handpan-vs-tongue-drum', 'Handpan vs Tongue Drum', 'handpan vs tongue drum', 'Handpan vs tongue drum explained: construction, sound, price, learning curve, and which path fits Stillforge craft.'],
  ['how-much-does-a-handpan-cost', 'How Much Does a Handpan Cost?', 'handpan cost', 'How much a handpan costs in 2026, with clear tiers from entry instruments to artisan custom builds.'],
  ['best-handpan-drums-by-tier', 'Best Handpan Drums by Tier', 'best handpan tiers', 'A class and tier framework for handpan-style drums so you can compare quality without hype.'],
  ['hang-drum-vs-handpan', 'Hang Drum vs Handpan', 'hang drum vs handpan', 'Hang drum vs handpan: trademark history, naming clarity, and what buyers should actually shop for today.'],
  ['propane-tank-drum-explained', 'Propane Tank Drum Explained', 'propane tank drum', 'What a propane tank drum is, how forging works, and why Stillforge chooses tanks as the starting shell.'],
  ['handpan-buyer-guide', 'Handpan Buyer Guide', 'handpan buyer guide', 'A complete handpan buyer guide covering budget, scales, makers, red flags, and commission checklists.'],
  ['nitrided-vs-stainless-handpan', 'Nitrided vs Stainless Handpan', 'nitrided vs stainless', 'Nitrided vs stainless handpan steel: tone, maintenance, climate, and tradeoffs for real owners.'],
  ['handpan-scales-compared', 'Handpan Scales Compared', 'handpan scales compared', 'Compare popular handpan scales - D Kurd, Celtic Minor, Hijaz, and more - by mood and use case.'],
  ['rav-vast-vs-handpan', 'RAV Vast vs Handpan', 'RAV Vast vs handpan', 'RAV Vast vs handpan: tongue-style systems, sound character, and when each instrument shines.'],
  ['cheap-handpan-warnings', 'Cheap Handpan Warnings', 'cheap handpan warnings', 'Cheap handpan warnings: what sub-$400 listings often are, and how to spend smarter as a beginner.'],
  ['custom-handpan-vs-ready-made', 'Custom Handpan vs Ready Made', 'custom vs ready made handpan', 'Custom handpan vs ready-made: lead times, tuning control, and why commissions fit Stillforge.'],
  ['handpan-shipping-and-care-cost', 'Handpan Shipping and Care Cost', 'handpan shipping care cost', 'The real cost of owning a handpan beyond sticker price: shipping, cases, oil, and retuning risk.'],
  ['sound-healing-instruments-compared', 'Sound Healing Instruments Compared', 'sound healing instruments', 'Compare sound healing instruments - melodic drums, bowls, chimes - and when steel melody is the better tool.'],
  ['acoustic-vs-electronic-handpan', 'Acoustic vs Electronic Handpan', 'acoustic vs electronic handpan', 'Acoustic vs electronic handpan options for apartments, travel, and players who need headphones.'],
  ['handpan-size-and-note-count-guide', 'Handpan Size and Note Count Guide', 'handpan note count', 'Handpan size and note count guide: portability, range, and beginner-friendly layouts.'],
  ['where-to-buy-a-handpan', 'Where to Buy a Handpan', 'where to buy a handpan', 'Where to buy a handpan safely: makers, dealers, used market tips, and artisan commission paths.'],
]

const compare = compareSpecs.map(([slug, title, topic, description], i, arr) => {
  const base = article({
    slug, title, topic, description, category: 'compare',
    relatedSlugs: arr.filter((_, j) => j !== i).slice(0, 4).map((x) => x[0]),
    schemaType: 'FAQPage',
  })
  base.sections = [
    {
      h2: `Direct comparison: ${topic}`,
      paragraphs: [
        `Shoppers comparing options around ${topic} need numbers, tradeoffs, and honest language. Marketing pages rarely provide that. This guide does.`,
        'Stillforge positions tank-forged melodic drums in the artisan custom band: not a $99 novelty, not a five-figure collector Hang, but a serious handmade instrument with a clear process.',
      ],
    },
    {
      h2: 'Price and quality tiers',
      paragraphs: [
        'Use tiers to avoid category confusion. Tongue drums, factory-assisted pans, and master artisan builds are different products even when photos look similar.',
      ],
      table: {
        headers: ['Tier', 'Typical USD', 'What you are buying'],
        rows: [
          ['Tongue / tank entry', '$100-$500', 'Accessible melody, simpler construction'],
          ['Entry handpan-style', '$600-$1,300', 'Playable 9-10 note instruments'],
          ['Mid artisan', '$1,400-$2,500', 'Stronger tuning, better sustain'],
          ['Premium custom', '$2,500-$5,000+', 'Extended range, exotic materials, waitlists'],
        ],
      },
    },
    {
      h2: 'Decision checklist',
      paragraphs: ['Before you pay, answer these out loud.'],
      list: [
        'Where will you play most - indoors, outdoors, travel?',
        'Do you want minor calm, bright open modes, or something exotic?',
        'Is this a gift with a hard date or a personal commission?',
        'Can the maker show tuning evidence for your exact build?',
      ],
    },
    {
      h2: 'Stillforge recommendation',
      paragraphs: [
        'If you want craft provenance and a custom voice, commission. If you only need to test the feel, start with the interactive drum and beginner guides, then decide.',
      ],
    },
  ]
  return base
})

const education = [
  ['what-is-a-handpan', 'What Is a Handpan?', 'what is a handpan', 'What a handpan is, how it sounds, and how Stillforge melodic drums relate to the wider steel instrument family.'],
  ['history-of-the-hang-and-handpan', 'History of the Hang and Handpan', 'handpan history', 'History of the Hang and the handpan movement - from PANArt to a global maker community.'],
  ['how-handpans-are-made', 'How Handpans Are Made', 'how handpans are made', 'How handpans are made: shells, tone fields, nitriding or stainless choices, and the long tuning process.'],
  ['how-propane-tank-drums-are-forged', 'How Propane Tank Drums Are Forged', 'propane tank drum forging', 'How propane tank drums are forged - from emptied tank to tuned melodic instrument in the Stillforge process.'],
  ['handpan-tuning-explained', 'Handpan Tuning Explained', 'handpan tuning', 'Handpan tuning explained in plain language: fundamentals, overtones, and why patience costs money.'],
  ['understanding-handpan-scales', 'Understanding Handpan Scales', 'handpan scales', 'Understand handpan scales without a theory degree - modes, moods, and choosing your first layout.'],
  ['d-kurd-scale-guide', 'D Kurd Scale Guide', 'D Kurd scale', 'D Kurd scale guide for melodic drums: notes, mood, and why beginners love this minor layout.'],
  ['celtic-minor-scale-guide', 'Celtic Minor Scale Guide', 'Celtic Minor scale', 'Celtic Minor scale guide: emotional color, common uses, and who should commission it.'],
  ['hijaz-scale-guide', 'Hijaz Scale Guide', 'Hijaz scale', 'Hijaz scale guide for players who want tension, spice, and Mediterranean or desert color.'],
  ['handpan-care-and-rust-prevention', 'Handpan Care and Rust Prevention', 'handpan care', 'Handpan care and rust prevention: cleaning, oiling, humidity, and travel habits that protect tuning.'],
  ['how-to-play-handpan-basics', 'How to Play Handpan Basics', 'how to play handpan', 'How to play handpan basics: touch, alternating hands, simple patterns, and listening-first practice.', 'HowTo'],
  ['handpan-for-sound-baths', 'Handpan for Sound Baths', 'handpan sound baths', 'Using handpan-style instruments in sound baths: volume, pacing, and respectful facilitation tips.'],
  ['steel-properties-for-melodic-drums', 'Steel Properties for Melodic Drums', 'steel for melodic drums', 'Steel properties that matter for melodic drums - hardness, corrosion, and how tanks become instruments.'],
  ['overtones-and-harmonics-on-steel', 'Overtones and Harmonics on Steel', 'handpan overtones', 'Overtones and harmonics on steel drums: what you hear after the strike and why tuning is an art.'],
  ['transporting-and-storing-a-handpan', 'Transporting and Storing a Handpan', 'transporting handpan', 'How to transport and store a handpan or melodic drum so impacts and humidity do not ruin months of work.'],
  ['recording-handpan-at-home', 'Recording Handpan at Home', 'recording handpan', 'Recording handpan at home with simple mics, quiet rooms, and natural reverb from real spaces.'],
  ['playing-handpan-outdoors', 'Playing Handpan Outdoors', 'playing handpan outdoors', 'Playing handpan outdoors: wind, temperature, courtesy, and why streamside sessions feel different.'],
  ['building-a-daily-handpan-practice', 'Building a Daily Handpan Practice', 'daily handpan practice', 'Build a daily handpan practice in 10 minutes - patterns, listening, and avoiding burnout.'],
].map(([slug, title, topic, description, schemaType], i, arr) => article({
  slug, title, topic, description, category: 'education', schemaType: schemaType || 'Article',
  relatedSlugs: arr.filter((_, j) => j !== i).slice(0, 4).map((x) => x[0]),
}))

const story = [
  ['stillforge-origin-story', 'Stillforge Origin Story', 'Stillforge origin', 'The Stillforge origin story: metalwork first, melodic drums as the passion that turned craft into brand.'],
  ['craft-philosophy', 'Craft Philosophy', 'Stillforge craft philosophy', 'Stillforge craft philosophy - slow work, honest materials, and instruments meant for real quiet.'],
  ['behind-the-forge', 'Behind the Forge', 'behind the forge', 'Behind the forge: tools, heat, patience, and the workshop reality behind Stillforge drums.'],
  ['from-propane-tank-to-instrument', 'From Propane Tank to Instrument', 'tank to instrument', 'From propane tank to instrument - the Stillforge transformation step by step.'],
  ['why-streamside-music', 'Why Streamside Music', 'streamside music', 'Why streamside music matters to Stillforge: water, open air, and instruments that belong outside.'],
  ['metalwork-to-melodic-drums', 'From Metalwork to Melodic Drums', 'metalwork to drums', 'How sculpture-scale metalwork becomes melodic drum making without losing forge honesty.'],
  ['commissioning-a-custom-drum', 'Commissioning a Custom Drum', 'commission custom drum', 'What commissioning a custom Stillforge drum looks like from first note idea to delivery.'],
  ['meet-the-maker', 'Meet the Maker', 'meet the maker', 'Meet the Stillforge maker through craft, not celebrity - a metalworker chasing steel that sings.'],
  ['materials-we-trust', 'Materials We Trust', 'drum materials', 'Materials Stillforge trusts for melodic drums and why tanks are more than a gimmick.'],
  ['the-sound-we-chase', 'The Sound We Chase', 'Stillforge sound', 'The sound Stillforge chases: warm ding, clean fields, sustain that feels like breath.'],
  ['slow-craft-in-a-fast-world', 'Slow Craft in a Fast World', 'slow craft', 'Slow craft in a fast world - why Stillforge refuses fake urgency and disposable instruments.'],
  ['visiting-the-workshop', 'Visiting the Workshop', 'workshop visit', 'Visiting the workshop by arrangement: what to expect, what to ask, and how to book a conversation.'],
].map(([slug, title, topic, description], i, arr) => article({
  slug, title, topic, description, category: 'story',
  relatedSlugs: arr.filter((_, j) => j !== i).slice(0, 4).map((x) => x[0]),
  cta: { headline: 'Bring the story into your hands', body: 'Commission a drum or explore the craft gallery.', primaryTo: '/craft', primaryLabel: 'See the craft' },
}))

function dump(name, data) {
  const code = `/** Auto-generated Stillforge SEO articles - ${name} */\nexport default ${JSON.stringify(data, null, 2)}\n`
  writeFileSync(join(dir, `${name}.js`), code)
  console.log(name, data.length)
}

dump('gifts', gifts)
dump('beginners', beginners)
dump('compare', compare)
dump('education', education)
dump('story', story)
console.log('TOTAL', gifts.length + beginners.length + compare.length + education.length + story.length)
