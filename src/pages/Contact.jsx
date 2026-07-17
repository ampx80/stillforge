import Seo from '../components/Seo'
import InquiryForm from '../components/InquiryForm'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Stillforge"
        description="Contact Stillforge for commissions, available drums, workshop questions, and collaborations."
        path="/contact"
      />
      <section className="section">
        <div className="container split-2">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Write the forge.</h1>
            <p className="lede">
              Commissions, gifts, press, or a simple question about scales. Send a note and expect a
              human reply - not an autoresponder maze.
            </p>
            <ul style={{ color: 'var(--ink-muted)' }}>
              <li>Custom drum inquiries welcome</li>
              <li>Gift timelines: write early for holidays</li>
              <li>Workshop visits by arrangement</li>
            </ul>
          </div>
          <InquiryForm defaultInterest="other" />
        </div>
      </section>
    </>
  )
}
