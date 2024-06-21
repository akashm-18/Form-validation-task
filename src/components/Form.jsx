import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    const validate = () => {
        const errors = {}

        const validEmailReference = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!name) {
            errors.name = "Name need to be Filled"
        }

        if(!email) {
            errors.email = "Email need to be Filled"
        } else if (!(validEmailReference.test(email))) {
            errors.email = "Enter valid email Address"
        }

        if(password.length < 6) {
            errors.password = "Pass size needs to 6 or more";
        }

        return errors

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validate();

        if(Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors)
        } else {
            setErrors({})
            navigate("/display" , { state : {name, email, password} })
        }

        console.log(name, email, password);
    }

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-5'>
      <div className='flex flex-col'>
          <input
            className='border-4 p-2 rounded'
            type="text"
            value={name}
            placeholder='Enter your name'
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className='text-red-500'>{errors.name}</span>}
        </div>

        <div className='flex flex-col'>
          <input
            className='border-4 p-2 rounded'
            type="text"
            value={email}
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className='text-red-500'>{errors.email}</span>}
        </div>

        <div className='flex flex-col'>
          <input
            className='border-4 p-2 rounded'
            type="text"
            value={password}
            placeholder='Enter your Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className='text-red-500'>{errors.password}</span>}
        </div>

        <button type='submit' className='bg-blue-500 px-4 py-2 rounded-lg'>Submit</button>
      </form>

    </div>
  )
}

export default Form
