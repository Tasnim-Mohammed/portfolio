import React from "react";
import img7 from "../assest/heartbeat.webp"
import img8 from "../assest/images.jpg"
const SectionThree=()=>{
  return(
     <div  id="section-one"  className="text-center p-4"  >
       <h2 className="text-capitalize text-light">other projects in other fields</h2>
       <h4 className="text-capitalize text-light fw-bold">arduino projects</h4>
       <div className="container m-auto row row-gap-5 column-gap-5 justify-content-center mt-5 align-items-stretch">
         
        <div className="div1 p-0 col-md-3 col-9">
          <img src={img7} alt="" className="w-100 h-100"/>
          
          <div className="overlay-featured align-content-center w-100 h-100">
           <p className="text-capitalize text-light fw-bold">Heart rate monitoring device using the MAX30100 sensor</p>
          </div>
        </div>

        <div className="div1 p-0 col-md-3 col-9">
          <img src={img8} alt="" className="w-100 h-100"/>
          
          <div className="overlay-featured align-content-center w-100 h-100">
           <p className="text-capitalize text-light fw-bold">Line-following robot project</p>
          </div>
        </div>
         
         
         
         
       </div>
  
     </div> 


  )
}
export default SectionThree;