import React from 'react'
import Sidebardata from './Sidebardata'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
   <React.Fragment>
    <section>
       <div>
        {Sidebardata.map((item,index)=>
        {
            return(
                <div key = {item.index}>
                <Link to={item.path} className='flex space-x-6 text-2xl m-2 p-6 items-center hover:bg-yellow-400 cursor-pointer'>
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                </Link>
                </div>
            )
        })}
       </div>
    </section>
   </React.Fragment>
  )
}

export default Sidebar