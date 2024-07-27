import { Link } from "react-router-dom";
const Header =()=>{
   return(
       <div className='flex  justify-between  bg-slate-200 shadow-2xl m-2 p-2 w-full mb-4 sm:bg-slate-400 rounded-lg' >
           <div>
               <img className="sm:w-40b h-32 m-2 p-2 bg-slate-400" src="https://i.pinimg.com/736x/48/a3/54/48a354314bb3517dabc705eb3ee8b968.jpg" alt="logo"></img>
           </div>
           <div className=" m-4  p-6 mr-80 text-blue-900  font-bold text-xl mt-8 ">Springdale Public School </div>
           <div className='md:flex items-center m-2 p-2  font-bold text-lg'>         
              <ul className="md:flex m-4 p-4">
              <li className="px-4" > <Link to='/'>Home</Link></li>
               <li className="px-4" ><Link to='/about'>About Us</Link></li>
               <li className="px-4" ><Link to='/faculty'>Faculty</Link></li>
               <li className="px-4 " ><Link to='/student'>Student</Link></li>
               <li className="px-4 " ><Link to='/gallery'>Gallery</Link></li>
               <li className="px-4 " ><Link to='/gallery'>Gallery</Link></li>
             </ul>
           </div>
           
       </div>
   )
}
export default Header;