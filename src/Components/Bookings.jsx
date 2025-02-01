import React from 'react'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'

const Bookings = () => {
  return (
    <div>
        <div className='p-4 flex flex-col items-center'>
        <h1 className='border border-sky-500 text-xl text-sky-500 p-4 rounded-2xl font-bold uppercase '>&#10038; Reservation</h1>
        <div className='flex items-center mt-20 justify-center gap-16 text-xl border p-10 rounded-xl'>
         <label className='text-xl flex gap-10 items-center'>
          No people:
         <input type="text" className=' px-6 py-4 w-[70px] text-black outline-none ' />
        </label> 
        <div className='text-white'>
            <DatePickerComponent className='text-white'></DatePickerComponent>
        </div>
        
        <div className='flex gap-6 items-center'>Gender:
        <select id="" name="category" className='text-black/60 outline-none uppercase p-3 font-bold bg-sky-700 
        text-xl'>
        <option value="male">Male</option>
        <option value="Female">Female</option>
        <option value="other">Others</option>
        </select>
        </div>
        
         <div className='flex gap-6 items-center'> Location:
          <select name="location" id="" className='text-black/60 uppercase outline-none p-4 font-bold bg-sky-700 text-xl'>
            <option value="Nairobi">Nairobi</option>
            <option value="Kisumu">Kisumu</option>
            <option value="Mombasa">"Mombasa</option>
            <option value="Eldoret">Eldoret</option>
            <option value="Nakuru">Nakuru</option>
          </select>
          </div>      
        <button className='px-8 py-3 bg-sky-500 uppercase rounded-xl'>Book </button>
       </div>
      </div>
    </div>
  )
}

export default Bookings