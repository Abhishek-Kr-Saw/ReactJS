import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} =  useParams()
  return (
    <div className="bg-gray-600 w-[100vw] h-[100vh] flex items-center justify-center text-white text-3xl p-4">User : {userId}</div>
  )
}

export default User