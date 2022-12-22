import React from "react";
import CommonHead from "./CommonHead";
import img1 from "../images/project-1.jpg";
import img2 from "../images/project-2.jpg";
import img3 from "../images/project-3.jpg";
import img4 from "../images/project-4.jpg";

const ProjectSection = () => {
  return (
    <div className='container mx-auto'>
      <CommonHead></CommonHead>
      <div className=' grid sm:grid-cols-2 grid-cols-1 lg:flex justify-center justify-items-center gap-4 lg:gap-0 mt-10'>
        <div className='w-72 shadow-xl projectPart'>
          <figure className="relative">
            <img  src={img1} alt='Shoes' />
            <h4 className="absolute top-1/2 left-1/3 text-white imgText">Full project</h4>
          </figure>
          <div className=' projectText  p-2 text-[#999999]'>
            <h2 className='font-medium text-[14px]'>Category: Architecture</h2>
            <p className="text-[20px]">White House America</p>
            <div className='card-actions justify-end'></div>
          </div>
        </div>

        <div className='w-72 shadow-xl projectPart2'>
          <div className='projectText p-2 text-[#999999]'>
            <h2 className='font-medium text-[14px]'>Category: Architecture</h2>
            <p className="text-[20px]">Square Box House</p>
          </div>
          <figure>
            <img src={img2} alt='Shoes' />
            <h4 className="absolute top-1/2 left-1/3 text-white imgText">Full project</h4>
          </figure>
        </div>

        <div className=' w-72 shadow-xl projectPart'>
          <figure>
            <img src={img3} alt='Shoes' />
            <h4 className="absolute top-1/2 left-1/3 text-white imgText">Full project</h4>
          </figure>
          <div className='projectText p-2 text-[#999999]'>
            <h2 className='font-medium text-[14px]'>Category: Architecture</h2>
            <p className="text-[20px]">White House America</p>
            <div className='card-actions justify-end'></div>
          </div>
        </div>

        <div className='w-72 shadow-xl projectPart2'>
          <div className='projectText p-2 text-[#999999]'>
            <h2 className='font-medium text-[14px]'>Category: Architecture</h2>
            <p className="text-[20px]">White House America</p>
          </div>
          <figure>
            <img src={img4} alt='Shoes' />
            <h4 className="absolute top-1/2 left-1/3 text-white imgText">Full project</h4>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
