import { useInView } from '../hooks/useInView'

export default function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  variant = 'up',
  once = true,
  style,
  ...rest
}) {
  const { ref, inView } = useInView({ once })
  const classes = [
    'reveal',
    `reveal-${variant}`,
    inView ? 'is-inview' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const mergedStyle = {
    ...(style || {}),
    ...(delay ? { '--reveal-delay': `${delay}ms` } : {}),
  }

  return (
    <Tag
      ref={ref}
      className={classes}
      style={Object.keys(mergedStyle).length ? mergedStyle : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
