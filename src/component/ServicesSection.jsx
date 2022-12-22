import React from "react";
import "../App.css";
import img from "../images/services.jpg";
import img1 from "../images/service-1.jpg";
import img2 from "../images/service-2.jpg";
import { Link } from "react-router-dom";

const serviceBanner = [
  {
    img: img1,
    head: "Architecture",
    body: "Whole building structure we made or shape it as livelihood",
  },
  {
    img: img2,
    head: "Interior Design",
    body: "Only  room’s inside structure we made or shape it as livelihood",
  },
];
const ServicesSection = () => {
  return (
    <div className='my-20'>
      <div
        className='servicebanner  py-6'
        style={{
          background: `url(${img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        <div>
          <div className='text-center w-1/2 mx-auto '>
            <h5 className='text-[1rem] font-bold text-[#d9b257]'>
              Our Services
            </h5>
            <p className='text-sm md:text-2xl font-medium text-[#ffff]'>
              Know About Our Services Which We’re Provided From The Year Since
              2000
            </p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-evenly gap-12 py-6 '>
          {serviceBanner.map((items) => (
            <div className='flex relative shadow-xl'>
              <figure className=''>
                <img src={items.img} alt='service' className='sm:w-full' />
              </figure>
              <div className='absolute w-80 bg-slate-50 bottom-0 lg:-bottom-4 lg:-right-4 p-4 '>
                <h1 className='text-[#d9b257] font-semibold'>{items.head}</h1>
                <p className='text-[#9999] font-bold'>{items.body}</p>
                <Link
                  to='/project'
                  className='text-center border-b-4 border-[#d9b257]'>
                  Know more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
