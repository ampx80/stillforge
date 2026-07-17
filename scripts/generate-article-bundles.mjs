import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'src', 'content', 'articles')

const DATES = { publishedAt: '2026-07-01', updatedAt: '2026-07-17' }

function A(o) {
  return {
    ...DATES,
    readingMinutes: o.readingMinutes ?? 9,
    keywords: o.keywords ?? [],
    relatedSlugs: o.relatedSlugs ?? [],
    schemaType: o.schemaType ?? 'Article',
    faqs: o.faqs ?? [],
    sections: o.sections ?? [],
    cta: o.cta ?? {
      headline: 'Want a gift that keeps sounding better?',
      body: 'Stillforge builds propane-tank forged melodic drums tuned for calm play and outdoor life. Commission a scale that matches how they listen, or explore ready instruments in the shop.',
      primaryTo: '/commission',
      primaryLabel: 'Start a commission',
    },
    ...o,
  }
}

function paras(...text) {
  return text
}

function sec(h2, paragraphs, extra = {}) {
  return { h2, paragraphs, ...extra }
}

const gifts = [
  A({
    slug: 'unique-gifts-for-birthdays',
    category: 'Gifts',
    title: 'Unique Birthday Gifts That Feel Personal, Not Generic',
    description:
      'Birthday gifts land best when they match how someone actually unwinds. These ideas favor tactile, playable objects over another gadget in a drawer.',
    h1: 'Unique birthday gifts for people who crave calm and creativity',
    readingMinutes: 10,
    keywords: ['unique birthday gifts', 'meaningful gifts', 'handpan gift', 'experience gifts'],
    relatedSlugs: ['experience-gifts-vs-objects', 'meaningful-gifts-for-musicians', 'gifts-for-someone-who-has-everything'],
    faqs: [
      {
        q: 'What makes a birthday gift feel unique?',
        a: 'Uniqueness comes from fit: the gift should match a real habit, like morning coffee on the porch, camping weekends, or quiet play before bed. A playable drum tuned to a scale they love beats a novelty item they will shelf within a week.',
      },
      {
        q: 'Are melodic drums good birthday gifts for non-musicians?',
        a: 'Yes, when the instrument is tuned in a forgiving scale and built for intuitive play. Many people who never took lessons enjoy hand-style drums because there are no wrong notes in the layout and the learning curve is gentle.',
      },
      {
        q: 'Should I gift an instrument or a lesson package?',
        a: 'Pair a simple getting-started guide with the instrument when possible. Lessons help, but a well-tuned drum still delights on day one. Offer lessons as an optional add-on rather than a requirement.',
      },
    ],
    sections: [
      sec('Start with their rhythm, not the price tag', paras(
        'Birthdays are personal milestones. The best gifts acknowledge how someone already spends restorative time. Notice whether they hike, meditate, make art, or play music quietly after work.',
        'A unique gift does not need to be loud or complicated. It needs a clear moment of use: unwrapping, first touch, and a sound that surprises them in a good way.',
        'Stillforge drums are forged from propane tanks and tuned as melodic instruments. That origin story alone often sparks conversation at a birthday gathering.'
      )),
      sec('Playable gifts that age well', paras(
        'Objects that only display tend to fade. Instruments and tools that reward repeat touch grow more meaningful each year.',
        'Look for build quality, stable tuning, and a scale that feels emotional on first strike. Birthdays are a fine time to commission a custom scale if you know their taste in music.',
        'If you are unsure on scale, choose a widely loved minor voice like D Kurd or Celtic Minor so the first session feels welcoming rather than technical.'
      )),
      sec('Presentation ideas that respect the moment', paras(
        'Include a simple care card: dry hands, soft bag, shade when playing outside. Practical notes show you thought past the ribbon.',
        'Record a short voice note explaining why you chose the gift. Future them will replay that story when the drum becomes part of their routine.',
        'Avoid over-explaining technique at the party. Let the first five minutes be pure discovery.'
      )),
      sec('Budget paths without feeling cheap', paras(
        'Commission timelines vary. If the birthday is soon, shop ready inventory or pair a smaller tactile gift with a commission deposit letter.',
        'Experience gifts like a sunrise play session together can accompany the object and cost nothing extra.',
        'Handmade metalwork carries weight literally and emotionally. It signals permanence compared to mass-produced decor.'
      )),
    ],
    cta: {
      headline: 'Commission a birthday scale they will remember',
      body: 'Tell us how they listen and where they play. We will suggest scales and finishes that fit their life.',
      primaryTo: '/commission',
      primaryLabel: 'Start a commission',
    },
  }),
  A({
    slug: 'unique-gifts-for-christmas',
    category: 'Gifts',
    title: 'Unique Christmas Gifts for Quiet Mornings and Long Nights',
    description:
      'Holiday gifting shines when it slows the season down. These picks favor warm tone, ritual, and objects that sound better beside a winter window.',
    h1: 'Unique Christmas gifts for calm households',
    readingMinutes: 9,
    keywords: ['Christmas gift ideas', 'unique holiday gifts', 'handpan', 'meditation gifts'],
    relatedSlugs: ['stocking-stuffers-for-musicians', 'meditation-gifts-that-actually-get-used', 'meaningful-gifts-for-musicians'],
    faqs: [
      {
        q: 'How early should I order a handmade drum for Christmas?',
        a: 'Commission work needs lead time for tuning and finish. Order as early as fall if you want a custom scale. Ready shop inventory can ship closer to the date if stock is available.',
      },
      {
        q: 'Will a steel drum rust in winter humidity?',
        a: 'Quality builds use treatments and oils suited to steel. Include care guidance and a dry storage bag. Avoid leaving the instrument in a cold car trunk overnight.',
      },
      {
        q: 'Is a melodic drum too large to wrap?',
        a: 'Use a fabric wrap or a wooden crate reveal. Many gifters stage the drum already tuned in the room with a bow on the bag for a dramatic first strike.',
      },
    ],
    sections: [
      sec('Why Christmas rewards sensory gifts', paras(
        'December begs for warmth: light, scent, texture, and sound. A melodic drum adds a layer mass-produced decor cannot replicate.',
        'Families remember the first chord of the season. A playable gift turns Christmas morning into a shared listening moment instead of another round of plastic packaging.',
        'Stillforge instruments carry the story of fire, steel, and patience. That narrative fits the holiday emphasis on craft and care.'
      )),
      sec('Matching gift to household noise level', paras(
        'Apartments favor softer dynamics and shorter sessions. Houses with yards can embrace outdoor play even in crisp air.',
        'Choose scales with mellow timbre for indoor evenings. Save brighter voices for players who already practice assertive technique.',
        'Pair the gift with felt mallets or a soft stand if you want to lower volume for late-night play.'
      )),
      sec('Stocking stuffers that support the main gift', paras(
        'Microfiber cloths, hard cases, tuners, and tablature notebooks complement a primary instrument without stealing focus.',
        'A handwritten playlist of songs in their scale gives them immediate inspiration.',
        'Consider a donation to a local music charity in their name if they prefer minimal clutter alongside the drum.'
      )),
      sec('Shipping and unboxing in cold weather', paras(
        'Let acclimated instruments rest indoors before aggressive playing if they traveled through freezing zones.',
        'Open boxes inside so condensation does not shock raw steel surfaces.',
        'Plan a tuning check after travel. Most quality drums hold pitch, but temperature swings can slightly shift sensitive notes.'
      )),
    ],
    cta: { headline: 'Make this Christmas sound different', body: 'Browse ready drums or start a winter commission with delivery goals in mind.', primaryTo: '/shop', primaryLabel: 'Visit the shop' },
  }),
  A({
    slug: 'meaningful-gifts-for-musicians',
    category: 'Gifts',
    title: 'Meaningful Gifts for Musicians Who Have Enough Gear',
    description:
      'Working musicians often own plenty of cables and plugins. Meaningful gifts respect their ear, their time, and their need for instruments that inspire new writing.',
    h1: 'Meaningful gifts for musicians who crave new texture',
    readingMinutes: 11,
    keywords: ['gifts for musicians', 'handpan musicians', 'unique instruments'],
    relatedSlugs: ['sound-healing-gift-guide', 'outdoor-musician-gift-ideas', 'handmade-gifts-worth-the-money'],
    faqs: [
      {
        q: 'Do professional musicians want handpans?',
        a: 'Many do, especially for songwriting, film cues, and live ambient sets. A distinct timbre opens arrangements that guitar or piano cannot mimic.',
      },
      {
        q: 'How do I pick a scale a musician will use?',
        a: 'Ask about keys they compose in or borrow a voice memo of their demos. If stealth is required, D Kurd and Celtic Minor remain versatile starting points.',
      },
      {
        q: 'Should I buy electronic or acoustic?',
        a: 'Acoustic forged drums excel at immediate feel and outdoor play. Electronic options help silent practice. Know their primary use case before choosing.',
      },
    ],
    sections: [
      sec('Gift for the ear, not the spec sheet', paras(
        'Musicians notice timbre first. They will forgive missing features if the instrument sings in a session.',
        'Forged steel drums offer long sustain and rich overtones that record beautifully with a single microphone.',
        'Meaningful gifts include context: why this voice complements their existing rig.'
      )),
      sec('Support their creative bottlenecks', paras(
        'If they play mostly at night, consider dynamic control and a scale that loops well for improvisation.',
        'If they gig outdoors, prioritize stable tuning, durable finish, and a travel-worthy bag.',
        'Commission engraving or custom note layouts only when you know it will not fight their technique.'
      )),
      sec('Pair object with access', paras(
        'Share links to play-along resources on Stillforge and invite them to a joint jam when the drum arrives.',
        'Offer studio time to capture their first reactions. Musicians cherish documentation of new voices.',
        'Avoid gifting apps they already subscribe to. Physical craft stands out in a digital-heavy workflow.'
      )),
      sec('When to choose experience over gear', paras(
        'A weekend retreat or sound bath session can pair with a drum they will use to debrief afterward.',
        'Workshop visits to see forging in action deepen appreciation for metal instruments.',
        'See our experience versus objects guide if you are torn between tickets and hardware.'
      )),
    ],
    cta: { headline: 'Inspire their next session', body: 'Commission a voice that records well and survives the road.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'gifts-for-someone-who-has-everything',
    category: 'Gifts',
    title: 'Gifts for Someone Who Has Everything (That They Will Actually Use)',
    description:
      'When closets are full, choose gifts that create ritual. Forged melodic drums reward daily touch and rarely duplicate what someone already owns.',
    h1: 'Gifts for someone who has everything',
    readingMinutes: 10,
    keywords: ['gifts for people who have everything', 'unique gifts', 'handpan'],
    relatedSlugs: ['gifts-for-husband-who-has-everything', 'experience-gifts-vs-objects', 'handmade-gifts-worth-the-money'],
    faqs: [
      {
        q: 'Why do hand-style drums work for hard-to-shop people?',
        a: 'They combine art object and instrument. Even collectors who own rare watches rarely own a propane-tank forged scale tuned to their mood.',
      },
      {
        q: 'What if they do not consider themselves musical?',
        a: 'Choose forgiving layouts and emphasize meditation over performance. Many owners treat the drum as a mindfulness bell with melody.',
      },
      {
        q: 'Is commissioning worth it for picky recipients?',
        a: 'Custom note choices and finish details show intent. Picky recipients often appreciate control over scale and aesthetics.',
      },
    ],
    sections: [
      sec('Shift from accumulation to ritual', paras(
        'People who have everything often crave fewer, better moments. A morning five-minute play habit beats another luxury label.',
        'Sound gifts occupy time, not shelf space. They ask the recipient to participate rather than passively consume.',
        'Stillforge builds for repeat listening. The drum should sound better month three than day one as ears adapt.'
      )),
      sec('Signals of quality picky people respect', paras(
        'Visible hammer marks, honest steel, and stable tuning communicate craft without brand hype.',
        'Include provenance: where materials came from, how tuning was checked, and how to maintain finish.',
        'Avoid gimmicky multi-tools. One excellent voice wins.'
      )),
      sec('Stealth discovery questions', paras(
        'Ask about favorite travel spots, playlists, or yoga styles. Each clue maps to scale moods.',
        'Notice whether they prefer minor melancholy or brighter major lift. Match emotion, not technical jargon.',
        'If totally unsure, gift a consultation certificate toward commission instead of guessing scale.'
      )),
      sec('Delivery that feels bespoke', paras(
        'Use wooden crates, wax seals, or handwritten tuning notes from the builder.',
        'Schedule delivery when they are home alone first so the first sound is private and unhurried.',
        'Follow up a week later with care tips, not sales pressure.'
      )),
    ],
    cta: { headline: 'Give them something they do not already own', body: 'Explore commissions tailored to listeners who value craft over clutter.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'unique-gifts-for-dad',
    category: 'Gifts',
    title: 'Unique Gifts for Dad That Invite Him to Slow Down',
    description:
      'Dads often say they want nothing. Give them a tactile ritual instead: a forged drum for the garage, porch, or campsite that rewards five-minute breaks.',
    h1: 'Unique gifts for dad beyond ties and tools',
    readingMinutes: 9,
    keywords: ['gifts for dad', 'unique dad gifts', 'outdoor gifts'],
    relatedSlugs: ['unique-gifts-for-birthdays', 'outdoor-musician-gift-ideas', 'unique-anniversary-gifts-for-men'],
    faqs: [
      {
        q: 'Will dad feel silly learning a new instrument?',
        a: 'Frame it as a stress tool, not a recital. Intuitive layouts let him sound good immediately, which protects pride.',
      },
      {
        q: 'Can dads with stiff hands play handpans?',
        a: 'Gentle hand technique works for many. Encourage short sessions and warm hands. Tongue drums can be even lighter if grip is an issue.',
      },
      {
        q: 'Outdoor or indoor gift for dad?',
        a: 'Match where he already retreats. Grill masters and hikers love outdoor-ready steel with a rugged bag.',
      },
    ],
    sections: [
      sec('Gifts that meet dad where he already goes', paras(
        'The garage bench, fishing camp, or back patio is his studio. Meet him there with an instrument that tolerates real life.',
        'Dads appreciate utility stories: forged steel, weather-aware care, and sounds that do not annoy the neighborhood.',
        'Stillforge drums survive honest handling when cared for properly.'
      )),
      sec('Tone dads respond to', paras(
        'Warm minor scales often resonate with classic rock and folk ears without feeling exotic.',
        'Let him discover rhythm at his pace. Avoid scheduling performances unless he invites it.',
        'If he already plays guitar, pick a complementary scale for jamming together.'
      )),
      sec('Bundle ideas', paras(
        'Add a portable chair, thermos, and headlamp for campfire sessions.',
        'Include a phone mount for filming clips to send grandkids.',
        'Pair with a digital tuner and single-page care checklist laminated for the workshop wall.'
      )),
      sec('Commission touches dads mention later', paras(
        'Subtle color on notes, family initials inside the port, or a scale named after a shared trip.',
        'Document the build with photos he can show friends. Pride in origin matters.',
        'Plan a first play lesson over video if he lives far away.'
      )),
    ],
    cta: { headline: 'Build dad a porch instrument', body: 'Tell us about his hangouts and we will match scale and finish.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'unique-anniversary-gifts-for-men',
    category: 'Gifts',
    title: 'Unique Anniversary Gifts for Men Who Value Time Together',
    description:
      'Anniversaries celebrate shared rhythm. A commissioned melodic drum marks the year with a sound you can return to on every future date night.',
    h1: 'Unique anniversary gifts for men',
    readingMinutes: 10,
    keywords: ['anniversary gifts for men', 'romantic gifts', 'custom handpan'],
    relatedSlugs: ['unique-gifts-for-dad', 'gifts-for-husband-who-has-everything', 'wedding-gifts-for-creative-couples'],
    faqs: [
      {
        q: 'Is an instrument romantic enough for an anniversary?',
        a: 'When paired with a shared ritual, yes. Play together after dinner, record yearly songs, or revisit your wedding scale.',
      },
      {
        q: 'How do we commission without spoiling the surprise?',
        a: 'Use a trusted friend to gather scale preferences or gift a reveal dinner where specs are chosen together afterward.',
      },
      {
        q: 'What engraving is tasteful?',
        a: 'Keep dates or coordinates inside the instrument. Avoid loud exterior graphics if he prefers subtle gear.',
      },
    ],
    sections: [
      sec('Mark the year with a repeatable sound', paras(
        'Flowers fade. A tuned drum returns every anniversary when you strike the same chord progression.',
        'Men often cherish gifts that reflect shared adventures: the trail you hiked, the city you visited, the song on repeat that year.',
        'Commission notes that echo those memories without being literal novelty engraving.'
      )),
      sec('Co-play beats solo performance pressure', paras(
        'Plan duet evenings: one plays melody, one keeps pulse on a tongue drum or cajon.',
        'Stillforge scales layout intuitive patterns so partners learn together without formal theory.',
        'Record voice memos each anniversary to hear how your playing evolves.'
      )),
      sec('Presentation on the night', paras(
        'Hide the drum until dessert. Dim lights, strike one note together, then explain the commission story.',
        'Include a letter listing moments from the year that inspired the scale choice.',
        'If travel is your tradition, gift a travel bag and promise a sunset session on your next trip.'
      )),
      sec('Budget and timing', paras(
        'Custom builds need lead time. Order early and gift a handmade card showing forge progress photos.',
        'Ready shop pieces work for last-minute anniversaries when scale flexibility is open.',
        'Combine with a dinner experience rather than replacing time together with only an object.'
      )),
    ],
    cta: { headline: 'Commission your anniversary voice', body: 'Share your story. We will tune a drum that belongs to both of you.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'meditation-gifts-that-actually-get-used',
    category: 'Gifts',
    title: 'Meditation Gifts That Actually Get Used',
    description:
      'Most meditation gifts gather dust. Choose tools that invite five-minute returns: warm steel tone, forgiving scales, and zero setup friction.',
    h1: 'Meditation gifts people keep reaching for',
    readingMinutes: 9,
    keywords: ['meditation gifts', 'mindfulness gifts', 'calming instruments'],
    relatedSlugs: ['calming-instruments-for-anxiety', 'instruments-for-meditation-beginners', 'sound-healing-gift-guide'],
    faqs: [
      {
        q: 'Are handpans meditation instruments?',
        a: 'They can be. Slow strikes, long sustain, and repetitive patterns support breath focus without demanding virtuosity.',
      },
      {
        q: 'How quiet can meditation drums be?',
        a: 'Touch dynamics matter. Soft fingertips produce whisper levels suitable for morning practice beside a sleeping partner.',
      },
      {
        q: 'Do I need singing bowls too?',
        a: 'Not necessarily. One well-tuned drum can anchor a session. Bowls add texture if they already collect sound tools.',
      },
    ],
    sections: [
      sec('Why most meditation gifts fail', paras(
        'Novelty wears off when friction is high: apps with paywalls, cushions that hurt knees, gadgets needing chargers.',
        'Useful gifts align with existing habits. If they already brew tea at dawn, place the drum within arm reach of that chair.',
        'Steel drums reward micro-sessions. You do not need a forty-minute block to feel benefit.'
      )),
      sec('Features that support daily practice', paras(
        'Stable tuning so the instrument always sounds trustworthy.',
        'A scale with no wrong notes reduces cognitive load during stressful weeks.',
        'Simple care: wipe, bag, done. Complexity kills meditation momentum.'
      )),
      sec('Ritual packaging', paras(
        'Include a ten-breath starter card: inhale on strike one, exhale on strike two.',
        'Suggest pairing with dim light or outdoor dawn once a week for variety.',
        'Avoid overloading with books unless they asked for study material.'
      )),
      sec('Stillforge angle', paras(
        'Forged propane-tank drums carry weight and grounding metaphorically and physically.',
        'Streamside tuning workflows chase calm overtone balance suited to listening practices.',
        'Gift recipients can explore play guides on Stillforge when they want structure without a guru.'
      )),
    ],
    cta: { headline: 'Gift a daily pause', body: 'Pick a calming scale from the shop or commission one for their practice space.', primaryTo: '/play', primaryLabel: 'Explore play guides' },
  }),
  A({
    slug: 'yoga-teacher-gift-ideas',
    category: 'Gifts',
    title: 'Yoga Teacher Gift Ideas That Honor Their Class Energy',
    description:
      'Teachers shape rooms with breath and tone. Gift instruments that support savasana, gentle flow, and outdoor retreats without overpowering voice cues.',
    h1: 'Thoughtful yoga teacher gift ideas',
    readingMinutes: 8,
    keywords: ['yoga teacher gifts', 'sound healing gifts', 'meditation instruments'],
    relatedSlugs: ['meditation-gifts-that-actually-get-used', 'sound-healing-gift-guide', 'handpan-for-sound-baths'],
    faqs: [
      {
        q: 'Will a drum overpower yoga instruction?',
        a: 'Played softly, hand-style drums sit under speech. Use sparse strikes between cues instead of constant rhythm.',
      },
      {
        q: 'Portable options for traveling teachers?',
        a: 'Choose compact diameters with padded bags and note layouts that survive temperature changes in cars.',
      },
      {
        q: 'Can studios share one commission gift?',
        a: 'Yes. Pool funds for a studio instrument with a plaque inside the port listing contributing students.',
      },
    ],
    sections: [
      sec('Match gift to teaching style', paras(
        'Yin teachers may want long-sustain minor scales. Power flow teachers might prefer brighter top notes for energizing transitions.',
        'Ask what playlists they use. Spotify clues beat guessing.',
        'Avoid heavy gear if they fly frequently unless you fund checked-bag fees.'
      )),
      sec('Sound bath crossover', paras(
        'If they host sound baths, a forged drum adds live melody unlike prerecorded tracks.',
        'Pair with eye pillows and essential oils only if that is already their language.',
        'Offer a short workshop on drum etiquette for students if the gift is for a whole studio.'
      )),
      sec('Ethical gifting', paras(
        'Confirm studio policies on amplified or live instruments before surprising a class.',
        'Gift certificates toward commission respect their taste better than imposing a scale.',
        'Include insurance or case upgrades if the drum will live in a shared space.'
      )),
      sec('Care for communal instruments', paras(
        'Provide a sign-out sheet and cleaning cloth in the bag pocket.',
        'Schedule yearly tuning checks if the studio uses the drum heavily.',
        'Stillforge finishes are chosen with honest studio wear in mind when discussed upfront.'
      )),
    ],
    cta: { headline: 'Support their class soundtrack', body: 'Commission a studio-scale drum or browse ready voices suited to slow flow.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'gifts-for-husband-who-has-everything',
    category: 'Gifts',
    title: 'Gifts for a Husband Who Has Everything',
    description:
      'When his watch collection is complete and his bar is stocked, give him a private sound ritual he cannot buy off a shelf at the mall.',
    h1: 'Gifts for a husband who has everything',
    readingMinutes: 9,
    keywords: ['gifts for husband', 'luxury meaningful gifts', 'handpan'],
    relatedSlugs: ['gifts-for-someone-who-has-everything', 'unique-anniversary-gifts-for-men', 'unique-gifts-for-boyfriend'],
    faqs: [
      {
        q: 'How is this different from generic luxury gifts?',
        a: 'It is participatory. He creates the value each time he plays rather than displaying static status.',
      },
      {
        q: 'What if he travels for work?',
        a: 'Choose travel-ready sizes and hard cases. Some scales tolerate cabin storage if airline policies allow.',
      },
      {
        q: 'Should I involve him in the commission?',
        a: 'For husbands who micromanage gear, yes. For surprise lovers, gather intel from his playlists and friends.',
      },
    ],
    sections: [
      sec('Appeal to his private side', paras(
        'Many husbands unwind alone after family bedtime. A drum in the office or patio becomes his decompression tool.',
        'Skip public performance pressure unless he asks. Frame the gift as permission to play badly and enjoy it.',
        'Stillforge metalwork speaks to guys who respect making things with fire and hands.'
      )),
      sec('Scale and finish choices', paras(
        'Darker finishes and minor scales often fit evening moods.',
        'If he loves tech, show tuning graphs or builder notes to satisfy the engineer brain.',
        'Custom port designs can hide initials only he knows about.'
      )),
      sec('Combine with time', paras(
        'Book a night away with the drum instead of adding another object without context.',
        'Cook dinner, strike one chord together, then reveal the full instrument.',
        'Anniversary and birthday overlap ideas live in our anniversary guide for men.'
      )),
      sec('Maintenance as respect', paras(
        'Gift premium oil, bags, and a stand so upkeep feels like care not chores.',
        'Set calendar reminders for seasonal tuning checks if you live in humid climates.',
        'Encourage him to film clips for you when traveling for work to maintain connection.'
      )),
    ],
    cta: { headline: 'Surprise him with sound', body: 'Start a commission with his listening habits in mind.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'unique-gifts-for-boyfriend',
    category: 'Gifts',
    title: 'Unique Gifts for Your Boyfriend That Feel Intentional',
    description:
      'Early relationships benefit from gifts that invite shared experiences. A melodic drum gives you both a playful ritual without heavy expectations.',
    h1: 'Unique gifts for boyfriend',
    readingMinutes: 8,
    keywords: ['gifts for boyfriend', 'unique gifts', 'date ideas'],
    relatedSlugs: ['unique-gifts-for-boyfriend', 'experience-gifts-vs-objects', 'unique-anniversary-gifts-for-men'],
    faqs: [
      {
        q: 'Is an instrument too serious for a new relationship?',
        a: 'Keep stakes low. Present it as a toy for campfires and lazy Sundays, not a commitment to lessons.',
      },
      {
        q: 'Budget-friendly options?',
        a: 'Shop smaller ready drums or fund a deposit toward commission with a promise to co-design later.',
      },
      {
        q: 'What if he already plays music?',
        a: 'Choose a complementary timbre. Producers love handpans for ambient layers in demos.',
      },
    ],
    sections: [
      sec('Signal thoughtfulness', paras(
        'Reference inside jokes or trips when choosing scale mood.',
        'Write a card connecting the gift to a moment you shared listening to music.',
        'Avoid gag gifts paired with something sincere. Let the drum stand alone.'
      )),
      sec('Shared play dates', paras(
        'Plan a picnic with the drum instead of dinner only.',
        'Teach each other patterns even if neither is expert. Laughter helps.',
        'Use Stillforge play guides as a third neutral teacher.'
      )),
      sec('Size and logistics', paras(
        'If you live in a small apartment, prioritize softer dynamics and compact diameters.',
        'Check lease noise norms before gifting something resonant.',
        'Include headphones-only production workflows if he is a late-night beat maker.'
      )),
      sec('When to wait on commission', paras(
        'If the relationship is brand new, buy ready inventory with return policy clarity.',
        'Commission when you know his taste deeply enough to pick notes confidently.',
        'Experience gifts like forge tours can precede the instrument itself.'
      )),
    ],
    cta: { headline: 'Make your next gift memorable', body: 'Browse shop scales or book a commission consult together.', primaryTo: '/shop', primaryLabel: 'Visit the shop' },
  }),
  A({
    slug: 'sound-healing-gift-guide',
    category: 'Gifts',
    title: 'Sound Healing Gift Guide: Tools Listeners Keep',
    description:
      'Sound healing gifts should survive hype cycles. Focus on stable tuning, ethical sourcing stories, and instruments suited to facilitators or home listeners.',
    h1: 'Sound healing gift guide',
    readingMinutes: 11,
    keywords: ['sound healing gifts', 'handpan sound bath', 'tuning forks gifts'],
    relatedSlugs: ['yoga-teacher-gift-ideas', 'meditation-gifts-that-actually-get-used', 'sound-healing-instruments-compared'],
    faqs: [
      {
        q: 'Handpan versus singing bowl as a gift?',
        a: 'Bowls are lighter and cheaper. Handpans offer melody and richer overtones for facilitators who perform live.',
      },
      {
        q: 'Do healers want specific scales?',
        a: 'Many prefer minor or modal scales with long sustain. Ask about traditions they follow.',
      },
      {
        q: 'Can I gift used instruments?',
        a: 'Only with tuning verification and hygiene transparency. New commissions avoid unknown damage history.',
      },
    ],
    sections: [
      sec('Build a kit or one anchor piece', paras(
        'Anchor with a forged drum, then add mallets, bowls, or chimes if budget allows.',
        'One excellent drum beats five mediocre gadgets.',
        'Label each tool purpose in a card so sessions stay organized.'
      )),
      sec('Facilitator versus home listener', paras(
        'Facilitators need projection and durable finish for travel.',
        'Home listeners may prefer softer voices and smaller size.',
        'Stillforge builds discuss intended venue before tuning hardness.'
      )),
      sec('Ethics and storytelling', paras(
        'Share honest material origins. Recipients in healing fields care about integrity.',
        'Avoid medical claims in gift notes. Describe relaxation and focus instead.',
        'Offer resources on breath and rhythm rather than promising cures.'
      )),
      sec('Care training', paras(
        'Include humidity guidance and bag storage.',
        'Facilitators should know how to pause if a note drifts mid-session.',
        'Link to education guides on recording and transporting drums safely.'
      )),
    ],
    cta: { headline: 'Equip a sound practice', body: 'Compare instruments in our education library or commission a bath-ready scale.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'outdoor-musician-gift-ideas',
    category: 'Gifts',
    title: 'Outdoor Musician Gift Ideas for Campers and Trail Lovers',
    description:
      'Outdoor players need tough bags, stable tuning, and instruments that sound open under sky instead of boxed in a studio.',
    h1: 'Outdoor musician gift ideas',
    readingMinutes: 9,
    keywords: ['outdoor music gifts', 'campfire instruments', 'travel handpan'],
    relatedSlugs: ['playing-handpan-outdoors', 'outdoor-music-practice-tips', 'unique-gifts-for-dad'],
    faqs: [
      {
        q: 'Will sun damage a handpan finish?',
        a: 'Prolonged UV can affect some coatings. Use shade and bags when not playing.',
      },
      {
        q: 'Can you play in light rain?',
        a: 'Avoid direct rain on steel. A covered picnic shelter works. Dry immediately afterward.',
      },
      {
        q: 'Best bag features?',
        a: 'Backpack straps, rigid shell, and moisture-wicking liner protect transit to campsites.',
      },
    ],
    sections: [
      sec('Gifts that survive dirt and miles', paras(
        'Outdoor musicians value gear that shrugs off dust and fits in a car trunk with paddles and tents.',
        'Forged steel drums tolerate adventure when paired with realistic care.',
        'Add a compact stand that works on uneven ground.'
      )),
      sec('Scale choices for open air', paras(
        'Open spaces love sustain-rich minor scales that bloom without walls.',
        'Brighter scales cut through wind noise near oceans.',
        'Commission with note layout friendly to gloved hands in cold weather if they winter camp.'
      )),
      sec('Power and amplification', paras(
        'Most outdoor moments need no amp. For busking, consider pickup options discussed in compare guides.',
        'Gift spare batteries only for electronic gear they already own.',
        'Keep acoustic purity as default for national park etiquette.'
      )),
      sec('Safety and respect', paras(
        'Include ear protection for long sessions.',
        'Remind them to check land rules about amplified sound.',
        'Stillforge encourages streamside testing because water and wind inform our outdoor voicing.'
      )),
    ],
    cta: { headline: 'Outfit their next adventure', body: 'Shop travel-friendly drums or commission with outdoor use as the brief.', primaryTo: '/shop', primaryLabel: 'Visit the shop' },
  }),
  A({
    slug: 'handmade-gifts-worth-the-money',
    category: 'Gifts',
    title: 'Handmade Gifts Worth the Money',
    description:
      'Handmade should mean measurable craft: tuning stability, honest materials, and maker time you can see. Skip mass-produced items labeled artisan.',
    h1: 'Handmade gifts worth the money',
    readingMinutes: 10,
    keywords: ['handmade gifts', 'artisan instruments', 'custom handpan'],
    relatedSlugs: ['experience-gifts-vs-objects', 'commissioning-a-custom-drum', 'gifts-for-someone-who-has-everything'],
    faqs: [
      {
        q: 'Why do forged drums cost more than import drums?',
        a: 'Labor in tuning, steel treatment, and QC adds time. Cheap imports often skip stable heat treatment and repeat tuning passes.',
      },
      {
        q: 'How do I verify handmade quality remotely?',
        a: 'Ask for tuning graphs, photos of shell work, and clear warranty language. Reputable makers answer technical questions.',
      },
      {
        q: 'Is commission always better than ready-made?',
        a: 'Commission when scale and finish matter deeply. Ready-made excels when timeline is tight and flexibility is open.',
      },
    ],
    sections: [
      sec('Define worth before purchase', paras(
        'Worth equals years of use divided by price plus emotional lift.',
        'Handmade metal drums often last decades with care, lowering yearly cost.',
        'Document the maker story to gift alongside the object.'
      )),
      sec('Red flags in handmade markets', paras(
        'Vague tuning claims, no return policy, and stock photos only.',
        'Prices far below market without explanation often mean compromised steel or skipped tuning passes.',
        'Stillforge shares forge process context so buyers know what labor means.'
      )),
      sec('When premium is rational', paras(
        'Life milestones, professional use, and shared family rituals justify premium spend.',
        'Corporate gifts should still meet craft standards if branding is involved.',
        'Financing or deposits can spread cost without rushing build quality.'
      )),
      sec('Protect the investment', paras(
        'Buy proper cases and insurance riders for valuable commissions.',
        'Schedule maintenance like you would for a bicycle or camera.',
        'Handmade gifts appreciate emotionally even if resale markets vary.'
      )),
    ],
    cta: { headline: 'Invest in honest craft', body: 'See commission process and materials we trust before you buy.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'experience-gifts-vs-objects',
    category: 'Gifts',
    title: 'Experience Gifts vs Objects: When Sound Gifts Win',
    description:
      'Experiences create memories. Objects create rituals. The best gifts combine both so the memory has a soundtrack tomorrow.',
    h1: 'Experience gifts vs objects',
    readingMinutes: 9,
    keywords: ['experience gifts', 'gift objects', 'music gifts'],
    relatedSlugs: ['unique-gifts-for-birthdays', 'handmade-gifts-worth-the-money', 'meaningful-gifts-for-musicians'],
    faqs: [
      {
        q: 'Can an instrument be both experience and object?',
        a: 'Yes. Unwrapping, first lesson, and yearly songs turn steel into a timeline of experiences.',
      },
      {
        q: 'What if they prefer minimalism?',
        a: 'Gift a single weekend retreat with a rental drum before committing to ownership.',
      },
      {
        q: 'Do experiences age better?',
        a: 'Memories fade without anchors. Objects anchor repetition. Pair them intentionally.',
      },
    ],
    sections: [
      sec('Strengths of experiences', paras(
        'Trips, concerts, and classes avoid clutter.',
        'They suit people unsure about owning gear.',
        'Shared time strengthens relationships immediately.'
      )),
      sec('Strengths of objects', paras(
        'A Stillforge drum returns every morning without booking tickets.',
        'Objects support identity: I am someone who plays, not only someone who went once.',
        'Physical craft carries story in a way photos alone cannot.'
      )),
      sec('Hybrid gifting patterns', paras(
        'Reveal a commission with a forge tour video and live play session.',
        'Gift lessons plus a ready drum so practice starts day one.',
        'Use holidays for experiences and birthdays for gear if budget splits are needed.'
      )),
      sec('Decision checklist', paras(
        'Do they travel light? Lean experience or small drums.',
        'Do they nest at home? Lean object with ritual card.',
        'Do they fear commitment? Rent or shop entry sizes first.'
      )),
    ],
    cta: { headline: 'Combine memory and melody', body: 'Plan a commission reveal plus first play on the porch.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'stocking-stuffers-for-musicians',
    category: 'Gifts',
    title: 'Stocking Stuffers for Musicians Who Love Their Main Rig',
    description:
      'Small gifts should support the big instrument: care kits, notebooks, tuners, and playable accessories that fit a stocking.',
    h1: 'Stocking stuffers for musicians',
    readingMinutes: 7,
    keywords: ['stocking stuffers musicians', 'music gift accessories'],
    relatedSlugs: ['unique-gifts-for-christmas', 'meaningful-gifts-for-musicians', 'handpan-care-and-rust-prevention'],
    faqs: [
      {
        q: 'Do handpan players need special stocking gifts?',
        a: 'Microfiber cloths, finger cots, oil kits, and mini tuners fit well. Avoid cheap mallets that scratch notes.',
      },
      {
        q: 'Digital or physical gifts?',
        a: 'Physical care items pair best with a main instrument gift under the tree.',
      },
      {
        q: 'Can a mini drum fit a stocking?',
        a: 'Tiny tongue drums can. Full handpans belong under the tree with a bag reveal.',
      },
    ],
    sections: [
      sec('Care and maintenance miniatures', paras(
        'Premium oil vials, cloths, and desiccant packs show you respect their instrument.',
        'Include printed care steps from Stillforge education guides.',
        'Avoid generic hardware store oils not meant for tuned steel.'
      )),
      sec('Learning and inspiration', paras(
        'Pocket rhythm books, scale charts, and gift cards toward lessons work universally.',
        'Notebook for tuning session logs suits detail-oriented players.',
        'Stickers are fun but optional. Function beats novelty.'
      )),
      sec('Recording and practice', paras(
        'Phone tripod clips, small diaphragm mic cables, and earplugs fit stockings.',
        'Gift a subscription to a DAW only if they lack one.',
        'Portable metronomes help handpan players explore tempo games.'
      )),
      sec('Pair with the hero gift', paras(
        'Stack stocking items beside a commission drum for a complete story.',
        'Label each small item with how it supports the big gift.',
        'Christmas morning play sessions need zero missing accessories if you plan well.'
      )),
    ],
    cta: { headline: 'Complete their kit', body: 'Read handpan care guides and shop main instruments when ready.', primaryTo: '/shop', primaryLabel: 'Visit the shop' },
  }),
  A({
    slug: 'wedding-gifts-for-creative-couples',
    category: 'Gifts',
    title: 'Wedding Gifts for Creative Couples',
    description:
      'Creative couples cherish gifts that become part of their shared story. A commissioned drum marks the wedding with a sound they can replay every anniversary.',
    h1: 'Wedding gifts for creative couples',
    readingMinutes: 10,
    keywords: ['wedding gifts', 'creative couples gifts', 'custom instruments'],
    relatedSlugs: ['unique-anniversary-gifts-for-men', 'commissioning-a-custom-drum', 'experience-gifts-vs-objects'],
    faqs: [
      {
        q: 'Is a handpan appropriate as a wedding gift?',
        a: 'When the couple values music or meditation, yes. Confirm they have space and noise tolerance first.',
      },
      {
        q: 'Group gift etiquette?',
        a: 'Pool funds for one premium commission rather than many small decor items they may donate.',
      },
      {
        q: 'Registry alternative?',
        a: 'Offer a contribution card toward Stillforge commission with optional scale consult after the honeymoon.',
      },
    ],
    sections: [
      sec('Celebrate their creative union', paras(
        'Weddings mark rhythm between two people. Instrument gifts literalize that metaphor without being cheesy when presented sincerely.',
        'Choose scales reflecting both personalities: one moody, one bright, merged in a versatile layout.',
        'Stillforge commissions can document wedding date inside the port upon request.'
      )),
      sec('Registry coordination', paras(
        'Ask the wedding planner or a close friend about home size and city noise rules.',
        'Ship after the honeymoon if travel would risk damage.',
        'Include a letter to open on first married Sunday together.'
      )),
      sec('Ceremony and reception uses', paras(
        'Some couples want live drum during ceremony processional. Coordinate volume with officiant.',
        'Reception unplugged sets work for intimate venues.',
        'Avoid stealing focus from vows unless they explicitly booked you for music.'
      )),
      sec('Long-term heirloom mindset', paras(
        'Teach basic care so the drum survives moves and kids.',
        'Encourage yearly recording traditions.',
        'Heirloom quality steel can pass to future generations with maintenance.'
      )),
    ],
    cta: { headline: 'Gift a lifetime soundtrack', body: 'Start a wedding commission with their shared listening story.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
]

// Continue in part 2 - append beginners, compare, education, story
function writeBundle(name, comment, arr, expected) {
  const file = path.join(outDir, `${name}.js`)
  const body = `/** ${comment} */\nexport default ${JSON.stringify(arr, null, 2)}\n`
  fs.writeFileSync(file, body, 'utf8')
  if (arr.length !== expected) throw new Error(`${name}: expected ${expected}, got ${arr.length}`)
  return arr.length
}

writeBundle('gifts', 'Gift-intent guides from Stillforge.', gifts, 16)
console.log('gifts.js written:', gifts.length)
