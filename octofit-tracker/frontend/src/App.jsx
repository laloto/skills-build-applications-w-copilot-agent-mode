import { NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

function App() {
  const location = useLocation()
  const pageTitle = location.pathname === '/' ? 'Your training pulse' : location.pathname.slice(1)

  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand-mark">OF</div>
      <div><p className="eyebrow">Octofit</p><h1>Training desk</h1></div>
      <nav className="main-nav" aria-label="Primary navigation">
        <NavLink end to="/">Overview</NavLink><NavLink to="/activities">Activities</NavLink><NavLink to="/leaderboard">Leaderboard</NavLink><NavLink to="/teams">Teams</NavLink><NavLink to="/users">Members</NavLink><NavLink to="/workouts">Workouts</NavLink>
      </nav>
      <div className="sidebar-note"><span className="pulse-dot" /> <span>Syncing live data</span></div>
    </aside>
    <main className="main-content">
      <header className="topbar"><div><p className="eyebrow accent-label">Workspace / {pageTitle}</p><p className="topbar-date">Wednesday, September 16, 2026</p></div><div className="profile-chip"><span>MC</span> Maya Chen</div></header>
      <div className="page-content"><Routes>
        <Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} /><Route path="*" element={<Navigate to="/" replace />} />
      </Routes></div>
    </main>
  </div>
}

function Overview() {
  return <>
    <section className="welcome-row"><div><p className="eyebrow accent-label">Daily briefing</p><h2>Keep the streak alive.</h2><p className="muted">Three sessions logged this week. Your next good choice is close.</p></div><NavLink className="primary-action" to="/workouts">Find a workout <span>→</span></NavLink></section>
    <section className="stat-grid" aria-label="Weekly summary"><article className="stat-card stat-card-dark"><span>Weekly points</span><strong>1,840</strong><small>+18% from last week</small></article><article className="stat-card"><span>Active minutes</span><strong>127</strong><small>Goal: 180 minutes</small></article><article className="stat-card"><span>Current rank</span><strong>#08</strong><small>Top 12% of Octofit</small></article></section>
    <section className="overview-grid"><div className="feature-panel"><div className="panel-heading"><div><p className="eyebrow">This week</p><h3>Momentum map</h3></div><span className="tag">On track</span></div><div className="week-bars">{['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => <div className="day-bar" key={`${day}-${index}`}><div className={`bar bar-${index}`} /><span>{day}</span></div>)}</div></div><div className="quote-panel"><span className="quote-mark">“</span><p>Consistency is a quiet kind of courage.</p><small>Octofit field note 04</small></div></section>
  </>
}

export default App
