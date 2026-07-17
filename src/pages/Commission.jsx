import Seo from '../components/Seo'
import InquiryForm from '../components/InquiryForm'
import { processSteps } from '../data/products'

export default function Commission() {
  return (
    <>
      <Seo
        title="Commission a Custom Melodic Drum"
        description="Commission a Stillforge propane-tank forged melodic drum. Share your scale, setting, and timeline."
        path="/commission"
      />
      <section className="section">
        <div className="container split-2">
          <div>
            <p className="eyebrow">Commission</p>
            <h1>Tell the forge what you want to hear.</h1>
            <p className="lede">
              Custom builds start with a conversation: where you will play, which mood you want, and
              how many notes feel right in your hands.
            </p>
            <ol style={{ color: 'var(--ink-muted)', paddingLeft: '1.1rem' }}>
              {processSteps.map((step) => (
                <li key={step.title} style={{ marginBottom: '0.85rem' }}>
                  <strong style={{ color: 'var(--brass-hot)' }}>{step.title}.</strong> {step.body}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <InquiryForm defaultInterest="commission" />
          </div>
        </div>
      </section>
    </>
  )
}
