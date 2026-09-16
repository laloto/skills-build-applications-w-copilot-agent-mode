import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME
  const endpoint = codespaceName ? `https://${codespaceName}-8000.app.github.dev/api/users/` : 'http://localhost:8000/api/users/'
  useEffect(() => { fetchCollection(endpoint).then(setUsers).catch(() => setError('Members could not be loaded.')) }, [endpoint])
  return <section className="resource-page"><p className="eyebrow accent-label">The roster</p><h2>Members</h2><p className="muted resource-intro">Meet the people making progress at their own pace.</p>{error ? <p className="error-state">{error}</p> : <div className="member-list">{users.map((user) => <article className="member-row" key={user._id}><div className="avatar">{user.avatar || user.name?.slice(0, 2).toUpperCase()}</div><div><strong>{user.name}</strong><p>{user.email}</p></div><span className="level-pill">{user.fitnessLevel}</span></article>)}{!users.length && !error && <p className="empty-state">No members yet.</p>}</div>}</section>
}
