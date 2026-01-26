import React, { useState } from 'react'

function Form({ task, setTask }) {
const [value,setValue]=useState("")


  return (
    <section className='mt-10 flex flex-col md:flex-row justify-center items-center gap-4 px-4'>
        <input onChange={(e)=>{setValue(e.target.value)}} className='rounded border p-2 pr-3 w-80' value={value} type="text" placeholder='Write Text here . . .' />
        <button 
         onClick={()=>{{if (!value) return}
            setTask([...task,value]);
              setValue("")
        }}
         className='text-white bg-blue-800 rounded p-2 w-full md:w-40 text-xl cursor-pointer hover:bg-blue-700 transition-colors'>
            + Add New
        </button>
          
    </section>
  )
}

export default Form