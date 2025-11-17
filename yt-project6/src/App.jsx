import {useState} from 'react'


function App() {

  const [title, setTitle] = useState('');
  const [detail,setDetail] = useState('');

  const [task,setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title,detail})
    setTask(copyTask);  

    // console.log(title,detail)
    setTitle('')
    setDetail('')
  }


  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1) //(start index,number of element)

    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) =>{
        submitHandler(e)
      }} 
        className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

        {/* Input heading */}
        <input  
          type="text" 
          placeholder='Enter the title'
          className='px-5 w-full py-2 border-2 outline-none rounded'
          value={title}
          onChange = {(e) =>{
            setTitle(e.target.value)
          }}
        />

        {/* Detail about the heading */}
        <textarea  
          type="text" 
          placeholder='Enter the detail'
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded '
          value={detail}
          onChange = {(e) =>{
            setDetail(e.target.value)
          }}
        />

        <button
          className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'
        >
          Add Note
        </button>
      </form>
      
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
          <h1 className='text-4xl font-bold'>Recent Notes</h1>
          <div className='flex flex-wrap item-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
            {
              task.map(function(elem,idx){
                return <div key={idx} 
                className='flex justify-between flex-col items-start relative h-52 w-40 rounded-xl  pt-9 p-4 bg-center bg-no-repeat bg-cover'
                style={{
                  backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")`
                }}>
              
                  <div>
                    <h3 className='leading-tight text-lg font-bold text-gray-900'>{elem.title}</h3>
                    <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.detail}</p>
                  </div>

                  <button onClick={() => {
                    deleteNote(idx)
                  }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>

                </div>
              })
            }
          </div>
      </div>  
    </div>
  )
}

export default App