import React from "react";
import img from "../../images/Aboutbanner.jpg";
import "../../App.css";
import { FaAngleRight } from "react-icons/fa";
const About = () => {
  return (
    <div
      className='aboutbanner relative py-6'
      style={{
        background: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: "1",
      }}>
      <div className='text-center w-1/2 mx-auto '>
        <h1 className='text-[1.5rem] font-bold text-[#d9b257]'>Our Services</h1>
       <h4 className="flex items-center justify-center text-white">Home  <FaAngleRight className="text-white"/> <span className="text-[#d9b257]">About us</span></h4>
      </div>
    </div>
  );
};

export default About;
