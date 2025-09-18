import React from "react";
import img6 from "../assest/project2.png"
const SectionTwo=()=>{
  return(
     <div id="section-one" className="text-center p-4"  >
       <h2 className="text-capitalize text-light">backend projects</h2>
       <div className="container m-auto row row-gap-5 column-gap-5 justify-content-center mt-5 align-items-stretch">
         
        <div className="div1 p-0 col-md-3 col-9">
          <img src={img6} alt="" className="w-100 h-100"/>
          
          <div className="overlay-featured align-content-center w-100 h-100">
           <p className="text-capitalize text-light fw-bold">the application code</p>
           <a 
              href="https://github.com/Tasnim-Mohammed/backend-project" 
              target="_blank" 
              rel="noopener noreferrer"
            ><i className="fa-solid fa-link text-light fs-5"></i></a>
          </div>
        </div>
         
    
         
         
       </div>
  
     </div> 


  )
}
export default SectionTwo;