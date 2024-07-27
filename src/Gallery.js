import React, { useEffect, useState } from 'react'

const Gallery = () => {

const [fetchdata,setfetchdata]=useState([]);

    const fetchdat = async()=>{
        const data = await fetch('https://api.unsplash.com/photos/?client_id=9BivYIXQlD2rIQjj5xgGrDWWOCVqXMTvESKLUopD4gc')
        const json = data.json()
        console.log(json);
    return(
        <div>
        <button className='w-10 h-10' onClick={fetchdat}></button>
        </div>
    )
    }
  
}

export default Gallery