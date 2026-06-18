import { useEffect, useState } from 'react'
import { stickers } from './data/stickers'
import AlbumSummary from './components/AlbumSummary'
import StickerCard from './components/StickerCard'
import './App.css'

function App() {
  console.log(stickers)

  const sampleStickers = stickers.slice(0, 5)
  
  // Inicializar el estado usando localStorage si existe
  const [stickerStatus, setStickerStatus] = useState(() => {
    const initialState = {}
    sampleStickers.forEach((sticker) => {
      initialState[sticker.id] = 'falta'
    })

    if (typeof window === 'undefined') {
      return initialState
    }

    try {
      const saved = localStorage.getItem('stickerStatus')
      if (!saved) {
        return initialState
      }

      const parsed = JSON.parse(saved)
      sampleStickers.forEach((sticker) => {
        if (parsed[sticker.id]) {
          initialState[sticker.id] = parsed[sticker.id]
        }
      })
    } catch (error) {
      console.warn('No se pudo cargar el estado de localStorage:', error)
    }

    return initialState
  })

  // Guardar estado en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem('stickerStatus', JSON.stringify(stickerStatus))
  }, [stickerStatus])

  // Estados para filtros
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('todas')

  // Función para alternar el estado: falta → tengo → repetida → falta
  const handleStatusChange = (id) => {
    setStickerStatus((prevStatus) => {
      const currentStatus = prevStatus[id]
      const statusCycle = { falta: 'tengo', tengo: 'repetida', repetida: 'falta' }
      return {
        ...prevStatus,
        [id]: statusCycle[currentStatus],
      }
    })
  }

  // Estadísticas del álbum
  const totalStickers = sampleStickers.length
  const haveCount = sampleStickers.filter((sticker) => stickerStatus[sticker.id] === 'tengo').length
  const repeatedCount = sampleStickers.filter((sticker) => stickerStatus[sticker.id] === 'repetida').length
  const missingCount = sampleStickers.filter((sticker) => stickerStatus[sticker.id] === 'falta').length
  const completionPercent = totalStickers ? Math.round((haveCount / totalStickers) * 100) : 0

  // Filtrar figuritas por búsqueda y estado
  const filteredStickers = sampleStickers.filter((sticker) => {
    // Filtro de búsqueda (nombre o número)
    const matchesSearch = 
      sticker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sticker.code.toLowerCase().includes(searchTerm.toLowerCase())

    // Filtro de estado
    const currentStatus = stickerStatus[sticker.id]
    const matchesStatus = statusFilter === 'todas' || currentStatus === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <main>
      <h1>Álbum Mundial 2026</h1>

      <AlbumSummary
        total={totalStickers}
        haveCount={haveCount}
        repeatedCount={repeatedCount}
        missingCount={missingCount}
        completionPercent={completionPercent}
      />

      {/* Barra de búsqueda */}
      <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
          Buscar por nombre o número:
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Ej: Messi, ARG1..."
          style={{
            width: '100%',
            maxWidth: '300px',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        />
      </div>

      {/* Filtros por estado */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
          Filtrar por estado:
        </label>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['todas', 'tengo', 'repetida', 'falta'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: statusFilter === status ? '#4CAF50' : '#ddd',
                color: statusFilter === status ? 'white' : 'black',
                cursor: 'pointer',
                fontWeight: statusFilter === status ? '600' : '400',
                transition: 'all 0.3s ease',
              }}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Contador de resultados */}
      <div style={{ marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '600' }}>
        Total visible: <span style={{ color: '#4CAF50' }}>{filteredStickers.length}</span> de {sampleStickers.length}
      </div>

      {/* Lista de figuritas */}
      <div className="sticker-list">
        {filteredStickers.length > 0 ? (
          filteredStickers.map((sticker) => (
            <StickerCard
              key={sticker.code}
              id={sticker.id}
              number={sticker.code}
              name={sticker.name}
              group={sticker.group ?? sticker.section}
              status={stickerStatus[sticker.id]}
              onStatusChange={handleStatusChange}
            />
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#999', fontSize: '1.1rem' }}>
            No se encontraron figuritas con los filtros aplicados
          </p>
        )}
      </div>
    </main>
  )
}

export default App
