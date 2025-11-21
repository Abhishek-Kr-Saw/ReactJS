import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex items-center justify-between px-10 py-3 bg-cyan-800'>
        <h2 className='text-2xl font-bold'>Sheryians</h2>
        <div className='flex gap-6'>
            <Link className='text-lg font-medium' to='/'>Home</Link>
            <Link className='text-lg font-medium' to='/about'>About</Link>
            <Link className='text-lg font-medium' to='/courses'>Courses</Link>
            <Link className='text-lg font-medium' to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar