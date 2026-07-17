import { A, sec, paras, faq } from '../article-helpers.mjs'

export const story = [
  A({
    slug: 'stillforge-origin-story',
    category: 'Story',
    title: 'Stillforge Origin Story: Steel, Water, and Slow Craft',
    description:
      'Stillforge began where metalwork met melody: forging propane-tank steel into handpans tested beside moving water. This is how the shop took shape without hype.',
    h1: 'Stillforge origin story',
    readingMinutes: 9,
    keywords: ['Stillforge', 'handpan maker story'],
    relatedSlugs: ['craft-philosophy', 'from-propane-tank-to-instrument', 'why-streamside-music'],
    faqs: [
      faq('How old is Stillforge?', 'Stillforge grew from years of metal experimentation into a focused melodic drum forge serving players who value honest craft.'),
      faq('Where is Stillforge located?', 'We work in a rural workshop setting chosen for space, safety, and access to outdoor listening tests. We do not publish door-to-door tours without appointment.'),
      faq('Can I visit?', 'See visiting-the-workshop for how to request respectful visits when schedules allow.'),
    ],
    sections: [
      sec('From utility steel to song', paras(
        'Propane tanks once held fuel for heat and cooking. Stillforge saw musical potential in thick curved steel waiting for patient hammer work.',
        'Early experiments focused on safety, cleaning, and repeatable shell geometry before chasing scales.',
        'Each success proved tanks could sing with handpan-level tuning discipline.'
      )),
      sec('Why handpans', paras(
        'Handpans invite immediate human touch without bulky setups.',
        'Community culture around sharing techniques aligned with our teaching-first web presence.',
        'We chose to specialize rather than build unrelated metal products.'
      )),
      sec('Streamside listening', paras(
        'Testing beside water reveals harsh overtones quickly in open air.',
        'That feedback loop shaped how we balance notes for outdoor-friendly voicing.',
        'Players who camp or porch-sit benefit from this testing philosophy.'
      )),
      sec('What we refuse to fake', paras(
        'No invented awards, no stock photo makers, no anonymous import relabeling.',
        'Documentation focuses on process categories buyers can verify.',
        'Commissions stay conversations, not checkout-only transactions.'
      )),
      sec('Where we are headed', paras(
        'Deepen education library, improve shop clarity, and refine forge efficiency without rushing tuning.',
        'Invite players into play guides and honest compare content.',
        'Grow slowly so each drum leaving the forge stays accountable to our name.'
      )),
    ],
    cta: { headline: 'Become part of the story', body: 'Commission a drum forged with the same patience as our first tanks.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'craft-philosophy',
    category: 'Story',
    title: 'Stillforge Craft Philosophy',
    description:
      'Stillforge believes melodic drums deserve metal honesty, stable tuning, and time at the anvil. Read the principles that guide every build.',
    h1: 'Stillforge craft philosophy',
    readingMinutes: 8,
    keywords: ['Stillforge philosophy', 'slow craft handpan'],
    relatedSlugs: ['slow-craft-in-a-fast-world', 'the-sound-we-chase', 'materials-we-trust'],
    faqs: [
      faq('Do you chase trends?', 'We listen to player needs but avoid scale fads that sacrifice tuning stability.'),
      faq('Is speed a virtue?', 'Efficiency matters for communication and shop logistics, not for skipping tuning passes.'),
      faq('How do customers fit in?', 'Commissions co-create scale and finish choices within acoustic and ergonomic limits.'),
    ],
    sections: [
      sec('Sound before screenshot', paras(
        'If a drum looks perfect but wavers in sustain, it fails our bench.',
        'Photos serve documentation, not deception.',
        'Players hear the priority in demos before buying.'
      )),
      sec('Metal tells the truth', paras(
        'Steel reveals rushed hammer work through wolf tones and drift.',
        'We respect tank and sheet origins by explaining them clearly.',
        'Greenwashing upcycle stories without safe process is rejected.'
      )),
      sec('Teach as we sell', paras(
        'Guides on care, compare, and education reduce buyer regret industry-wide.',
        'A informed customer is a long-term player, not a one-time invoice.',
        'Play resources extend relationship after shipping.'
      )),
      sec('Sustainable pace', paras(
        'Queue length communicates honestly rather than overpromising overnight builds.',
        'Rest for makers prevents fatigue errors on final tuning.',
        'Slow craft article expands this mindset for customers too.'
      )),
      sec('Community respect', paras(
        'Credit PANArt lineage and global handpan makers ethically.',
        'Avoid attacking competitors; compare on facts instead.',
        'Welcome feedback that improves QC and docs.'
      )),
    ],
    cta: { headline: 'Align your instrument with values', body: 'Start a commission grounded in slow craft.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'behind-the-forge',
    category: 'Story',
    title: 'Behind the Forge: A Day Shaping Melodic Steel',
    description:
      'Walk through a typical Stillforge day from shell prep to tuning passes and final wipe-down. No staged glamour, just work.',
    h1: 'Behind the forge',
    readingMinutes: 9,
    keywords: ['handpan forge', 'Stillforge workshop'],
    relatedSlugs: ['how-handpans-are-made', 'metalwork-to-melodic-drums', 'visiting-the-workshop'],
    faqs: [
      faq('Is every day identical?', 'No. Some days are heavy forming, others pure tuning listening.'),
      faq('Do you use power tools?', 'Yes where appropriate, always guided by ear and hand finishing.'),
      faq('Can I watch livestreams?', 'We prioritize safe focused work over constant filming, but share photos when possible.'),
    ],
    sections: [
      sec('Morning prep', paras(
        'Ventilation checks, tool layout, and review of active commission notes.',
        'Steel pieces staged with cleaning status verified.',
        'Short listening test on yesterday notes to catch overnight drift.'
      )),
      sec('Forming and note work', paras(
        'Hammer time alternates with annealing or stress relief as plans require.',
        'Layouts marked with ergonomics for intended player height and hand size when known.',
        'Breaks protect hearing and shoulders during loud stages.'
      )),
      sec('Tuning sessions', paras(
        'Afternoons often shift to quieter incremental tuning passes.',
        'Reference recordings compare before and after each adjustment.',
        'Outdoor spot tests confirm projection when builds target camp players.'
      )),
      sec('Finishing', paras(
        'Oil or treatment applied per steel plan.',
        'Serial documentation and bag pairing for shipping.',
        'Final play recorded for customer proof when requested.'
      )),
      sec('Closing the day', paras(
        'Shop swept, steel scraps sorted, humidity logged if needed.',
        'Emails answered with honest timeline updates.',
        'Tomorrow queue adjusted if a drum needs another listen.'
      )),
    ],
    cta: { headline: 'Own a day of forge labor', body: 'Commission drums that receive this daily attention.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'from-propane-tank-to-instrument',
    category: 'Story',
    title: 'From Propane Tank to Instrument',
    description:
      'Follow the transformation arc Stillforge repeats: retired tank steel cleaned, forged, tuned, and voiced as a melodic handpan.',
    h1: 'From propane tank to instrument',
    readingMinutes: 10,
    keywords: ['propane tank handpan', 'upcycled drum'],
    relatedSlugs: ['how-propane-tank-drums-are-forged', 'propane-tank-drum-explained', 'stillforge-origin-story'],
    faqs: [
      faq('Can I send my own tank?', 'Generally no for safety and steel consistency. We source tanks through controlled processes.'),
      faq('Is the tank visible after?', 'Character sometimes shows subtly in finish choices, never as unsafe leftover hardware.'),
      faq('Does tank origin limit scales?', 'Layout limits come from diameter and thickness, not tank label alone.'),
    ],
    sections: [
      sec('Retirement of utility', paras(
        'Tanks exit fuel service through proper channels before music work begins.',
        'Cutting and purging follow safety protocols non-negotiable for makers and neighbors.',
        'Only then does musical imagination enter.'
      )),
      sec('Birth of a shell', paras(
        'Curvature and thickness management define future note behavior.',
        'Welding and grinding leave surfaces ready for field hammering.',
        'Mistakes here cannot be fully tuned away later.'
      )),
      sec('Musical birth', paras(
        'Note fields emerge slowly with border definition and isolation tuning.',
        'Scale choice interacts with shell modes discovered during hammer work.',
        'Commission briefs guide but do not override acoustic reality.'
      )),
      sec('Player handoff', paras(
        'Care instructions translate industrial steel into home ritual.',
        'Story card explains tank-to-instrument arc for gifters and owners.',
        'First week check-in encouraged for tuning questions after shipping.'
      )),
      sec('Environmental honesty', paras(
        'Upcycling reduces waste only when longevity is high.',
        'We build for decades of play, not disposable novelty.',
        'Rust prevention education completes the sustainability loop.'
      )),
    ],
    cta: { headline: 'Transform steel with us', body: 'Commission a tank-forged scale that completes the arc.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'why-streamside-music',
    category: 'Story',
    title: 'Why We Test Music Streamside',
    description:
      'Open water and sky expose handpan overtones honestly. Stillforge uses streamside listening as a QC tool and creative compass.',
    h1: 'Why streamside music',
    readingMinutes: 8,
    keywords: ['outdoor handpan tuning', 'Stillforge streamside'],
    relatedSlugs: ['playing-handpan-outdoors', 'the-sound-we-chase', 'stillforge-origin-story'],
    faqs: [
      faq('Do all makers test outside?', 'Not all. We find it essential for our outdoor-focused voicing goals.'),
      faq('Does humidity near water harm steel?', 'We manage session length, wipe down, and bag immediately after tests.'),
      faq('Can buyers hear streamside demos?', 'When environment allows, we share outdoor recordings alongside indoor samples.'),
    ],
    sections: [
      sec('Rooms lie kindly', paras(
        'Indoor walls boost bass and hide harsh partials.',
        'Streamside tests reveal notes that would fatigue in open air.',
        'Players who live on porches hear what we heard during QC.'
      )),
      sec('Nature as metronome', paras(
        'Water rhythm suggests phrasing without forcing tempo.',
        'Wind teaches dynamic control and microphone humility for recordists.',
        'Stillforge embraces imperfection of outdoor takes in marketing honestly.'
      )),
      sec('Creative recharge', paras(
        'Forge work is hot and loud. Streamside play resets ears and intent.',
        'Return to bench with refreshed tolerance for micro-adjustments.',
        'Burnout prevention keeps tuning quality high.'
      )),
      sec('Customer connection', paras(
        'Buyers who camp or hike see their use case reflected in our process story.',
        'Not marketing gimmick: repeatable test slot in build workflow when weather safe.',
        'Read playing outdoors guide to mirror our tests at home.'
      )),
      sec('Limits', paras(
        'We do not play in storms or salt spray without protection.',
        'Safety and instrument care trump cinematic footage.',
        'Indoor final checks still confirm consistency before ship.'
      )),
    ],
    cta: { headline: 'Play where you hear truth', body: 'Choose scales voiced for open air living.', primaryTo: '/shop', primaryLabel: 'Visit the shop' },
  }),
  A({
    slug: 'metalwork-to-melodic-drums',
    category: 'Story',
    title: 'From Metalwork to Melodic Drums',
    description:
      'Stillforge makers grew through general metal fabrication into specialized handpan tuning. That path informs durable builds and honest timelines.',
    h1: 'From metalwork to melodic drums',
    readingMinutes: 8,
    keywords: ['handpan metalwork', 'forge skills'],
    relatedSlugs: ['behind-the-forge', 'how-handpans-are-made', 'craft-philosophy'],
    faqs: [
      faq('Do you still do non-handpan metal jobs?', 'Focus stays on melodic drums to protect tuning expertise and queue clarity.'),
      faq('Does fabrication background help?', 'Yes for shell integrity, fixturing, and safe tool use around thin note fields.'),
      faq('Can metalworkers become tuners quickly?', 'Tuning ear training takes years parallel to metal skill. Both are required.'),
    ],
    sections: [
      sec('General skills first', paras(
        'Cutting, welding, grinding, and heat control precede musical specialization.',
        'Fabrication mistakes taught respect for steel limits early.',
        'Those lessons reduce catastrophic failures during note hammering.'
      )),
      sec('Specialization choice', paras(
        'Handpans combine art and engineering matching our interests.',
        'Community demand for ethical makers encouraged full focus.',
        'Stillforge brand unifies metal story under one roof.'
      )),
      sec('Cross-discipline benefits', paras(
        'Custom fixtures hold shells without denting active notes.',
        'Repairs on damaged rims leverage fabrication confidence.',
        'Commission clients get metal questions answered clearly.'
      )),
      sec('Training never stops', paras(
        'New steel batches, scale requests, and tool upgrades keep learning active.',
        'Peer makers worldwide share techniques openly.',
        'We contribute via education articles rather than gatekeeping.'
      )),
      sec('Invitation to players', paras(
        'You do not need metal background to play.',
        'Knowing ours helps you trust structural and tuning decisions.',
        'Meet-the-maker tone continues in other story pages without personal celebrity.'
      )),
    ],
    cta: { headline: 'Metal skill in service of song', body: 'Commission builds backed by fabrication depth.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'commissioning-a-custom-drum',
    category: 'Story',
    title: 'Commissioning a Custom Drum with Stillforge',
    description:
      'Custom commissions start with how you play, where you live, and what you hear in your head. Learn the Stillforge conversation flow.',
    h1: 'Commissioning a custom drum',
    readingMinutes: 10,
    keywords: ['custom handpan commission', 'Stillforge commission'],
    relatedSlugs: ['custom-handpan-vs-ready-made', 'how-to-choose-a-scale-for-beginners', 'meet-the-maker'],
    faqs: [
      faq('How do I start?', 'Use the commission page with scale preferences, use case, and timeline needs.'),
      faq('Deposits refundable?', 'Policies are stated in writing before payment. Read carefully and ask questions.'),
      faq('Can I change scale mid-build?', 'Minor finish tweaks sometimes yes; scale changes late often restart tuning clock or incur fees.'),
    ],
    sections: [
      sec('Brief we want from you', paras(
        'Primary use: meditation, performance, recording, gift, outdoor.',
        'Climate and travel frequency affecting steel and case choices.',
        'Reference tracks or videos linked in your words, not assumed genres.'
      )),
      sec('Consult and quote', paras(
        'We respond with scale feasibility, timeline range, and price components.',
        'Honest no is better than promising impossible note layouts.',
        'Questions welcome before deposit.'
      )),
      sec('Build milestones', paras(
        'Shell progress, tuning passes, finish, final QC recordings.',
        'Updates respect maker focus time; not always daily photos.',
        'Shipping coordinated with acclimation guidance.'
      )),
      sec('After delivery', paras(
        'Care guide recap and tuning check schedule suggestion.',
        'Play guides help first month habit formation.',
        'Feedback improves future commissions community-wide.'
      )),
      sec('Ready-made alternative', paras(
        'Shop inventory suits urgent timelines when demos match.',
        'Custom versus ready compare article helps decide path.',
        'Either way Stillforge stands behind documented QC.'
      )),
    ],
    cta: { headline: 'Start your commission brief', body: 'Tell us how you play and listen. We will answer with clarity.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'meet-the-maker',
    category: 'Story',
    title: 'Meet the Maker: Stillforge Without Celebrity Hype',
    description:
      'Stillforge is a workshop collective voice, not a fake persona. Learn how we communicate and why we avoid invented maker mythologies.',
    h1: 'Meet the maker',
    readingMinutes: 7,
    keywords: ['Stillforge maker', 'handpan builder'],
    relatedSlugs: ['craft-philosophy', 'commissioning-a-custom-drum', 'visiting-the-workshop'],
    faqs: [
      faq('Why no named founder bio?', 'We focus on process and instruments rather than manufactured personal legend.'),
      faq('Who answers emails?', 'Small team members who actually touch builds or scheduling rotate communication.'),
      faq('Can I speak on phone?', 'When queue allows, yes by appointment for serious commissions.'),
    ],
    sections: [
      sec('Workshop voice', paras(
        'Customers interact with people who know steel status on the floor.',
        'No outsourced call center pretending to be the hammer hand.',
        'Transparency beats fictional artisan avatars.'
      )),
      sec('Skills on the bench', paras(
        'Metal forming, tuning ear training, finish application, and shipping prep share responsibilities.',
        'Cross-training prevents single-point failure when one maker rests.',
        'Quality checks signed off before labels ship.'
      )),
      sec('What we share publicly', paras(
        'Process categories, philosophy essays, and honest compare education.',
        'Not personal social media drama or luxury lifestyle posturing.',
        'Story articles like this replace influencer tropes.'
      )),
      sec('How to build trust', paras(
        'Listen to demos, read buyer guide, ask technical questions.',
        'Judge response clarity and policy honesty.',
        'Long-term players refer friends when communication matched craft.'
      )),
      sec('Invitation', paras(
        'Commission form is handshake start, not automated upsell funnel.',
        'Visiting workshop page explains respectful tour requests.',
        'We are makers first, marketers second.'
      )),
    ],
    cta: { headline: 'Talk to the bench, not a bot', body: 'Start a commission conversation with real answers.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'materials-we-trust',
    category: 'Story',
    title: 'Materials We Trust for Forged Melodic Drums',
    description:
      'Stillforge selects steel, treatments, adhesives, and finishes for musical stability and honest maintenance. No mystery metal marketing.',
    h1: 'Materials we trust',
    readingMinutes: 9,
    keywords: ['handpan materials', 'Stillforge steel'],
    relatedSlugs: ['steel-properties-for-melodic-drums', 'nitrided-vs-stainless-handpan', 'handpan-care-and-rust-prevention'],
    faqs: [
      faq('Do you publish alloy numbers?', 'We explain categories and treatments clearly to buyers without exposing proprietary supplier agreements unnecessarily.'),
      faq('Glue type matters?', 'Yes for rim bond strength and serviceability. We use approaches proven in handpan community practice.'),
      faq('Finish purely cosmetic?', 'Finish interacts with rust resistance and sometimes dampening of high partials.'),
    ],
    sections: [
      sec('Steel sourcing discipline', paras(
        'Tanks and sheet stock vetted for thickness consistency and safe prior use.',
        'Rejected batches never silently enter production.',
        'Traceability notes stored per commission when applicable.'
      )),
      sec('Treatments chosen per brief', paras(
        'Nitrided paths for warm tone with active oil care.',
        'Stainless paths for humid or sweaty players needing corrosion margin.',
        'Compare article tables help customers choose with us.'
      )),
      sec('Consumables and cases', paras(
        'Recommended oils and cloths listed in care guide, not random hardware store guesses.',
        'Case partners selected for fit and impact protection, not logo deals.',
        'We avoid bundling junk accessories to inflate price.'
      )),
      sec('Testing incoming materials', paras(
        'Sample forms hammered and listened before batch commits.',
        'Supplier changes trigger revalidation even if specs look identical on paper.',
        'Players hear stability months later because of this gate.'
      )),
      sec('Honest limits', paras(
        'No material eliminates need for care or tuning checks ever.',
        'Marketing supersteel claims elsewhere should be questioned politely.',
        'We prefer underpromise and overdeliver on sustain clarity.'
      )),
    ],
    cta: { headline: 'Build on trusted steel', body: 'Discuss materials during commission for your climate.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'the-sound-we-chase',
    category: 'Story',
    title: 'The Sound We Chase at Stillforge',
    description:
      'Stillforge pursues clarity, balanced overtones, and outdoor-honest projection. Define the sonic target guiding every tuning pass.',
    h1: 'The sound we chase',
    readingMinutes: 8,
    keywords: ['handpan tone', 'Stillforge sound'],
    relatedSlugs: ['overtones-and-harmonics-on-steel', 'handpan-tuning-explained', 'why-streamside-music'],
    faqs: [
      faq('Bright or dark voice?', 'Balanced: enough brightness for cut, enough warmth for meditation length sessions.'),
      faq('Longest sustain always?', 'Long but controlled. Infinite wobble reads as untuned to our ears.'),
      faq('Custom sound requests?', 'Share references; we translate to feasible interval and hammer plans.'),
    ],
    sections: [
      sec('Clarity over gimmick', paras(
        'We reject harsh partial stacks that impress for ten seconds then fatigue.',
        'Notes must get along when arpeggiated quickly in improvisation.',
        'Streamside tests punish muddy builds immediately.'
      )),
      sec('Dynamic range', paras(
        'Whisper to moderate forte should remain musical without dead spots.',
        'Players control expression; drum should not fight soft touch.',
        'Recording clients benefit from stable tone at low velocity.'
      )),
      sec('Scale personality preserved', paras(
        'Kurd should feel grounded, Hijaz spicy, Celtic lyrical within our voice.',
        'We do not homogenize every scale to identical timbre.',
        'Commission briefs note emotional targets beyond note names.'
      )),
      sec('Reject list', paras(
        'Buzzing wolf tones uncorrected, unstable beating after acclimation, cosmetic gloss hiding poor tuning.',
        'Import shells re-labeled without retune accountability.',
        'Trend scales poorly voiced just to list on websites.'
      )),
      sec('Your ears decide', paras(
        'Demos and references align expectations before deposit.',
        'If our voice does not fit your aesthetic, another maker may serve better.',
        'Honest mismatch saves everyone time and money.'
      )),
    ],
    cta: { headline: 'Hear if we match your ear', body: 'Listen to shop demos and start a commission if aligned.', primaryTo: '/shop', primaryLabel: 'Visit the shop' },
  }),
  A({
    slug: 'slow-craft-in-a-fast-world',
    category: 'Story',
    title: 'Slow Craft in a Fast World',
    description:
      'Stillforge chooses queue honesty, repeat tuning, and durable steel over overnight hype cycles common in online instrument markets.',
    h1: 'Slow craft in a fast world',
    readingMinutes: 8,
    keywords: ['slow craft', 'handmade handpan'],
    relatedSlugs: ['craft-philosophy', 'handmade-gifts-worth-the-money', 'behind-the-forge'],
    faqs: [
      faq('Why not scale production?', 'Handpan quality drops when tuning becomes factory line speed without ears engaged.'),
      faq('Do customers get angry waiting?', 'Some do. We prefer losing a rush sale over shipping a rushed drum.'),
      faq('Can expedite fees help?', 'Sometimes small queue jumps for finish-only tasks, never skipping tuning passes.'),
    ],
    sections: [
      sec('Culture of hurry', paras(
        'Next-day shipping norms distort expectations for handmade acoustics.',
        'Social media rewards instant unboxing, not year-three tuning stability.',
        'Stillforge educates timelines in compare and commission docs.'
      )),
      sec('What slow includes', paras(
        'Multiple tuning listens over days, acclimation rests, outdoor checks.',
        'Email responses that reference your actual build status.',
        'Documentation you can show when gifting heirloom instruments.'
      )),
      sec('Benefits to players', paras(
        'Fewer surprise retunes in month one.',
        'Stronger emotional bond knowing hours shaped your scale.',
        'Slower buying decisions reduce impulse cheap-import regret.'
      )),
      sec('How you participate', paras(
        'Plan gifts and gigs with lead time.',
        'Use waiting period to study play guides and care articles.',
        'Avoid duplicate ordering from impatience without canceling first commission.'
      )),
      sec('Parallel fast tools', paras(
        'Play apps and metronomes are fast; steel should not be.',
        'Electronic practice tools complement but rarely replace acoustic commission.',
        'Balance both in modern life without confusing categories.'
      )),
    ],
    cta: { headline: 'Choose patience on purpose', body: 'Start commission early for milestones that matter.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'visiting-the-workshop',
    category: 'Story',
    title: 'Visiting the Stillforge Workshop',
    description:
      'Workshop visits are possible by appointment when safety and schedule allow. Learn etiquette and what to expect without tourism gimmicks.',
    h1: 'Visiting the workshop',
    readingMinutes: 7,
    keywords: ['Stillforge visit', 'handpan workshop tour'],
    relatedSlugs: ['meet-the-maker', 'behind-the-forge', 'commissioning-a-custom-drum'],
    faqs: [
      faq('Can anyone drop in?', 'No. Forge work requires focused safety. Request visits through official channels.'),
      faq('Are kids welcome?', 'Sometimes with strict supervision and hearing protection. Ask when scheduling.'),
      faq('Will I play finished drums?', 'Often yes on visit days when instruments are available and not in final QC hold.'),
    ],
    sections: [
      sec('Why visits are limited', paras(
        'Hot metal, sharp tools, and noise require controlled access.',
        'We protect active commissions from dust and disruption.',
        'Quality of visit beats quantity of foot traffic.'
      )),
      sec('How to request', paras(
        'Use contact paths linked from commission page with proposed dates and group size.',
        'Share whether you are an owner, prospective buyer, or student researcher.',
        'Allow lead time; same-day requests rarely succeed.'
      )),
      sec('What you may see', paras(
        'Shells in various stages, tuning bench, outdoor test spot if weather safe.',
        'Not a theme park ride: real work may pause briefly for greeting then resume.',
        'Photography rules explained on arrival for IP and safety.'
      )),
      sec('Safety requirements', paras(
        'Closed toe shoes, eye protection if near grinding, hearing protection in loud zones.',
        'Follow maker instructions without exception.',
        'Children stay within arm reach of guardians.'
      )),
      sec('After the visit', paras(
        'Commission consults may continue online if you need time to decide scale.',
        'No pressure sales at anvil; education first.',
        'Thank you for respecting rural neighborhood quiet on arrival and departure.'
      )),
    ],
    cta: { headline: 'Plan a respectful visit', body: 'Start with a commission inquiry mentioning visit interest.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
]
