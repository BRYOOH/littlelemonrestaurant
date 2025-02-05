import React from 'react'
import upload from '../Assets/upload.png'

const UserProfile = () => {
  return (
    <div className='py-24 p-4 flex items-center justify-center'>
      <div className='flex items-center flex-row-reverse justify-center gap-4 mt-24 w-[200vh] '>
        <div className='flex flex-1 bg-foodbg items-center text-sky-700 justify-center bg-center h-full min-h-screen text-7xl font-bold text-right  '>
          Update your credentials
        </div>
        <div className='flex flex-1 flex-col gap-6'>
        <div className="p-item">
        <label htmlFor="file-input" className='text-xl text-black rounded-xl'> Upload user profile pic
          <img src={upload} className='w-52 cursor-pointer rounded-full' alt="" />
        </label>
        <input  type="file" name='image' id='file-input' hidden/>
      </div>
        <label htmlFor="" className='flex flex-col gap-2 text-xl  text-black'>Reset Username
          <input type="text" name='username' placeholder='Input new username'  className=' px-6 text-black py-3 rounded-xl outline-none'/>
          </label>
          <label htmlFor="" className='flex flex-col gap-2 text-xl  text-black'>Reset Password
          <input type="password" name='password' placeholder='Input new password' className=' px-6 py-3 text-black rounded-xl outline-none'/>
          </label>
          <select id="" name="category" className='text-black/60 outline-none w-[30vh] uppercase p-3 font-bold bg-sky-700 
        text-xl'>
        <option value="male">Male</option>
        <option value="Female">Female</option>
        <option value="other">Others</option>
        </select>
        <button className='w-[20vh] bg-sky-500 p-2 text-xl rounded-xl'>EDIT</button>
        </div>
        </div>
      </div>

  )
}

export default UserProfile