import React from 'react'
import { useContext } from 'react';
import { AuthContext } from './Author';
// import { useAuth } from './Author'

function LoginPage() {

  const {username,login,password,setUsername,setPassword} = useContext(AuthContext);

  return (
    <div >
        <h1>Login Page</h1>
        <input type='text' placeholder='Enter your name' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br></br>
        <input type='password' placeholder='Enter Password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <button 
          onClick={login}> 
          Login</button>
    </div>
  )
}

export default LoginPage