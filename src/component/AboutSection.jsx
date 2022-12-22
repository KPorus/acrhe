import React from "react";
import { Link } from "react-router-dom";
import img from "../images/about.jpg";
const AboutSection = () => {
  return (
    <div className='container mx-auto '>
      <div className='hero'>
        <div className='flex items-center justify-center max-w-[80rem] gap-4 flex-col lg:flex-row  sm:px-4'>
          <img src={img} className='shadow-2xl p-4 sm:p-0' />
          <div className='sm:w-[35rem] text-center sm:text-left'>
            <h1 className='text-xl text-[#d9b257] font-bold'>
              Box Office News!
            </h1>
            <h1 className='text-2xl sm:text-4xl text-[#999999] font-bold'>
              Know More About Arche <br /> An Architectural <br /> Web Site
              Template
            </h1>
            <p className='py-6'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              por incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              iam, qstrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <Link to='/about'>
              <button className='border-b-4 border-[#d9b257]  uppercase font-bold'>
                know More
              </button>
            </Link>
          </div>
          <div className="flex lg:flex-col flex-row gap-6">
            <p className="mb-10 border-b-4 border-[#d9b257]">
              <span className='text-2xl sm:text-6xl font-bold text-[#d9b257] '>
                18
              </span>
              <span className='font-bold text-[1rem] sm:text-xl text-[#999999]'>Years <br/>Experiences</span>
            </p>
            <p className=" mb-10 border-b-4 border-[#d9b257]">
              <span className='text-2xl sm:text-6xl font-bold text-[#d9b257] '>
                250{" "}
              </span>
              <span className='font-bold text-[1rem] sm:text-xl text-[#999999]'>Total <br/>Projects Done</span>
            </p>
            <p className="mb-10 border-b-4 border-[#d9b257]">
              <span className='text-2xl sm:text-6xl font-bold text-[#d9b257] '>
                99%
              </span>
              <span className='font-bold text-[1rem] sm:text-xl text-[#999999]'>Almost <br/>Satistfied Client</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
