// Renders a string with **bold** and [label](url) markup.
export default function RichText({ text }) {
  const parts = []
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g
  let last = 0
  let m
  let i = 0
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    if (m[1]) parts.push(<strong key={i++}>{m[1]}</strong>)
    else
      parts.push(
        <a key={i++} href={m[3]} target="_blank" rel="noreferrer">
          {m[2]}
        </a>,
      )
    last = re.lastIndex
  }
  if (last < text.length) parts.push(text.slice(last))
  return <>{parts}</>
}
