function StickerCard({ number, name, group, status }) {
  const statusStyles = {
    tengo: { backgroundColor: '#d4f5d4', borderColor: '#6bb76b' },
    repetida: { backgroundColor: '#fff4c2', borderColor: '#d1b800' },
    falta: { backgroundColor: '#e2e2e2', borderColor: '#8f8f8f' },
  }

  return (
    <article className="sticker-card" style={{
      padding: '1rem',
      border: '1px solid',
      borderRadius: '12px',
      width: '200px',
      margin: '0.5rem',
      ...statusStyles[status],
    }}>
      <div style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.5rem' }}>
        #{number}
      </div>
      <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>{name}</h2>
      <p style={{ margin: 0, color: '#333' }}>
        <strong>Grupo:</strong> {group}
      </p>
      <p style={{ margin: '0.75rem 0 0', fontWeight: '600' }}>
        Estado: {status}
      </p>
    </article>
  )
}

export default StickerCard
