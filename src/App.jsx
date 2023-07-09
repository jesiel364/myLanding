import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import video from './assets/video.mp4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      
      <video loop className="backVideo" src={video} type="video/mp4" muted autoPlay>
      </video>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      
      </div>
    
    </>
  )
}

export default App
