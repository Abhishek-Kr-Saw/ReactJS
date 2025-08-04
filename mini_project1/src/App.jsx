import { useState } from 'react'

function App() {
  const [color, setColor] = useState()

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-12 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
          <button onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
            >Red
            </button>
          <button onClick={() => setColor('green')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
            >Green
            </button>
          <button onClick={() => setColor('#0000ff')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}
            >Blue</button>
          <button onClick={() => setColor("violet")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "violet"}}
            >Violet</button>
          <button onClick={() => setColor('aqua')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "aqua"}}
            >Aqua</button>
          <button onClick={() => setColor('purple')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "purple"}}
            >Purple</button>

          <button onClick={() => setColor('grey')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "grey"}}
            >Grey</button>

          <button onClick={() => setColor('lavender')}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "lavender"}}
            >Lavender </button>

          <button onClick={() => setColor('black')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "black"}}
            >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
