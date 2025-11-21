import { useNavigate } from 'react-router-dom'

function Navbar2() {

    const navigate = useNavigate();

  return (
    <div className='py-2 px-5 mt-8'>
        <button
            onClick={() => {
                navigate('/')
            }}
            className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'
        >
            Back to Home
        </button>
        <button
            onClick={() => {
                navigate(-1)
            }}
            className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'
        >
            Prev
        </button>
        <button
            onClick={() => {
                navigate(+1)
            }}
            className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'
        >
            Next
        </button>

    </div>
  )
}

export default Navbar2