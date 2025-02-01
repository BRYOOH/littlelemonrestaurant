import React from 'react'

const Listbookings = () => {
  return (
    <div className='p-4'>
        <div className='flex  items-center mt-20 justify-start gap-[200px] text-xl border p-10 rounded-xl'>
            <p>Number of people: </p>
            <p>Date: </p>
            <p>Gender: </p>
            <p>Location </p>
            <button className='px-8 py-3 bg-sky-500 uppercase rounded-xl' >Delete</button>
        </div>
    </div>
  )
}

export default Listbookings