import React from 'react'

const Admission = () => {
  return (
    <div className="m-2 p-2  bg-slate-400">
    <div className='m-2  p-2 w-[300] h-[350px] border border-solid shadow-xl rounded-lg bg-blue-200 mr-6' >
     <div className='m-4 p-4 pl-4 pt-6'>
     <h1 className='text-2xl font-semibold'>Process:</h1>
     <div>
      <p>"Admission forms are available for download. Submit the completed form along with required documents at the school office."
</p>

     </div>
     <h1 className='text-2xl font-semibold'>Criteria:</h1>
    <div>
    <p>
    "Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades."

    </p>
    </div>
    
     </div>
     
    </div>
    
   <div className='m-4  p-4 w-[300] h-[400px] border border-solid shadow-xl rounded-lg bg-blue-200 mr-6' >
   <div className='p-4 pl-6 m-4'>
   <h1 className='text-2xl font-semibold p-4 m-4 '>Important Dates:</h1>
   <ul className='list-disc '>
      <li>"Admission Form Availability: March 1st"</li>
      <li>"Last Date for Submission: March 31st"</li>
      <li>
      "Entrance Test: April 15th"
      </li>
      <li>"Announcement of Results: April 30th"</li>
    </ul>
   </div>
    </div>
    
    </div>
    
  )
}

export default Admission;