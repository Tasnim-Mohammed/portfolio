import React from "react";
import img from "../assest/Group-379.png";

const GetInTouch=()=>{
    return(
        <div className="parent">
            <div className="container row p-5 m-auto">
                <div className="left-img col-md-5 col-12 text-center" data-aos="fade-up">
                    <img src={img} alt="" className="w-100 h-100"/>
                </div>
                <div className="right-model col-md-7 col-12 p-5 pt-0">
                    <h2 className="text-light">Get In Touch</h2>
                    <form action="https://formspree.io/f/xblavzoa" method="POST" className="row g-3 needs-validation mt-3 form-section" novalidate>
                         <div className="col-6 me-0 mb-0 pe-0">
                             <input type="text" name="firstname" className="form-control" id="validationCustom01" placeholder="First Name" required  />
                             <div className="invalid-feedback">Please provide your first name.</div>
                         </div>

                        <div className="col-6 ms-0 mb-0 ps-2">
                             <input type="text" name="lastname" className="form-control" id="validationCustom02" placeholder="Last Name" required />
                             <div className="invalid-feedback">Please provide your last name.</div>
                        </div>

                        <div className="col-6 mt-2 pe-0">
                             <input type="email" name="email" className="form-control" id="validationCustomEmail" placeholder="Email Address" required />
                             <div className="invalid-feedback">Please provide a valid email.</div>
                        </div>

                        <div className="col-6 mt-2 ps-2">
                             <input type="tel" name="phone" className="form-control" id="validationCustomPhone" placeholder="Phone No." pattern="^\+?[0-9]{10,15}$" required />
                             <div className="invalid-feedback">Please provide a valid phone number</div>
                        </div>


                        <div className="col-12 mt-2">
                              <textarea className="form-control" rows="5" id="comment" name="comment" placeholder="Message"></textarea>
                         </div>

                        <div className="col-12">
                            <button className="btn btn-light text-dark border-0" type="submit">Send</button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    )
}
export default GetInTouch;