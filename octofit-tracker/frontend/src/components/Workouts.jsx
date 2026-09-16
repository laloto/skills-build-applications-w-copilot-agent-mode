import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME
  const endpoint = codespaceName ? `https://${codespaceName}-8000.app.github.dev/api/workouts/` : 'http://localhost:8000/api/workouts/'
  useEffect(() => { fetchCollection(endpoint).then(setWorkouts).catch(() => setError('Workouts could not be loaded.')) }, [endpoint])
  return <section className="resource-page"><p className="eyebrow accent-label">Your next session</p><h2>Workouts</h2><p className="muted resource-intro">Choose something that meets you where you are today.</p>{error ? <p className="error-state">{error}</p> : <div className="workout-grid">{workouts.map((workout) => <article className="workout-card" key={workout._id}><div className="workout-art"><span>{workout.category?.slice(0, 1).toUpperCase()}</span></div><div className="workout-copy"><div className="card-meta"><span>{workout.category}</span><span>{workout.durationMinutes} min</span></div><h3>{workout.title}</h3><p>{workout.description}</p><button type="button" className="text-action">View session <span>↗</span></button></div></article>)}{!workouts.length && !error && <p className="empty-state">No workouts yet.</p>}</div>}</section>
}
