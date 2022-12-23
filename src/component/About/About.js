import React from "react";
import img from "../../images/Aboutbanner.jpg";
import img4 from "../../images/expert5.jpg";
import img1 from "../../images/expert2.jpg";
import img2 from "../../images/expert3.jpg";
import img3 from "../../images/expert4.jpg";
import img5 from "../../images/about.jpg";
import img6 from "../../images/About1.jpg"
import img7 from "../../images/About2.jpg"
import "../../App.css";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
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
          <h1 className='text-[1.5rem] font-bold text-[#d9b257]'>
            Our Services
          </h1>
          <h4 className='flex items-center justify-center text-white'>
            Home <FaAngleRight className='text-white' />{" "}
            <span className='text-[#d9b257]'>About us</span>
          </h4>
        </div>
      </div>

      <div className='container mx-auto '>
        <div className='hero'>
          <div className='flex items-center justify-center max-w-[80rem] gap-4 flex-col lg:flex-row  sm:px-4'>
            <img src={img5} className='shadow-2xl p-4 sm:p-0' />
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
                por incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim iam, qstrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <Link to='/about'>
                <button className='border-b-4 border-[#d9b257]  uppercase font-bold'>
                  know More
                </button>
              </Link>
            </div>
            <div className='flex lg:flex-col flex-row gap-6'>
              <p className='mb-10 border-b-4 border-[#d9b257]'>
                <span className='text-2xl sm:text-6xl font-bold text-[#d9b257] '>
                  18
                </span>
                <span className='font-bold text-[1rem] sm:text-xl text-[#999999]'>
                  Years <br />
                  Experiences
                </span>
              </p>
              <p className=' mb-10 border-b-4 border-[#d9b257]'>
                <span className='text-2xl sm:text-6xl font-bold text-[#d9b257] '>
                  250{" "}
                </span>
                <span className='font-bold text-[1rem] sm:text-xl text-[#999999]'>
                  Total <br />
                  Projects Done
                </span>
              </p>
              <p className='mb-10 border-b-4 border-[#d9b257]'>
                <span className='text-2xl sm:text-6xl font-bold text-[#d9b257] '>
                  99%
                </span>
                <span className='font-bold text-[1rem] sm:text-xl text-[#999999]'>
                  Almost <br />
                  Satistfied Client
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='aboutpart grid grid-cols-1 lg:flex container mx-auto justify-center items-center justify-items-center'>
        <div className="w-2/5">
          <p className="text-base text-[#444444]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do por
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim iam,
            qstrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed domod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation. ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 ">
          <img src={img6} alt="about" className="about1"></img>
          <img src={img7} alt="about" className="about2"></img>
        </div>
      </div>

      <div className='expert py-12 my-20'>
        <div className='text-center w-1/2 mx-auto'>
          <h5 className='text-[1rem] font-bold text-[#d9b257]'>Our Experts</h5>
          <p className='text-sm md:text-2xl font-medium text-[#ffff]'>
            The Expert Team Members Who Are Making These Amazing & Creative
            Sculpture
          </p>
        </div>

        <div className='grid sm:grid-cols-2 grid-cols-1 lg:flex justify-center justify-items-center gap-4 lg:gap-0 mt-10'>
          <div className='w-72  projectPart'>
            <figure className='relative'>
              <img src={img1} alt='project' />
              <h4 className='absolute top-1/2 left-1/3 text-white imgText'>
                Our Expert
              </h4>
            </figure>
            <div className=' projectText  p-2 text-[#ffff]'>
              <h2 className='font-medium text-[20px]'>Marya D’cruz</h2>
              <p className='text-[14px]'>Architect</p>
              <div className='card-actions justify-end'></div>
            </div>
          </div>

          <div className='w-72  projectPart2'>
            <div className='projectText p-2 text-[#ffff]'>
              <h2 className='font-medium text-[20px]'>Ramppi Frandge</h2>
              <p className='text-[14px]'>Interior Designer</p>
            </div>
            <figure>
              <img src={img2} alt='project' />
              <h4 className='absolute top-1/2 left-1/3 text-white imgText'>
                Our Expert
              </h4>
            </figure>
          </div>

          <div className=' w-72  projectPart'>
            <figure>
              <img src={img3} alt='project' />
              <h4 className='absolute top-1/2 left-1/3 text-white imgText'>
                Our Expert
              </h4>
            </figure>
            <div className='projectText p-2 text-[#ffff]'>
              <h2 className='font-medium text-[20px]'>Lora Ramppage</h2>
              <p className='text-[14px]'>Exterior Designer</p>
              <div className='card-actions justify-end'></div>
            </div>
          </div>

          <div className='w-72  projectPart2'>
            <div className='projectText p-2 text-[#ffff]'>
              <h2 className='font-medium text-[20px]'>Josefin Arch</h2>
              <p className='text-[14px]'>Architect</p>
            </div>
            <figure>
              <img src={img4} alt='project' />
              <h4 className='absolute top-1/2 left-1/3 text-white imgText'>
                Our Expert
              </h4>
            </figure>
          </div>
        </div>
        <div className='flex justify-center my-3'>
          <Link
            className='btn text-[#ffffff] bg-[#d9b257] border-0'
            to='/project'>
            View All Experts +
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
