import React from 'react'
import { useLocation } from 'react-router-dom'

const DisplayData = () => {
    const location = useLocation()
    const {name, email, password} = location.state || {}
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gray-100'>
    <div className='p-6 bg-white rounded shadow-md'>
      <h1 className='text-2xl mb-4'>Submitted Data</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Password:</strong> {password}</p>
    </div>
  </div>
  )
}

export default DisplayData
