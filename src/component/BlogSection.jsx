import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/blogs1.jpg";
import img2 from "../images/blogs2.jpg";
import { MdDateRange } from "react-icons/md";

const blog = [
  {
    img: img1,
    head: "Posted by: Admin",
    date: "26 Oct 2018",
    body: "Great interior always will be simple and attractive",
  },
  {
    img: img2,
    head: "Posted by: Admin",
    date: "26 Oct 2018",
    body: "Great architecture always be simple and attractive",
  },
];

const BlogSection = () => {
  return (
    <div>
      <div className='text-center w-1/2 mx-auto '>
        <h5 className='text-[1rem] font-bold text-[#d9b257]'>Latest Blogs</h5>
        <p className='text-sm md:text-2xl font-medium text-[#999]'>
          Our Recent News Are Always Seen Here for You, So You Can Read from
          Here.
        </p>
      </div>

      <div className='grid sm:grid-cols-2 grid-cols-1 lg:flex  justify-items-center justify-evenly md:gap-12 py-6 '>
        {blog.map((items) => (
          <div className='flex relative shadow-xl'>
            <figure className=''>
              <img src={items.img} alt='service' className='sm:w-full' />
            </figure>
            <div className='absolute sm:w-80 bg-slate-50 bottom-0 lg:-bottom-4 lg:-right-4 p-4 shadow-xl'>
              <h1 className='text-[#999999] sm:text-[1rem] text-right font-semibold flex items-center justify-evenly'>
                {items.head} <MdDateRange />
                {items.date}
              </h1>
              <p className='text-[#6e6e6e] font-bold text-right'>
                {items.body}
              </p>
              <Link to='/project' className='ml-10 border-b-4 border-[#d9b257]'>
                Know more
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center my-3'>
        <Link
          className='btn text-[#ffffff] bg-[#d9b257] border-0'
          to='/project'>
          View All Blogs +
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
