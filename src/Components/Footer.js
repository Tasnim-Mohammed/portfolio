import {React,}  from "react";
import { Link } from "react-router-dom";



const Footer=()=>{

  return(
     <div id="footer" className="">

       <div className="footer-position row align-content-center p-5">
        <div className="theText col-md-6 col-12">
           <h2 className="text-capitalize fw-bold">see my projects at once & leave here your e-mail address</h2>
        </div>
        <form action="https://formspree.io/f/myzdqbqw" method="POST" className="form col-md-6 col-12"> 
            <div className="input-group1 row">
               <input type="text" name="email"  className="border-0 col-md-9 col-12 mb-md-0 mb-5" placeholder="E-mail Address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
               <button className="btn col-md-3 col-12" type="submit" id="button-addon2">Submit</button>
            </div>
        </form>
       </div>


       <div className="lastSection d-md-flex justify-content-between">
         <div className="lastSection-left text-uppercase text-light"><h2>logo</h2></div>
         <div className="lastSection-right d-md-flex flex-column align-items-end">
            <div className="links">
                <Link to={"https://www.facebook.com/share/17DwYiAzFB/"} className="me-3" ><i className="fab fa-facebook-f"></i></Link>
                <Link to={"https://github.com/Tasnim-Mohammed"} className="me-3"><i className="fab fa-github"></i></Link>
                <Link to={"https://www.linkedin.com/in/tasnim-al-hattab-793649298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}><i className="fab fa-linkedin-in"></i></Link>
            </div>
           <div>
                    <p className="text-secondry fs-6 mt-2">--Copyrights 2025--AllRights Reserved here By Tasnim Mohammed Al-Hattab</p>
                 </div>
         </div>
       </div>

    

     </div> 


  )
}
export default Footer;