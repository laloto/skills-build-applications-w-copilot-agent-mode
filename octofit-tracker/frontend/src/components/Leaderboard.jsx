import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function Leaderboard() {
  const [rows, setRows] = useState([])
  const [error, setError] = useState('')
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME
  const endpoint = codespaceName ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/` : 'http://localhost:8000/api/leaderboard/'
  useEffect(() => { fetchCollection(endpoint).then(setRows).catch(() => setError('Leaderboard could not be loaded.')) }, [endpoint])
  return <section className="resource-page"><p className="eyebrow accent-label">September 2026</p><h2>Leaderboard</h2><p className="muted resource-intro">A little friendly pressure, measured fairly.</p>{error ? <p className="error-state">{error}</p> : <div className="leaderboard-list">{rows.map((row, index) => <article className={`leader-row ${index === 0 ? 'leader-row-top' : ''}`} key={row._id}><span className="rank">{String(row.rank || index + 1).padStart(2, '0')}</span><div className="avatar">{row.user?.name?.slice(0, 2).toUpperCase() || 'OF'}</div><div className="leader-name"><strong>{row.user?.name || 'Athlete'}</strong><p>{row.team?.name || 'Independent'}</p></div><strong className="points">{row.points} pts</strong></article>)}{!rows.length && !error && <p className="empty-state">No rankings yet.</p>}</div>}</section>
}
