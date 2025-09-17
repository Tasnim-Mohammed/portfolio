import React from "react";
import { TypeAnimation } from "react-type-animation";


const Home=()=>{
  return(
    <div id="home" className=" home"
     style={{
    backgroundImage: `url(${process.env.PUBLIC_URL}/pexels-frank-cone-140140-3607542.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: '130px',
    height: '100vh'
  }}>
      <div className="container">
        <div className=" m-auto row">
        <div className="left col-md-6 col-12">
            <div className="inside">
              <button className="btn1 mb-3">welcome all in my portfolio</button>
              <h2>Hi! I'm Tasnim Mohamed Al-Hattab</h2>
              <TypeAnimation
                 sequence={[
                  'BackEnd Developer', 3000, 
                  'FrontEnd Developer', 3000,
                  'FullStack Developer', 3000,
                ]}
                  wrapper="h2"
                  cursor={true}
                  repeat={Infinity}
              />
              <p>hellow everyone , i have 2 years experience in web development</p>
              <div className="d-flex align-items-sm-baseline">
                <p className="text-light fw-bold">let's connect</p>
                <i className="fa-solid fa-chevron-right text-light ms-2"></i>
              </div>
            </div>
        </div>
        <div className="right col-md-6 col-12 ">
           <img src={`${process.env.PUBLIC_URL}/header-img.e20324a4b0077d2e8f990b6d0cc5745d.svg`} alt="" />
        </div>
      </div>
      </div>
    </div>


  )
}
export default Home;