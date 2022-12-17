import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
const Head = () => {
  return (
    <div className="hidden lg:block">
      <div className='bg-[#dbb660] text-white font-[Lato] grid  grid-cols-[1fr,2fr] p-2'>
        <h2 className='ml-3'>Welcome to ARCHE</h2>
        <div className='flex justify-end gap-3'>
          <h2 className='flex items-center gap-2'>
            <BsFillTelephoneFill></BsFillTelephoneFill>(+880) 1234 567 890{" "}
          </h2>
          <h2 className='flex items-center gap-2'>
            <AiOutlineMail></AiOutlineMail>arche@gmail.com
          </h2>
          <h2 className='flex items-center gap-2'>
            <ImLocation2></ImLocation2>1234, Parkstreet Avenue, America
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Head;
