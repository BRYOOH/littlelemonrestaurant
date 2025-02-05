import React, { useState } from 'react'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import { AddReservation } from '../API';

const Bookings = () => {
  const [reserveData,setReserveData]=useState({
    people:"",
    date:"",
    gender:"",
    location:""
  });

  const handleChange=(e)=>{
    setReserveData({...reserveData,[e.target.name]:e.target.value})
  };

  const handleDateChange = (date)=>{
    setReserveData({...reserveData,date:date.value})
  };

  const checkValid=()=>{
    if(!reserveData.people || !reserveData.location || !reserveData.gender || !reserveData.date){
      console.log("Invalid input fields");
      return false;
    }
    return true;
  }

  const handleSubmit = async()=> {
        if(checkValid){
          try {
            const response = await AddReservation(reserveData);
            if(response && response.data){
              alert("A reservation has been added successifully ");
          }
          } catch (error) {
            console.log("There was an error",error);
          }
        }
  };

  return (
    <div>
        <div className='p-4 flex flex-col items-center'>
        <h1 className='border border-sky-500 text-xl text-sky-500 p-4 rounded-2xl font-bold uppercase '>&#10038; Reservation</h1>
        <div className='flex items-center mt-20 justify-center gap-16 text-xl border p-10 rounded-xl'>
         <label className='text-xl flex gap-10 items-center'>
          No people:
         <input type="text" name='people' value={reserveData.people} onChange={handleChange} className=' px-6 py-4 w-[70px] text-black outline-none ' />
        </label> 
        <div className='text-black' >
            <DatePickerComponent name='date' value={reserveData.date} onChange={handleDateChange} className='text-black'></DatePickerComponent>
        </div>
        
        <div className='flex gap-6 items-center'>Gender:
        <select id="" name='gender' value={reserveData.gender} onChange={handleChange} className='text-black/60 outline-none uppercase p-3 font-bold bg-sky-700 
        text-xl'>
        <option value="male">Male</option>
        <option value="Female">Female</option>
        <option value="other">Others</option>
        </select>
        </div>
        
         <div className='flex gap-6 items-center'> Location:
          <select name="location" value={reserveData.location} onChange={handleChange}className='text-black/60 uppercase outline-none p-4 font-bold bg-sky-700 text-xl'>
            <option value="Nairobi">Nairobi</option>
            <option value="Kisumu">Kisumu</option>
            <option value="Mombasa">"Mombasa</option>
            <option value="Eldoret">Eldoret</option>
            <option value="Nakuru">Nakuru</option>
          </select>
          </div>      
        <button onClick={handleSubmit} className='px-8 py-3 bg-sky-500 uppercase rounded-xl'>Book </button>
       </div>
      </div>
    </div>
  )
}

export default Bookings