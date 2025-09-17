import {React,useState}  from "react";

import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

const SectionRenderer = ({ section }) => {
  switch (section) {
    case "one":
      return <SectionOne />;
    case "two":
      return <SectionTwo />;
    case "three":
      return <SectionThree />;
    default:
      return ;
  }
};




const Projects=()=>{
  const [activeSection, setActiveSection] = useState("one");
  return(
     <div id="projects" className="text-center p-4"  >
       <h2 className="text-light fw-bold mt-3 "> Projects</h2>
       <p className="fw-bold text-secondary text-capitalize mb-2">my name is tasnim and these are some of the projects I have worked on</p>
       
       <div className="container mt-5 ">
         <div className="buttons d-flex justify-content-center ">
          <button className={`p-md-2  p-sm-5  btn2 rounded-start-5 w-25 ${activeSection === "one" ? "active" : ""}`} onClick={() => setActiveSection("one")}>1st Section</button>
          <button className="p-md-2  p-sm-5  btn3  w-25  " onClick={() => setActiveSection("two")}>2nd Section</button>
          <button className="p-md-2  p-sm-5  btn4 rounded-end-5 w-25 " onClick={() => setActiveSection("three")}>3rd Section</button>
         </div>
       </div>
       

       <div className="mt-4">
        <SectionRenderer section={activeSection} />
      </div>




     </div> 


  )
}
export default Projects;