import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Navpage from './Navpage'

const Mainpae = () => {
  return (
    <React.Fragment>
       <section>
       <div className='w-full mr-2 '><Navbar/></div>
       </section>
       <section>
        <div className='grid grid-cols-12 '>
            <div className='col-span-2  bg-black h-full p-2 text-white'>
               <Sidebar/>
            </div>
            <div className='col-span-10 bg-yellow-200 h-screen'>
                <Navpage/>
            </div>
        </div>
       </section>
    </React.Fragment>
  )
}

export default Mainpae