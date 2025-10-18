import './App.css'
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted by ',name);
    setName('')
  }

  return (
    <>
      <form onSubmit={(e) => {submitHandler(e)}}>
        <input type="text" 
              placeholder='Enter your name'
              value={name}   // Value comes from React state
              onChange={(e) => {
                setName(e.target.value);  // Updates state when user types
              }}  
        />
        <button>submit</button>
      </form>
    </>
  )
}

export default App
