import React from "react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../images/background1.jpg";
import img2 from "../../images/background2.jpg";
import img3 from "../../images/banner-img.jpg";
import img4 from "../../images/banner-img2.jpg";
import img5 from "../../images/banner-img3.jpg";

let img = [img1, img2];
let bannerImg = [
  { img: img3, type:"White Area House", location: "Newyork, America" },
  { img: img4, type:"White Beautiful House", location: "Newyork, America" },
  { img: img5, type:"World Minor House", location: "Newyork, America" },
];
const Banner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'>
        {img.map((img) => (
          <SwiperSlide>
            <div className='img'>
              <img src={img} alt='image'></img>
            </div>
            <div className='absolute z-1 text-white sm:top-20 font-montserrat'>
              <h1 className='uppercase text-[0.7rem] sm:font-semibold text-[#d9b257]'>
                Architecture & Interior
              </h1>
              <p className='text-[1rem] md:text-4xl font-bold'>
                Modern & Unique <br /> Buildings Ever
              </p>
              <a href='#'>
                {" "}
                <button className='uppercase sm:font-semibold bg-[#d9b257] py-0 px-1 mt-0 md:py-2 md:px-7 md:mt-4'>
                  see all
                </button>
              </a>

              <div className='hidden lg:grid md:grid-cols-3 gap-4 mt-6'>
                {bannerImg.map((items, i) => (
                  <div className='flex'>
                    <div className='w-36 shadow-xl m-2'>
                      <figure>
                        <img src={items.img} alt='Shoes' />
                      </figure>
                    </div>
                    <div>
                      <h1 className='font-bold text-4xl'>0{i + 1}</h1>
                      <span className="font-medium text-lg">{items.type}</span><br/>
                      <small  className="font-medium text-[1rem]">{items.location}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
