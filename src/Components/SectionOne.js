import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assest/project1 (1).png";
import img2 from "../assest/project1 (2).png";
import img3 from "../assest/project1 (3).png";
import img4 from "../assest/project1 (4).png";
import img5 from "../assest/project1 (5).png";
const SectionOne=()=>{
  return(
     <div id="section-one" className="text-center p-4"  >
       <h2 className="text-capitalize text-light">frontend projects</h2>
       <div className="container m-auto row row-gap-5 column-gap-5 justify-content-center mt-5 align-items-stretch">
         
        <div className="div1 p-0 col-md-3 col-9">
          <img src={img1} alt="" className="w-100 h-100"/>
          
          <div className="overlay-featured align-content-center w-100 h-100">
           <p className="text-capitalize text-light fw-bold">project 1</p>
           <Link to="https://tasnim-mohammed.github.io/project1/"><i className="fa-solid fa-link text-light fs-5"></i></Link>
          </div>
        </div>
         
         <div className="div1 p-0 col-md-3 col-9">
          <img src={img2} alt="" className="w-100 h-100"/>
          
          <div className="overlay-featured align-content-center w-100 h-100">
           <p className="text-capitalize text-light fw-bold">project 2</p>
           <Link to="https://tasnim-mohammed.github.io/project2/"><i className="fa-solid fa-link text-light fs-5"></i></Link>
          </div>
        </div>
         
        <div className="div1 p-0 col-md-3 col-9">
          <img src={img3} alt="" className="w-100 h-100"/>
          
          <div className="overlay-featured align-content-center w-100 h-100">
           <p className="text-capitalize text-light fw-bold">project 3</p>
           <Link to="https://tasnim-mohammed.github.io/project3/"><i className="fa-solid fa-link text-light fs-5"></i></Link>
          </div>
        </div>
         
         <div className="div1 p-0 col-md-3 col-9">
          <img src={img4} alt="" className="w-100 h-100"/>
          
          <div className="overlay-featured align-content-center w-100 h-100">
           <p className="text-capitalize text-light fw-bold">project 4</p>
           <Link to="https://tasnim-mohammed.github.io/project4/"><i className="fa-solid fa-link text-light fs-5"></i></Link>
          </div>
        </div>

        <div className="div1 p-0 col-md-3 col-9">
          <img src={img5} alt="" className="w-100 h-100"/>
          
          <div className="overlay-featured align-content-center w-100 h-100">
           <p className="text-capitalize text-light fw-bold">cards</p>
           <Link to="https://tasnim-mohammed.github.io/cards-idea/"><i className="fa-solid fa-link text-light fs-5"></i></Link>
          </div>
        </div>
         
         
       </div>
  
     </div> 


  )
}
export default SectionOne;