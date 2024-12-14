import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container columns-2 justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="aspect-square" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="aspect-square" alt="React logo" />
        </a>
      </div>

      <div className="container bg-blue-400">
        <h1 className="">Testing</h1>
      </div>
      <div className="container">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="container">
        Click on the Vite and React logos to learn more
      </p>
      <div className="vimeoWrapper">
        <iframe className="vimeoIframe"
          src="https://player.vimeo.com/video/1039079248?autopause=0&amp;loop=1&amp;autoplay=1&amp;muted=1"
          //frameborder="0" 

          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="Respicardia_Injection">
        </iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  )
}

export default App
