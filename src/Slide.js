import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import './App.css';
import { useState } from "react";
const Slide = () => {
    const [open,setopen] = useState(true)
    return (
      <div className="flex">
        <div className={`bg-gray-700 h-screen p-5 pt-7 ${open ? "w-72" : "w-20"} relative`}>
        <BsArrowLeftShort 
        className={`bg-white text-3xl rounded-full text-blue-950  absolute -right-3 top-7 cursor-pointer ${!open && "rotate-180"} duration-300`} 
        onClick={()=>setopen(!open)} />
         <div className="inline-flex">
         <AiFillEnvironment className={`bg-amber-300 text-4xl rounded-full p-2 mr-2 ${open && "rotate-[360deg] "  } duration-500`}/>
         <h1 className={`text-2xl origin-left text-white ${!open && 'scale-0'}`}>acadimis</h1>
        </div>
       </div>
          <div className='p-7'>
            <h1 className='texl-3xl font-semibold'>home</h1>
          </div>
  
      </div>
    );
}

export default Slide