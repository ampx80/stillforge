import { useInView } from '../hooks/useInView'

const STEPS = [
  {
    n: '01',
    title: 'Inquire',
    body: 'Share scale, setting, and timeline. A human reads every note.',
  },
  {
    n: '02',
    title: 'Forge',
    body: 'Tank becomes shell. Tone fields form. Progress photos keep you close.',
  },
  {
    n: '03',
    title: 'Voice',
    body: 'Final tuning, finish, and a drum ready for water, porch, or quiet room.',
  },
]

export default function CommissionPath() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  return (
    <ol ref={ref} className={`commission-path${inView ? ' is-drawn' : ''}`}>
      {STEPS.map((step, i) => (
        <li key={step.n} className="commission-step" style={{ '--i': i }}>
          <span className="commission-n">{step.n}</span>
          <div className="commission-step-body">
            <strong>{step.title}</strong>
            <p>{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
