import sizes from '../imageSizes.json'

// A screenshot with known dimensions, so the page doesn't jump while images load.
export default function Shot({ k, alt, eager = false, className = '' }) {
  const [w, h] = sizes[k] || [1600, 1000]
  return (
    <img
      className={`shot ${className}`}
      src={`${import.meta.env.BASE_URL}images/${k}.webp`}
      alt={alt}
      width={w}
      height={h}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
