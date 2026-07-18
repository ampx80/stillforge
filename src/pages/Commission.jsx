import AmbientField from '../components/AmbientField'
import CommissionPath from '../components/CommissionPath'
import InquiryForm from '../components/InquiryForm'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'

export default function Commission() {
  return (
    <>
      <Seo
        title="Commission a Custom Melodic Drum"
        description="Commission a Stillforge propane-tank forged melodic drum. Share your scale, setting, and timeline."
        path="/commission"
      />
      <section className="page-hero">
        <AmbientField intensity="soft" />
        <div className="container">
          <Reveal>
            <p className="eyebrow">Commission</p>
            <h1>Tell the forge what you want to hear.</h1>
            <p className="lede">
              Custom builds start with a conversation: where you will play, which mood you want, and
              how many notes feel right in your hands.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split-2">
          <Reveal>
            <CommissionPath />
          </Reveal>
          <Reveal delay={120}>
            <InquiryForm defaultInterest="commission" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
