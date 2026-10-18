import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="wrap page-head notfound">
      <h1 className="page-title">This page doesn't exist</h1>
      <p className="page-lede">The link may be old or mistyped. The work is all here:</p>
      <div className="actions">
        <Link className="btn" to="/projects">See the work</Link>
        <Link className="btn btn-quiet" to="/">Go to the home page</Link>
      </div>
    </div>
  )
}
