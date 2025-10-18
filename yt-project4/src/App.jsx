

import './App.css'

function App() {
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit Prevented");
  }

  return (
    <>
      <form onSubmit={(e) => {submitHandler(e)}}>
        <input type="text" placeholder='Enter your name'/>
        <button>submit</button>
      </form>
    </>
  )
}

export default App
