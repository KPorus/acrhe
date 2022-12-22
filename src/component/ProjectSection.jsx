import React from "react";
import img1 from "../images/project-1.jpg";
import img2 from "../images/project-2.jpg";
import img3 from "../images/project-3.jpg";
import img4 from "../images/project-4.jpg";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  return (
    <div className='container mx-auto'>
      <div className='text-center w-1/2 mx-auto '>
        <h5 className='text-[1rem] font-bold text-[#d9b257]'>
          Our Projects
        </h5>
        <p className='text-sm md:text-2xl font-medium text-[#999]'>
        The Facilities Which We Provide Professionally Are Given Below, Have A Look
        </p>
      </div>
      <div className='grid sm:grid-cols-2 grid-cols-1 lg:flex justify-center justify-items-center gap-4 lg:gap-0 mt-10'>
        <div className='w-72 shadow-xl projectPart'>
          <figure className='relative'>
            <img src={img1} alt='project' />
            <h4 className='absolute top-1/2 left-1/3 text-white imgText'>
              Full project
            </h4>
          </figure>
          <div className=' projectText  p-2 text-[#999999]'>
            <h2 className='font-medium text-[14px]'>Category: Architecture</h2>
            <p className='text-[20px]'>White House America</p>
            <div className='card-actions justify-end'></div>
          </div>
        </div>

        <div className='w-72 shadow-xl projectPart2'>
          <div className='projectText p-2 text-[#999999]'>
            <h2 className='font-medium text-[14px]'>Category: Architecture</h2>
            <p className='text-[20px]'>Square Box House</p>
          </div>
          <figure>
            <img src={img2} alt='project' />
            <h4 className='absolute top-1/2 left-1/3 text-white imgText'>
              Full project
            </h4>
          </figure>
        </div>

        <div className=' w-72 shadow-xl projectPart'>
          <figure>
            <img src={img3} alt='project' />
            <h4 className='absolute top-1/2 left-1/3 text-white imgText'>
              Full project
            </h4>
          </figure>
          <div className='projectText p-2 text-[#999999]'>
            <h2 className='font-medium text-[14px]'>Category: Architecture</h2>
            <p className='text-[20px]'>White House America</p>
            <div className='card-actions justify-end'></div>
          </div>
        </div>

        <div className='w-72 shadow-xl projectPart2'>
          <div className='projectText p-2 text-[#999999]'>
            <h2 className='font-medium text-[14px]'>Category: Architecture</h2>
            <p className='text-[20px]'>White House America</p>
          </div>
          <figure>
            <img src={img4} alt='project' />
            <h4 className='absolute top-1/2 left-1/3 text-white imgText'>
              Full project
            </h4>
          </figure>
        </div>
      </div>
      <div className='flex justify-center my-3'>
        <Link
          className='btn text-[#ffffff] bg-[#d9b257] border-0'
          to='/project'>
          View All project +
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
