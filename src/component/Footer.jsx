import React from "react";
import img from "../images/footer.png";
import footerBg from "../images/footer-background.jpg";
import "../App.css"
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
const Footer = () => {
  return (
    <div
      className='footerB relative mt-12'
      style={{
        background: `url(${footerBg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex:"1"
      }}>
      <footer className='container footer pt-10 mx-auto text-white justify-items-center text-center'>
        <div>
          <img src={img} alt='footer' className="ml-8"></img>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className='footer-title opacity-100 border-b-2 border-[#d9b257]'>Contact Us</span>
          <a href="Tel-880 1234 567 890" className='link link-hover flex items-center'><BsFillTelephoneFill className="mr-6"></BsFillTelephoneFill>(+880) 1234 567 890{" "}</a>
          <a href="mailto:arche@gmail.com" className='link link-hover flex items-center'><AiOutlineMail className="mr-6"></AiOutlineMail>arche@gmail.com</a>
          <a className='link link-hover flex items-center'><ImLocation2 className="mr-6"></ImLocation2>1234, Parkstreet Avenue, America</a>
        </div>

        <div className="text-white">
          <span className='footer-title opacity-100 border-b-2 border-[#d9b257]'>Signup for Newsletter</span>
          <div className='form-control w-80'>
            <label className='label'>
              <span className='label-text text-white'>Enter your email address</span>
            </label>
            <div className='relative'>
              <input
                type='text'
                placeholder='username@site.com'
                className='input input-bordered w-full pr-16 text-black'
              />
              <button className='btn btn-primary absolute top-0 right-0 rounded-l-none'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
