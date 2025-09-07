import React, { useContext } from 'react'
import { AuthContext } from './Author'

function PrivatePage() {

  const {user,setUser,logout} = useContext(AuthContext);

  return (
    <div>
        <h2>Welcome Page</h2>
        <h2>Hello {user}</h2>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default PrivatePage