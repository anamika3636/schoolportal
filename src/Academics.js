import React from 'react'

const Academics = () => {
  return (
    <div className="m-2 p-2  bg-slate-400">
    <div className='m-2  p-2 w-[300] h-[350px] border border-solid shadow-xl rounded-lg bg-blue-200 mr-6' >
     <h1 className='text-3xl font-semibold'>Curriculum:</h1>
    <ol className=' p-6 list-decimal'>
      <li >Primary (Grades 1-5): English, Mathematics, Science, Social Studies, Art, Physical Education
      </li>
      <li>
      Secondary (Grades 6-10): English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art
      </li>
      <li>Senior Secondary (Grades 11-12):</li>
      <ol className='list-disc m-4'>
        <li>Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English
      </li>
      <li>
      Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English

      </li>
      </ol>
      <li>Teaching Methodologies: "We use a blend of traditional and modern teaching techniques to cater to different learning styles."
     </li>
     <li>
     Educational Resources: "Digital classrooms, interactive learning modules, and access to online educational platforms."

     </li>
    </ol>
     
    </div>
    
   <div className='m-4  p-4 w-[300] h-[400px] border border-solid shadow-xl rounded-lg bg-blue-200 mr-6' >
   
    </div>
    
    </div>
    
  )
}

export default Academics