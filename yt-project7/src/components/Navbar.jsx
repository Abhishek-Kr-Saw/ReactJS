import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav'>
        <h2>Sheriyans</h2>
        <div className='insidenav'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar