function AlbumSummary({ total, haveCount, repeatedCount, missingCount, completionPercent }) {
  return (
    <section style={{
      padding: '1rem',
      borderRadius: '12px',
      border: '1px solid #ddd',
      backgroundColor: '#fff',
      boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
      marginBottom: '1.5rem',
    }}>
      <h2 style={{ margin: '0 0 1rem', fontSize: '1.3rem' }}>Resumen del álbum</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
        <div style={{ padding: '0.75rem', borderRadius: '10px', backgroundColor: '#f5f7fa' }}>
          <div style={{ fontSize: '0.75rem', color: '#555' }}>Total figuritas</div>
          <div style={{ marginTop: '0.5rem', fontSize: '1.4rem', fontWeight: '700', color: '#111' }}>{total}</div>
        </div>
        <div style={{ padding: '0.75rem', borderRadius: '10px', backgroundColor: '#e6f9e6' }}>
          <div style={{ fontSize: '0.75rem', color: '#555' }}>Tengo</div>
          <div style={{ marginTop: '0.5rem', fontSize: '1.4rem', fontWeight: '700', color: '#16681d' }}>{haveCount}</div>
        </div>
        <div style={{ padding: '0.75rem', borderRadius: '10px', backgroundColor: '#fff9db' }}>
          <div style={{ fontSize: '0.75rem', color: '#555' }}>Repetidas</div>
          <div style={{ marginTop: '0.5rem', fontSize: '1.4rem', fontWeight: '700', color: '#7f6e00' }}>{repeatedCount}</div>
        </div>
        <div style={{ padding: '0.75rem', borderRadius: '10px', backgroundColor: '#f1f1f1' }}>
          <div style={{ fontSize: '0.75rem', color: '#555' }}>Faltan</div>
          <div style={{ marginTop: '0.5rem', fontSize: '1.4rem', fontWeight: '700', color: '#333' }}>{missingCount}</div>
        </div>
        <div style={{ gridColumn: '1 / -1', padding: '0.75rem', borderRadius: '10px', backgroundColor: '#eef6ff' }}>
          <div style={{ fontSize: '0.75rem', color: '#555' }}>Completitud</div>
          <div style={{ marginTop: '0.5rem', fontSize: '1.4rem', fontWeight: '700', color: '#0a4d95' }}>{completionPercent}%</div>
        </div>
      </div>
    </section>
  )
}

export default AlbumSummary
