import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(prev => prev+1);
  }

  const decreaseCount = () => {
    setCount(prev => prev-1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </>
  )
}

export default App
