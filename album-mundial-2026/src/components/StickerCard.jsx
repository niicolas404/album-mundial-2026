function StickerCard({ id, number, name, group, status, onStatusChange }) {
  const statusStyles = {
    tengo: { backgroundColor: '#d4f5d4', borderColor: '#6bb76b' },
    repetida: { backgroundColor: '#fff4c2', borderColor: '#d1b800' },
    falta: { backgroundColor: '#e2e2e2', borderColor: '#8f8f8f' },
  }

  return (
    <article 
      className="sticker-card" 
      onClick={() => onStatusChange(id)}
      style={{
        padding: '1rem',
        border: '2px solid',
        borderRadius: '12px',
        width: '200px',
        margin: '0.5rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        color: '#1a1a1a',
        ...statusStyles[status],
      }}>
      <div style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.5rem', color: '#1a1a1a' }}>
        #{number}
      </div>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: '#1a1a1a' }}>{name}</h2>
      <p style={{ margin: 0, color: '#1a1a1a' }}>
        <strong>Grupo:</strong> {group}
      </p>
      <p style={{ margin: '0.75rem 0 0', fontWeight: '600', color: '#1a1a1a' }}>
        Estado: {status}
      </p>
    </article>
  )
}

export default StickerCard
