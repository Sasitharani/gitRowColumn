import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-red-50"> 
      <div className="grid grid-cols-3 border-2 border-gray-500 gap-2">
        <div className="border-2 border-green-400 h-48 flex  items-center ">grid grid-cols-3</div>
        <div className="border-2 border-green-400 h-48">grid grid-cols-3</div>
        <div className="border-2 border-green-400 h-48">grid grid-cols-3</div>
      </div>
      <div className="grid grid-rows-3 border-2 border-yellow-800 gap-2">
        <div className="border-2 border-yellow-400 h-11">grid-rows-3</div>
        <div className="border-2 border-yellow-400 h-11">grid-rows-3</div>
        <div className="border-2 border-yellow-400 h-11">grid-rows-3</div>
      </div>
    </div>
    </>
  )
}

export default App
