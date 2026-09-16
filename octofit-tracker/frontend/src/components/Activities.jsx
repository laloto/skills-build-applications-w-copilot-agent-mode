import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME
  const endpoint = codespaceName ? `https://${codespaceName}-8000.app.github.dev/api/activities/` : 'http://localhost:8000/api/activities/'
  useEffect(() => { fetchCollection(endpoint).then(setActivities).catch(() => setError('Activities could not be loaded.')) }, [endpoint])
  return <ResourcePage eyebrow="Movement log" title="Activities" intro="A clear view of the work already in motion.">{error ? <ErrorState message={error} /> : <div className="resource-list">{activities.map((activity) => <article className="list-row" key={activity._id}><div className="activity-icon">{activity.type?.slice(0, 1).toUpperCase()}</div><div><strong>{activity.type}</strong><p>{activity.user?.name || 'Athlete'} · {activity.durationMinutes} min</p></div><span className="row-value">{activity.calories} kcal</span></article>)}{!activities.length && !error && <EmptyState />}</div>}</ResourcePage>
}
function ResourcePage({ eyebrow, title, intro, children }) { return <section className="resource-page"><p className="eyebrow accent-label">{eyebrow}</p><h2>{title}</h2><p className="muted resource-intro">{intro}</p>{children}</section> }
function EmptyState() { return <p className="empty-state">No records yet.</p> }
function ErrorState({ message }) { return <p className="error-state">{message}</p> }
