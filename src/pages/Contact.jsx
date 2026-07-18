import AmbientField from '../components/AmbientField'
import InquiryForm from '../components/InquiryForm'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Stillforge"
        description="Contact Stillforge for commissions, available drums, workshop questions, and collaborations."
        path="/contact"
      />
      <section className="page-hero">
        <AmbientField intensity="soft" />
        <div className="container">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1>Write the forge.</h1>
            <p className="lede">
              Commissions, gifts, press, or a simple question about scales. Send a note and expect a
              human reply - not an autoresponder maze.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split-2">
          <Reveal>
            <ul style={{ color: 'var(--ink-muted)', marginTop: 0 }}>
              <li>Custom drum inquiries welcome</li>
              <li>Gift timelines: write early for holidays</li>
              <li>Workshop visits by arrangement</li>
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <InquiryForm defaultInterest="other" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
