import React from 'react'

const Login = () => {
  return (
    <div className='py-36 items-center flex justify-center'>
      <div className='flex items-center justify-center border mt-12 w-[180vh] p-4 rounded-xl'>
        <div className='flex-col flex-1 gap-8 flex  justify-start '>
          <label htmlFor="" className='flex flex-col gap-2 text-xl'>Username
          <input type="text" name='username' placeholder='Username'  className=' px-6 py-3 rounded-xl outline-none'/>
          </label>
          <label htmlFor="" className='flex flex-col gap-2 text-xl'>Password
          <input type="password" name='password' placeholder='password' className=' px-6 py-3 rounded-xl outline-none'/>
          </label>
          <button className='bg-sky-500 px-6 py-4 rounded-xl'>Login</button>
          <span className='font-bold '>Dont have an account? <span className='text-sky-500'>Signup here</span></span>
        </div>
        <div className='flex flex-1'> 

        </div>
      </div>
    </div>
  )
}

export default Login