import React from "react";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const GradientCircle = ({ value, text, gradientId }) => (
  <div className="circle-wrapper">
    {/* تعريف الـ gradient */}
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={gradientId} gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#0f015eff" />
          <stop offset="50%" stopColor="#056881ff" />
          <stop offset="100%" stopColor="#069ea8ff" />
        </linearGradient>
      </defs>
    </svg>

    {/* الدائرة */}
    <CircularProgressbar
      value={value}
      text={text}
      styles={buildStyles({
        pathColor: `url(#${gradientId})`, // استخدم الـ gradient
        trailColor: "#000000ff",               // الخلفية
        textColor: "#fff",                // لون النص
        strokeLinecap: "round",           // الأطراف دائرية
        textSize: "16px",
      })}
    />
  </div>
);


const Skills=()=>{
  const skills = [
    { name: "FrontEnd Development", value: 95 },
    { name: "BackEnd Development", value: 90 },
    { name: "Arduino", value: 80 },
    { name: "Web Development .Net  ", value: 75 },
    { name: "c#", value: 90 },
  ];


  // إعدادات السلايدر
  const settings = {
    dots: false,            // نقاط تحت السلايدر
    infinite: true,        // لف مستمر
    speed: 500,            // سرعة الحركة
    slidesToShow: 3,       // عدد العناصر الظاهرة
    slidesToScroll: 1,     // كل مرة يتحرك عنصر واحد
    responsive: [
      {
        breakpoint: 992,   // للشاشات أقل من 992px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,   // للشاشات أقل من 576px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };



  return(
<div id="skills"className="skills" >
  <div className="text col-md-8 col-12 p-4 shadow-lg">
    <h2 className="text-light fw-bold mt-3 "> Skills</h2>
    <p className="fw-bold text-secondary text-capitalize mb-2">you can see my skills here</p>

      <Slider {...settings} className="mt-5 w-75 m-auto ">
  {skills.map((skill, i) => (
    <div key={i} className="text-center">
      <GradientCircle
        value={skill.value}
        text={`${skill.value}%`}
        gradientId={`gradient-${i}`}
      />
      <h6 className="text-light mt-5">{skill.name}</h6>
    </div>
  ))}
</Slider>

  </div>
</div>
  )
}
export default Skills;