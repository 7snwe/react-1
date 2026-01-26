import React from 'react'

function Card({taskText,onDelete}) {


  return (
    <section className='mt-5 w-full flex flex-col justify-center items-center px-4'>
      <div className='flex justify-between items-center w-full max-w-md p-4 bg-gray-300 rounded shadow-sm' >
        <p className='font-medium text-lg md:text-xl  overflow-hidden'>{taskText}</p>
        <button onClick={()=>onDelete()} className='w-8 h-8 flex items-center justify-center border border-red-500 text-red-500 rounded text-xl font-bold cursor-pointer hover:bg-red-500 hover:text-white transition-all'>X</button>
      </div>
    </section>
  )
}

export default Card