
import React from 'react'
import Bookings from '../Components/Bookings'
import Listbookings from '../Components/Listbookings'

const Reservation = () => {
  return (
    <div className='py-24'>
      <Bookings/>
      <Listbookings/>
    </div>
  )
}

export default Reservation