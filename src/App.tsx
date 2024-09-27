import { useState } from 'react'
import './App.css'
import AppBtn from './AppBtn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppBtn></AppBtn>
    </>
  )
}

export default App
