export const DATES = { publishedAt: '2026-07-01', updatedAt: '2026-07-17' }

export function A(o) {
  return {
    ...DATES,
    readingMinutes: o.readingMinutes ?? 9,
    keywords: o.keywords ?? [],
    relatedSlugs: o.relatedSlugs ?? [],
    schemaType: o.schemaType ?? 'Article',
    faqs: o.faqs ?? [],
    sections: o.sections ?? [],
    cta: o.cta ?? {
      headline: 'Ready to hear it in your hands?',
      body: 'Stillforge forges melodic drums from propane tanks with scales tuned for calm play. Commission a build or explore the shop.',
      primaryTo: '/commission',
      primaryLabel: 'Start a commission',
    },
    ...o,
  }
}

export function paras(...text) {
  return text
}

export function sec(h2, paragraphs, extra = {}) {
  return { h2, paragraphs, ...extra }
}

export function faq(q, a) {
  return { q, a }
}
