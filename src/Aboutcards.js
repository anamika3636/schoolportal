import React from "react";

const Aboutcards =(props)=>{
const {name,des}=props.resdata
    return(
        <div className="m-4  p-4 flex dark:md:hover:bg-slate-200 ml-3 bg-slate-200">
        <div className='m-4  p-4 w-[300px] h-[300px] border border-solid shadow-xl rounded-lg bg-blue-200' >
        <h1 className="font-semibold text-lg p-3 m-3"> {name} </h1>
       <p className="italic">{des}</p>
        </div>
        </div>
    )
}
export default Aboutcards;