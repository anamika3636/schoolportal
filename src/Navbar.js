import React from 'react'
import { BsBook } from "react-icons/bs";
import { Route,Routes } from 'react-router-dom'
import Contact from './Contact';
import Header from './Header';
const Navbar = () => {
  return (
  <React.Fragment>
    <section>
    <div className='bg-black flex w-full space-x-8 items-center p-2'>
  
   <div className='text-white '>
   <Header/>
   </div>
   </div>
    </section>
  </React.Fragment>
  )
}

export default Navbar