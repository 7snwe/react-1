import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
   <header className='border-b w-full h-16 flex justify-center items-center text-xl md:text-2xl font-bold bg-slate-900 sticky top-0 z-50'>
       
        <nav className='flex justify-between items-center w-full px-6 md:px-12 lg:w-3/4'>
            <div className='flex items-center'>
            
             <img src="/ToDo.png" className='h-10 w-auto' alt="Logo" />
            </div>
            
            <div className='text-black gap-6 md:gap-8 flex items-center text-base md:text-xl'>
            <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-black'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-black'
            }
          >
            About
          </NavLink>
            </div>
        </nav>
   </header>
  )
}

export default Navbar