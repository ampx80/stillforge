import { A, sec, paras, faq } from '../article-helpers.mjs'

export const education = [
  A({
    slug: 'what-is-a-handpan',
    category: 'education',
    title: 'What Is a Handpan? Shape, Sound, and Play Style',
    description:
      'A handpan is a convex steel instrument with tuned note fields you strike with hands. Learn layout basics and how Stillforge fits the family tree.',
    h1: 'What is a handpan?',
    readingMinutes: 9,
    keywords: ['what is handpan', 'handpan definition'],
    relatedSlugs: ['history-of-the-hang-and-handpan', 'how-to-play-handpan-basics', 'handpan-vs-tongue-drum'],
    faqs: [
      faq('Is handpan the same as steel drum?', 'Steel drums often mean Caribbean pans on stands with sticks. Handpans are handheld melodic instruments with a different playing technique.'),
      faq('How many notes?', 'Common layouts have seven to thirteen notes plus optional bottom port resonance.'),
      faq('Do you need training?', 'Forgiving scales allow immediate exploration. Training helps performance technique.'),
    ],
    sections: [
      sec('Physical form', paras(
        'Two steel shells glue together, leaving a hollow chamber and bottom port.',
        'Note fields hammered into the top shell ring the player like a compass.',
        'Stillforge starts from propane-tank steel forged into this melodic form.'
      )),
      sec('How it sounds', paras(
        'Fundamental pitch plus overtones create shimmering sustain.',
        'Players control tone with strike location, finger flesh, and dynamics.',
        'Poor tuning makes adjacent notes fight; quality makers manage coupling.'
      )),
      sec('Playing posture', paras(
        'Rest the drum on lap or stand. Shoulders relaxed, wrists soft.',
        'Alternate hands for rhythmic and melodic patterns.',
        'See basics article for first patterns.'
      )),
      sec('Family of instruments', paras(
        'Inspired by PANArt Hang and global maker community growth since 2000s.',
        'Related to some tongue drums and experimental steel idiophones.',
        'Each maker voices instruments with distinct forge and tuning philosophy.'
      )),
      sec('Buying entry point', paras(
        'Listen to scale demos, read buyer guide, define use case.',
        'Commission or shop Stillforge when forge story and scale fit your ear.',
        'Care guides protect steel investment from day one.'
      )),
    ],
    cta: { headline: 'Go from definition to sound', body: 'Explore play guides and shop demos next.', primaryTo: '/play', primaryLabel: 'Explore play guides' },
  }),
  A({
    slug: 'history-of-the-hang-and-handpan',
    category: 'education',
    title: 'History of the Hang and Handpan Movement',
    description:
      'PANArt introduced the Hang in Switzerland, sparking a global handpan community. Trace naming, evolution, and ethical maker culture.',
    h1: 'History of the Hang and handpan',
    readingMinutes: 11,
    keywords: ['handpan history', 'Hang history', 'PANArt'],
    relatedSlugs: ['hang-drum-vs-handpan', 'what-is-a-handpan', 'craft-philosophy'],
    faqs: [
      faq('Who invented the handpan?', 'PANArt developed the Hang through steel research culminating in public release in 2000.'),
      faq('Why so many makers now?', 'Players demanded access beyond Hang waitlists, inspiring independent tuners worldwide.'),
      faq('Is Stillforge part of that wave?', 'Stillforge continues regional forge craft using propane-tank steel within the broader handpan community.'),
    ],
    sections: [
      sec('PANArt and the Hang', paras(
        'Felix Rohner and Sabina Schärer explored steel resonance for years before Hang naming.',
        'Hang combined art object status with playable instrument intimacy.',
        'Trademark and naming etiquette still matter in community discourse.'
      )),
      sec('Spread and diversification', paras(
        'Online video accelerated global awareness in the 2010s.',
        'Independent makers experimented with scales, materials, and price tiers.',
        'Quality varied; education became essential for buyers.'
      )),
      sec('Propane-tank forge thread', paras(
        'Some makers embraced upcycled cylinders as structural and storytelling choice.',
        'Stillforge aligns with slow metal craft near water where tuning is tested.',
        'Tank forging is one branch, not the only legitimate build method.'
      )),
      sec('Community norms', paras(
        'Respect PANArt terminology, share knowledge, avoid counterfeit demos.',
        'Support makers who document labor honestly.',
        'Players share techniques openly across borders.'
      )),
      sec('Looking forward', paras(
        'Handpans appear in wellness, film, and street performance contexts.',
        'Sustainability conversations include steel sourcing and instrument longevity.',
        'New owners benefit from reading education library before first purchase.'
      )),
    ],
    cta: { headline: 'Join the living tradition', body: 'Commission a drum rooted in modern forge craft.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'how-handpans-are-made',
    category: 'education',
    title: 'How Handpans Are Made: Shells, Notes, and Tuning',
    description:
      'Handpan making blends metal forming, heat treatment, and iterative tuning. Understand steps so you can judge maker quality.',
    h1: 'How handpans are made',
    readingMinutes: 12,
    schemaType: 'HowTo',
    keywords: ['how handpans are made', 'handpan manufacturing'],
    relatedSlugs: ['how-propane-tank-drums-are-forged', 'handpan-tuning-explained', 'behind-the-forge'],
    faqs: [
      faq('How long does one drum take?', 'Many makers spend days to weeks per instrument including tuning passes.'),
      faq('Is it all hammer tuning?', 'Hammering shapes note geometry and tension. Some steps use heat and presses depending on maker.'),
      faq('Can machines replace tuners?', 'Partial automation exists, but ear and hand skill remain central for premium voice.'),
    ],
    sections: [
      sec('Shell creation', paras(
        'Sheet or tank steel becomes domed halves with controlled thickness gradients.',
        'Port and glue lines must stay airtight for stable resonance.',
        'Stillforge begins with propane-tank forging before note layout.'
      )),
      sec('Note shaping', paras(
        'Fields are hammered with borders defining isolation between pitches.',
        'Geometry affects sustain, octave stability, and cross-talk.',
        'Makers mark layouts for ergonomics and scale intervals.'
      )),
      sec('Tuning iterations', paras(
        'Fundamental and partials are adjusted repeatedly as neighboring notes shift coupling.',
        'Heat may relieve stress between passes.',
        'Documentation with strobe or software helps repeatability.'
      )),
      sec('Finish and QC', paras(
        'Nitriding, oil, or stainless treatments applied per steel plan.',
        'Final play tests in environments similar to intended use.',
        'Stillforge streamside tests inform outdoor clarity.'
      )),
      sec('What buyers should ask', paras(
        'How many tuning passes, how drift is handled under warranty, and how repairs work.',
        'Photos of intermediate stages signal transparency.',
        'Avoid makers who hide process entirely.'
      )),
    ],
    cta: { headline: 'See craft in action', body: 'Read behind-the-forge and start a commission.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'how-propane-tank-drums-are-forged',
    category: 'education',
    title: 'How Propane Tank Drums Are Forged at Stillforge',
    description:
      'Propane tank drums start as cleaned steel cylinders shaped by heat and hammer. Learn safety, steps, and why tanks become musical shells.',
    h1: 'How propane tank drums are forged',
    readingMinutes: 10,
    schemaType: 'HowTo',
    keywords: ['propane tank forge', 'tank drum making'],
    relatedSlugs: ['propane-tank-drum-explained', 'how-handpans-are-made', 'from-propane-tank-to-instrument'],
    faqs: [
      faq('Is forging tanks DIY-safe?', 'No for tuning finished instruments. Cleaning and shaping require professional ventilation and metalworking skill.'),
      faq('Does tank steel sound different?', 'Thickness and prior forming influence modes. Skilled forging aligns musical potential.'),
      faq('Environmental angle?', 'Upcycling retired tanks reduces waste when done responsibly with traceable sources.'),
    ],
    sections: [
      sec('Sourcing and cleaning', paras(
        'Tanks must be purged and cut safely before any heat work. Our forge follows industrial safety habits from years of metal sculpture, not shortcut hobby methods.',
        'Residual compounds are removed to protect makers and future owners. That prep step affects how cleanly steel accepts hammer tuning later.',
        'Stillforge treats safety as non-negotiable groundwork. We document tank origin when clients ask because material traceability matters for trust.'
      )),
      sec('Shaping the shell', paras(
        'Sections are cut, rolled, and welded or formed into handpan-like geometry. Curvature and seam placement influence stiffness before the first note field is struck.',
        'Stress relief and annealing steps prepare steel for note hammering. Skipping thermal care invites unpredictable drift during tuning marathons.',
        'Visual character from tank heritage often remains subtly visible. Many players enjoy that honest industrial story next to refined melodic voice.'
      )),
      sec('Transition to musical instrument', paras(
        'Once shell geometry is stable, the handpan note process takes over. Forge work ends where musical tuning begins, and neither stage gets rushed.',
        'Tuning is identical in importance to any other handpan shell origin. Tank provenance is narrative, not a substitute for ear work at the bench.',
        'Stillforge streamside listening tests how tank-forged shells project in open air, where bedroom demos can lie about overtone clarity.'
      )),
      sec('Why we choose tanks', paras(
        'Story, steel thickness, and regional craft identity align with Stillforge values. Tanks are available, forgeable, and honest about upcycling steel.',
        'Players connect to transformation from utility to art. A commission becomes a conversation about fire, patience, and sound in one object.',
        'Slow craft philosophy matches intentional tuning sessions. One shell may return to the bench many times before it leaves the shop.'
      )),
      sec('Care reminders', paras(
        'Forged steel still needs rust-aware maintenance. Tank origin does not make the instrument immune to fingerprints, humidity, or dents.',
        'Read the care guide after learning forge context so oiling and storage match your climate.',
        'Commission questions welcome about tank sourcing standards, finish choices, and how outdoor play affects long-term steel health.'
      )),
    ],
    cta: { headline: 'Own tank-forged tone', body: 'Commission a propane-tank melodic drum with your scale brief.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'handpan-tuning-explained',
    category: 'education',
    title: 'Handpan Tuning Explained for Curious Players',
    description:
      'Handpan tuning adjusts fundamental pitch and harmonics on each note field. Learn what makers mean by stable tuning and beating.',
    h1: 'Handpan tuning explained',
    readingMinutes: 11,
    keywords: ['handpan tuning', 'handpan harmonics'],
    relatedSlugs: ['overtones-and-harmonics-on-steel', 'handpan-care-and-rust-prevention', 'how-handpans-are-made'],
    faqs: [
      faq('Why do notes buzz sometimes?', 'Coupling, loose partials, or damage can cause buzz. Quality tuning minimizes wolf tones.'),
      faq('Can I tune my handpan at home?', 'Minor touch-ups require training and tools. Major work belongs to experienced tuners.'),
      faq('Does temperature affect tuning?', 'Steel expands and contracts slightly. Allow acclimation after shipping or cold storage.'),
    ],
    sections: [
      sec('Fundamentals and partials', paras(
        'Each field targets a root frequency and aligned overtones for pleasant timbre.',
        'Hammer strikes stretch and compress local steel to shift pitch.',
        'Makers listen for beating between partials to judge clarity.'
      )),
      sec('Coupling between notes', paras(
        'Energy transfers across the shell. Tuning one note shifts neighbors.',
        'Iterative passes balance the entire layout, not isolated notes.',
        'Stillforge streamside listening catches outdoor projection issues early.'
      )),
      sec('Measurement tools', paras(
        'Electronic tuners, strobe apps, and spectrum tools assist ears.',
        'Tools do not replace musical judgment on timbre.',
        'Buyers can request tuning documentation for transparency.'
      )),
      sec('Drift and maintenance', paras(
        'Normal micro-drift happens with climate and play intensity.',
        'Proper care reduces corrosion that ruins pitch stability.',
        'Budget occasional professional checks for working performers.'
      )),
      sec('Evaluating demos online', paras(
        'Listen for wobble on long sustains and harsh cross-talk when arpeggiating.',
        'Compare same player technique across scales when possible.',
        'Trust ears over visual gloss in photos.'
      )),
    ],
    cta: { headline: 'Trust stable tuning', body: 'Commission builds with documented QC habits.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'understanding-handpan-scales',
    category: 'education',
    title: 'Understanding Handpan Scales and Intervals',
    description:
      'Scales map which notes surround the player. Learn intervals, mode names, and why layout matters as much as pitch names.',
    h1: 'Understanding handpan scales',
    readingMinutes: 10,
    keywords: ['handpan scales theory', 'handpan intervals'],
    relatedSlugs: ['handpan-scales-compared', 'd-kurd-scale-guide', 'how-to-choose-a-scale-for-beginners'],
    faqs: [
      faq('Do I need music theory?', 'Helpful but not required to start. Ear and mood guide most first purchases.'),
      faq('Why do layouts differ?', 'Ergonomics and maker tuning habits rotate note positions around the circle.'),
      faq('Can scales be retuned?', 'Partial retunes possible; full scale changes are often impractical versus new instrument.'),
    ],
    sections: [
      sec('Intervals and mood', paras(
        'Minor thirds and sevenths color emotion differently than major stacks.',
        'Handpan scales often omit awkward intervals to keep improvisation pleasant.',
        'Listen to guides for D Kurd, Celtic minor, and Hijaz next.'
      )),
      sec('Root and center', paras(
        'Many layouts highlight a central ding or low note as home pitch.',
        'Arpeggios radiate clockwise or maker-specific patterns.',
        'Muscle memory maps spatially, aiding improvisation.'
      )),
      sec('Naming conventions', paras(
        'Names reference music traditions or maker marketing labels.',
        'Verify interval maps with demos, not only title words.',
        'Stillforge consults translate playlist language into scale options.'
      )),
      sec('Choosing thoughtfully', paras(
        'Match scale to venue: meditation, stage, film, family play.',
        'Avoid trend-chasing if demos bore you personally.',
        'Commission when interval needs are specific.'
      )),
      sec('Practice implications', paras(
        'Limited notes encourage creative repetition and variation.',
        'Transposing to other keys requires different drum or post-production.',
        'Embrace limitation as feature.'
      )),
    ],
    cta: { headline: 'Map sound to emotion', body: 'Compare scale demos in the shop.', primaryTo: '/shop', primaryLabel: 'Visit the shop' },
  }),
  A({
    slug: 'd-kurd-scale-guide',
    category: 'education',
    title: 'D Kurd Scale Guide for Handpan Players',
    description:
      'D Kurd minor layouts are popular for versatile improvisation. Learn typical intervals, moods, and pairing ideas for this voice.',
    h1: 'D Kurd scale guide',
    readingMinutes: 9,
    keywords: ['D Kurd handpan', 'Kurd scale'],
    relatedSlugs: ['handpan-scales-compared', 'celtic-minor-scale-guide', 'understanding-handpan-scales'],
    faqs: [
      faq('Is D Kurd good for beginners?', 'Often yes due to forgiving minor color and abundant learning resources online.'),
      faq('Can it sound happy?', 'Minor does not mean sad only. Rhythmic feel and dynamics shift mood substantially.'),
      faq('Stillforge offer D Kurd?', 'Ask during commission or shop availability for Kurd-family voicing.'),
    ],
    sections: [
      sec('Interval character', paras(
        'Kurd minor stacks familiar Western minor flavors with accessible patterns.',
        'Players loop arpeggios quickly without harsh clashes.',
        'Central low note anchors meditative pacing.'
      )),
      sec('Where D Kurd shines', paras(
        'Campfire jams, yoga beds, singer-songwriter underscoring.',
        'Recording ambient beds with single mic capture.',
        'Teaching friends because intuitive layouts translate well.'
      )),
      sec('Compare to Celtic minor', paras(
        'Celtic minor often feels more folk-leaning with different top note color.',
        'Try both demos before assuming Kurd is default forever.',
        'Some owners eventually commission second scale for variety.'
      )),
      sec('Technique tips', paras(
        'Explore soft ghost notes between primary strikes.',
        'Use repeating three-note cells to build songs without theory.',
        'Record loops to hear harmonic bloom over time.'
      )),
      sec('Buying D Kurd', paras(
        'Verify maker-specific layout photos for hand span.',
        'Listen for note balance, not only ding sustain.',
        'Read scale comparison table for context.'
      )),
    ],
    cta: { headline: 'Hear Kurd in forge voice', body: 'Commission or shop when a demo clicks emotionally.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'celtic-minor-scale-guide',
    category: 'education',
    title: 'Celtic Minor Handpan Scale Guide',
    description:
      'Celtic minor scales evoke folk and open-sky imagery. Explore mood, typical uses, and how they differ from Kurd layouts.',
    h1: 'Celtic minor scale guide',
    readingMinutes: 9,
    keywords: ['Celtic minor handpan', 'folk handpan scale'],
    relatedSlugs: ['d-kurd-scale-guide', 'handpan-scales-compared', 'playing-handpan-outdoors'],
    faqs: [
      faq('Is Celtic minor Irish only?', 'Name evokes folk color; players worldwide use it for cinematic and outdoor moods.'),
      faq('Better outdoors?', 'Many owners love Celtic minor for porch and trail sessions due to lyrical top notes.'),
      faq('Pair with other instruments?', 'Fiddle and guitar friends often mesh when keys are discussed beforehand.'),
    ],
    sections: [
      sec('Emotional palette', paras(
        'Lyrical, nostalgic, sometimes hopeful minor-major blends depending on voicing.',
        'Long sustain supports slow melodies reminiscent of folk ballads.',
        'Stillforge tuning chases clarity so lyrics in imagination stay crisp.'
      )),
      sec('Playing ideas', paras(
        'Alternate low and high notes like question and answer phrases.',
        'Walk rhythms slowly; rush fights the scale personality.',
        'Film your outdoor sessions to feel spatial reverb.'
      )),
      sec('Versus D Kurd', paras(
        'Personal ear preference decides. Some hear Celtic as more storytelling, Kurd as more groove-friendly.',
        'Own demos side by side if choosing between commissions.',
        'Note count and layout still matter more than name alone.'
      )),
      sec('Ensemble tips', paras(
        'Communicate root pitch with other musicians.',
        'Leave space for vocals; Celtic minor supports singers well.',
        'Avoid competing with bright trumpets without arrangement plan.'
      )),
      sec('Purchase path', paras(
        'Request Celtic minor demos explicitly from makers.',
        'Confirm spelling and interval map in writing before deposit.',
        'Shop ready inventory when demos match exactly.'
      )),
    ],
    cta: { headline: 'Find your folk voice', body: 'Start a commission with Celtic minor as the brief anchor.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'hijaz-scale-guide',
    category: 'education',
    title: 'Hijaz Handpan Scale Guide',
    description:
      'Hijaz and related minor exotic scales add spice and cinematic tension. Learn when they fit performance and when beginners should wait.',
    h1: 'Hijaz scale guide',
    readingMinutes: 9,
    keywords: ['Hijaz handpan', 'exotic handpan scale'],
    relatedSlugs: ['handpan-scales-compared', 'understanding-handpan-scales', 'd-kurd-scale-guide'],
    faqs: [
      faq('Is Hijaz harder than Kurd?', 'Intervals can feel less familiar to Western ears. Beginners may prefer Kurd first unless captivated by demos.'),
      faq('Good for dance performances?', 'Yes when choreographers want Middle Eastern color without full ensemble.'),
      faq('Stillforge tune Hijaz?', 'Discuss exotic scales during commission with listening references.'),
    ],
    sections: [
      sec('Interval spice', paras(
        'Hijaz highlights augmented second color between selected degrees.',
        'Creates instant world-music association in listeners.',
        'Requires tuning precision to avoid harsh beating on characteristic intervals.'
      )),
      sec('Best use cases', paras(
        'Stage solos, fusion ensembles, film cues needing tension.',
        'Less default for generic meditation unless player controls dynamics softly.',
        'Pairs with frame drums and bass drones carefully.'
      )),
      sec('Learning curve', paras(
        'Ear training helps find melodic paths that respect interval color.',
        'Study recordings from players who specialize in this scale.',
        'Avoid forcing major-pop cliches that fight Hijaz identity.'
      )),
      sec('Commission notes', paras(
        'Send reference tracks to maker for voicing targets.',
        'Allow extra tuning time for exotic layouts on some shells.',
        'Verify layout ergonomics for fast stage play.'
      )),
      sec('Beginner guidance', paras(
        'If Hijaz demo gives goosebumps, pursue it passionately.',
        'If unsure, start Kurd or Celtic then add Hijaz as second drum later.',
        'Scale comparison article helps contextualize.'
      )),
    ],
    cta: { headline: 'Commission exotic color', body: 'Share reference tracks for Hijaz-style voicing.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'handpan-care-and-rust-prevention',
    category: 'education',
    title: 'Handpan Care and Rust Prevention',
    description:
      'Steel handpans need dry hands, proper oil, and smart storage. Prevent rust and tuning damage with simple daily habits.',
    h1: 'Handpan care and rust prevention',
    readingMinutes: 10,
    schemaType: 'HowTo',
    keywords: ['handpan care', 'handpan rust', 'handpan oil'],
    relatedSlugs: ['nitrided-vs-stainless-handpan', 'transporting-and-storing-a-handpan', 'handpan-shipping-and-care-cost'],
    faqs: [
      faq('How often should I oil?', 'Follow maker guidance. Many nitrided drums benefit from regular light oil; stainless may need less but still wipe after play.'),
      faq('Can I use any oil?', 'Use products makers recommend. Wrong solvents harm finish or leave sticky residue.'),
      faq('What if rust spots appear?', 'Stop playing, contact maker or tuner, avoid abrasive DIY scrubbing that thins steel.'),
    ],
    sections: [
      sec('After every play', paras(
        'Wipe fingerprints with clean microfiber while metal is warm.',
        'Remove rings and watches that scratch fields.',
        'Dry hands before touching if you applied lotion earlier.'
      )),
      sec('Storage environment', paras(
        'Avoid damp basements and trunk storage.',
        'Use breathable bags with desiccant in humid seasons.',
        'Do not lean heavy objects against the drum in closets.'
      )),
      sec('Outdoor sessions', paras(
        'Shade from prolonged sun, wipe moisture after dew or mist.',
        'Never leave in rain. Pack immediately if weather turns.',
        'Stillforge outdoor guides complement care basics.'
      )),
      sec('Travel and shipping', paras(
        'Hard cases reduce impacts that crack glue seams and detune notes.',
        'Acclimate after shipping before judging tuning.',
        'Insurance photos document pre-ship condition.'
      )),
      sec('Long-term mindset', paras(
        'Care is part of playing, like tuning strings on guitar.',
        'Rust ignored becomes costly retune or replacement.',
        'Teach housemates basic rules if drum lives shared space.'
      )),
    ],
    cta: { headline: 'Keep your voice clean', body: 'Ask us for care kits matched to your finish.', primaryTo: '/shop', primaryLabel: 'Visit the shop' },
  }),
  A({
    slug: 'how-to-play-handpan-basics',
    category: 'education',
    title: 'How to Play Handpan Basics: First Patterns',
    description:
      'Start with posture, soft strikes, and simple alternating patterns. Build confidence before speed or complex rhythms.',
    h1: 'How to play handpan basics',
    readingMinutes: 10,
    schemaType: 'HowTo',
    keywords: ['how to play handpan', 'handpan beginner'],
    relatedSlugs: ['can-adults-learn-handpan', 'building-a-daily-handpan-practice', 'instruments-with-no-wrong-notes'],
    faqs: [
      faq('Fingers or palms?', 'Most use fingertips and upper finger pads for control. Avoid harsh palm slaps until technique is stable.'),
      faq('Do I need a stand?', 'Lap playing works; stands help posture for long sessions or performance height.'),
      faq('How loud is too loud?', 'If hands hurt or neighbors complain, reduce force. Tone quality drops when attacking too hard.'),
    ],
    sections: [
      sec('Posture and hand position', paras(
        'Sit tall, drum centered, elbows free.',
        'Relax shoulders to prevent fatigue.',
        'Strike from wrist with finger follow-through, not stiff hammering.'
      )),
      sec('First sound', paras(
        'Tap center of one note gently. Listen to full decay.',
        'Repeat on neighboring notes to feel layout spacing.',
        'Match force across hands for even tone.'
      )),
      sec('Simple alternating pattern', paras(
        'Choose three notes forming a small triangle on the layout.',
        'Play left-right-left-right slowly with metronome optional.',
        'Gradually lift tempo only when tone stays clean.'
      )),
      sec('Dynamics and color', paras(
        'Strike near note edge for brighter partials, center for fundamental focus.',
        'Ghost touches between accents add groove.',
        'Record yourself weekly to hear progress honestly.'
      )),
      sec('Next steps', paras(
        'Explore play section for guided patterns.',
        'Consider lessons if pain persists despite posture fixes.',
        'Join outdoor practice tips when ready for porch sessions.'
      )),
    ],
    cta: { headline: 'Keep learning by doing', body: 'Use Stillforge play guides for structured next patterns.', primaryTo: '/play', primaryLabel: 'Explore play guides' },
  }),
  A({
    slug: 'handpan-for-sound-baths',
    category: 'education',
    title: 'Using Handpan for Sound Baths and Group Sessions',
    description:
      'Handpans anchor melodic beds in sound baths when played softly with space. Learn facilitation pacing, volume, and ethics.',
    h1: 'Handpan for sound baths',
    readingMinutes: 10,
    keywords: ['handpan sound bath', 'sound healing handpan'],
    relatedSlugs: ['sound-healing-instruments-compared', 'sound-healing-gift-guide', 'yoga-teacher-gift-ideas'],
    faqs: [
      faq('How long should I play?', 'Alternate playing and silence. Baths need rests as much as sound.'),
      faq('Microphone needed?', 'Small rooms often need none. Larger venues may need subtle amplification with quality mics.'),
      faq('Can one handpan carry a whole bath?', 'Yes for intimate groups. Larger rooms may need layering bowls or drones.'),
    ],
    sections: [
      sec('Role of handpan in baths', paras(
        'Provides melodic focus where bowls provide wash.',
        'Long sustain fills air without constant striking.',
        'Stillforge tuning aims for smooth overtone stacks suited to slow play.'
      )),
      sec('Volume and trauma awareness', paras(
        'Start quietly. Increase only if room absorbs sound.',
        'Announce what instruments will appear to avoid surprises.',
        'Never claim medical outcomes; describe relaxation support.'
      )),
      sec('Pacing structures', paras(
        'Open with sparse strikes, build midsection subtly, decrescendo into silence.',
        'Leave thirty to sixty seconds of true quiet between movements.',
        'Watch participants for discomfort; adjust dynamics.'
      )),
      sec('Logistics', paras(
        'Arrive early to test room resonance and chair layout.',
        'Bring cloth for sweat and oil management after play.',
        'Transport using rigid case to protect tuning before gigs.'
      )),
      sec('Growing facilitator skills', paras(
        'Record practice sessions to time sustain gaps.',
        'Study other instruments to blend textures.',
        'Commission scale chosen for bath mood, often minor and lyrical.'
      )),
    ],
    cta: { headline: 'Voice your bath sessions', body: 'Commission a long-sustain scale for facilitation work.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'steel-properties-for-melodic-drums',
    category: 'education',
    title: 'Steel Properties for Melodic Drums',
    description:
      'Alloy choice, thickness, and heat treatment change how steel sings. Learn what matters for handpans without a metallurgy degree.',
    h1: 'Steel properties for melodic drums',
    readingMinutes: 11,
    keywords: ['handpan steel', 'nitrided steel', 'stainless handpan steel'],
    relatedSlugs: ['nitrided-vs-stainless-handpan', 'handpan-tuning-explained', 'materials-we-trust'],
    faqs: [
      faq('Does thicker steel always sustain longer?', 'Not alone. Geometry and tuning dominate. Thickness interacts with note size.'),
      faq('Can any steel become a handpan?', 'In theory many can; makers standardize on alloys that tune predictably and resist corrosion acceptably.'),
      faq('Propane tank steel special?', 'Tank steel offers known thickness and forge story; tuning QC still defines outcome.'),
    ],
    sections: [
      sec('What steel must do', paras(
        'Hold stable tension at note fields after hammer tuning.',
        'Resist corrosion from skin chemistry and environment.',
        'Respond to hammer work without cracking unpredictably.'
      )),
      sec('Treatments and finishes', paras(
        'Nitriding, oil films, and stainless alloys each shift maintenance and timbre subtly.',
        'Compare nitrided versus stainless article for decision table.',
        'Stillforge selects treatments per commission environment brief.'
      )),
      sec('Thickness and stiffness', paras(
        'Shell stiffness affects mode spacing and cross-talk.',
        'Tank forging introduces curvature and variable thickness makers manage by ear.',
        'Avoid DIY thinning that weakens note borders.'
      )),
      sec('Testing and QC', paras(
        'Reputable makers test sustain decay and partial stability over weeks.',
        'Document steel batch when possible for warranty support.',
        'Buyers should ask about steel story transparently.'
      )),
      sec('Player takeaway', paras(
        'Steel matters but tuning skill matters more for musical outcome.',
        'Care habits protect whichever alloy you choose.',
        'Listen demos before debating metallurgy online.'
      )),
    ],
    cta: { headline: 'Steel chosen for song', body: 'Discuss steel options during commission consult.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'overtones-and-harmonics-on-steel',
    category: 'education',
    title: 'Overtones and Harmonics on Steel Handpans',
    description:
      'Handpan magic lives in overtone balance. Learn how partials shape timbre and what makers adjust during tuning.',
    h1: 'Overtones and harmonics on steel',
    readingMinutes: 10,
    keywords: ['handpan overtones', 'handpan harmonics'],
    relatedSlugs: ['handpan-tuning-explained', 'the-sound-we-chase', 'recording-handpan-at-home'],
    faqs: [
      faq('Why do handpans shimmer?', 'Multiple partials ring together creating beating patterns our ears read as alive.'),
      faq('Can overtones be too loud?', 'Yes. Harsh partials cause fatigue. Makers tame them while keeping character.'),
      faq('Do recording mics change overtone perception?', 'Mic placement emphasizes different partials. Move mic and player angle when recording.'),
    ],
    sections: [
      sec('Fundamental versus partials', paras(
        'Fundamental is perceived pitch. Partials add color and sparkle.',
        'Handpan fields tuned to align partials pleasantly unlike random pot hits.',
        'Stillforge streamside tests listen for outdoor partial clarity.'
      )),
      sec('Beating and coupling', paras(
        'When two frequencies sit close, beating wobbles amplitude creating tremolo feel.',
        'Controlled beating can be beautiful; uncontrolled reads as out of tune.',
        'Neighboring notes exchange energy affecting perceived shimmer.'
      )),
      sec('Player influence', paras(
        'Strike location shifts partial emphasis without changing fundamental much.',
        'Soft strikes reveal fundamental; harder strikes excite upper partials.',
        'Practice dynamics to sculpt tone live.'
      )),
      sec('Recording implications', paras(
        'Close mics capture attack; room mics capture harmonic bloom.',
        'Blend two mic positions for home studio realism.',
        'See recording guide for starter setups.'
      )),
      sec('Listening training', paras(
        'Hum along with sustained notes to internalize pitch relationships.',
        'Compare maker demos on same headphones for overtone balance preferences.',
        'Trust long-session comfort over flashy short demos.'
      )),
    ],
    cta: { headline: 'Chase balanced shimmer', body: 'Commission voicing tuned for harmonic clarity.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'transporting-and-storing-a-handpan',
    category: 'education',
    title: 'Transporting and Storing a Handpan Safely',
    description:
      'Protect tuning investment with cases, car loading habits, and climate-aware storage at home and on tour.',
    h1: 'Transporting and storing a handpan',
    readingMinutes: 9,
    schemaType: 'HowTo',
    keywords: ['handpan case', 'travel handpan', 'store handpan'],
    relatedSlugs: ['handpan-shipping-and-care-cost', 'handpan-care-and-rust-prevention', 'playing-handpan-outdoors'],
    faqs: [
      faq('Can handpans go in airplane cabins?', 'Policies vary by airline and case size. Always check current rules and consider seat purchase options.'),
      faq('Vertical or flat storage?', 'Flat in case with padding is safest long term. Avoid heavy items stacked on top.'),
      faq('Garage storage okay?', 'Usually no due to humidity and temperature swings unless climate controlled.'),
    ],
    sections: [
      sec('Cases and padding', paras(
        'Rigid shells beat thin gig bags for air travel and tour vans.',
        'Ensure note fields do not contact hard points.',
        'Backpack straps help hikers reach camp play spots.'
      )),
      sec('Car travel', paras(
        'Strap case so it cannot roll. Never leave in hot sun unattended.',
        'Warm or cool car gradually before opening case in extreme weather.',
        'Keep case closed in dusty gravel parking lots.'
      )),
      sec('Home storage', paras(
        'Indoor wall hooks exist but must protect rim and allow easy removal.',
        'Avoid displaying in direct window sun daily.',
        'Teach kids and pets boundaries if drum is accessible.'
      )),
      sec('Shipping', paras(
        'Double box, insure, video unboxing if buying remote.',
        'Read shipping cost guide for budget planning.',
        'Contact maker if damage occurs immediately.'
      )),
      sec('Tour routines', paras(
        'Quick wipe after gigs, oil on schedule despite fatigue.',
        'Plan tuning contact at tour midpoint for heavy performers.',
        'Stillforge owners can ask for travel-specific care handouts.'
      )),
    ],
    cta: { headline: 'Move your drum with confidence', body: 'Ask about case pairings when you commission.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'recording-handpan-at-home',
    category: 'education',
    title: 'Recording Handpan at Home with Simple Gear',
    description:
      'Capture handpan warmth using one good mic, quiet room treatment, and patient playing. Avoid overprocessing that kills overtones.',
    h1: 'Recording handpan at home',
    readingMinutes: 10,
    schemaType: 'HowTo',
    keywords: ['record handpan', 'handpan microphone'],
    relatedSlugs: ['overtones-and-harmonics-on-steel', 'acoustic-vs-electronic-handpan', 'building-a-daily-handpan-practice'],
    faqs: [
      faq('Phone enough to start?', 'Yes for sketches. Add condenser mic and interface when sharing publicly.'),
      faq('Best mic placement?', 'Start eighteen to twenty-four inches above ding angled toward player side. Move after test recordings.'),
      faq('Reverb needed?', 'Light room reverb flatters; heavy plugin reverb muds partials. Capture good source first.'),
    ],
    sections: [
      sec('Room basics', paras(
        'Soft furnishings reduce flutter echo.',
        'Turn off HVAC noise during takes.',
        'Record same time of day for consistent ambient noise floor.'
      )),
      sec('Minimal gear chain', paras(
        'One large diaphragm condenser, audio interface, DAW you already know.',
        'Levels peak around negative twelve dBFS leaving headroom for transient strikes.',
        'Use pop filter only if plosive air noise appears, uncommon on handpan.'
      )),
      sec('Performance technique for tape', paras(
        'Play softer than live gig to control transients.',
        'Repeat passes and comp best moments if needed ethically in your style.',
        'Leave silence at head and tail for editing handles.'
      )),
      sec('Mix lightly', paras(
        'High-pass very gently if rumble exists.',
        'Avoid aggressive compression that kills sustain beauty.',
        'Pan mono or subtle stereo if using two mics.'
      )),
      sec('Share and iterate', paras(
        'Upload private links for friend feedback before public release.',
        'Compare recordings monthly to hear technique growth.',
        'Stillforge play guides inspire new patterns to record.'
      )),
    ],
    cta: { headline: 'Record your forge voice', body: 'Shop drums that inspire you to hit record.', primaryTo: '/shop', primaryLabel: 'Visit the shop' },
  }),
  A({
    slug: 'playing-handpan-outdoors',
    category: 'education',
    title: 'Playing Handpan Outdoors: Weather, Sound, and Etiquette',
    description:
      'Outdoor handpan play connects players to space and breath. Manage weather risks, dynamics, and neighbor respect while enjoying open air tone.',
    h1: 'Playing handpan outdoors',
    readingMinutes: 9,
    schemaType: 'HowTo',
    keywords: ['outdoor handpan', 'handpan nature'],
    relatedSlugs: ['outdoor-music-practice-tips', 'why-streamside-music', 'handpan-care-and-rust-prevention'],
    faqs: [
      faq('Does wind affect sound?', 'Wind scatters sound and cools hands. Face shelter when recording.'),
      faq('Can I play near water?', 'Yes aesthetically. Mist and salt require immediate wipe-down and bagging afterward.'),
      faq('Park permits needed?', 'Check local rules. Acoustic play is often allowed at modest volume daytime.'),
    ],
    sections: [
      sec('Why Stillforge tests streamside', paras(
        'Water and open sky reveal projection and overtone clarity honestly.',
        'Outdoor voicing goals differ from boxy indoor tuning only.',
        'Players feel this when first playing on porch versus bedroom.'
      )),
      sec('Weather playbook', paras(
        'Sun: shade breaks, avoid leaving drum unattended.',
        'Cold: warm hands, short sessions, acclimate case indoors before opening.',
        'Rain: stop immediately, dry thoroughly, never play wet steel.'
      )),
      sec('Sound in open air', paras(
        'Sustain feels shorter psychologically without walls; enjoy clarity instead.',
        'Birds and water become part of performance; embrace imperfection.',
        'Dynamics may need slight increase without hammering.'
      )),
      sec('Etiquette', paras(
        'Respect quiet hours and wildlife nesting areas.',
        'Invite passersby politely; stop if anyone shows distress.',
        'Pack out trash from campsites after jam sessions.'
      )),
      sec('Gear to bring', paras(
        'Stand, case, cloth, sun hat, water for you not the drum.',
        'Optional windscreen on recorder mic for film sessions.',
        'Headlamp if playing civil twilight legally where you are.'
      )),
    ],
    cta: { headline: 'Take Stillforge outside', body: 'Read outdoor practice tips and choose a travel-ready scale.', primaryTo: '/play', primaryLabel: 'Explore play guides' },
  }),
  A({
    slug: 'building-a-daily-handpan-practice',
    category: 'education',
    title: 'Building a Daily Handpan Practice That Sticks',
    description:
      'Daily practice on handpan can mean three mindful minutes. Build habits with triggers, forgiveness, and small wins.',
    h1: 'Building a daily handpan practice',
    readingMinutes: 8,
    schemaType: 'HowTo',
    keywords: ['handpan practice routine', 'daily music habit'],
    relatedSlugs: ['how-to-play-handpan-basics', 'handpan-lessons-vs-self-taught', 'instruments-for-people-who-hate-practice'],
    faqs: [
      faq('How many minutes daily?', 'Three to fifteen honest minutes beats sporadic hour bursts for most hobbyists.'),
      faq('Same scale daily?', 'Yes until patterns feel natural, then explore variations or second scale if owned.'),
      faq('Track streaks?', 'Optional. Some find streaks motivating, others stressful. Use mood journal instead if preferred.'),
    ],
    sections: [
      sec('Habit triggers', paras(
        'Play after coffee, after dog walk, or before bed brush teeth cue.',
        'Visible stand in living space lowers friction.',
        'Phone in another room during micro-session.'
      )),
      sec('Structure without rigidity', paras(
        'Minute one: single note sustains. Minute two: alternating pattern. Minute three: free improv.',
        'Stop while still enjoying sound to build craving return.',
        'Stillforge play guides offer weekly micro-challenges.'
      )),
      sec('Gentle accountability', paras(
        'One friend text check-in weekly, not daily shame.',
        'Record day seven and day thirty comparisons privately.',
        'Skip guilt on travel days; resume without doubling duration to catch up.'
      )),
      sec('Health and hands', paras(
        'Stretch forearms, stop if sharp pain appears.',
        'Hydrate in dry climates especially outdoors.',
        'Lessons occasionally correct posture before bad habits cement.'
      )),
      sec('Long arc', paras(
        'Months of micro-practice surprise players with composition ability.',
        'Perform only when it sounds fun, not obligatory.',
        'Commission second scale when first feels like home.'
      )),
    ],
    cta: { headline: 'Make today day one', body: 'Open play guides and strike one note intentionally.', primaryTo: '/play', primaryLabel: 'Explore play guides' },
  }),
]
