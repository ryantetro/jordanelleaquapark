import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>404 - Page Not Found</h1>
      <p style={{ marginBottom: '2rem' }}>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={{
        display: 'inline-block',
        padding: '0.75rem 1.5rem',
        background: '#F7C873',
        color: '#013A63',
        borderRadius: '0.5rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        fontSize: '1.1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}>
        Go Home
      </Link>
    </div>
  )
} 