import React from "react";
import CommonHead from "./CommonHead";
import img from "../images/services.jpg";
import "../App.css";
const ServicesSection = () => {
  return (
    <div className=''>
      <div
        className='servicebanner font-montserrat mt-20 py-6'
        style={{
          background: `url(${img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        <div>
          <CommonHead></CommonHead>
        </div>
        <div className=' z-1 flex justify-center gap-4 my-3 container mx-auto'>
          <div className='w-96 shadow-xl'>
            <figure>
              <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
            </figure>
          </div>

          <div className='w-96 shadow-xl'>
            <figure>
              <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
