import React from "react";
import Aboutcards from "./Aboutcards";
import history from "./history";

const About =()=>{
   
   return(
       <div className='flex flex-wrap '>
       
       
          {history.map((his)=> <Aboutcards resdata={his}/>) }
          
       </div>
   )
} 
export default About;