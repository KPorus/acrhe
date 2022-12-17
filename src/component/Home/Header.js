import React from "react";
import Head from "../Head";
import Banner from "../Banner/Banner";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import AboutSection from "../AboutSection";
const Header = () => {
  return (
    <div>
      <Head></Head>
      <div className='navbar container mx-auto font-[Montserrat Alternates] font-bold text-[#d9b257]'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#about">About US</Link>
              </li>
              <li>
                <Link to="/services">Our services</Link>
              </li>
              <li>
                <Link to="project">Recent Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="logo" className="h-20"></img>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About US</Link>
            </li>
            <li>
              <Link to="/services">Our services</Link>
            </li>
            <li>
              <Link to="/project">Recent Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          <a className='btn'>Get started</a>
        </div>
      </div>
      <Banner></Banner>
      <AboutSection></AboutSection>
    </div>
  );
};

export default Header;
