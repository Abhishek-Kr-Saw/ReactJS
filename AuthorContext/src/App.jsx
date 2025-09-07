import { useContext, useState } from 'react'
import './App.css'
import LoginPage from './LoginPage'
import PrivatePage from './PrivatePage'
import { AuthContext } from './Author'

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <div className='App'>
        {isAuthenticated() ? <PrivatePage /> : <LoginPage />} 
      </div>
    </>
  )
}

export default App
