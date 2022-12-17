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

let img = [img1, img2];
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
            <div className='absolute z-1 text-white top-20 font-[Montserrat Alternates]'>
              <h1 className='uppercase text-[0.7rem] font-semibold text-[#d9b257]'>
                Architecture & Interior
              </h1>
              <p className='text-4xl font-bold'>
                Modern & Unique <br /> Buildings Ever
              </p>
              <a href='#'>
                {" "}
                <button className='uppercase font-semibold bg-[#d9b257] py-2 px-7 mt-4'>
                  see all
                </button>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
