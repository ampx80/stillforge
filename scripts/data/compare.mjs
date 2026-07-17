import { A, sec, paras, faq } from '../article-helpers.mjs'

export const compare = [
  A({
    slug: 'handpan-vs-tongue-drum',
    category: 'Compare',
    title: 'Handpan vs Tongue Drum: Tone, Cost, and Use Cases',
    description:
      'Handpans and steel tongue drums share steel roots but differ in sustain, price, and portability. Compare before you buy your first melodic drum.',
    h1: 'Handpan vs tongue drum',
    readingMinutes: 12,
    keywords: ['handpan vs tongue drum', 'tank drum compare'],
    relatedSlugs: ['steel-tongue-drum-for-beginners', 'propane-tank-drum-explained', 'how-much-does-a-handpan-cost'],
    faqs: [
      faq('Which is easier for beginners?', 'Tongue drums are often easier due to labeling and lighter touch. Handpans reward ear players who want richer tone.'),
      faq('Can one replace the other?', 'Partially. Handpans excel in ambient performance. Tongue drums excel in travel and kid-friendly play.'),
      faq('Does Stillforge build both?', 'Stillforge focuses on forged handpans. Many players start on tongue drums then commission handpans.'),
    ],
    sections: [
      sec('Sound and sustain', paras(
        'Handpans produce long, singing sustain with complex overtones from domed notes.',
        'Tongue drums speak faster with shorter decay, which can feel clearer in noisy rooms.',
        'Stillforge handpans are tuned streamside to balance overtones for outdoor listening.'
      )),
      sec('Portability and durability', paras(
        'Tongue drums fit backpacks easier. Handpans need rigid cases and careful handling.',
        'Both use steel that requires rust-aware care.',
        'Forged propane-tank shells on premium handpans add mass that stabilizes tone but adds weight.'
      )),
      sec('Side-by-side snapshot', paras(
        'Use this table as a starting point. Individual makers vary within each column.',
        'Listen to demos before deciding based on specs alone.',
        'Commission consults can clarify which voice fits your primary use.'
      ), {
        table: {
          headers: ['Factor', 'Handpan', 'Steel tongue drum'],
          rows: [
            ['Typical sustain', 'Long, ambient', 'Moderate to short'],
            ['Learning curve', 'Ear-led, layout circle', 'Often letter-labeled'],
            ['Portability', 'Case required, heavier', 'Lighter, more compact'],
            ['Price band', 'Higher for quality', 'Lower entry, wide quality spread'],
            ['Best for', 'Performance, recording, sound baths', 'Travel, kids, casual porch play'],
          ],
        },
      }),
      sec('Upgrade path', paras(
        'Many households keep a tongue drum for guests and a handpan for primary expression.',
        'Skill transfers: rhythm, dynamics, and care habits carry over.',
        'Read propane tank drum explainer to see shared forging heritage.'
      )),
      sec('Buying checklist', paras(
        'Define primary location: apartment, studio, or trail.',
        'Set budget including bag and care kit.',
        'Avoid cheapest imports without tuning documentation in either category.'
      )),
    ],
    cta: { headline: 'Choose your steel voice', body: 'Compare shop handpans or start a commission when tongue drums feel limiting.', primaryTo: '/shop', primaryLabel: 'Visit the shop' },
  }),
  A({
    slug: 'how-much-does-a-handpan-cost',
    category: 'Compare',
    title: 'How Much Does a Handpan Cost in 2026?',
    description:
      'Handpan prices reflect steel treatment, tuning hours, and maker QC. Understand tiers before you chase a bargain that costs more later.',
    h1: 'How much does a handpan cost?',
    readingMinutes: 11,
    keywords: ['handpan cost', 'handpan price', 'cheap handpan'],
    relatedSlugs: ['cheap-handpan-warnings', 'best-handpan-drums-by-tier', 'handpan-buyer-guide'],
    faqs: [
      faq('Why are handpans expensive?', 'Skilled tuning passes, heat treatment, and stable steel selection take hours per instrument.'),
      faq('Are sales tax and shipping extra?', 'Usually yes. Budget hard cases and possible import duties for international buys.'),
      faq('Do Stillforge prices include cases?', 'Ask during commission or shop checkout. Cases are often separate line items industry-wide.'),
    ],
    sections: [
      sec('What you pay for', paras(
        'Labor in hammering, tuning, and finish dominates cost more than raw steel.',
        'Stable intonation over seasons requires repeat tuning checks makers bake into price.',
        'Stillforge propane-tank forging adds custom metalwork time compared to flat factory shells.'
      )),
      sec('Typical tier ranges', paras(
        'Market prices shift with makers and note counts. Treat ranges as planning guides, not quotes.',
        'Entry imports sit lowest but carry highest risk of retune costs.',
        'Commission pieces price above ready inventory when customization adds time.'
      ), {
        table: {
          headers: ['Tier', 'Indicative range (USD)', 'What to expect'],
          rows: [
            ['Budget imports', '$400 - $900', 'Inconsistent tuning, thin steel, limited support'],
            ['Mid reputable makers', '$1,200 - $2,200', 'Documented tuning, better cases, clearer warranty'],
            ['Premium / custom', '$2,300 - $4,500+', 'Extended tuning, custom scales, forge-level craft'],
            ['Retune / rescue', '$150 - $400+', 'Hidden cost if cheap buy drifts quickly'],
          ],
        },
      }),
      sec('Hidden costs', paras(
        'Cases, oils, tuners, shipping insurance, and future retunes.',
        'Workshop trips if you want forge tours alongside purchase.',
        'Recording gear if content creation motivates the buy.'
      )),
      sec('Financing and timing', paras(
        'Deposits spread commission cost over build weeks.',
        'Ready shop stock avoids rush fees when timelines are tight.',
        'Plan seasonal humidity changes that may prompt tuning checks.'
      )),
      sec('Value equation', paras(
        'Divide price by expected years of play plus emotional value.',
        'A mid-tier drum kept a decade often beats cycling cheap drums.',
        'Read cheap handpan warnings before optimizing only for lowest sticker.'
      )),
    ],
    cta: { headline: 'Budget with eyes open', body: 'Start a commission conversation with your range and use case.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'best-handpan-drums-by-tier',
    category: 'Compare',
    title: 'Best Handpan Drums by Tier: Entry, Mid, and Premium',
    description:
      'Tier guides help you match budget to expectations. No single drum wins every category; prioritize tuning stability and support for your tier.',
    h1: 'Best handpan drums by tier',
    readingMinutes: 10,
    keywords: ['best handpan', 'handpan tiers', 'premium handpan'],
    relatedSlugs: ['how-much-does-a-handpan-cost', 'handpan-buyer-guide', 'custom-handpan-vs-ready-made'],
    faqs: [
      faq('Should beginners buy premium immediately?', 'Only if budget allows and commitment is clear. Mid tier from reputable makers satisfies most first owners.'),
      faq('Do tiers map to note count?', 'Partially. More notes often cost more at any tier due to tuning time.'),
      faq('Where does Stillforge fit?', 'Stillforge operates in mid to premium custom forge space with propane-tank shells and streamside voicing.'),
    ],
    sections: [
      sec('How we think about tiers', paras(
        'Tiers describe support, tuning process, and materials honesty rather than hype adjectives.',
        'We do not rank specific competitor brands with fake review scores.',
        'Use tiers to ask better questions of any maker you consider.'
      ), {
        table: {
          headers: ['Tier', 'Buyer profile', 'Priority features'],
          rows: [
            ['Entry', 'Curious, tight budget', 'Forgiving scale, return policy clarity, retune plan'],
            ['Mid', 'Daily player, recorder', 'Stable tuning graphs, case quality, responsive support'],
            ['Premium', 'Performers, facilitators', 'Custom scale, finish durability, consistent batch QC'],
          ],
        },
      }),
      sec('Entry tier cautions', paras(
        'If demos sound wobbly online, expect worse in person.',
        'Budget for possible professional retune within first year.',
        'Prefer makers who show shell work photos, not only finished gloss.'
      )),
      sec('Mid tier sweet spot', paras(
        'Most Stillforge commissions target listeners who want forge character without museum pricing.',
        'Mid tier should include honest warranty language and care instructions.',
        'Compare nitrided versus stainless if climate is harsh.'
      )),
      sec('Premium tier expectations', paras(
        'Extended tuning sessions, custom note layouts, and finish experiments.',
        'Direct maker communication through build milestones.',
        'Documentation you can show students or clients about instrument origin.'
      )),
      sec('Next steps', paras(
        'Read buyer guide checklist before sending deposits.',
        'Listen to scale comparisons with headphones.',
        'Visit shop inventory if ready-made timelines match your need.'
      )),
    ],
    cta: { headline: 'Find your tier honestly', body: 'Tell us your budget band and primary use. We will suggest a realistic path.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'hang-drum-vs-handpan',
    category: 'Compare',
    title: 'Hang Drum vs Handpan: Names, History, and Buying Today',
    description:
      'Hang is the original PANArt instrument. Handpan describes the wider family. Understand trademarks, tone, and modern makers like Stillforge.',
    h1: 'Hang drum vs handpan',
    readingMinutes: 10,
    keywords: ['hang vs handpan', 'hang drum history'],
    relatedSlugs: ['history-of-the-hang-and-handpan', 'what-is-a-handpan', 'handpan-buyer-guide'],
    faqs: [
      faq('Is hang the same as handpan?', 'Hang refers to PANArt instruments. Handpan is the generic category inspired by that lineage.'),
      faq('Can I buy a new Hang easily?', 'PANArt sells through their process to select buyers. Most shoppers choose other handpan makers today.'),
      faq('Will a Stillforge drum feel like a Hang?', 'Lineage shares layout concepts but each maker voices differently. Listen to demos instead of assuming clones.'),
    ],
    sections: [
      sec('Naming respectfully', paras(
        'Use Hang for PANArt products. Use handpan for the instrument family.',
        'Avoid calling every drum a Hang in ads; it confuses buyers and makers.',
        'Education guides cover full history timeline.'
      )),
      sec('Design lineage', paras(
        'Convex steel notes on a shell define the visual language.',
        'Scale choices and tuning philosophy diverged as makers multiplied worldwide.',
        'Propane-tank forging at Stillforge is one regional evolution, not a Hang copy claim.'
      )),
      sec('Buying implications', paras(
        'Vintage Hang resale prices differ from modern handpan market.',
        'Waitlists and authentication matter in Hang secondary market.',
        'New handpan buyers should judge current makers on tuning and support.'
      )),
      sec('Tone expectations', paras(
        'Original Hang voicing is reference many ears love.',
        'Modern makers pursue wider dynamic range for outdoor and studio use.',
        'Streamside tuning at Stillforge chases clarity without brittle highs.'
      )),
      sec('Cultural context', paras(
        'Community etiquette favors crediting PANArt innovation.',
        'Share history articles when introducing friends to the instrument.',
        'Support ethical makers who document their own craft path.'
      )),
    ],
    cta: { headline: 'Explore modern handpans', body: 'Read history guide then listen to Stillforge scale demos.', primaryTo: '/shop', primaryLabel: 'Visit the shop' },
  }),
  A({
    slug: 'propane-tank-drum-explained',
    category: 'Compare',
    title: 'Propane Tank Drum Explained: From Cylinder to Melody',
    description:
      'Propane tank drums reuse thick steel cylinders forged into melodic shells. Learn why tank steel matters and how Stillforge shapes voice.',
    h1: 'Propane tank drum explained',
    readingMinutes: 11,
    keywords: ['propane tank drum', 'tank handpan', 'upcycled steel drum'],
    relatedSlugs: ['how-propane-tank-drums-are-forged', 'what-is-a-handpan', 'steel-tongue-drum-for-beginners'],
    faqs: [
      faq('Is it safe to play tank steel?', 'Yes when properly cleaned, forged, and finished for musical use. Makers remove residues and treat shells professionally.'),
      faq('Does tank origin affect tone?', 'Steel thickness and alloy influence sustain. Skilled forging aligns grain and tension for musical modes.'),
      faq('Are all Stillforge drums tank-based?', 'Stillforge centers propane-tank forging as our metal story and structural starting point.'),
    ],
    sections: [
      sec('Why propane tanks', paras(
        'Thick curved steel already handles pressure, hinting at resonance potential.',
        'Upcycling aligns with slow craft and visible transformation stories buyers love.',
        'Tank drums are not DIY toys; tuning requires maker expertise.'
      )),
      sec('Forge steps overview', paras(
        'Cut, clean, shape, anneal where needed, hammer notes, tune repeatedly.',
        'Finish choices affect rust resistance and color.',
        'See dedicated forging article for deeper process photos context.'
      )),
      sec('Compared to flat sheet shells', paras(
        'Tank curvature changes stiffness and mode distribution.',
        'Some makers prefer sheet for consistency; tank forge celebrates variation controlled by ear.',
        'Both can sound excellent when tuning QC is serious.'
      )),
      sec('Buyer questions for tank forges', paras(
        'Ask how shells are cleaned and tested before tuning.',
        'Request clarity on thickness and note layout stability.',
        'Listen for wolf tones or buzzing that hints at rushed work.'
      )),
      sec('Care similarities', paras(
        'Tank or sheet, steel handpans need dry hands and bags.',
        'Rust prevention guide applies across origins.',
        'Outdoor play needs shade and wipe-down rituals.'
      )),
    ],
    cta: { headline: 'Hear tank steel voiced', body: 'Commission a propane-tank forged drum with your scale brief.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'handpan-buyer-guide',
    category: 'Compare',
    title: 'Handpan Buyer Guide: Checklist Before You Pay',
    description:
      'Use this checklist to evaluate makers, scales, warranties, and total cost before buying a handpan online or on commission.',
    h1: 'Handpan buyer guide',
    readingMinutes: 12,
    schemaType: 'HowTo',
    keywords: ['handpan buyer guide', 'buy handpan'],
    relatedSlugs: ['where-to-buy-a-handpan', 'how-much-does-a-handpan-cost', 'cheap-handpan-warnings'],
    faqs: [
      faq('Should I buy online unseen?', 'Yes if return or tuning policies are clear and demos are authentic. Avoid sellers with no support channel.'),
      faq('How many demos should I hear?', 'At least full scale runs, soft and loud dynamics, and sustain tails beyond ten seconds.'),
      faq('Is used a good idea?', 'Only with verified tuning history and rust inspection.'),
    ],
    sections: [
      sec('Define your brief', paras(
        'Primary use: meditation, performance, recording, teaching, outdoor.',
        'Environment: humidity, travel frequency, apartment noise.',
        'Budget including case and future maintenance.'
      )),
      sec('Evaluate makers', paras(
        'Photos of shell work, tuning method description, warranty terms.',
        'Responsive answers to steel and scale questions.',
        'Stillforge shares forge philosophy openly for informed commissions.'
      ), {
        table: {
          headers: ['Checklist item', 'Pass signal', 'Red flag'],
          rows: [
            ['Tuning proof', 'Audio or graph samples', 'Only stock photos'],
            ['Support', 'Email or chat with timelines', 'Ghost after deposit'],
            ['Materials', 'Steel and finish explained', 'Vague alloy claims'],
            ['Policy', 'Written warranty and returns', 'No policy PDF'],
            ['Community', 'Educational content', 'Pure hype posts only'],
          ],
        },
      }),
      sec('Scale and ergonomics', paras(
        'Match scale mood to use case articles in education library.',
        'Ensure note layout fits hand span.',
        'Consider note count versus cognitive load.'
      )),
      sec('Logistics', paras(
        'Shipping insurance, acclimation advice, and unboxing inspection steps.',
        'International duty awareness.',
        'Schedule tuning check after first month of climate exposure.'
      )),
      sec('After purchase', paras(
        'Log serial and purchase date for insurance.',
        'Follow care guide from day one.',
        'Document first sessions to hear how your ear adapts over weeks.'
      )),
    ],
    cta: { headline: 'Buy with a clear brief', body: 'Use our commission form to answer checklist items with us.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'nitrided-vs-stainless-handpan',
    category: 'Compare',
    title: 'Nitrided vs Stainless Handpan Steel',
    description:
      'Nitrided and stainless steel treatments change rust resistance, color, and timbre. Pick based on climate, sweat, and tone preference.',
    h1: 'Nitrided vs stainless handpan',
    readingMinutes: 10,
    keywords: ['nitrided handpan', 'stainless handpan'],
    relatedSlugs: ['handpan-care-and-rust-prevention', 'steel-properties-for-melodic-drums', 'handpan-buyer-guide'],
    faqs: [
      faq('Which rusts less?', 'Stainless generally resists rust better. Nitrided steel needs consistent oil care in humid zones.'),
      faq('Does steel change sound?', 'Yes subtly. Nitrided shells often sound warmer to some ears; stainless can feel brighter and cleaner.'),
      faq('What does Stillforge use?', 'Discuss steel choices during commission based on your climate and tone goals.'),
    ],
    sections: [
      sec('Treatment basics', paras(
        'Nitriding hardens surface and darkens color through controlled nitrogen diffusion.',
        'Stainless alloys reduce corrosion at molecular level with different machining challenges.',
        'Both require skilled tuning regardless of marketing labels.'
      )),
      sec('Climate and lifestyle', paras(
        'Coastal sweat and salt air push toward stainless or rigorous nitrided care.',
        'Dry inland players may enjoy nitrided warmth with simple oil routines.',
        'Outdoor players should plan bags and shade either way.'
      ), {
        table: {
          headers: ['Factor', 'Nitrided', 'Stainless'],
          rows: [
            ['Rust resistance', 'Good with care', 'Stronger baseline'],
            ['Typical color', 'Darker, matte to satin', 'Silver to brushed gray'],
            ['Tone tendency', 'Often warmer', 'Often brighter'],
            ['Maintenance', 'Regular oil common', 'Still wipe and bag'],
            ['Price impact', 'Varies by maker', 'Often premium due to workability'],
          ],
        },
      }),
      sec('Listen first', paras(
        'Steel changes are smaller than scale and tuning quality choices.',
        'Do not pick steel before loving demos of the maker voice.',
        'Request same scale demo on both treatments if available.'
      )),
      sec('Long-term ownership', paras(
        'Plan retune budgets independent of steel type.',
        'Insurance photos should capture finish condition at receipt.',
        'Read steel properties article for metallurgy context.'
      )),
    ],
    cta: { headline: 'Pick steel for your climate', body: 'Commission consult covers finish options honestly.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'handpan-scales-compared',
    category: 'Compare',
    title: 'Handpan Scales Compared: Mood, Notes, and Use Cases',
    description:
      'Compare popular handpan scales by mood, typical note count, and best use cases. Samples beat spec sheets when choosing emotion.',
    h1: 'Handpan scales compared',
    readingMinutes: 13,
    keywords: ['handpan scales', 'D Kurd', 'Celtic minor compare'],
    relatedSlugs: ['d-kurd-scale-guide', 'celtic-minor-scale-guide', 'understanding-handpan-scales'],
    faqs: [
      faq('How many scales exist?', 'Dozens of layouts circulate. Focus on ones with demos you can hear extensively.'),
      faq('Can scales be combined on one drum?', 'Standard handpans fix one scale per instrument. Some makers offer interchangeable notes rarely; assume one scale per shell.'),
      faq('Which scale is most popular?', 'D Kurd and variants appear often in online demos, but popularity does not mean personal fit.'),
    ],
    sections: [
      sec('How to read scale names', paras(
        'Root note plus mode or cultural label describes interval map.',
        'Capital letters usually indicate root pitch class.',
        'Layout on the circle differs by maker even for same scale name.'
      ), {
        table: {
          headers: ['Scale family', 'Mood sketch', 'Common uses'],
          rows: [
            ['D Kurd / Kurd minor', 'Grounded, versatile minor', 'Jams, beginner-friendly improv'],
            ['Celtic minor', 'Lyrical, folk-leaning', 'Outdoor sessions, storytelling'],
            ['Hijaz / minor exotic', 'Spice, cinematic tension', 'Performance color, world fusion'],
            ['Major / happy voices', 'Lift, brighter motifs', 'Daytime social play'],
            ['Pentatonic subsets', 'Safe exploration', 'Kids, meditation, new players'],
          ],
        },
      }),
      sec('Matching scale to skill', paras(
        'Beginners often start Kurd or pentatonic layouts.',
        'Experienced players may want hijaz or custom intervals for composition.',
        'Stillforge scale consults ask about playlists and venues.'
      )),
      sec('Recording considerations', paras(
        'Minor scales sit under voice in content creation.',
        'Brighter scales cut on phone speakers but may fatigue in long sessions.',
        'Test headphones and room mics with scale demos.'
      )),
      sec('Commission custom layouts', paras(
        'Custom does not mean random notes; makers advise consonance and ergonomics.',
        'Allow time for tuning experiments on bespoke intervals.',
        'Read custom versus ready-made guide before assuming need for custom.'
      )),
      sec('Deep dives', paras(
        'Open dedicated D Kurd, Celtic minor, and Hijaz guides next.',
        'Understanding handpan scales article explains interval theory plainly.',
        'Return to shop demos after reading to hear differences sharper.'
      )),
    ],
    cta: { headline: 'Compare with your ears', body: 'Listen to shop demos then commission if nothing stock fits.', primaryTo: '/shop', primaryLabel: 'Visit the shop' },
  }),
  A({
    slug: 'rav-vast-vs-handpan',
    category: 'Compare',
    title: 'RAV Vast vs Handpan: Different Instruments, Shared Buyers',
    description:
      'RAV Vast instruments are steel tongue drums with a distinct voicing. Handpans offer hand-played domed notes and longer sustain. Compare honestly.',
    h1: 'RAV Vast vs handpan',
    readingMinutes: 9,
    keywords: ['RAV Vast vs handpan', 'RAV drum compare'],
    relatedSlugs: ['handpan-vs-tongue-drum', 'sound-healing-instruments-compared', 'best-handpan-drums-by-tier'],
    faqs: [
      faq('Is RAV a handpan?', 'No. RAV Vast is a branded steel tongue drum family. It competes for similar buyer budgets.'),
      faq('Which is better for sound baths?', 'Handpans often sustain longer for ambient beds. RAV can work with mallets and faster patterns.'),
      faq('Can I own both?', 'Yes. Many facilitators layer tongue drums under handpan melody.'),
    ],
    sections: [
      sec('Playing interface', paras(
        'Handpans use fingertips on domed fields with nuanced dynamics.',
        'RAV instruments invite mallets and fingertips on cut tongues with quicker decay.',
        'Technique transfer is partial, not automatic.'
      )),
      sec('Price and portability', paras(
        'RAV products often sit below premium handpan prices with easier travel.',
        'Handpans price higher but offer distinct timbre for professional recordings.',
        'Budget buyers should still avoid unknown knockoffs in either style.'
      ), {
        table: {
          headers: ['Topic', 'RAV Vast (tongue drum)', 'Handpan'],
          rows: [
            ['Sustain', 'Shorter', 'Longer'],
            ['Dynamics', 'Mallet-friendly', 'Hand nuance'],
            ['Typical weight', 'Lighter', 'Heavier'],
            ['Stillforge overlap', 'Different product class', 'Core forge focus'],
          ],
        },
      }),
      sec('Sound healing context', paras(
        'Facilitators choose based on session pacing and travel.',
        'Handpans anchor drone-like beds; RAV adds rhythmic punctuation.',
        'See sound healing instruments compared table for wider view.'
      )),
      sec('Decision tip', paras(
        'If you crave singing sustain and hand expression, lean handpan.',
        'If you need compact mallet play and lower entry cost, lean RAV or similar tongue drums.',
        'Listen to full-length demos for each before deciding.'
      )),
    ],
    cta: { headline: 'Choose your facilitator voice', body: 'Explore Stillforge handpans for long-sustain melodic work.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'cheap-handpan-warnings',
    category: 'Compare',
    title: 'Cheap Handpan Warnings: When Low Price Costs More',
    description:
      'Ultra-cheap handpans often need retunes, rust repair, or replacement within months. Learn red flags before impulse-buying discount listings.',
    h1: 'Cheap handpan warnings',
    readingMinutes: 10,
    keywords: ['cheap handpan', 'handpan scam', 'import handpan quality'],
    relatedSlugs: ['how-much-does-a-handpan-cost', 'handpan-buyer-guide', 'where-to-buy-a-handpan'],
    faqs: [
      faq('Are all cheap handpans bad?', 'Not always, but risk rises sharply under typical reputable price floors. Investigate tuning proof obsessively.'),
      faq('Can a luthier fix a cheap drum?', 'Sometimes retunes help; sometimes steel or geometry limits results. Fixes cost money.'),
      faq('Why not buy for kids cheap?', 'Unstable tuning frustrates kids fastest. Better a quality tongue drum than a bad handpan.'),
    ],
    sections: [
      sec('Price floors exist for a reason', paras(
        'Tuning labor has a minimum time cost skilled makers cannot ignore sustainably.',
        'Suspiciously low prices often skip heat treatment or repeat tuning passes.',
        'Stillforge pricing reflects forge time and streamside QC.'
      )),
      sec('Red flag list', paras(
        'No maker identity, stolen demo audio, vague steel claims, zero warranty.',
        'Marketplace listings with inconsistent photos across SKUs.',
        'Promises of professional sound at hobby prices without evidence.'
      ), {
        table: {
          headers: ['Signal', 'Risk level', 'Action'],
          rows: [
            ['No tuning video', 'High', 'Walk away'],
            ['Mixed review photos', 'High', 'Verify seller identity'],
            ['Price under import floor', 'Very high', 'Assume retune budget'],
            ['Clear warranty + demos', 'Lower', 'Still compare tiers'],
          ],
        },
      }),
      sec('True cost math', paras(
        'Add retune, case upgrade, and emotional frustration when comparing cheap versus mid tier.',
        'Mid tier held five years often wins total cost of ownership.',
        'Deposits toward commission beat buying twice.'
      )),
      sec('Safer alternatives', paras(
        'Quality tongue drums while saving for handpan.',
        'Rent or borrow through community before buying unknown brands.',
        'Shop reputable ready inventory with return policies.'
      )),
    ],
    cta: { headline: 'Avoid buy-twice regret', body: 'Talk to us about realistic entry paths and timelines.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'custom-handpan-vs-ready-made',
    category: 'Compare',
    title: 'Custom Handpan vs Ready-Made: Timeline and Value',
    description:
      'Custom commissions personalize scale, finish, and layout. Ready-made drums ship faster when a demo already matches your ear.',
    h1: 'Custom handpan vs ready-made',
    readingMinutes: 9,
    keywords: ['custom handpan', 'ready made handpan'],
    relatedSlugs: ['commissioning-a-custom-drum', 'handpan-buyer-guide', 'best-handpan-drums-by-tier'],
    faqs: [
      faq('How long do customs take?', 'Weeks to months depending on queue and complexity. Ready shop pieces ship sooner when in stock.'),
      faq('Is custom always better sound?', 'Not automatically. Ready drums from the same maker share QC. Custom adds personalization, not guaranteed better tuning.'),
      faq('Can I customize finish only?', 'Many makers offer finish options on standard scales to save time versus full note customization.'),
    ],
    sections: [
      sec('When custom wins', paras(
        'You know exact scale intervals needed for repertoire.',
        'Finish or port details carry personal meaning.',
        'You accept wait for forge storytelling and fit.'
      )),
      sec('When ready-made wins', paras(
        'Gift deadlines or upcoming gigs require certainty.',
        'Shop demo already makes you say yes out loud.',
        'Budget prefers known total upfront without change orders.'
      ), {
        table: {
          headers: ['Factor', 'Custom commission', 'Ready-made shop'],
          rows: [
            ['Timeline', 'Longer', 'Shorter when stocked'],
            ['Scale choice', 'Tailored', 'Fixed demos'],
            ['Price clarity', 'Quote after brief', 'Listed price'],
            ['Story value', 'High', 'Still strong for Stillforge forge'],
          ],
        },
      }),
      sec('Hybrid approaches', paras(
        'Reserve scale from catalog with custom color.',
        'Deposit now, select notes after consult call.',
        'Buy ready while second custom builds for advanced player households.'
      )),
      sec('Stillforge path', paras(
        'Commissioning article walks form questions we ask.',
        'Shop updates when ready drums exist for immediate ship.',
        'Either path includes care guidance and scale context.'
      )),
    ],
    cta: { headline: 'Pick timeline or tailoring', body: 'Start commission or browse shop based on your deadline.', primaryTo: '/shop', primaryLabel: 'Visit the shop' },
  }),
  A({
    slug: 'handpan-shipping-and-care-cost',
    category: 'Compare',
    title: 'Handpan Shipping and Care Cost: Budget Beyond the Sticker',
    description:
      'Shipping insurance, cases, oils, and tuning visits add to handpan ownership. Plan total cost before checkout.',
    h1: 'Handpan shipping and care cost',
    readingMinutes: 8,
    keywords: ['handpan shipping', 'handpan case cost', 'handpan maintenance'],
    relatedSlugs: ['transporting-and-storing-a-handpan', 'handpan-care-and-rust-prevention', 'how-much-does-a-handpan-cost'],
    faqs: [
      faq('Should I insure shipping?', 'Yes for full declared value on expensive instruments. Document unboxing video.'),
      faq('How much is a good case?', 'Soft gig bags cost less; rigid travel cases cost more but protect commissions better.'),
      faq('Annual maintenance cost?', 'Oil, cloths, occasional tuning checks. Humid climates may need more frequent care products.'),
    ],
    sections: [
      sec('Shipping realities', paras(
        'Handpans are fragile despite steel toughness. Carriers need sturdy boxes and double boxing ideally.',
        'International buyers budget duties and delays.',
        'Acclimate indoors before aggressive playing after cold transit.'
      ), {
        table: {
          headers: ['Expense', 'Typical planning range (USD)', 'Notes'],
          rows: [
            ['Domestic insured ship', '$40 - $120', 'Size and speed dependent'],
            ['International ship', '$150 - $400+', 'Duties extra'],
            ['Rigid case', '$150 - $350', 'Worth it for travel-heavy owners'],
            ['Care kit', '$25 - $60', 'Oil, cloth, desiccant'],
            ['Tuning check visit', '$100 - $300', 'Varies by region and drift severity'],
          ],
        },
      }),
      sec('Care as cost prevention', paras(
        'Cheap oil substitutes can harm finish. Use maker-approved products.',
        'Bags prevent bumps that cause costly retunes.',
        'Stillforge care articles reduce guesswork.'
      )),
      sec('Travel tradeoffs', paras(
        'Flying with handpans may require seat purchases or cargo fees.',
        'Driving with case strapped beats loose trunk rolling.',
        'Rent venue lockers instead of leaving in hot cars.'
      )),
      sec('Insurance riders', paras(
        'Homeowners policies may need scheduled personal property riders.',
        'Photograph serial markers and tuning maps for claims.',
        'Store receipts digitally with instrument photos.'
      )),
    ],
    cta: { headline: 'Protect your investment', body: 'Read transporting guide and commission with case options.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'sound-healing-instruments-compared',
    category: 'Compare',
    title: 'Sound Healing Instruments Compared',
    description:
      'Compare handpans, singing bowls, gongs, chimes, and tongue drums for facilitators choosing a core toolkit.',
    h1: 'Sound healing instruments compared',
    readingMinutes: 11,
    keywords: ['sound healing instruments', 'handpan sound bath'],
    relatedSlugs: ['handpan-for-sound-baths', 'sound-healing-gift-guide', 'rav-vast-vs-handpan'],
    faqs: [
      faq('Do I need every instrument?', 'No. Start with one anchor voice and add layers as sessions define gaps.'),
      faq('Are handpans loud for yoga rooms?', 'Dynamics are controllable. Practice soft strikes and room placement.'),
      faq('Electronic backups?', 'Some facilitators use pads for travel; acoustic handpans offer live overtone richness.'),
    ],
    sections: [
      sec('Facilitator priorities', paras(
        'Sustain, transport weight, setup time, and client emotional response matter more than brand prestige.',
        'Ethical storytelling about instruments supports client trust.',
        'Stillforge handpans target live melodic beds with forge authenticity.'
      ), {
        table: {
          headers: ['Instrument', 'Sustain', 'Travel ease', 'Melody depth'],
          rows: [
            ['Handpan', 'Long', 'Moderate with case', 'High'],
            ['Singing bowl', 'Long', 'Good', 'Low melody'],
            ['Gong', 'Very long', 'Hard', 'Low melody'],
            ['Chimes', 'Short', 'Excellent', 'Moderate'],
            ['Steel tongue drum', 'Moderate', 'Excellent', 'Moderate'],
          ],
        },
      }),
      sec('Session pairing ideas', paras(
        'Handpan melody under bowl drones.',
        'Chimes for transitions; gong for openings sparingly.',
        'Avoid sonic clutter; leave space for breath.'
      )),
      sec('Client accessibility', paras(
        'Consider volume sensitivity and trauma-informed pacing.',
        'Never claim medical cures; describe relaxation and focus.',
        'Offer earplugs if anyone requests them.'
      )),
      sec('Budget sequencing', paras(
        'Buy one premium anchor instead of many thin instruments.',
        'Add tongue drum for travel gigs before buying giant gongs.',
        'Commission handpan when sessions repeat weekly.'
      )),
    ],
    cta: { headline: 'Build your bath toolkit', body: 'Commission a handpan voiced for long sustain sessions.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'acoustic-vs-electronic-handpan',
    category: 'Compare',
    title: 'Acoustic vs Electronic Handpan',
    description:
      'Electronic handpans offer headphones and MIDI; acoustic forged drums offer touch and outdoor freedom. Compare before choosing for practice or stage.',
    h1: 'Acoustic vs electronic handpan',
    readingMinutes: 9,
    keywords: ['electronic handpan', 'digital handpan'],
    relatedSlugs: ['recording-handpan-at-home', 'handpan-buyer-guide', 'playing-handpan-outdoors'],
    faqs: [
      faq('Can electronic replace acoustic?', 'For silent practice yes. For outdoor ritual and overtone feel, acoustic still wins for many players.'),
      faq('Do Stillforge make electronic drums?', 'Stillforge focuses acoustic forged steel. Some owners layer electronics in studio separately.'),
      faq('Latency concerns?', 'Quality electronic instruments minimize latency; cheap pads may frustrate rhythmic players.'),
    ],
    sections: [
      sec('Acoustic strengths', paras(
        'Full-body vibration, rich overtones, no charging.',
        'Campfires, retreats, and acoustic venues need no PA.',
        'Stillforge builds for this tactile experience.'
      )),
      sec('Electronic strengths', paras(
        'Headphone practice in apartments at night.',
        'MIDI integration for producers.',
        'Volume consistency for staged shows with FOH control.'
      ), {
        table: {
          headers: ['Need', 'Acoustic', 'Electronic'],
          rows: [
            ['Silent practice', 'Limited', 'Strong'],
            ['Outdoor play', 'Strong', 'Weak without amps'],
            ['Stage plug-in', 'Needs mics', 'Direct if supported'],
            ['Overtone nuance', 'Strong', 'Sample dependent'],
            ['Maintenance', 'Steel care', 'Firmware, power'],
          ],
        },
      }),
      sec('Hybrid workflows', paras(
        'Mic acoustic handpan for records while using electronic for sketching.',
        'Do not skip acoustic care if you mostly play electronic elsewhere.',
        'Compare recording guide for mic placement on acoustic.'
      )),
      sec('Buying advice', paras(
        'Try electronic only after knowing scales you love on acoustic demos.',
        'Avoid letting electronic timbre alone pick your scale identity.',
        'Commission acoustic from Stillforge when ready for primary instrument.'
      )),
    ],
    cta: { headline: 'Start acoustic, add digital later', body: 'Shop forged acoustic scales that inspire daily touch.', primaryTo: '/shop', primaryLabel: 'Visit the shop' },
  }),
  A({
    slug: 'handpan-size-and-note-count-guide',
    category: 'Compare',
    title: 'Handpan Size and Note Count Guide',
    description:
      'Diameter and note count change reach, weight, and harmonic density. Match body size and skill to layout.',
    h1: 'Handpan size and note count guide',
    readingMinutes: 10,
    keywords: ['handpan size', 'handpan notes', '21 inch handpan'],
    relatedSlugs: ['handpan-scales-compared', 'how-to-choose-a-scale-for-beginners', 'handpan-buyer-guide'],
    faqs: [
      faq('Is bigger always better?', 'Bigger shells can support lower fundamentals with more air movement but feel heavy. Smaller suits travel and smaller hands.'),
      faq('How many notes do pros want?', 'Many perform with nine to thirteen notes. More notes increase layout complexity.'),
      faq('Do kids need mini handpans?', 'Consider reach. Tongue drums or shared family sizes may work until arms grow.'),
    ],
    sections: [
      sec('Diameter basics', paras(
        'Common diameters cluster around popular maker standards. Measure hand span against layout photos when possible.',
        'Weight rises with diameter and note count.',
        'Stillforge commissions discuss ergonomics upfront.'
      ), {
        table: {
          headers: ['Notes (typical)', 'Feel', 'Best for'],
          rows: [
            ['7 - 8', 'Focused, compact', 'Travel, meditation minimalism'],
            ['9 - 10', 'Balanced choice', 'Most beginners and performers'],
            ['11 - 13', 'Dense layouts', 'Composers, wide range needs'],
            ['14+', 'Rare, complex', 'Advanced, custom only often'],
          ],
        },
      }),
      sec('Reach and posture', paras(
        'Players with shoulder issues may prefer tighter layouts.',
        'Stand height affects arm angle across diameters.',
        'Try seated and standing before finalizing commission.'
      )),
      sec('Harmonic density', paras(
        'More notes increase chance of wolf tones if tuning QC weak.',
        'Skilled makers manage coupling between neighboring notes.',
        'Listen for beating that never settles in demos.'
      )),
      sec('Case and travel', paras(
        'Larger drums need larger cases and airline headaches.',
        'Outdoor hikers may accept fewer notes for lighter packs.',
        'Shipping cost scales with box size.'
      )),
    ],
    cta: { headline: 'Size your layout', body: 'Tell us your hand span and travel habits in a commission brief.', primaryTo: '/commission', primaryLabel: 'Start a commission' },
  }),
  A({
    slug: 'where-to-buy-a-handpan',
    category: 'Compare',
    title: 'Where to Buy a Handpan Safely',
    description:
      'Buy from makers with clear demos, policies, and support channels. Avoid anonymous marketplaces without tuning accountability.',
    h1: 'Where to buy a handpan',
    readingMinutes: 9,
    keywords: ['where to buy handpan', 'handpan shop'],
    relatedSlugs: ['handpan-buyer-guide', 'cheap-handpan-warnings', 'custom-handpan-vs-ready-made'],
    faqs: [
      faq('Is buying direct from maker best?', 'Often yes for support and warranty clarity. Some reputable dealers exist with transparent maker partnerships.'),
      faq('Can I buy at festivals?', 'Try hands-on when possible. Still verify warranty and serial documentation before cash deals.'),
      faq('Does Stillforge sell online?', 'Use Stillforge shop and commission paths on this site for documented builds.'),
    ],
    sections: [
      sec('Preferred channels', paras(
        'Maker websites with named contact, demo videos, and written policies.',
        'Workshop pickups when geography allows hands-on comparison.',
        'Stillforge commission and shop flows document expectations up front.'
      )),
      sec('Channels to scrutinize', paras(
        'Anonymous marketplace dropships with stolen audio.',
        'Social ads with no maker identity or address.',
        'Too-good-to-be true flash sales without tuning proof.'
      )),
      sec('Used market tips', paras(
        'Meet in safe public places or use insured shipping with video unpack.',
        'Ask for tuning history and rust photos under notes.',
        'Price used against retune risk, not only new MSRP discounts.'
      )),
      sec('Geography and support', paras(
        'Domestic buyers simplify warranty shipping for repairs.',
        'International buyers confirm import duties and return feasibility.',
        'Time zones affect support response; note that in urgency plans.'
      )),
      sec('After you choose seller', paras(
        'Save all emails and invoices.',
        'Follow buyer guide checklist before paying deposit.',
        'Join play guides community content while waiting for build.'
      )),
    ],
    cta: { headline: 'Buy with documentation', body: 'Start at Stillforge shop or commission with clear policies.', primaryTo: '/shop', primaryLabel: 'Visit the shop' },
  }),
]
