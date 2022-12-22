import React from "react";
import img4 from "../images/expert5.jpg";
import img1 from "../images/expert2.jpg";
import img2 from "../images/expert3.jpg";
import img3 from "../images/expert4.jpg";
import { Link } from "react-router-dom";

const ExpertSection = () => {
  return (
    <div className='expert py-12 my-24'>
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
            View All Experts  +
          </Link>
        </div>
    </div>
  );
};

export default ExpertSection;
