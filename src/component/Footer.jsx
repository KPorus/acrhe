import React from "react";
import img from "../images/footer.png";
import footerBg from "../images/footer-background.jpg";
import "../App.css"
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
          <span className='footer-title'>Contact Us</span>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </div>

        <div className="text-white">
          <span className='footer-title'>Signup for Newsletter</span>
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
