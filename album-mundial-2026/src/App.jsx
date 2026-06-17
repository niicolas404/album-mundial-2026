import { useState } from 'react'
import { stickers } from './data/stickers'
import StickerCard from './components/StickerCard'
import './App.css'

function App() {
  console.log(stickers)

  const sampleStickers = stickers.slice(0, 5)
  
  // Inicializar todos los estados en "falta"
  const [stickerStatus, setStickerStatus] = useState(() => {
    const initialState = {}
    sampleStickers.forEach((sticker) => {
      initialState[sticker.id] = 'falta'
    })
    return initialState
  })

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

  return (
    <main>
      <h1>Álbum Mundial 2026</h1>
      <div className="sticker-list">
        {sampleStickers.map((sticker) => (
          <StickerCard
            key={sticker.code}
            id={sticker.id}
            number={sticker.code}
            name={sticker.name}
            group={sticker.group ?? sticker.section}
            status={stickerStatus[sticker.id]}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </main>
  )
}

export default App
