import { useState } from 'react'
import './App.css'
import Lottery from './Lottery.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Lottery n={4} winninSum={14}/>
    </>
  )
}

export default App
