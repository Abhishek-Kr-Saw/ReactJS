import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(15) //let count = 15

  const addValue = () =>{
    if (count < 20) {
      setCount(prevCount => prevCount + 1);
    } else {
      alert("Can't go more than 20")
    }
  }

  const removeValue = () =>{
    if(count > 0){
      setCount((prevCounter) => prevCounter - 1)
    }else{
      alert("Can't go negative")
    }
  }

  return (
    <>
      
      <h1>Hello!!  I,m a counter</h1>
      <h3>Counter value : {count}</h3>
      <button
        onClick={addValue}
        >Increase value</button>
      <br /><br />
      <button
        onClick = {removeValue}
        >Decrease value</button>
    </>
  )
}

export default App
