import React from 'react'

function Navbar() {
  return (
   <header className='border-b w-full h-16 flex justify-center items-center text-xl md:text-2xl font-bold bg-white sticky top-0 z-50'>
       
        <nav className='flex justify-between items-center w-full px-6 md:px-12 lg:w-3/4'>
            <div className='flex items-center'>
            
             <img src="/ToDo.png" className='h-10 w-auto' alt="Logo" />
            </div>
            
            <div className='text-black gap-6 md:gap-8 flex items-center text-base md:text-xl'>
             <a className='text-blue-700 hover:text-blue-500 transition-colors' href="#Home">Home</a>
             <a className='hover:text-blue-700 transition-colors' href="#About">About</a>
            </div>
        </nav>
   </header>
  )
}

export default Navbar