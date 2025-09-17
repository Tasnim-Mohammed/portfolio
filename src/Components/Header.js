import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header=()=>{
  
  return(
    <nav className="navbar navbar-expand-sm  navbar-dark ps-5 pe-5 border-3 w-100 position-fixed z-3">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <Link className="navbar-brand word">logo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
             <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
             <ul className="navbar-nav ms-auto align-items-sm-center justify-content-start">
              <li className="nav-item">
                <HashLink smooth className="nav-link text-light" to="/#home">Home</HashLink>
              </li>
              <li className="nav-item">
               <HashLink smooth className="nav-link text-light" to="/#skills">Skills</HashLink>
              </li>
              <li className="nav-item mb-1 me-4">
               <HashLink smooth className="nav-link text-light" to="/#projects">Projects</HashLink>
             </li>

             <li className="nav-item icons d-flex align-items-center ">
               <div className="links">
                 <Link to={"https://www.facebook.com/share/17DwYiAzFB/"} className="me-3" ><i className="fab fa-facebook-f"></i></Link>
                 <Link to={"https://github.com/Tasnim-Mohammed"} className="me-3"><i className="fab fa-github"></i></Link>
                 <Link to={"https://www.linkedin.com/in/tasnim-al-hattab-793649298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="me-4"><i className="fab fa-linkedin-in"></i></Link>
               </div>
               <div className="links-btn"><button>Let's Connect</button></div>
             </li>
             </ul>
           </div>
        </div>
     </nav>

  )
}
export default Header;