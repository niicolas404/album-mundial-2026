import { stickers } from './data/stickers'
import StickerCard from './components/StickerCard'
import './App.css'

function App() {
  console.log(stickers)

  const sampleStickers = stickers.slice(0, 5).map((sticker, index) => ({
    ...sticker,
    status: ['tengo', 'repetida', 'falta', 'tengo', 'repetida'][index],
  }))

  return (
    <main>
      <h1>Álbum Mundial 2026</h1>
      <div className="sticker-list">
        {sampleStickers.map((sticker) => (
          <StickerCard
            key={sticker.code}
            number={sticker.code}
            name={sticker.name}
            group={sticker.group ?? sticker.section}
            status={sticker.status}
          />
        ))}
      </div>
    </main>
  )
}

export default App
