import React from "react";
import CommonHead from "./CommonHead";
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
        className='servicebanner font-montserrat py-20'
        style={{
          background: `url(${img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        <div>
          <CommonHead></CommonHead>
        </div>
        <div className='flex justify-evenly gap-4 my-3 container mx-auto'>
          {serviceBanner.map((items) => (
            <div className='flex shadow-xl'>
              <figure className="relative ">
                <img src={items.img} alt='service' className='w-full' />
              </figure>
              <div className="absolute w-80 bg-slate-50 bottom-10 p-4 font-montserrat">
                <h1 className="text-[#d9b257] font-semibold">{items.head}</h1>
                <p className="text-[#9999] font-bold">{items.body}</p>
                <Link to="/project" className="text-center border-b-4 border-[#d9b257]">Know more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
