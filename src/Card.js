import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Carouselpage =()=>{
    return(
      
      <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 p-2 ">
            <div className="">
                <h1 className="text-3xl p-8 m-8 italic  hover:font-semibold ">
                "Welcome to Springdale Public School, where we nurture young minds for a brighter future."
               </h1>
            </div>
           
        <Carousel className='mr-60 ml-80 bg-slate-300 m-2 p-2 '>
      <div>
         <img src="https://cdn.cdnparenting.com/articles/2023/12/18185734/Essay-On-Sports-Day-%E2%80%93-10-Lines-Short-and-Long-Essay-For-Kids.webp" alt='annual day' />
         <p className="legend">Legend 1</p>
       </div>
       <div>
         <img src="https://www.odmps.org/updates/wp-content/uploads/2022/01/3651141-scaled.jpg" alt='science day' />
         <p className="legend">Legend 2</p>
       </div>
      <div>
      <img src="https://nagarjunaeducation.com/ncet/news/wp-content/uploads/2015/03/culture-feast-banner-002.jpg" alt='fest' />
      <p className="legend">Legend 3</p>
     </div>
        </Carousel>
        </div>
        
    )
}
export default Carouselpage;