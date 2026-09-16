import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME
  const endpoint = codespaceName ? `https://${codespaceName}-8000.app.github.dev/api/teams/` : 'http://localhost:8000/api/teams/'
  useEffect(() => { fetchCollection(endpoint).then(setTeams).catch(() => setError('Teams could not be loaded.')) }, [endpoint])
  return <section className="resource-page"><p className="eyebrow accent-label">Find your people</p><h2>Teams</h2><p className="muted resource-intro">Shared goals make the long route feel shorter.</p>{error ? <p className="error-state">{error}</p> : <div className="team-grid">{teams.map((team) => <article className="team-card" key={team._id}><div className="team-card-top"><span className="team-symbol">{team.name?.slice(0, 1)}</span><span className="tag">{team.totalPoints} pts</span></div><h3>{team.name}</h3><p>{team.motto}</p><small>{team.members?.length || 0} members</small></article>)}{!teams.length && !error && <p className="empty-state">No teams yet.</p>}</div>}</section>
}
